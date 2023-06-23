const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const category = await Category.findAll({ 
      include: [
        { model: Product },
      ]
    });
    res.status(200).json(category);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [
        { model: Product },
      ]
    });
    if (!category) {
      res.status(404).json({ message: `category with id:${req.params.id} NOT exist`});
      return;
    }
    res.status(200).json(category);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const category = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(category);
  } 
  catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const category = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
    if (!category) {
      return res.status(404).json({ message: `${req.body.category_name} Not found!` });
    }
    res.status(200).json({ message: `category name updated successfully to ${req.body.category_name}` });
  } 
  catch (err) {
    res.status(500).json({ message: 'update Failed!' });
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!category) {
      res.status(404).json({ message: `category with id:${req.params.id} NOT exist` });
      return;
    }
    res.status(200).json(category);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
