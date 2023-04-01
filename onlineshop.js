let userBalance = 1000
let cartTotal = 450

const userPaySuccessfully = userBalance >= cartTotal ;



if (userPaySuccessfully ) {
     console.log ("გადახდა წარმატებით შესრულდა") ;
     
} else  {
    let x = cartTotal - userBalance ;
    console.log ( `თქვენ არ გაქვთ საკმარისი თანხა ანგარიშზე, გთხოვთ დამატებით ჩარიცხოთ ${x} ლარი ოპერაციის დასასრულებლად`)

}

