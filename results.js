let gigosTestResults = ["20","30","40","50","39"]

const middle = gigosTestResults[gigosTestResults.length - 1] - gigosTestResults[gigosTestResults.length-gigosTestResults.length] 

if (middle > 10) {
    console.log (`კარგი შვილი გყავთ ქალბატონო, ნუ ნერვიულობთ`)
}

if (middle < 10) {
    console.log (`კარგი შვილი გყავთ ლუიზა ბიცოლა`)
}

if (middle < 0) {
    console.log (`უხ გრიგოლლ გრიგოლლ`)
}