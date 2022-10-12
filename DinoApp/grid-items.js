function createTiles(dinosData, human) {
  //select main  element to append tiles
  const main = document.getElementById("grid");
  //insert human on array index 4 to be the center tile
  dinosData.splice(4, 0, human);

  //loop to build tiles
  for (let i = 0; i < 9; i++) {
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
      // p.innerHTML = `${dinosData[i].fact}`;
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

      //get ramdon fact index 0 to 5
      const facts = [
        dinosData[i].where,
        dinosData[i].when,
        dinosData[i].fact,
        compHeigth,
        compWeight,
        compDiet,
      ];
      const ramdom = Math.floor(Math.random() * 6);

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
