"""Check the built site against the GitHub Pages project deployment path."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET

DIST = Path("dist")
BASE = "/atam-portfolio"
ORIGIN = "https://luciendgolden.github.io"
checked = 0


def check_url(value):
    global checked
    # Existing inline dependency reference, unrelated to the base-path migration.
    if value == "/node_modules/preline/preline.js":
        return
    url = urlsplit(value)
    if url.scheme or url.netloc:
        if url.netloc != urlsplit(ORIGIN).netloc:
            return
    elif not value.startswith("/"):
        return
    assert url.path == BASE or url.path.startswith(BASE + "/"), value
    relative = unquote(url.path[len(BASE):]).lstrip("/")
    target = DIST / relative
    assert target.is_file() or (target / "index.html").is_file(), value
    checked += 1


class PageParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for key in ("href", "src"):
            if attrs.get(key):
                check_url(attrs[key])
        if tag == "meta" and attrs.get("property") in ("og:url", "og:image"):
            check_url(attrs["content"])


pages = list(DIST.rglob("*.html"))
assert pages, "Run npm run build first"
for page in pages:
    PageParser().feed(page.read_text())
for name in ("rss.xml", "sitemap-index.xml", "sitemap-0.xml"):
    for element in ET.parse(DIST / name).iter():
        if element.tag.rsplit("}", 1)[-1] in ("link", "loc") and element.text:
            check_url(element.text)
print(f"Passed: {len(pages)} pages, {checked} project URLs with existing targets")
print("Excluded known pre-existing broken reference: /node_modules/preline/preline.js")
