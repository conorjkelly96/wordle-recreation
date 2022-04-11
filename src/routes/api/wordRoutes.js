const { Router } = require("express");

const { getRandomWord } = require("../../controllers/api/word");

const router = Router();

// /api/users endpoints
router.get("/:id", getRandomWord);

module.exports = router;
