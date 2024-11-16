let length;
let width;

function calculateArea() {
  length = Number(document.getElementById("length").value);
  width = Number(document.getElementById("width").value);

  let area = length * width;

  document.getElementById(
    "result"
  ).innerText = `The area of the rectangle is: ${area}`;
}
