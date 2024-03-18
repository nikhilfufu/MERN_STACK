function Person(name,work){
this.name = name
this.work = work
}
Person.prototype.names = function(){
    console.log("My name is "+this.name)
}
Person.prototype.works = function(){
    console.log("i work as "+this.work)
}

let person = new Person("nikhil","test eng")
console.log(person)

person.names()
person.works()