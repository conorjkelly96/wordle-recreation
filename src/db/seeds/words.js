const { Word } = require("../../models");

const wordsData = [
  {
    word: "write",
  },
  {
    word: "truck",
  },
  {
    word: "spine",
  },
  {
    word: "clean",
  },
  {
    word: "rhino",
  },
  {
    word: "query",
  },
];

const seedWords = async () => {
  const words = wordsData.map((word) => Word.create(word));
  await Promise.all(words);
};

module.exports = seedWords;
