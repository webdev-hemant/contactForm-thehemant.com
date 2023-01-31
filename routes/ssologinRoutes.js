const { Router } = require("express");
const router = Router();
const ssologinController = require("../controller/ssologinContreoller");

router.get("/ssologin", ssologinController.ssologin);

module.exports = router;
