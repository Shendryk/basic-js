module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.forEach(function (el) {
    el.forEach(function (elem) {
      elem === "^^" ? cats += 1 : null;
    });
  });
  return cats;
};
