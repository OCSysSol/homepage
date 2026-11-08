# OCSS Official Homepage (`ocss.tech`)

Public marketing and business homepage for **Owners Corporation System Solutions (OCSS)**, showcasing the strata AGM voting platform (VotingMS).

## 🚀 Architecture & Deployment

- **Hosting:** Cloudflare Workers (with Static Assets) or Cloudflare Pages
- **Stack:** Pure HTML5, Modern CSS custom properties, minimal Vanilla JavaScript (Zero build step, instant global CDN delivery).
- **Backend / API:** Serverless `/api/contact` handling with optional webhook alerts (`src/index.js` & `functions/api/contact.js`).
- **Assets:** Vector SVG branding and typography optimized for mobile and desktop screens (`public/`).

## 🛠 Local Development

To run locally with Wrangler:

```bash
# Using Cloudflare Wrangler CLI (runs static assets from public/ and API routes)
npx wrangler dev

# Or using Python from public directory
python3 -m http.server 8080 -d public
```

Visit `http://localhost:8787` (or `http://localhost:8080`) in your browser.

## 📦 Cloudflare Deployment

This repository is configured to deploy directly to **Cloudflare Workers** (Workers Builds) or **Cloudflare Pages**:

1. In the [Cloudflare Dashboard](https://dash.cloudflare.com/):
   - Navigate to **Workers & Pages** > **Create application** > **Import from Git** (or **Pages** > **Connect to Git**).
   - Select `OCSysSol/homepage`.
   - Cloudflare will automatically read `wrangler.toml` (`main = "src/index.js"`, `[assets] directory = "public"`).
   - **Build command:** *(leave blank)*
   - **Deploy!**
2. Under **Settings** > **Domains & Routes**, add `ocss.tech` and `www.ocss.tech`.
