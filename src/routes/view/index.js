const { Router } = require("express");

const { renderHomepage } = require("../../controllers/view/publicController");

const router = Router();

// Public / endpoints
router.get("/", renderHomepage);

module.exports = router;
