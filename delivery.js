let shippingIsPossible = true ;
let userName = "ბონდილ " 

const deliveridSuccessfully = shippingIsPossible ? `თქვენს მისამართზე მიტანის სერვისი ხელმისაწავდომია ${userName}` : `თქვენს მისამართზე მიტანის სერვისი არ არის ხელმისაწვდომი ${userName}` ; 

console.log (deliveridSuccessfully) ;