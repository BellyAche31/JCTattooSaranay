# JCTATTOO Saranay

Website for JCTATTOO Saranay — custom tattoos and body piercing. Static
HTML/CSS/JS, no build step, no dependencies.

## Project structure

```
index.html          Page markup (all sections: hero, about, portfolio, services, hours, contact)
css/styles.css       All styling
js/data.js           Site content: business info, hours, services, portfolio list — edit this to update the site
js/main.js           Behavior: nav, gallery + lightbox, scroll reveal animations
assets/brand/        Logo and the hours poster
assets/portfolio/    Portfolio photos shown in the gallery
```

## Editing content

Almost everything on the page (business name, hours, services, portfolio
images, contact info) is driven by `js/data.js`. Edit the `SITE` object there
— no HTML/CSS knowledge needed for text changes.

**Placeholders still needed** (see `TODO` comments in `js/data.js`):
- The shop's Facebook page URL, if you want it linked in the footer (page name is "JCTattoo Saranay")
- TikTok link, if used
- Confirmation that the poster hours are current and are opening (not closing) times
- An email address, if the shop uses one for bookings

To add a new portfolio photo: drop the image in `assets/portfolio/` and add
an entry to the `portfolio` array in `js/data.js` (with a `tag` matching one
of the existing style filters, or a new one — filters are generated
automatically from whatever tags exist).

## Running locally

No build step — just serve the folder statically:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or open `index.html` directly in a browser (the gallery/lightbox JS works
without a server, though a local server is closer to production).

## Deploying for free

**GitHub Pages** (recommended, zero cost):
1. Push this repo to GitHub.
2. Repo Settings → Pages → Deploy from branch → pick `main` (or your default
   branch) and `/ (root)`.
3. The site will be live at `https://<username>.github.io/<repo>/`.

Any other static host (Netlify, Vercel, Cloudflare Pages) works the same way
— point it at the repo root, no build command needed.
