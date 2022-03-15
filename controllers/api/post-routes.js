const router = require('express').Router();
const { Comment, Post, User } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data

    Post.findAll()
  .then((posts) => res.json(posts)) 
  .catch((err) => {
    console.log(err)
    res.status(500).json(err)
  })
});


// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  Post.findOne({
    where: {
      id: req.params.id
    }
  })
    .then((posts) => res.json(posts))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
});

// create new product
router.post('/', (req, res) => {
    // create a new tag
    Post.create(req.body)
      .then((posts) => res.status(200).json(posts))
      .catch((err) => {
        console.log(err)
        res.status(400).json(err)
      })
  });

// update product
router.put('/:id', (req, res) => {
    // update a tag's name by its `id` value
    Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((updatedpost) => res.json(updatedpost))
      .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
      });
  });

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  Post.destroy( {
    where: {
      id: req.params.id,
    },
  })
  .then((deletepost) => res.json(deletepost))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
  
});

module.exports = router;
