// masala 6 Object kalitlarining barchasi string toifasidagi ma’lumotlardan tuzilgan bo’lsa true, aks holda false qiymat qaytaruvchi defineObject nomli funksiya hosil qiling. (Object.keys())
function defineObject(obj) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (typeof key !== "string") {
      return false;
    }
  }
  return true;
}

console.log(defineObject({ abc: 1, e: 2, d: 5 }));

// masala 7 Agar object qiymatlari ichida falsy qiymatlar bo’lsa, ularni o’chirib yangi object hosil qiling. (Object.keys())
function removeFalsy1(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value)
  );
}
function misol(obj) {
  const lavob = {};
  for (let key in obj) {
    if (obj[key]) {
      lavob[key] = obj[key];
    }
  }
  return lavob;
}
const input = { a: false, b: 12, c: true, d: 0 };
console.log(misol(input));

// masala 8 Bir necha takrorlanuvchi sonlar ishtirok etgan massivdan shunday obyekt hosil qilingki, bu object kalitlari massivning takrorlanmas sonlaridan, qiymatlari esa o’sha sonlarning massivda necha marta ishtirok etganidan tuzilgan bo’lsin. (for)
const inputt = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
const result = {};
for (let i = 0; i < inputt.length; i++) {
  const num = inputt[i];
  if (result[num]) {
    result[num]++;
  } else {
    result[num] = 1;
  }
}

console.log(result);

// masala 9 Uzun sondan shunday obyekt hosil qilingki, bunda object kalitlari sinflardan, qiymatlari esa o’sha sonning mos ravishdagi o’sha sinfdagi qiymatlaridan tuzilgan bo’lsin. (for, slice)
const ip = "8945472985629";

const l = ["birlar", "minglar", "millionlar", "milliardlar", "trilionlar"];

const resulte = {};

const reser = ip.split("").reverse().join("");

for (let i = 0; i < l.length; i++) {
  const start = i * 3;
  const end = start + 3;
  const slice = reser.slice(start, end).split("").reverse().join("");

  if (slice) {
    resulte[l[i]] = parseInt(slice);
  }
}
console.log(resulte);

// masala 10
// Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.
const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];

books.forEach((book, index) => {
  const status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
  console.log(
    `${index + 1}. ${book.author}ning "${book.title}" kitobi ${status};`
  );
});

// masala 11
// Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang.
const products = [
  { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
  { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
  { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
  { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
  { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
];

const pul = products.reduce((sum, product) => {
  const key = product.price * (1 - product.discount / 100);
  const mahsulot = key * product.quantity;
  return sum + mahsulot;
}, 0);

console.log(`Umumiy summa: ${pul}`);

// masala 12

const obj = {
  it: 20,
  mushuk: 10,
  sigir: 200,
  tovuq: 2,
};

const wrapper = Object.entries(obj).flat();
console.log(wrapper);

// masala 13

