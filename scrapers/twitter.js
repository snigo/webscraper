const webscraper = require('..');

exports.getTwitterFollowerCount = async (username) => {
  if (username.startsWith('@')) username = username.slice(1);
  const url = `https://twitter.com/${encodeURIComponent(username)}`;
  const extract = (nodelist) => {
    const [el] = nodelist.filter((node) => [...node.children].some((child) => child.innerText === 'Followers'));
    return [...el.children].find((child) => child.classList.contains('ProfileNav-value')).getAttribute('data-count');
  };

  const result = await webscraper(url, '.ProfileNav-stat', extract);
  return result;
};

exports.test = () => {};
