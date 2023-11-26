/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/


let studentScore = "90";

calculateGrade(studentScore);

function calculateGrade(studentScore) {
    switch (true) {
        case (studentScore >= 90):
            console.log("Student Grade is A");
            break;
        case (studentScore >= 70 && studentScore < 90):
            console.log("Student Grade is B");
            break;
        case (studentScore >= 60 && studentScore < 70):
            console.log("Student Grade is C");
            break;
        case (studentScore >= 40 && studentScore < 60):
            console.log("Student Grade is D");
            break;
        case (studentScore < 40):
            console.log("Student Grade is F");
            break;
        default:
            console.log("Invalid score");
    }
}