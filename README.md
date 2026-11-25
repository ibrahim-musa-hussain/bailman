# Bailman Global Group Website

A static site (HTML, CSS, vanilla JavaScript) ready for Netlify. No build step, no backend.

## Before you launch: 4 things to replace
1. **Logo.** The uploaded logo did not reach me, so `assets/logos/logo.svg` is a placeholder. Replace it with your real logo. If it is a PNG, save it as `assets/logos/logo.png` and change `logo.svg` to `logo.png` in every `.html` file (Find & Replace across the folder in VS Code: Ctrl/Cmd+Shift+H). The header and footer are dark navy, so use a version that reads well on navy.
2. **Domain.** Every page uses the placeholder `https://www.bailmanglobalgroup.com` (canonical, social sharing, `sitemap.xml`, `robots.txt`). Replace it with your real domain.
3. **Images.** Product images in `assets/images/products/` are illustrated placeholders. Add real photos (see below). Replace `assets/images/og-image.png` (1200x630) with a branded sharing image.
4. **Social links.** In `contact.html`, find `class="soc" href="#"` and replace each `#` with your page URL.

## Deploy on Netlify (easiest: drag and drop)
1. Create a free account at netlify.com.
2. Go to **Projects (Sites) > Add new site > Deploy manually**.
3. Drag the whole `bailman-website` folder onto the page. The site goes live on a `*.netlify.app` address.
4. Optional: for automatic updates, push the folder to GitHub and choose **Import an existing project**. Leave the build command empty and set the publish directory to `.`.

## Forms (contact and partnership)
Netlify detects the forms automatically when you deploy.
1. Submit a test enquiry on the live site.
2. In Netlify go to **Forms**. Submissions appear there.
3. Under **Forms > Form notifications**, add an email notification to `bailmanglobalmarket@gmail.com`.

Forms do not work when you open the files from your computer, only on Netlify. Free plans have a monthly submission limit; check your plan.

## Connect a custom domain
1. Buy a domain from any registrar.
2. In Netlify: **Domain management > Add a domain**.
3. Choose one method:
   - **Netlify DNS (simplest):** Netlify gives you nameservers. Set them at your registrar.
   - **Keep your registrar's DNS:** add the records Netlify shows you (an `A` record for the root domain and a `CNAME` for `www` pointing to your `*.netlify.app` address). Use the exact values shown in your Netlify panel.
4. DNS can take a few hours. Then open **Domain management > HTTPS > Verify DNS / Provision certificate** for free HTTPS.
5. Set your preferred domain (with or without `www`) as primary. Update the domain placeholder in the files (step 2 above).

## How to update the site
**Add a product.** Open `products.html`. Copy one whole `<article class="pcard" ...> ... </article>` block, paste it after the last one, then change the `id`, image file name, name, description, and the text in `href="contact.html?product=..."` and the WhatsApp `data-wa-text`/`href`. Optionally add a matching link in the `<nav class="chips">` list at the top.

**Change a product picture.** Put your photo (JPG or WebP, around 1200x800, under 300 KB) in `assets/images/products/`, then change the `src` of that card's `<img>`. Update the `alt` text too.

**Update contact numbers or email.** Use Find & Replace across all files. Numbers appear in three forms: display (`+880 1779 013386`), phone link (`+8801779013386`) and WhatsApp (`8801779013386`). Replace all three. The email appears in every footer, `contact.html` and the structured data on `index.html`.

**Add a business division.** In `businesses.html`, copy one `<div class="div">...</div>` block. Status labels: `tag live` (operating), `tag dev` (in development), `tag soon` (coming soon).

**Change descriptions.** Edit the text in the relevant `.html` file and save.

**Colours and fonts.** The brand colours are variables at the top of `style.css` (`--navy`, `--gold`).

## Notes on honesty and SEO
- The site states that Bailman Global Group is an umbrella brand and that only Bailman Global Market Limited is registered. Please keep this accurate.
- Only Bailman Global Market Limited is labelled as the registered company. Agro and Beauty are labelled "In development". Change a label only when that division is truly operating.
- There are no invented reviews, certifications, partners, prices, stock or statistics. Add them only when they are real.
- SEO: unique titles and descriptions, headings, alt text, sitemap, robots and social metadata are included. After launch, add the site to Google Search Console and submit `sitemap.xml`. No ranking is guaranteed.

## Files
`index, about, businesses, products, services, partnerships, contact`.html, `thank-you.html`, `404.html`, `style.css`, `script.js`, `netlify.toml`, `robots.txt`, `sitemap.xml`, `assets/`.
