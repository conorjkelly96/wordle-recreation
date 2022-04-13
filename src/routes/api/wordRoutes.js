const { Router } = require("express");

const { getRandomWord } = require("../../controllers/api/word");

const router = Router();

// /api/users endpoints
router.get("/", getRandomWord);

module.exports = router;
