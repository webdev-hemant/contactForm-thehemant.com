const { Router } = require("express");
const router = Router();
const postController = require("../controller/postController.js");

router.post("/contact", postController.contact);
router.post("/huc-form", postController.hucForm);

module.exports = router;
