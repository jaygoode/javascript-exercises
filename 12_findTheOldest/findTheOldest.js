const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(array) {
    return array.reduce((a, b) => {
        const lastPerson = getAge(a.yearOfBirth, a.yearOfDeath);
        const nextPerson = getAge(b.yearOfBirth, b.yearOfDeath);
        return lastPerson < nextPerson ? b : a;
    })
};

const getAge = (birth, death) => {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
