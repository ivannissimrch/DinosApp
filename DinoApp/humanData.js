function gethumanData() {
  // Create Human Object
  const human = {
    userName: "",
    height: "",
    weight: "",
    diet: "",
  };
  const nameValue = document.getElementById("name").value;
  const feetValue = parseInt(document.getElementById("feet").value);
  const inchesValue = parseInt(document.getElementById("inches").value);
  const totalInches = feetValue * 12 + inchesValue;
  const weightValue = parseInt(document.getElementById("weight").value);
  const dietValue = document.getElementById("diet").value;
  human.userName = nameValue;
  human.height = totalInches;
  human.weight = weightValue;
  human.diet = dietValue;
  return human;
}

export { gethumanData };
