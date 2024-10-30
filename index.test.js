const { multiplication, concatOdds } = require("./index");

test("Multiply 3 and 5 equals to 15", () => {
  expect(multiplication(3, 5)).toBe(15);
});

test("Multiply 3 and 5 not equals to 15", () => {
  expect(multiplication(3, 5)).not.toBe(14);
});

test("Combine [3, 2, 1] and [9, 1, 1, 1, 4, 15, -1] make odds equal to [3, 1, 9, 15, -1]", () => {
  expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toEqual([
    3, 1, 9, 15, -1,
  ]);
});

test("Combine [3, 2, 1] and [9, 1, 1, 1, 4, 15, -1] is not equal to [3, 1, 9, 15, -1]", () => {
  expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).not.toEqual([
    1, 9, 15, 4,
  ]);
});
