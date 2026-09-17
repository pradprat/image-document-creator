# Scan to PDF

A local-first website for turning a document photo into a cleaned, straightened PDF.

## What it does

- Accepts a JPG, PNG, or other browser-supported image
- Finds the largest four-corner document shape automatically
- Lets the user drag all four crop points manually
- Corrects perspective and renders an A4-proportioned page
- Builds a downloadable multi-page PDF
- Processes images in the browser; there is no upload endpoint or server-side storage

## Run locally

```bash
npm install
npm start
```

Open `http://127.0.0.1:4173` in a browser.

## Test

```bash
npm test
```

## Deployment

This is a static site. Deploy the project folder to any static host that serves `index.html`, `scanner-core.mjs`, and the included `vendor/` directory. No server-side image handling is required.
