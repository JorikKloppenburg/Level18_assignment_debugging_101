const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "chicken hypnotist", age: 59 },
  { name: "A. Curry", profession: "frogman", age: 32 },
  { name: "F. Vonk", profession: "snake milker", age: 36 },
  { name: "B. Bunny", profession: "rabbit walking service", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
  // this is where the console.logs go
  console.log("dit is alle informatie over de persoon: ", person); //1
  console.log("dit object beschrijft enkel de naam van de persoon", person.name); //2
  console.log("dit object beschrijft enkel het beroep van de persoon", person.profession); //extra
  console.log("dit object beschrijft enkel de leeftijd van de persoon", person.age); //extra
  console.log("het geboortejaar van", person.name, "is ...", 2021 - person.age) //3

  console.log(person.name, "is een", person.profession) //4

  if (person.age > 50) {
    console.log(person.name, "is ouder dan 50 jaar") //5
  }
}

