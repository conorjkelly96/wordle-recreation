// IMPORTS
const { Word } = require("../../models");
const Sequelize = require("sequelize");

const getRandomWord = async (req, res) => {
  try {
    const randomWord = await Word.findAll({
      order: Sequelize.literal("rand()"),
      limit: 1,
    }).then((encounters) => {
      return encounters[0].word;
    });

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
