"use strict";
exports.__esModule = true;
function createUser(_a) {
    var String = _a.name, number = _a.age;
}
createUser({ name: "Smriti", age: 10 });
// syntax of a function accepting an object in typescript & return an object
function createProduct() {
    return {};
}
// example code for the above concept
function createCourse() {
    return {
        courseId: 100,
        courseName: "Machine Learning",
        courseInstructor: "Andrew NG"
    };
}
// exceptional behaviour
// throws error if the below line is uncommented since we are providing an extra property email.
// createUser({name : "Shatakshi" , age : 29 , email : "shatakshi.r@gmail.com"})
var newUser = { name: "Shatakshi", age: 29, email: "shatakshi.r@gmail.com" };
// it is not complaining about extra property email
createUser(newUser);
