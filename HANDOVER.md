# JCTATTOO Saranay — Owner's Manual

Everything you need to own, run, and edit the website yourself.
No coding knowledge needed. No monthly fees.

---

## What you're getting

| | |
|---|---|
| **The website** | A complete site: portfolio (60 photos), rates, hours, contact, age verification |
| **Hosting** | **Free, forever**, on GitHub Pages |
| **Running cost** | **₱0** — unless you want a custom web address (see Part 5) |
| **Who controls it** | You, once the transfer in Part 2 is done |

---

## Part 1 — Create your GitHub account

The website's files live on GitHub. You need a free account to own them.

1. Go to **https://github.com/signup**
2. Sign up with your email, pick a username, verify your email
3. **Write down your username and password.** You will need them to edit the
   site later, and there is no way to recover the account without them

> **Use an email you control long-term** — not a staff member's, not one you
> might lose access to. This account *is* your ownership of the site.

---

## Part 2 — Get the site transferred to you

The current owner does this part. Send them your GitHub username.

**They do this:**
1. Open the repository → **Settings**
2. Scroll to the bottom → **Danger Zone** → **Transfer ownership**
3. Type the repository name to confirm, enter **your GitHub username**
4. Click **I understand, transfer this repository**

**You do this:**
5. Check your email for a transfer invitation from GitHub
6. Click **Accept transfer**

Done — the site is now yours. The old owner loses access unless you add them
back.

---

## Part 3 — Put the site online

This switches the site on. One time only, takes about 2 minutes.

1. Go to your repository → **Settings** → **Pages** (left sidebar)
2. Under **Source**, choose **Deploy from a branch**
3. Branch: **`main`** — Folder: **`/ (root)`**
4. Click **Save**
5. Wait 1–2 minutes, then refresh the page. GitHub shows your live link at
   the top

Your website address will be:

```
https://YOURUSERNAME.github.io/JCTattooSaranay/
```

Put that link in your Facebook page, Instagram bio, and business cards.

---

## Part 4 — Editing the site yourself

**Almost everything you'll ever want to change lives in one file: `js/data.js`.**

Prices, hours, phone number, social links, the artist bio, walk-in times —
all in that one file. You edit it right in your web browser.

### How to edit anything

1. Go to your repository on GitHub
2. Click the **`js`** folder → click **`data.js`**
3. Click the **pencil icon** (✏️) at the top right
4. Change the text between the quote marks `" "`
5. Scroll down → click **Commit changes**
6. Wait about 1 minute — your site updates automatically

> **Only change what's inside the quote marks.** Leave the commas, brackets
> and quote marks exactly where they are. If the site breaks, see
> *If something goes wrong* below — nothing is ever permanently lost.

### Common edits

**Change a piercing price** — find the piercing, change the number:
```js
{ name: "Septum", price: 300 },
```

**Change the tattoo price:**
```js
{ name: "Minimalist Tattoo", price: 600, ... }
```

**Change your hours** — edit any day's time:
```js
{ day: "Monday", time: "6:00 PM – 1:00 AM" },
```

**Change phone / address / socials:**
```js
phone: "0991 240 1492",
location: "Saranay Road, North Caloocan, Caloocan City, Philippines 1421",
facebookUrl: "https://www.facebook.com/...",
instagramHandle: "@jcstattoo0503",
```

**Change walk-in hours:**
```js
walkIn: {
  label: "Walk-ins Welcome",
  time: "6:00 PM – 1:00 AM",
  ...
}
```

### Adding new tattoo photos

1. Go to the **`assets`** folder → **`portfolio`** folder
2. Click **Add file** → **Upload files** → drag your photos in →
   **Commit changes**
3. Now open **`js/data.js`** and add one entry per photo inside the
   `portfolio` list:

```js
{
  src: "assets/portfolio/YOUR-FILE-NAME.jpg",
  alt: "Short description of the tattoo",
  tag: "Fine Line",
},
```

`tag` must be one of these, spelled exactly:

> `Fine Line` · `Illustrative` · `Lettering` · `Traditional` · `Tribal` ·
> `Anime` · `Cartoon` · `Cover-Up` · `Piercing`

The photo count on the site updates by itself. If you invent a **new** tag,
also add it to the `styleOrder` list near the top of the file, or it will sort
to the bottom.

**Before uploading:** shrink photos to roughly **1100 pixels** on the long
side. Straight-from-the-phone photos are 4–5× bigger than the site needs and
will make it slow to load on mobile data.

### If something goes wrong

Every change is saved forever and reversible.

1. Click **Commits** (the clock icon) at the top of your repository
2. Find the change that broke it
3. Click the **`...`** menu → **Revert**

The site returns to how it was. You cannot permanently break anything.

---

## Part 5 — Getting your own web address (optional)

Your free address works fine, but it's long:

```
https://yourusername.github.io/JCTattooSaranay/
```

A custom address looks like this instead:

```
https://jcstattoo.com
```

### The offer

> ### ₱1,000 — good for one year
> Includes registering the name and connecting it to your website.

### What ₱1,000 actually buys you

**You own that exact web address, worldwide, for 12 months.**

- **Exclusive.** For that whole year, **nobody else on Earth** can register
  it. Not another tattoo shop, not a company, not anyone — it is yours alone.
- **International.** Domain names aren't per-country. `.com` is a single
  global registry. Someone in Manila, Tokyo, or New York typing your address
  reaches *your* site.
- **Renewable.** Pay again each year to keep it. Miss the renewal and it
  eventually returns to the open market, where anyone can take it.
- **Portable.** The address is yours, not the website's. If you ever rebuild
  the site somewhere else, you point the same address at the new one and
  customers never notice.
- **Hosting stays free.** The custom address doesn't add hosting cost —
  GitHub Pages remains ₱0, with a secure `https://` padlock included.

### One honest clarification

This gives you the **web address** — not a trademark on the business name.
It stops others using that exact address; it does not stop another shop from
naming itself something similar or registering `.net`, `.ph`, etc. Legal
ownership of the *brand name* is a separate matter (DTI / IPOPHL
registration) and isn't part of this.

### Names checked and confirmed available

`jcstattoo.com` · `jctattoosaranay.com` · `jcstattoosaranay.com` ·
`jctattooph.com`

(`jctattoo.com` is already taken by someone else.)

Availability changes daily — if you want one, claim it sooner rather than
later.

---

## Quick reference

| I want to… | Where |
|---|---|
| Change prices, hours, phone, socials, bio | `js/data.js` |
| Add or remove tattoo photos | `assets/portfolio/` + `js/data.js` |
| Change colours, fonts, layout | `css/styles.css` *(needs some web knowledge)* |
| Change page text and headings | `index.html` |
| Undo a mistake | **Commits** tab → **Revert** |
| Turn the site on/off | **Settings** → **Pages** |

**Changes go live about 1 minute after you commit.** If you don't see them,
hard-refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac).

---

## Good to know

- **The site works on phones**, which is how most of your customers will see it.
- **Age verification** appears on a visitor's first visit. Under-18s are shown
  the parental-consent requirements rather than being turned away.
- **The footer disclaimer** states the 18+ policy permanently. If your consent
  rules change, edit `ageGate` in `js/data.js`.
- **Nothing expires.** No monthly bill, no trial, no card on file. The only
  thing that ever needs renewing is a custom domain, if you buy one.
