const router = require("express").Router();
const dreamsController = require("../../controllers/dreamsController");

// Matches with "/api/books"
router.route("/")
  .get(dreamsController.findAll)
  .post(dreamsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(dreamsController.findById)
  .put(dreamsController.update)
  .delete(dreamsController.remove);

module.exports = router;