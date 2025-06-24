const express = require('express');
const router = express.Router();
const { getRoute, postRoute, putRoute, deleteRoute } = require('../controllers/egController');
router.get('/get', getRoute);
router.post('/post', postRoute);
router.put('/put', putRoute);
router.delete('/delete', deleteRoute);
module.exports = router;