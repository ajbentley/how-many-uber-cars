const router = require('express').Router();
const { requestData } = require('../service/uberdata');

router.get('/', requestData, (req, res) => {
  res.json(res.data); //use res.json to only serve json file, create out own api
});

module.exports = router;
