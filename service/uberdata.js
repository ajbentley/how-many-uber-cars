const fetch = require('node-fetch');

function requestData(req, res, next) {
  fetch(`#`)
  .then(r => r.json())
  .then((data) => {
    console.log(data);
    res.data = data;
    next();
  })
  .catch((err) => {
    console.log(err);
    res.err = err;
    next();
  });
}

module.exports = { requestData };
