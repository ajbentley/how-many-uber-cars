const fetch = require('node-fetch');

function requestData(req, res, next) {
  fetch(`http://54.237.235.74/myapp/?zip=${req.query.zip}`)
  .then(r => r.json())
  .then((data) => {
    console.log('this is data in services ', data);
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
