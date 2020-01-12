const webscraper = require('..');

exports.getInstagramFollowerCount = async (username) => {
  if (username.startsWith('@')) username = username.slice(1);
  const url = `https://instagram.com/${encodeURIComponent(username)}`;
  const extract = (nodelist) => {
    const [parent] = nodelist.filter((a) => /%2Ffollowers%2F&source=followed_by_list/.test(a));
    return [...parent.children].find((child) => /\d+$/.test(child.title)).title.replace(/\D/g, '');
  };

  const result = await webscraper(url, 'a', extract);
  return result;
};

exports.test = () => {};
