# The Next 25 – test package

**Version:** test package 0.1, 4 November 2026
**Purpose:** set up and test the hosting, the deployment pipeline, analytics and consent. **This is not the launch content.**

## What is in the package

| | |
|---|---|
| Pages | 46 per language, 92 in total, plus a 404 page per language |
| Languages | English at the root (`/`), Spanish in `/es/` |
| Assets | `/assets/` – css, js, fonts (Hitachi Sans), images, one video. Shared by all languages |
| Size | about 11 MB |
| `sitemap.xml` | All pages in both languages, with hreflang alternates |
| `robots.txt` | **Test version: blocks all crawling.** Replace at launch |
| `PAGES.csv` | List of every page: type, topic, path, status (draft / placeholder) |

## Structure

One folder per page, each with its own `index.html`, which gives clean addresses:

```
/                                  homepage
/space/                            topic page
/space/cern/                       story (stories live inside their topic)
/papers/                           papers overview
/papers/gridlocked-ai/             paper article
/about/                            about
/es/...                            the same structure in Spanish
/404.html, /es/404.html            not-found pages (absolute paths, work from any depth)
```

All links between pages are relative, so the site also works from a subfolder or a staging address.

## Content status

- **Draft:** the text is a working draft and will be rewritten before launch.
- **Placeholder:** the page exists so the address is final, but the text is not written yet (17 pages, listed in `PAGES.csv`).
- **Spanish** is a test translation, so that language switching, hreflang and longer text can be tested. It is not the final translation.
- Images are placeholders until final licensed images are selected.

## Test-only settings to change at launch

1. `robots.txt`: currently `Disallow: /`. At launch: allow crawling and add the sitemap line.
2. Every page has `<meta name="robots" content="noindex, nofollow">`. Remove at launch.
3. Canonical, hreflang and sitemap URLs use the placeholder domain `https://thenext25.example`. Replace with the final domain.

These three will be handled in the launch package; listed here so the test setup does not get indexed.

## What the package does NOT contain (per the SOW, added by the hosting pipeline)

- Adobe Launch tag and the agreed analytics events.
- The corporate cookie-consent banner.
- The newsletter form connection to Eloqua. The form on the homepage (section `#sub`) is a visual placeholder: the button currently shows a "concept demo" message.
- YouTube is not embedded anywhere in this version; films open on youtube.com in a new tab. The hero film is a self-hosted MP4 (`/assets/video/`), muted autoplay.

## Notes for the pipeline

- Asset file names are content hashes and are stable between versions: an unchanged image keeps its name.
- The language selector lists only the languages that are published (English, Español) and links to the same page in the other language.
- Each new version arrives as a complete folder, as agreed. Page addresses will not change between versions.

Contact: Pablo Collado, Hitachi Energy
