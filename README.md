# Deploying the OpenFortSec website on GitHub Pages

Every file for the site is in this one folder, with no sub-folders. Upload all of them, including this README, to the root of your GitHub repository.

## 1. Publish

1. Create a repository (for example `openfortsec-website`) and choose **Add file → Upload files**. Drag in every file from this folder and commit. Make sure the hidden `.nojekyll` file is included; on a Mac press Cmd+Shift+. to show hidden files.
2. In the repository, open **Settings → Pages**. Under **Source**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
3. Under **Custom domain**, enter `openfortsec.com` (without www). The included `CNAME` file sets this too.

## 2. DNS (at your domain registrar)

| Type | Name | Value |
|---|---|---|
| CNAME | `www` | `<your-github-username>.github.io` |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

With both records in place, GitHub serves the site at `https://openfortsec.com` and redirects `www.openfortsec.com` to it. Check these addresses against GitHub's current "Managing a custom domain" guide before saving.

Once the certificate is issued (this can take up to 24 hours), tick **Enforce HTTPS** in Settings → Pages.

## 3. Google Search Console

1. Go to search.google.com/search-console and add a **Domain** property for `openfortsec.com`.
2. Add the TXT record Google gives you to your DNS, then click **Verify**.
3. Open **Sitemaps** and submit `https://openfortsec.com/sitemap.xml`.
4. Use **URL Inspection** on the homepage and choose **Request indexing**.

Indexing is not instant. Google typically takes days to a few weeks to crawl a new site, and submitting a sitemap does not guarantee every page will be indexed. Bing Webmaster Tools can import your Search Console setup directly.

## 4. Check it is working

- Social previews: paste a page link into the LinkedIn Post Inspector (linkedin.com/post-inspector) or the Facebook Sharing Debugger.
- Structured data: test any page at search.google.com/test/rich-results or validator.schema.org.
- Security headers: scan the site at securityheaders.com (see the note below).
- Speed and accessibility: run PageSpeed Insights (pagespeed.web.dev).

## 5. Security headers on GitHub Pages

GitHub Pages does not let you set your own HTTP headers. This site sets what it can from inside each page:

- a Content-Security-Policy (as a `<meta>` tag, with hashes for the one inline script)
- a Referrer-Policy (`strict-origin-when-cross-origin`)

GitHub Pages also serves the site over HTTPS once **Enforce HTTPS** is ticked.

These cannot be set from a page and need a proxy in front, such as Cloudflare's free plan with a Transform Rule:

- Strict-Transport-Security
- X-Content-Type-Options
- Permissions-Policy
- clickjacking protection (`frame-ancestors`)

Suggested values if you add them:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: frame-ancestors 'none'
```

Caching and compression are handled by GitHub Pages and cannot be changed there.

## 6. When you change the site

Page links, titles and descriptions are baked into each page's HTML. If you add a page, add a new `.html` file to this folder and an entry for it in `sitemap.xml` using its clean address (for example `https://openfortsec.com/new-page`).

## 7. Clean addresses

Pages live at clean addresses such as `openfortsec.com/about`. GitHub Pages answers `/about` with `about.html` from this folder.
