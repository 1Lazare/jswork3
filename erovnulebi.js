let gigosResults = ["30","42","50","55"]

const passed = gigosResults[gigosResults.length-1] > 25 && gigosResults[gigosResults.length-2] > 25 && gigosResults[gigosResults.length-3] > 25 && gigosResults[gigosResults.length-gigosResults.length] > 25

if (passed) {
    console.log (`თქვენ წარმატებით ჩააბარეთ გამოცდა`)
} else {
    console.log (`თქვენ ვერ ჩააბარეთ გამოცდა`)
}