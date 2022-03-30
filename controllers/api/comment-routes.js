const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const withAuth = require('../../utils/auth');
// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data

    Comment.findAll()
  .then((comments) => res.json(comments)) 
  .catch((err) => {
    console.log(err)
    res.status(500).json(err)
  })
});


// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  Comment.findOne({
    where: {
      id: req.params.id
    }
  })
    .then((comments) => res.json(comments))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
});

// create new product
router.post('/', withAuth, (req, res) => {
    // create a new tag
    Comment.create(req.body)
      .then((comments) => res.status(200).json(comments))
      .catch((err) => {
        console.log(err)
        res.status(400).json(err)
      })
  });

// update product
router.put('/:id', withAuth, (req, res) => {
    // update a tag's name by its `id` value
    Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((updatedcomment) => res.json(updatedcomment))
      .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
      });
  });

router.delete('/:id', withAuth, (req, res) => {
  // delete one product by its `id` value
  Comment.destroy( {
    where: {
      id: req.params.id,
    },
  })
  .then((deletecomment) => res.json(deletecomment))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
  
});

module.exports = router;
