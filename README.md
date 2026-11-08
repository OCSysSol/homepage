# OCSS Official Homepage (`ocss.tech`)

Public marketing and business homepage for **Owners Corporation System Solutions (OCSS)**, showcasing the strata AGM voting platform (VotingMS).

## 🚀 Architecture & Deployment

- **Hosting:** Cloudflare Pages
- **Stack:** Pure HTML5, Modern CSS custom properties, minimal Vanilla JavaScript (Zero build step, instant global CDN delivery).
- **Functions:** Cloudflare Pages Functions (`/functions/api/contact.js`) for serverless contact handling and optional webhook alerts.
- **Assets:** Vector SVG branding and typography optimized for mobile and desktop screens.

## 🛠 Local Development

To run locally with any static web server:

```bash
# Using Python
python3 -m http.server 8080

# Or using Cloudflare Wrangler CLI (to test Pages Functions locally)
npx wrangler pages dev .
```

Visit `http://localhost:8080` in your browser.

## 📦 Cloudflare Pages Setup

1. Push this repository to GitHub under `OCSysSol/ocss-homepage`.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/):
   - Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Select `OCSysSol/ocss-homepage`.
   - **Framework preset:** `None`
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (or root)
3. Under **Custom domains**, add `ocss.tech` and `www.ocss.tech`.
