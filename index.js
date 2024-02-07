// try {
//   let a = 5;
//   let obj = { a: 1 };
//   console.log(obj.name);
//   if (!obj.name) {
//     throw new Error("Drujok u tebya oshibka");
//   }
// } catch (error) {
//   console.log(error);
// }
// console.log("hello");

// try {
//   let num1 = 10;
//   let num2 = 0;
//   if (num1 == 0 || num2 == 0) {
//     throw new Error("drujok na nol delit nelzya");
//   }
// } catch (error) {
//   console.log(error);
// }

let inp1 = document.querySelector("#nameMessage");
let inp2 = document.querySelector("#textMesage");
let dairyBody = document.querySelector(".main");
let titleName = document.querySelector(".name");
let dateTitle = document.querySelector(".date");

function send() {
  try {
    if (inp1.value == "" || inp2.value == "") {
      throw new Error("Zapolnite polya");
    }
    dairyBody.textContent = inp2.value;
    titleName.textContent = inp1.value;
    dateTitle.textContent = new Date().toLocaleString();
  } catch (error) {
    alert(error.message);
  }
}
