# ukshelf.online — storefront

A tiny, curated UK store. One shelf, 1–2 verified trending products, always
shipped from within the United Kingdom.

## Files

- `index.html` — single-page storefront (hero, products, why-us, drop list, about, contact, footer)
- `css/style.css` — responsive styles (navy + red brand theme)
- `js/main.js` — mobile nav, drop-list form (localStorage demo)
- `assets/favicon.svg` — brand mark

## Deployed 🎉

- **Live at:** https://ukshelf.online (HTTP works now; HTTPS auto-issues once GitHub verifies DNS — usually minutes to a few hours, then "Enforce HTTPS" turns on)
- **Repo:** https://github.com/ukshelfuk-sudo/ukshelf (branch `main`, Pages = deploy from branch/root)
- **DNS (Porkbun):** ALIAS `ukshelf.online` → `ukshelfuk-sudo.github.io` (parking records removed)
- **Local preview:** `python3 -m http.server 8787` from this folder

## Next steps before the first drop

- Replace placeholder product cards with the winning product(s) from Phase 3 research.
- Add real product photos and prices.
- Connect Stripe payment links for checkout (requires business/bank details).
- Wire the drop-list form to a real email service (e.g. Mailchimp / Buttondown).
- Point the footer social links at the live @ukshelf accounts.
