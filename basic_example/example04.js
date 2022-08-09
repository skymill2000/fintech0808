let testobj = {
  test: "test",
};
const array = ["test", 14, testobj, 12.23123];
console.log(array[1]);

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (element of array) {
  console.log(element);
}

array.map((element) => {
  console.log(element);
});
