const router = require('express').Router();
const { requestData } = require('../service/uberdata');

router.get('/', requestData, (req, res) => {
  res.json(res.data); //use res.json to only serve json file, create out own api
  console.log('this is data in services ', res.data);
});

module.exports = router;
