class Human {
  constructor(age) {
    this.age = age
  }
  getAge() {
    return this.age
  }
  setAge(newAge) {
    this.age = newAge
  }
}

class Superman extends Human {
  constructor(age, superpowers) {
    super(age)
    this.superpowers = superpowers
  }
  getPowers() {
    const powers = this.superpowers.map(power => {
      return power
    })
    return powers
  }
  setPower(newPower) {
    this.superpowers.push(newPower)
    return "new power acquired!"
  }
}

const ClarkKent = new Superman(30, ["fly", "strong", "laser"])

console.log(ClarkKent.setPower("supereye"))
console.log(ClarkKent.getPowers())
