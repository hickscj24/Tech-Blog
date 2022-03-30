const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const withAuth = require('../../utils/auth');
// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data

    User.findAll()
  .then((users) => res.json(users)) 
  .catch((err) => {
    console.log(err)
    res.status(500).json(err)
  })
});


// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then((users) => res.json(users))
    .catch((err) => {
      console.log(err)
      res.status(500).json(err)
    })
});

// create new product
router.post('/', withAuth, (req, res) => {
    // create a new tag
    User.create(req.body)
      .then((users) => res.status(200).json(users))
      .catch((err) => {
        console.log(err)
        res.status(400).json(err)
      })
  });

// update product
router.put('/:id', withAuth, (req, res) => {
    // update a tag's name by its `id` value
    User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then((updateduser) => res.json(updateduser))
      .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
      });
  });

router.delete('/:id', withAuth, (req, res) => {
  // delete one product by its `id` value
  User.destroy( {
    where: {
      id: req.params.id,
    },
  })
  .then((deleteuser) => res.json(deleteuser))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
  
});

module.exports = router;
