const webscraper = require('..');

exports.getSoundcloudFollowerCount = async (username) => {
  if (username.startsWith('@')) username = username.slice(1);
  const url = `https://soundcloud.com/${encodeURIComponent(username)}`;
  const extract = (nodelist) => nodelist
    .find((link) => /\d+\sfollower/.test(link.title)).title.replace(/\D/g, '');

  const result = await webscraper(url, 'a.infoStats__statLink', extract);
  return result;
};

exports.test = () => {};
