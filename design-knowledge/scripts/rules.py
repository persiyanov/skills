#!/usr/bin/env python3
"""Print design-knowledge rules in full, or their titles, filtered by kind of part, task, guide and what they protect, or one by one.

The foundation and product guides are always in scope. A pattern guide is in scope only when you name it,
because its rules apply only to the task it covers.

  rules.py --kind component --pattern forms --titles   the rules for making a form
  rules.py --protects precision --pattern lists-and-search  the rules that protect precision, for a page with a list
  rules.py --guide type --titles                        one guide's rules, to answer a question
  rules.py --rule content:3 --rule help:1               two rules in full
  rules.py --count                                      how many rules protect each thing
"""
import argparse
import collections
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
KINDS = ('journey', 'page', 'component', 'primitive')
PROTECTS = ('usability', 'clarity', 'truth', 'accessibility', 'economy', 'familiarity', 'coherence', 'precision')


def load():
    rules = []
    for folder in ('foundations', 'product', 'patterns'):
        for path in sorted((ROOT / folder).glob('*.md')):
            section, rule = '', None
            for line in path.read_text().split('\n'):
                if line.startswith('## '):
                    section, rule = line[3:].strip(), None
                    continue
                m = re.match(r'^### (\d+)\. (.*)', line)
                if m:
                    rule = {'folder': folder, 'guide': path.stem, 'n': int(m.group(1)),
                            'title': m.group(2), 'section': section, 'protects': '', 'lines': []}
                    rules.append(rule)
                if rule is not None:
                    rule['lines'].append(line)
                    if line.startswith('- **Protects:**'):
                        rule['protects'] = line.split('**Protects:**')[1].strip()
    return rules


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument('--kind', choices=KINDS, help='keep foundation rules under "Every level" and this kind; a journey keeps only "Every level"')
    p.add_argument('--rule', action='append', default=[], help='one rule, as guide:number, such as content:3; repeatable')
    p.add_argument('--pattern', action='append', default=[], help='a pattern guide in scope; repeatable')
    p.add_argument('--guide', action='append', default=[], help='only these guides, of any folder; repeatable')
    p.add_argument('--protects', action='append', default=[], choices=PROTECTS, help='what the rule protects; repeatable')
    p.add_argument('--titles', action='store_true', help='print one line per rule')
    p.add_argument('--count', action='store_true', help='print the number of rules for each thing they protect')
    a = p.parse_args()

    rules = load()
    known = {r['guide'] for r in rules}
    patterns = {r['guide'] for r in rules if r['folder'] == 'patterns'}
    if a.pattern and a.guide:
        sys.exit('use --guide or --pattern, not both: --guide prints only the guides it names')
    for g in a.guide:
        if g not in known:
            sys.exit(f'no guide named {g!r}; guides: {", ".join(sorted(known))}')
    for g in a.pattern:
        if g not in patterns:
            sys.exit(f'no pattern guide named {g!r}; pattern guides: {", ".join(sorted(patterns))}')
    wanted = set()
    for x in a.rule:
        g, _, n = x.partition(':')
        if not n.isdigit() or not any(r['guide'] == g and r['n'] == int(n) for r in rules):
            sys.exit(f'no rule {x!r}; write it as guide:number, such as content:3')
        wanted.add((g, int(n)))

    def keep(r):
        if wanted:
            return (r['guide'], r['n']) in wanted
        if a.guide:
            if r['guide'] not in a.guide:
                return False
        elif r['folder'] == 'patterns' and r['guide'] not in a.pattern:
            return False
        if a.protects and r['protects'] not in a.protects:
            return False
        if a.kind and r['folder'] == 'foundations' and r['section'].lower() not in ('every level', a.kind if a.kind != 'journey' else 'every level'):
            return False
        return True

    chosen = [r for r in rules if keep(r)]
    if a.count:
        for name, n in collections.Counter(r['protects'] for r in chosen).most_common():
            print(f'{n:4}  {name}')
        return
    for r in chosen:
        if a.titles:
            print(f"{r['guide']} {r['n']}. {r['title']}  [{r['protects']}]")
        else:
            body = '\n'.join(r['lines'][1:]).rstrip()
            print(f"### {r['guide']} {r['n']}. {r['title']}\n{body}\n")


if __name__ == '__main__':
    main()
