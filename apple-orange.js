function gradingStudents(grades) {
    // var lol = 0
    // Write your code here
    for(let i = 0; i< grades.length; i++){
        if(grades[i] %5 > 40){
        if((grades[i] % 5) < 3){
            grades[i] += 5 - (grades[i] % 5);  
        }
        }
        
    }
    console.log(grades)

}
gradingStudents([73,67,38,33])