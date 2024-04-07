let person = {
    name:"nikhil",
    number:"1234",
    age:"20"
}
Object.defineProperty(person,"number",{
  writable:false
})
person.number="54321"
person.age="90"
console.log(person)

let s ="nikhil"
for(let i = 0;i<s.length;i++){
  let strings=s.split("")
  console.log(strings.length)
}
s.to