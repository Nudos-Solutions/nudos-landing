#!/bin/bash
# Submit all URLs to Google for indexing via Search Console
# Usage: ./scripts/submit-to-google.sh
#
# Prerequisites:
# 1. Register at https://search.google.com/search-console
# 2. Verify ownership of www.nudos.app
# 3. Submit sitemap URL: https://www.nudos.app/sitemap.xml
#
# This script pings Google and Bing to re-crawl the sitemap.
# For instant indexing, use Google Indexing API (requires service account).

SITEMAP_URL="https://www.nudos.app/sitemap.xml"

echo "Pinging Google with sitemap..."
curl -s "https://www.google.com/ping?sitemap=${SITEMAP_URL}" -o /dev/null -w "Google: HTTP %{http_code}\n"

echo "Pinging Bing with sitemap..."
curl -s "https://www.bing.com/ping?sitemap=${SITEMAP_URL}" -o /dev/null -w "Bing: HTTP %{http_code}\n"

echo ""
echo "Done! Sitemap submitted to Google and Bing."
echo ""
echo "Manual steps:"
echo "1. Go to https://search.google.com/search-console"
echo "2. Add property: www.nudos.app"
echo "3. Get verification code and set NEXT_PUBLIC_GOOGLE_VERIFICATION in .env"
echo "4. Submit sitemap: ${SITEMAP_URL}"
echo ""
echo "5. Go to https://www.bing.com/webmasters"
echo "6. Add site: www.nudos.app"
echo "7. Get verification code and set NEXT_PUBLIC_BING_VERIFICATION in .env"
echo ""
echo "All URLs in sitemap:"
echo "- https://www.nudos.app (home)"
echo "- /about, /guide, /press, /blog, /faq, /glossary"
echo "- /services/vessel-inspection, condition-scoring, vessel-valuation, premium-engine, claims-intelligence"
echo "- /blog/* (7 articles)"
echo "- /glossary/* (25 term pages)"
echo "- /locations/miami-beach, /locations/montevideo"
echo "- /privacy, /terms, /cookies"
echo "Total: ~58 URLs"
