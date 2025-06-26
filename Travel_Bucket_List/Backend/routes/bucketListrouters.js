const express = require('express')
const bucketListRoute = express.Router();
const {
    getBucketLists,
    getBucketListById,
    createBucketList,
    updateBucketList,
    deleteBucketList
} = require('../controllers/bucketListControllers');

bucketListRoute.get('/', getBucketLists);
bucketListRoute.get('/:id', getBucketListById);
bucketListRoute.post('/', createBucketList);
bucketListRoute.put('/edit/:id', updateBucketList);
bucketListRoute.delete('/delete/:id', deleteBucketList);

module.exports = bucketListRoute;