//Create a program that manipulates a list of students in a class.
// the program should allow users to perform the following operations:
//1.Add a new student to the class
//2.Remove a student from the class by their index
//3.Display the list of students in the class
let class_ = ["abhinav", "ashish","priya","raunak","shristi"]
let student = "jack"
function add(){
    class_.push(student)
}
function remove(){
    class_.splice(5,1)
}
function display(){
    console.log(class_)
}
add()
display()
remove()
display()