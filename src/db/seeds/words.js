const { Word } = require("../../models");
const wordsArray = require("./wordsArray");

const wordsDataSample = [
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
  const completeWordsArray = wordsArray.map((word) => {
    return {
      word: word,
    };
  });

  const words = completeWordsArray.map((word) => Word.create(word));
  await Promise.all(words);
};

module.exports = seedWords;
