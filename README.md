# Portfolio Site (GitHub Pages Ready)

This folder contains a static personal portfolio site for a Product Manager with shared styles and theme behavior.

## Structure

```
portfolio_site/
  index.html
  about.html
  portfolio.html
  contact.html
  projects/
    cog.html
    addie.html
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
    about/
      IMG_0448.jpeg
      IMG_2521 2.jpeg
      IMG_6018.jpeg
      IMG_9309.jpg
      IMG_9321.jpeg
    resume/
      Sun_Yu_Resume.pdf
    projects/
      cog/
        COG Presentation.pdf
        COG Notes.pdf
```

## Run Locally

From the repository root:

```bash
cd portfolio_site
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## Deploy via GitHub Pages

This repository currently has a Jekyll workflow configured at `/.github/workflows/jekyll.yml`.

1. If this static site should be primary, move `portfolio_site/` contents to repository root.
2. Or switch Pages source to `/docs` and copy `portfolio_site/` contents into `docs/`.
3. If your root serves repository files directly, publish and visit `/portfolio_site/` path.
