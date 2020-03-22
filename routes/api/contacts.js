const auth = require('../../middleware/auth');
// contact Model
const Contact = require('../../models/Contact') ;
const express = require('express');

const router = express.Router();

/**
 * @route   GET api/items
 * @desc    Get All Items
 * @access  Public
 */

router.get('/', async (req, res) => {
  try {
    const items = await Contact.find();
    if (!items) throw Error('No items');

    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   POST api/items
 * @desc    Create An contact
 * @access  Private
 */

router.post('/', async (req, res) => {
  const newItem = new Contact({
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    message: req.body.message,
  });
  console.log('fuck');

  try {
    const contact = await newItem.save();
    if (!contact) throw Error('Something went wrong saving the contact');

    res.status(200).json(contact);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

/**
 * @route   DELETE api/items/:id
 * @desc    Delete A contact
 * @access  Private
 */

router.delete('/:id', auth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) throw Error('No contact found');

    const removed = await contact.remove();
    if (!removed)
      throw Error('Something went wrong while trying to delete the contact');

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

module.exports = router;
