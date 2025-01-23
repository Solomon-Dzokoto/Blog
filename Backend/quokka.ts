const kofi = "Solo";

kofi;

const nums = [1, 2, 4, 6, 9, 12, 64, 24, 74, 22];
const sumNumbers = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sumNumbers);
nums.sort((a, b) => a - b);
nums;
const news = nums.find((num) => num > 50);
news;
const newNums = nums.flatMap((num) => num * 2);

const order : {name:string,data:string[]} = {
  name: "Solo",
  data: ["handsome", "smart", "rich", "king", "humble", "God fearing"],
};

const {  data } = order;

