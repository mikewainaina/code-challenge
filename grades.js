// Code that is used to calculate a student's grade
function studentGrade(marks) {
    if (marks < 0 || marks > 100) {
        console.log('Invalid input.Grade should run from  0-100');
        return;
    }

    if  (marks >=79) {
        console.log( 'A');
    }
    else if (marks >=60) {
        console.log('B') ;
    }
    else if (marks >=49) {
        console.log('C') ;
}
    else if (marks >=40) {
        console.log('D') ;
        }
    else if  (marks >=39) {
        console.log( 'E') ;
    }
}
//Now to test the grade of the student using point scored done by inputing in the space below.
studentGrade();