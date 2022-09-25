var ids = people.map(person => person.id);

var ids = people.map( function getId(person){
    return person.id;
});


getPerson ()
.then(person => getData(person.id))
then(renderData);

//better practice for code readability
getPerson()
.then(function getDataFrom(person){
    return getData (person.id);
})
.then(renderData);

//IIFE's function expression ()at last immediately invoked function expression
var teacher = "Kyle";
( function anotherTeacher(){
    var teacher = "Suzy";
    console.log(teacher);
})();
console.log(teacher);

// BLock Scoping
var teacher = "Kyle";
{
    let teacher = "Suzy"; 
    console.log(teacher);
}
console.log(teacher);