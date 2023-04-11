const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/', (req,res) => {
  Comment.findAll({})
  .then(commentData => res.json(commentData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  Comment.findAll({
          where: {
              id: req.params.id
          }
      })
      .then(commentData => res.json(commentData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});



router.delete('/:id', withAuth, async (req, res) => {
  try {
    const Commentdata = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!Commentdata) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(Commentdata);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
