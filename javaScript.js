let person = {
    name:"nikhil",
    number:"1234",
    age:"20"
}
Object.defineProperty(person,{
  number:{  writable:false},
  age:{value:"20"}
})
person.number="54321"
person.age="90"
console.log(person)