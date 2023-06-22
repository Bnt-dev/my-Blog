const Julie = {
  name: "Julie",
  country: "Berlin",
  age: 30,
  langages: ["JavaScript", "React"],
  sayHello: function () {
    return `Hello my name is ${this.name}`;
  },
};

console.log(student);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends person {
  constructor(name, age, campus, skills, isGraduated) {
    super(name, age);
    this.campus = campus;
    this.skills = skills;
    this.isGraduated = isGraduated;
  }
  sayHello() {
    return `Hello I'm ${this.name}, from ${this.campus}`;
  }
}

class Teacher extends person {
  constructor(name, age, campus) {
    super(name, age);
    this.campus = campus;
  }
}
