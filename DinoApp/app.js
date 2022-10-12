import { getDinos } from "./getDinos.js";
import { gethumanData } from "./humanData.js";
import { createTiles } from "./grid-items.js";

//get array of Dino Objects
const dinosArray = getDinos("http://localhost:3000/dino.json");
console.log(dinosArray);

//select form and store on a const
const formElement = document.getElementById("dino-compare");
// On form sumit get values of form
formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  //get human object
  const human = gethumanData();
  console.log(human);
  console.log(dinosArray[0]);

  //remove form from dom
  createTiles(dinosArray, human);
  formElement.remove();
});
