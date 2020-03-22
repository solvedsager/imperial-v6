const auth = require('../../middleware/auth');
// Item Model
const Item = require('../../models/Item') ;
const express = require('express');

const router = express.Router();

/**
 * @route   GET api/items
 * @desc    Get All Items
 * @access  Public
 */

router.get('/', async (req, res) => {
  console.log('fuck fuck fuck');
  try {
    const items = await Item.find();
    if (!items) throw Error('No items');
    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/items
 * @desc    Create An Item
 * @access  Private
 */

router.post('/', async (req, res) => {
  const newItem = new Item({
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    company: req.body.company,
    address: req.body.address,
    referal: req.body.referal,
  });
  console.log('fuck2');
  try {
    const item = await newItem.save();
    if (!item) throw Error('Something went wrong saving the item');

    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});


/**
 * @route   DELETE api/items/:id
 * @desc    Delete A Item
 * @access  Private
 */

router.delete('/:id', auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) throw Error('No item found');

    const removed = await item.remove();
    if (!removed)
      throw Error('Something went wrong while trying to delete the item');

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
