const webscraper = require('..');
const { filterCommon } = require('../utils/array');

exports.getFacebookFollowerCount = async (username) => {
  if (username.startsWith('@')) username = username.slice(1);
  const url = `https://facebook.com/${encodeURIComponent(username)}`;
  const extract = (nodelist) => nodelist
    .map((el) => el.innerText)
    .filter((text) => /\d+\speople\slike\sthis/.test(text) && text.length < 44)
    .map((text) => text.match(/\b[\d,]+\b/)[0].replace(/,/g, ''));

  const result = await webscraper(url, 'div', extract);
  return filterCommon(result);
};

exports.test = () => {};
