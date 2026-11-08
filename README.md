# OCSS Official Homepage (`ocss.tech`)

Public marketing and business homepage for **Owners Corporation System Solutions (OCSS)**, showcasing the strata AGM voting platform (VotingMS).

## 🚀 Architecture & Stack

- **Platform:** Cloudflare Workers (with Static Assets)
- **Frontend:** Pure HTML5, Modern CSS custom properties, minimal Vanilla JavaScript (Zero build step, instant global CDN delivery from `/public`).
- **Serverless API:** Cloudflare Worker (`/src/index.js` & `/src/api/contact.js`) for `/api/contact` form handling and optional webhook alerts.
- **Assets:** Vector SVG branding and typography optimized for mobile and desktop screens.

## 🛠 Local Development

To run locally with Cloudflare Wrangler:

```bash
# Start local dev server (serves static assets and simulates Worker API)
npx wrangler dev
```

Visit `http://localhost:8787` in your browser.

## 📦 Cloudflare Deployment

This project uses Cloudflare Workers with Static Assets.

1. In the [Cloudflare Dashboard](https://dash.cloudflare.com/):
   - Navigate to **Workers & Pages** > **Create application** > **Workers**.
   - Connect your GitHub repository (`OCSysSol/homepage`).
   - Cloudflare Workers Builds automatically detects `wrangler.json` (entrypoint: `src/index.js`, assets: `public`).
   - Click **Save and Deploy**.
2. Under **Settings** > **Domains & Routes**, add `ocss.tech` and `www.ocss.tech`.

### Environment Variables (Optional)

To enable notifications for new contact form submissions:
- In Cloudflare Dashboard > Worker > **Settings** > **Variables and Secrets**:
  - Add `INQUIRY_WEBHOOK_URL` (Slack, Discord, or Zapier incoming webhook URL).
