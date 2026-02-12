# Portfolio Site (GitHub Pages Ready)

This folder contains a static personal portfolio site for a Product Manager.

## Structure

```
portfolio_site/
  index.html
  about.html
  portfolio.html
  contact.html
  assets/
    css/
      styles.css
    js/
      theme.js
    images/
      github.png
      linkedin.png
      mail.png
      substack.png
      moon.png
```

## Run Locally

From the repository root:

```bash
cd portfolio_site
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy via GitHub Pages

This repo currently has a Jekyll workflow configured from root (`/.github/workflows/jekyll.yml`).

Use one of these deployment approaches:

1. Move the contents of `portfolio_site/` to the repository root if you want this static site to be your main Pages site.
2. Or configure Pages to deploy from a `/docs` folder and copy `portfolio_site/` contents into `/docs`.
3. Or keep this folder as-is and reference it under `https://<username>.github.io/portfolio_site/` if your root deployment serves repository files directly.

## Notes

- Theme toggle uses `localStorage` and CSS variables.
- Navigation highlights the active page.
- Footer icon links use your provided URLs and asset PNGs.
- All links are relative for GitHub Pages compatibility.
