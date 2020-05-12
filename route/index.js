const alalysisHtml = require('../js/tool/alalysisHtml');

const route = {
  '/': (req, res) => {
    alalysisHtml('./view/home.html', req, res);
  },
  '/home': (req, res) => {
    alalysisHtml('./view/home.html', req, res);
  },
  '/kind': (req, res) => {
    alalysisHtml('./view/kind.html', req, res);
  },
  '/about': (req, res) => {
    alalysisHtml('./view/about.html', req, res);
  },
  '/user': (req, res) => {
    alalysisHtml('./view/user.html', req, res);
  },
  'page404': (req, res) => {
    alalysisHtml('./view/page404.html', req, res);
  },
};

module.exports = route;
