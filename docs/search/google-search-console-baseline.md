# FolkMiles Google Search Console (GSC) Baseline & Verification Guide

**Document Version**: 1.0  
**Date**: 2026-09-21  
**Brand**: FolkMiles  
**Canonical Domain**: https://folkmiles.com  

---

## 1. Property Architecture

To ensure comprehensive tracking and canonical consolidation across all Google search properties:

1. **Domain Property (Recommended)**:
   - **Resource**: `folkmiles.com`
   - **Coverage**: Covers all protocols and subdomains (`https://folkmiles.com`, `http://folkmiles.com`, `https://www.folkmiles.com`, `http://www.folkmiles.com`).
   - **Verification Method**: DNS TXT Record via domain registrar (e.g. GoDaddy, Namecheap, Cloudflare, Vercel DNS).
   - **Record Type**: `TXT`
   - **Host / Name**: `@` or `folkmiles.com`
   - **Value**: `google-site-verification=[VERIFICATION_TOKEN_FROM_GSC]`

2. **URL-Prefix Property (Secondary / Backup)**:
   - **Resource**: `https://folkmiles.com`
   - **Verification Method**: HTML Tag or Environment Variable in Vercel.
   - **Implementation in Code**: Built-in support via `GOOGLE_SITE_VERIFICATION` environment variable in `src/app/layout.tsx`.

---

## 2. Sitemap Submission Status

- **Sitemap Index URL**: `https://folkmiles.com/sitemap.xml`
- **Total Valid URLs**: 26 Canonical URLs
- **Status**: Live, valid XML, returns HTTP 200 OK with `content-type: application/xml`.
- **Submission Action**:
  - In Google Search Console -> Indexing -> **Sitemaps**.
  - Enter: `sitemap.xml`
  - Click **Submit**.

### Core URL Clusters in Sitemap
1. **Core / Brand (5)**:
   - `/` (Homepage)
   - `/about`
   - `/contact`
   - `/b2b-travel-partners`
   - `/local-partners`
2. **Commercial Tour Packages (4)**:
   - `/jaisalmer-packages` (Hub)
   - `/destinations/jaisalmer/2-days-1-night`
   - `/destinations/jaisalmer/3-days-2-nights`
   - `/destinations/jaisalmer/4-days-3-nights`
3. **Curated Experiences (7)**:
   - `/experiences` (Hub)
   - `/experiences/jaisalmer-desert-safari`
   - `/experiences/jaisalmer-fort-heritage`
   - `/experiences/desert-walking-jaisalmer`
   - `/experiences/kuldhara-abandoned-village`
   - `/experiences/rajasthani-cooking-craft`
   - `/experiences/thare-stargazing-astronomy`
4. **Editorial Travel Guides (6)**:
   - `/travel-guides` (Hub)
   - `/travel-guides/best-time-to-visit-jaisalmer`
   - `/travel-guides/how-many-days-in-jaisalmer`
   - `/travel-guides/jaisalmer-fort-guide`
   - `/travel-guides/desert-safari-cost-guide`
   - `/travel-guides/jodhpur-to-jaisalmer-travel`
5. **Destination Hub & Legal (4)**:
   - `/destinations/jaisalmer`
   - `/privacy-policy`
   - `/terms-and-conditions`
   - `/cancellation-policy`

---

## 3. Robots.txt Configuration Verification
- **URL**: `https://folkmiles.com/robots.txt`
- **Status**: Verified Live (HTTP 200 OK)
- **Directives**:
  ```text
  User-Agent: *
  Allow: /
  Disallow: /api/
  Disallow: /_next/

  Sitemap: https://folkmiles.com/sitemap.xml
  Host: https://folkmiles.com
  ```

---

## 4. Priority URLs for Manual URL Inspection & Indexing Request

Once GSC is verified, use the **URL Inspection Tool** to inspect and click **"Request Indexing"** on the following top 5 priority entry points:

1. `https://folkmiles.com/` (Homepage & Entity Root)
2. `https://folkmiles.com/jaisalmer-packages` (High-intent commercial hub)
3. `https://folkmiles.com/destinations/jaisalmer/3-days-2-nights` (Most popular package)
4. `https://folkmiles.com/experiences/jaisalmer-desert-safari` (High search volume experience)
5. `https://folkmiles.com/travel-guides/best-time-to-visit-jaisalmer` (Top informational query)

---

## 5. Day 0 Baseline Search Engine Metrics
- **Indexed Pages (`site:folkmiles.com`)**: Indexing active and propagating.
- **Brand Search (`"FolkMiles"`)**: Transitioning from zero entity to established presence.
- **Organic Clicks (Baseline)**: 0
- **Organic Impressions (Baseline)**: 0
- **Average CTR (Baseline)**: 0.0%
- **Average Position (Baseline)**: N/A (Fresh Launch)
