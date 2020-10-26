const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {
    console.log("Dit is de gehele persoon " + person.name + " " + person.profession + " " + person.age);
}

for (let person of array) {
    console.log("De naam is " + person["name"]);
}

for (let person of array) {
    console.log("Het geboortejaar is " + (2020 - person.age));
}

for (let person of array) { person.name + " is een " + person.profession };

for (let person of array) {
    if (person.age > 50)
        console.log(person.name + " is ouder dan 50");
    else console.log(person.name + " is jonger dan 50");
}