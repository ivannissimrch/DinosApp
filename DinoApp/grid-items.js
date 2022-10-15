function createTiles(dinosData, human) {
  //select main  element to append tiles
  const main = document.getElementById("grid");
  //insert human on array index 4 to be the center tile
  dinosData.splice(4, 0, human); 

  //loop through dinosData array length to build tiles
  for (let i = 0; i < dinosData.length; i++) {
    //if current object is human do this
    if (i === 4) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      main.append(div);
      const h3 = document.createElement("h3");
      div.append(h3);
      h3.innerHTML = `${human.userName}`;
      const image = document.createElement("img");
      image.src = "/images/human.png";
      div.append(image);
      const p = document.createElement("p");
      div.append(p);
      //if current object is bird
    } else if (i === 8) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      main.append(div);
      const h3 = document.createElement("h3");
      div.append(h3);
      h3.innerHTML = `${dinosData[i].species}`;
      const image = document.createElement("img");
      image.src = `/images/${dinosData[i].species.toLowerCase()}.png`;
      div.append(image);
      const p = document.createElement("p");
      div.append(p);
      p.innerHTML = `${dinosData[i].fact}`;
    } else {
      //call object methods
      const compHeigth = dinosData[i].compareHeigth(human);
      const compWeight = dinosData[i].compareWeight(human);
      const compDiet = dinosData[i].compareDiet(human);

      // get values for facts array
      const facts = [
        dinosData[i].where,
        dinosData[i].when,
        dinosData[i].fact,
        compHeigth,
        compWeight,
        compDiet,
      ];
      //get ramdon fact index 0 to 5
      const ramdom = Math.floor(Math.random() * facts.length);

      //create tiles for Dinos
      const div = document.createElement("div");
      div.classList.add("grid-item");
      main.append(div);
      const h3 = document.createElement("h3");
      div.append(h3);
      h3.innerHTML = `${dinosData[i].species}`;
      const image = document.createElement("img");
      image.src = `/images/${dinosData[i].species.toLowerCase()}.png`;
      div.append(image);
      const p = document.createElement("p");
      div.append(p);
      p.innerHTML = facts[ramdom];
    }
  }
}

export { createTiles };
