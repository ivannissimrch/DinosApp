function getDinos(fileLink) {
  //Create Dino Constructor
  function Dino(species, weight, height, diet, where, when, fact) {
    (this.species = species),
      (this.weight = weight),
      (this.height = height),
      (this.diet = diet),
      (this.where = where),
      (this.when = when),
      (this.fact = fact);
  }

  Dino.prototype.compareHeigth = function (humanObject) {
    const heightDiference = parseInt(this.height) - humanObject.height;
    if (this.height > humanObject.height) {
      return `${this.species} is  ${heightDiference} inches taller than you`;
    } else {
      return `${this.species} is  ${heightDiference} inches shorter than you`;
    }
  };

  Dino.prototype.compareWeight = function (humanObject) {
    const weightDiference = parseFloat(this.weight) - humanObject.weight;
    if (this.weight > humanObject.weight) {
      return `${this.species} is ${weightDiference} lb heavier than you`;
    } else {
      return `${this.species} is ${weightDiference} lb ligther than you`;
    }
  };

  Dino.prototype.compareDiet = function (humanObject) {
    return ` your diet is ${humanObject.diet} a ${this.species} diet is ${this.diet}`;
  };

  // Create Dino Objects
  const Dinos = [];

  fetch(fileLink)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.Dinos.length; i++) {
        Dino[i] = new Dino(
          data.Dinos[i].species,
          data.Dinos[i].weight,
          data.Dinos[i].height,
          data.Dinos[i].diet,
          data.Dinos[i].where,
          data.Dinos[i].when,
          data.Dinos[i].fact
        );
        Dinos.push(Dino[i]);
      }
    });

  return Dinos;
}

export { getDinos };
