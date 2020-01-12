# webscraper

Basic web scraper based on pupperteer

## Usage
```
webscraper(url, targetQuery, extractorFn) 
```
### Arguments

**url** <string>: URL of the page to be scraped

**targetQuery** <string>: Query that will be passed to `document.querySelectorAll()` function

**extractorFn** <function>: Function result of `document.querySelectorAll()` will be pass to as the first and only argument. Note: result will be already coverted to array, so there is no need to apply `Array.from()` or `[...]` spread it.

### Returns

Returns promise <Promise> that will resolve the value of **extractorFn**