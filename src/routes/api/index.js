const { Router } = require("express");

const wordRoutes = require("./wordRoutes");

const router = Router();

//  api routes
router.use("/words", wordRoutes);

module.exports = router;
