# Sign-in and accounts

Covers how people get an account, get in and stay in, and look after their account: when to ask for an account, the sign-in page, memory tests and puzzles, passwords, passkeys, failed attempts, codes and links sent by email or text, two-step verification and recovery, signing in again, security changes, and deleting an account. Read it for any product with accounts. Not covered here: password managers, the warning before a session ends, the message for a wrong email or password, asking only for what's needed, and where a link lands after sign-in, which other guides hold. The problem it solves: people who give up at a sign-up wall, are refused a strong password, lock themselves or others out, lose their account with their phone, or can't leave.

The rules come in three groups: getting in, second steps and recovery, and the account afterwards.

## Getting in

### 1. No account until the product needs one

People do as much as they can before they are asked to create an account, and are asked only when the product must keep something for them, such as an order to track or work to come back to. In a shop, checking out as a guest is the most prominent choice, and an account can be made after the purchase from the details people already gave.

- **Why:** GOV.UK creates accounts only where people must come back to their data, since accounts are a barrier for many people, and Apple asks apps to put off sign-in as long as possible, because people leave apps that make them sign in before they can do anything useful (GOV.UK, "Create accounts"; Apple, "Managing accounts"). The App Store asks apps without significant account features to work without a login (App Store Review Guidelines, 5.1.1), and Apple offers an account after a purchase without asking again for what people already gave (Apple, "Sign in with Apple"). Many people refuse to make an account just to buy, yet 47% of shops that offer guest checkout don't make it prominent enough (Scott 2023, "Guest Checkout").
- **Applies when:** a product has accounts.
- **Check:** list what people can do before signing up: a sign-up wall before anything a guest could do fails. In a shop, go to checkout: no guest checkout, or one shown less prominently than signing in, fails.
- **Fail:**
  - a sign-up wall before a shop shows any products;
  - "Create an account to continue" as the only way to check out.
- **Pass:**
  - "Continue as guest" as the main button at checkout;
  - on the confirmation page, "Save your details for next time";
  - an email client, a CRM or a patient portal that asks people to sign in first, since everything in it is their own data;
  - a shop where every order needs an account afterwards, such as a subscription or trade prices.

### 2. The sign-in page names each method, and tells signing up apart from signing in

Each way of signing in says what it is, such as "Continue with Google" or "Sign in with a passkey", and no other method sits between a field and its button. Signing up and signing in are told apart: two pages that link to each other, or one entry that asks for the email and then names its task, such as "Create a password" or "Enter your password". Where being known to have an account could harm people, as with health, money or dating, every path, the password reset included, says the same thing whether or not an account exists.

- **Why:** Apple asks products to name the method each sign-in button uses, and Carbon keeps other methods out of the space between the username field and its button (Apple, "Managing accounts"; Carbon, "Login"). GOV.UK asks for a clear difference between creating an account and signing in, while FIDO found that one entry for both made creating an account easier to find, since some people weren't sure whether they had one (GOV.UK, "Create accounts"; FIDO Alliance, "Sign In with a Passkey"). Of 24 SaaS sign-in pages seen, 20 were separate pages that linked to each other, and 3 a single entry that asks for the email first (Mobbin survey, 2026, convention). OWASP keeps sign-in, reset and sign-up from saying whether an account exists, and sets how strict to be by how sensitive the product is (OWASP, "Authentication Cheat Sheet").
- **Applies when:** a product signs people in.
- **Check:** open the sign-in page: a button that doesn't name its method, or another method between a field and its button, fails. In a single entry that asks for the email first, enter a new email, then a known one: a next step that never tells people whether they are creating an account or signing in fails, unless being known to have an account could harm people. In a product where it could, request a reset for an unknown address: a message that differs from the one for a known address fails.
- **Fail:**
  - three logo buttons all labeled "Continue";
  - a dating app whose reset page says "No account with this email".
- **Pass:**
  - "Continue with Google" with the Google mark;
  - after the email, "Create a password" for a new address and "Enter your password" for a known one;
  - "Log in" and "Sign up" as two pages that link to each other;
  - a single entry that emails a code to any address, where the email says whether people are signing up or signing in.

### 3. Password rules ask for length and refuse common passwords, nothing else

A password needs only a minimum length, and is refused only when it is common or known from a breach, with the reason said. The minimum is 15 characters where the password is the only step, and 8 where a second step always follows; at least 64 are allowed. There are no rules about kinds of characters, no hints, no security questions, and no forced changes except when a password may have leaked, and people can show the password while they type.

- **Why:** the US standard for digital identity sets these lengths, bans rules about kinds of characters, bans changes on a schedule while requiring one after a leak, asks for the reason when a password is refused, and asks for a way to show it as people type (NIST SP 800-63B-4). GOV.UK sets no maximum length and drops password reminders and reset questions (GOV.UK, "Passwords"). Rules about kinds of characters refuse the strong passwords that phones and password managers make up (Budiu 2023).
- **Applies when:** a product signs people in with a password.
- **Check:** sign up with "correct horse battery staple", and with a 30-character password from a password manager: either one refused fails. Look for a rule about kinds of characters, a forced change with no leak behind it, a hint or a security question: any one fails. Try "password1": accepted fails. Look for a way to show the password: none fails.
- **Fail:**
  - "Must contain a symbol and a number.";
  - a limit of 20 characters that cuts a pasted password.
- **Pass:**
  - "At least 15 characters";
  - "This password appeared in a data breach. Choose another.";
  - a minimum of 8 where a second step is always required;
  - a PIN of six digits or more that only unlocks a key kept on the phone, such as a banking app's passcode, which the US standard treats apart from passwords.

### 4. Passkeys are offered where people already are

The product offers passkeys. The email field's autofill offers them, and the product invites people to create one at sign-up, after they sign in or reset their password, and when they confirm it's them again, not only in settings; an invitation people decline comes back only after a long, stated interval. It describes passkeys by what people know, such as their face, fingerprint or PIN, and keeps another way in for a device without one.

- **Why:** at Microsoft, 98% of passkey sign-ins succeeded, against 32% with passwords. Naming the face, fingerprint or PIN was understood where "passkey" often wasn't, and invitations at points such as sign-in gave far more passkeys than settings, which gave under 1% (Ranjit and Bingham 2024). FIDO found passkeys in the email field's autofill did best, since many people don't remember creating one and miss a separate button, and that many people didn't know what "screen lock" meant (FIDO Alliance, "Sign In with a Passkey" and "New Account Creation with a Passkey"). Google asks for the invitation during sign-in, in security settings, after recovery and after people confirm it's them, and for a recovery method on accounts made with a passkey (Google for Developers, "Passkeys user journeys"). Apple prefers passkeys where Sign in with Apple isn't used (Apple, "Managing accounts"). Of 24 SaaS sign-in pages seen, none showed a passkey (Mobbin survey, 2026, convention).
- **Applies when:** a product signs people in with its own password or code.
- **Check:** sign up, and sign in on a phone and on a computer: no passkey offered, a passkey offered only in settings, or an email field whose autofill doesn't offer it, fails. Reset a password: no invitation to create a passkey afterwards fails. Decline the invitation, then sign in again: the same invitation at once fails. Sign in on a borrowed computer: no other way in fails.
- **Fail:**
  - passkeys only under Settings › Security;
  - "Create a passkey?" after every sign-in, though people said no.
- **Pass:** after signing in with a password, "Sign in faster next time with your face, fingerprint or PIN".

### 5. Failed attempts slow down; they don't lock people out

After repeated wrong passwords or codes, the product makes people wait longer between tries, says when they can try again, and starts the count again after a success. It doesn't lock the account until support or a reset frees it, since anyone who knows someone's email could lock them out.

- **Why:** the US standard allows at most 100 failures in a row for each method, and suggests a wait that grows as the limit nears, from 30 seconds up to an hour, so that attackers can't lock real people out (NIST SP 800-63B-4), and OWASP asks products to show how their limits stop others from locking an account (OWASP ASVS 5.0). GOV.UK allows 5 to 10 tries before it locks the account or adds more checks (GOV.UK, "Passwords"); a lock there lets a stranger who knows the email lock its owner out.
- **Applies when:** a product signs people in with a password or a code.
- **Check:** enter a wrong password 11 times, one more than GOV.UK's highest limit: an account that stays locked until support or a reset frees it fails, and so does a wait that doesn't say when to try again.
- **Fail:** "Your account is locked. Contact support." after 5 wrong passwords.
- **Pass:**
  - on a phone, "Too many tries. Try again in 2 minutes", with the wait growing each time;
  - a bank that blocks after the number of tries its regulator sets, with a stated way back in.

### 6. Signing in asks for no memory test and no puzzle

No step of signing in, or of getting back into an account, makes people remember, transcribe or work something out unless another way skips it. Password fields accept paste and password managers. Passkeys, sign-in links by email and signing in with another account need no memory at all. A code sent by text or email can be pasted whole into one field (`autocomplete="one-time-code"`). No step asks people to retype distorted text or solve a sum; where bots must be stopped, the check runs without a task.

- **Why:**
  - Remembering a password, transcribing a code and solving a puzzle are cognitive function tests; blocking paste or password managers fails 3.3.8, and signing in with the device (WebAuthn) or an emailed link meets it (Understanding 3.3.8). WCAG 2.2 allows such a test only with another way past it, with help such as a password manager or pasting, including a code sent to the person, or when it asks people to recognize objects, or pictures, video or sound they supplied (3.3.8); without that, people with memory, reading or attention difficulties can't get in.
  - CAPTCHAs were screen reader users' biggest problem (WebAIM 2024).
- **Applies when:** a product has sign-in, a way back into an account, or a step that confirms who someone is. At sign-up too, though 3.3.8 covers only existing accounts, not creating one (Understanding 3.3.8).
- **Check:** at each step of signing in and of a forgotten password, paste into the password and code fields, and let a password manager fill the password: blocked fails. Look for a puzzle, a transcription, a sum, or a question people must answer from memory, such as a security question: one with no other way past it fails, and so does one that only asks people to recognize objects, or pictures, video or sound they supplied, though WCAG allows those. An audio version of a puzzle that people must type out is not another way. A code split into one-digit boxes that refuse a pasted code fails. At sign-up, a puzzle fails too.
- **Fail:**
  - a password field whose script blocks paste;
  - a step that asks people to retype distorted letters;
  - six one-digit boxes that keep only the first digit of a pasted code;
  - a forgotten-password page that asks "What was the name of your first school?" with no other way back in.
- **Pass:**
  - a password field that password managers fill, beside "Email me a sign-in link";
  - a code field with `autocomplete="one-time-code"` that takes a pasted code;
  - asking for a password when paste and password managers work;
  - a code from an authenticator app that can be pasted.

## Second steps and recovery

### 7. A code or link sent to people says where it went, works on any device, and expires with a reason

A page that waits for a code or a link lets people send it again. At sign-up it says where the code went, such as the email address, and lets people fix a wrong address; at sign-in it neither shows the phone number nor lets people change where the code goes. A sign-in link comes with a code people can type on the device they started on. The code field takes a pasted code, with spaces or hyphens as people copied it. A link that has expired, been used or been replaced says so, and why, and offers a new one; an old code is refused with a way to get a new one. At sign-up, a likely typo in the email, such as "gmial.com", gets a warning that doesn't block. An email address is confirmed only where the product depends on it.

- **Why:** GOV.UK confirms an email only where the service depends on it or a wrong address would expose someone's data, lets people send the email again, explains why a link has expired, and warns about a likely typo in an address without blocking it; a confirmed email doesn't prove who someone is (GOV.UK, "Confirm an email address"; GOV.UK, "Email addresses"). GOV.UK accepts codes with spaces and hyphens, and lets people change the phone number at sign-up but not at sign-in, where it doesn't reveal the number, since anyone who knows the password could otherwise move the code to their own phone (GOV.UK, "Confirm a phone number"). A code people can paste whole is the help that lets a code meet WCAG 2.2 (3.3.8): people who can't copy it by hand can still get in. Okta's sign-in links work only in the browser that asked for them, and fall back to a code (Okta Developer, "Email Magic Links overview", convention).
- **Applies when:** a product sends codes or links by email or text message.
- **Check:** at sign-up, request a code: no word on where it went, or no way to send it again or fix the address, fails. At sign-in, request a code: the phone number shown, or a way to change where the code goes, fails. Request a sign-in email on a laptop and open it on a phone: a link with no code to type on the laptop fails. Paste a code, then one with a space in it: refused fails. Open an expired link: a bare error fails.
- **Fail:**
  - "Invalid token." after clicking a week-old link;
  - a sign-in link that signs in the phone and leaves the laptop waiting.
- **Pass:**
  - "We sent a code to ana@acme.com. Send again · Change email";
  - "This link expired after 15 minutes. Send a new one.";
  - a password-reset link alone, which works on whatever device opens it;
  - no email confirmation in a product that never relies on the email.

### 8. Two-step verification takes more than one method, and recovery is set up with it, never weaker

People can add more than one second step, a passkey or a security key among them; codes by text message come with another method and a word on their risk. When people turn on two-step verification, the product sets up recovery with it, such as codes to save or a second method, and checks they saved the codes. Getting back in is never weaker than signing in: access to the email alone doesn't turn two-step off. The product says what to do when every method is lost, such as a support route that checks who people are. Every recovery is sent to people's addresses with a way to say it wasn't them, and afterwards the product offers a passkey.

- **Why:** the US standard lets people add several methods and encourages at least two, restricts codes by text message to cases with another method and a notice of the risk, and sends a notice after every recovery, with steps for someone who didn't make it (NIST SP 800-63B-4). Of 71 sites the researchers set up two-step on, 21 offered no recovery or didn't prompt them to set it up, only 6 of the 39 with backup codes checked that the codes were saved, and many let access to the email alone get around two-step or turn it off (Amft et al. 2023). GOV.UK tells people what to do when they no longer have the phone (GOV.UK, "Confirm a phone number"), and FIDO and Google offer a passkey after a recovery (FIDO Alliance, "Create Passkey After Account Recovery"; Google for Developers, "Passkeys user journeys").
- **Applies when:** a product offers two-step verification.
- **Check:** turn on two-step: one method only, no recovery offered, or backup codes shown with no check that they were saved, fails. Try to recover with only the email: two-step turned off fails. Choose the path for a lost phone: no next step fails. Recover the account: no notice to the person's addresses fails. Look at a text-message option: no other method beside it fails.
- **Fail:**
  - two-step with a phone as the only method and no codes;
  - "We've turned off two-step for you" after an email link.
- **Pass:**
  - "Save these 10 codes", then "Type code 3 to show you saved them";
  - a security key offered beside text messages.

## The account afterwards

### 9. Signing in again returns people to where they were, with their work

After a session ends, people who sign in again land where they were, with what they had typed still there, but nothing they hadn't finished is sent for them. How long a session lasts follows the risk of what the account can do.

- **Why:** WCAG's AAA level keeps people's data and activity through a new sign-in (Understanding 2.2.5), and Carbon returns people to the last page they were on after a sign-out for inactivity (Carbon, "Login"). Sending what people hadn't finished would act on a choice they hadn't made yet. The US standard sets session limits by the account's level of assurance, such as 24 hours, with 1 hour idle, for accounts that need two steps (NIST SP 800-63B-4).
- **Applies when:** a product ends sessions, except a sign-out people chose, after which the product may open at its start.
- **Check:** let a session end in the middle of a form, then sign in: the home page, or an empty form, fails, and so does a payment or a message sent by itself.
- **Fail:** after signing in again, the dashboard and an empty benefit claim.
- **Pass:** the same payment form with the typed values, and its Pay button still waiting.

### 10. Changing the email, password or second steps asks again, and tells every address

Changing the email, the password, the phone number or the second steps asks people to confirm it's them, unless they just did so for another such change; a sign-in alone doesn't count. A new email address is confirmed with a code or link before it replaces the old one. The change is sent to every address on the account, the old one included, and by push where the product has an app, with a way to say it wasn't them. A new password ends the other sessions, or offers to, and people can see where they are signed in and end any one session.

- **Why:** OWASP asks for the current credentials before a change to the password or the email, and its standard asks again before every change to the email, the phone or two-step, offers to end the other sessions after a change, and lists the sessions people can end (OWASP, "Authentication Cheat Sheet"; OWASP ASVS 5.0). Someone who walks away from a signed-in computer leaves a sign-in anyone can use, which is why a sign-in alone doesn't count. The US standard asks for at least two notification addresses, and a notice to every one after changes to the account, with a way to report them (NIST SP 800-63B-4). A typo in a new address would cut people off from resets and notices, so GOV.UK confirms an address where a wrong one would let someone else in (GOV.UK, "Confirm an email address").
- **Applies when:** people can change how they sign in, or where the product contacts them.
- **Check:** change the email an hour after signing in: no password, passkey or code asked fails, and so do a new address used before it's confirmed and no message to the old address. Change the password while signed in on another device: that session still open, with no offer to end it, fails. Look for a list of where you are signed in: none, or no way to end one session, fails.
- **Fail:** an email change that takes effect with one click and tells only the new address.
- **Pass:**
  - a passkey prompt, then a code sent to the new address, then "Your email changed to ana@new.com. Not you? Lock your account", sent to both addresses and by push;
  - no second prompt when people change the phone number right after confirming it's them to change the email.

### 11. People can delete their account in the product, and hand over what they own first

Where people can create an account in the product, they can delete it there too, not only deactivate it, and the way to it isn't hidden in the terms. Before it's done, the product says what it will delete, what it must keep and why, what happens to a subscription, and when deletion will be complete, and it tells people when it is. Someone who owns things others use, such as a team workspace, chooses who takes them over before their account goes.

- **Why:** Apple asks apps to let people delete, not just deactivate, an account made in the app, to say when deletion will complete and to notify people when it's done (Apple, "Managing accounts"). The App Store and Google Play require deletion in the app, with a web link as well on Google Play (App Store Review Guidelines, 5.1.1; Google Play Console Help, "Account deletion requirements"). In the EU, people can have their personal data erased without undue delay on the grounds the law sets, such as withdrawing consent, and the product keeps only what the law lets it keep, such as data a legal duty, public health or a legal claim needs (GDPR, Article 17). Google Workspace lets an admin move a removed person's data to someone else before the rest is deleted, and GitHub recommends at least two owners, so an organization stays reachable (Google Workspace Admin Help, "Delete or remove a user from your organization"; GitHub Docs, "Maintaining ownership continuity for your organization"; convention).
- **Applies when:** people can create an account in the product.
- **Check:** as a new account, find the way to delete it from inside the product: none, only "deactivate", or only a line in the terms, fails. Delete it: no word on what is kept and why, on the subscription, or on when it completes, fails. As the only owner of a shared workspace, delete the account: the workspace gone with no choice of who takes it over fails. In the EU, ask to have your personal data erased: data kept beyond what the law lets the product keep fails.
- **Fail:**
  - "To delete your account, email support" in the privacy policy;
  - a workspace that disappears with its owner's account.
- **Pass:**
  - Settings › Account › Delete account, saying "Your invoices are kept for 7 years, as the law requires. Your plan ends today", and asking who takes over "Acme team";
  - a 30-day wait to undo the deletion, beside a way to delete at once;
  - an account in a workspace an employer controls, which its admin removes, with people told whom to ask.
