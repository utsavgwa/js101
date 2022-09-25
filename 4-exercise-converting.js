var msg1 = "there are ";
var numStudents = 16;
var msg3 = " students";

console.log(msg1 + numStudents + msg3); // here string concatenation is done-IMPLICIT COERCION

//crete a function that adds 1 to the number of students
function addStudent(numStudents) {
  return numStudents + 1;
}
//calling the function
addStudent(numStudents);
//print the result
console.log(addStudent(numStudents));


// addStudent(
//     Number(studentsInputElem.value)//here taking input from DOM, and converting it to number
//  );