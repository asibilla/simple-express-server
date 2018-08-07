const data = require('./data/data');

function getContent(id) {
  return data.content[id] || {};
}

module.exports = { getContent }; 
