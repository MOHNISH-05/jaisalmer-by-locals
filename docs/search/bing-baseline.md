# FolkMiles Bing Webmaster Tools & IndexNow Baseline

**Document Version**: 1.0  
**Date**: 2026-09-21  
**Brand**: FolkMiles  
**Canonical Domain**: https://folkmiles.com  

---

## 1. Bing Webmaster Tools Verification Options

Bing Webmaster Tools (BWT) powers Bing, Yahoo, DuckDuckGo, and Copilot search discovery.

### Option A: 1-Click Import from Google Search Console (Recommended)
1. Go to `https://www.bing.com/webmasters/`
2. Sign in with Microsoft account.
3. Select **"Import from Google Search Console"**.
4. Authorize Google account. Bing instantly imports verified domains, sitemaps, and settings with zero DNS edits.

### Option B: HTML Meta Tag Verification
- FolkMiles already supports Bing verification via environment variable in `src/app/layout.tsx`:
  - Env Var: `BING_SITE_VERIFICATION`
  - Rendered Meta Tag: `<meta name="msvalidate.01" content="[BING_CODE]" />`

### Option C: BingSiteAuth.xml Verification
- Place `BingSiteAuth.xml` with the provided code into `/public/BingSiteAuth.xml` to serve at `https://folkmiles.com/BingSiteAuth.xml`.

---

## 2. IndexNow Protocol (Live & Active)

IndexNow enables instant indexing across Bing, Yandex, Seznam, and partner search engines within seconds of content publication.

- **Status**: **VERIFIED ACTIVE (HTTP 202 ACCEPTED)**
- **API Endpoint**: `https://api.indexnow.org/indexnow`
- **Verification Key**: `a7f93c2e1b4d68e5902fa4813bc57d29`
- **Key File URL**: `https://folkmiles.com/a7f93c2e1b4d68e5902fa4813bc57d29.txt` (Verified HTTP 200 OK)
- **Submitted URL Count**: 26 Canonical URLs
- **Response**: `HTTP/1.1 202 Accepted`

---

## 3. Bing Places for Business Integration

Bing Places powers local search results and maps across Windows search, Bing Maps, and Microsoft Copilot.

- **Portal**: `https://www.bingplaces.com/`
- **Quick Setup**: Use the **"Import from Google My Business"** feature.
- **Data Sync**: Ensures the exact same NAP (`FolkMiles`, `+91 7849931611`, Jaisalmer, Rajasthan) is replicated across the Microsoft ecosystem.
