const fs = require('fs');

const alalysisHtml = (url, req, res) => {
  fs.readFile(url, 'utf-8', (error, data) => {
    if (error) throw error;
    res.write(data);
    res.end();
  });
};

module.exports = alalysisHtml;
