let userWeights = ["100","95","90","85","80"]
let goal = 70 ;
let x = userWeights [userWeights.length - 1] - goal

const reach = userWeights [userWeights.length - 1] > goal

if (reach) {
    console.log (`შედეგის მიღწევამდე დაგრჩათ ${x} კილო`)
} else {
    console.log (`თქვენ მიაღწიეთ შედეგს`)
}

