// chnage the color of the heart
let icons = document.getElementsByClassName("fa-heart");
console.log(icons);
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function () {
    icons[i].classList.toggle("text-danger");
    console.log(icons[i]);
  });
}
// the plus icon
let a1 = document.getElementsByClassName("a+");
console.log(a1);
let plus = document.getElementsByClassName("fa-plus");
console.log(plus);
let moins = document.getElementsByClassName("fa-minus");
console.log(moins);
let count = 0;
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    count = count + 1;
    a1[i].textContent = Number(a1[i].textContent) + 1;
    console.log(count);
  });
}
// the moins icon
for (let j = 0; j < moins.length; j--) {
  moins[j].addEventListener("click", function () {
    count = count - 1;
    a1[j].textContent = Number(a1[j].textContent);
    console.log(count);
  });
}
// remove Element
var x = document.getElementById("a9");
x.remove(x.selectedIndex);
// count the total of the selected element
let count1 = getElementById("price");
let a2 = getElementsByClassName("a+");
if (a2 == 1) {
  count1 = count1;
} else {
  count1 = count1 * a2;
}
