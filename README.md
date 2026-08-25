# ukshelf.online — storefront

A tiny, curated UK store. One shelf, 1–2 verified trending products, always
shipped from within the United Kingdom.

## Files

- `index.html` — single-page storefront (hero, products, why-us, drop list, about, contact, footer)
- `css/style.css` — responsive styles (navy + red brand theme)
- `js/main.js` — mobile nav, drop-list form (localStorage demo)
- `assets/favicon.svg` — brand mark

## Deploy (GitHub Pages + custom domain)

1. Create a GitHub repository (e.g. `ukshelf/ukshelf`).
2. Push this folder's contents to the repo.
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → `main` / root.
4. Under **Custom domain**, enter `ukshelf.online` and save (GitHub adds a `CNAME`).
5. At the DNS provider (Namecheap), add DNS records:
   - `CNAME  ukshelf.online  →  <user>.github.io`
   - 4 × `A  ukshelf.online  →  185.199.108.153 / .109 / .110 / .111`
6. HTTPS is enabled automatically (takes a few minutes).

## Next steps before the first drop

- Replace placeholder product cards with the winning product(s) from Phase 3 research.
- Add real product photos and prices.
- Connect Stripe payment links for checkout (requires business/bank details).
- Wire the drop-list form to a real email service (e.g. Mailchimp / Buttondown).
- Point the footer social links at the live @ukshelf accounts.
