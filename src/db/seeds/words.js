export const wordsData = [
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

export const seedWords = async () => {
  const words = wordsData.map((word) => Word.create(word));
  await Promise.all(words);
};
