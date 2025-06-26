const BucketList = require('../models/BucketListModels');

const getBucketLists = async (req, res) => {
    try {
        const bucketLists = await BucketList.find();
        res.json(bucketLists);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getBucketListById = async (req, res) => {
    try {
        const bucketList = await BucketList.findById(req.params.id);
        if (!bucketList) return res.status(404).json({ error: 'Bucket list item not found' });
        res.json(bucketList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createBucketList = async (req, res) => {
    try {
        const { place, visited, notes, image } = req.body;
        const newBucketList = new BucketList({ place, visited, notes, image });
        await newBucketList.save();
        res.status(201).json(newBucketList);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateBucketList = async (req, res) => {
    try {
        const { place, visited, notes, images } = req.body;
        const updatedBucketList = await BucketList.findByIdAndUpdate(
            req.params.id,
            { place, visited, notes, images },
            { new: true }
        );
        if (!updatedBucketList) return res.status(404).json({ error: 'Bucket list item not found' });
        res.json(updatedBucketList);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteBucketList = async (req, res) => {
    try {
        const deletedBucketList = await BucketList.findByIdAndDelete(req.params.id);
        if (!deletedBucketList) return res.status(404).json({ error: 'Bucket list item not found' });
        res.json({ message: 'Bucket list item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getBucketLists,
    getBucketListById,
    createBucketList,
    updateBucketList,
    deleteBucketList
};