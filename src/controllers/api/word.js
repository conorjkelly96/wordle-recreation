// IMPORTS
const { Word } = require("../../models");
const Sequelize = require("sequelize");

const getRandomWord = async (req, res) => {
  try {
    const randomWord = Word.findAll({
      order: Sequelize.literal("rand()"),
      limit: 5,
    }).then((encounters) => {
      return encounters;
    });

    console.log(randomWord);

    return res.json({
      success: true,
      data: randomWord,
    });
  } catch (error) {
    logError("Failed to get random word.", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get random word." });
  }
};

module.exports = { getRandomWord };
