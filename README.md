# webscraper

Basic web scraper based on pupperteer

## Usage
```
websraper(url, targetQuery, extractorFn) 
```
### Arguments

**url**: [string] URL of the page to be scraped

**targetQuery** [string] Query that will be passed to `document.querySelectorAll()` function

**extractorFn** [function] Function that result of `document.querySelectorAll()` will be pass to as the first and only argument. Note: result will be already coverted to array, so there is no need to apply `Array.from()` or `[...]` spread it.