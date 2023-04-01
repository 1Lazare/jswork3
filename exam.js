let maxScore = 100 ; 
let barrier = 30 ; 
let studentScore = 41 ; 

const passedSuccessfully = studentScore >= barrier ;

if (passedSuccessfully) {
    console.log (`გილოცავთ თქვენ გადალახეთ ${barrier} ქულიანი ბარიერი ${studentScore}/${maxScore} ქულით`)
} else {
    console.log (`ვწუხვარ, თქვენ ვერ გადალახეთ ${barrier} ქულიანი ${studentScore}/${maxScore}`)
}