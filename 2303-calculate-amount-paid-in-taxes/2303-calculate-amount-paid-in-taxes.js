/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */

var calculateTax = function(brackets, income) {
  var tax =0;
  if(income == 0){
    return 0.0000
  }
  else{
      for(i=0;i<brackets.length;i++){
        if(brackets[i][0] <= income){
          tax += (brackets[i][0] - (brackets[i-1]?.[0] || 0))* brackets[i][1]/100
        }
        else{
          tax += (income - (brackets[i-1]?.[0] || 0))  * brackets[i][1]/100
          break
        }
        // console.log(`i = ${i} number = ${brackets[i][0]} tax = ${tax}`)
    }
  }
  return tax
};

// console.log(calculateTax([[3,50],[7,10],[12,25]],10))

// var calculateTax = function(brackets, income) {
//     if(income == 0) return 0.0000
//     var tax = 0;
//     var salary =0
//     var flag = 0
//     for(i=0;i<brackets.length;i++){
//       if(i == 0  && brackets[i][1] !==0){
//         if(brackets[i][0] <=income){
//             salary = brackets[i][0]
//         }
//         else{
//             salary =  brackets[i][0]- income
//             flag =1
//         }
        
//       }
//       else if (brackets[i][1] !==0){
//         if(brackets[i][0]<= income && brackets[i][1] !==0){
//           salary = brackets[i][0] - brackets[i-1][0]
//         }
//         else{
//           salary = income - brackets[i-1][0]
//           flag = 1
//         }
//       }
//       if(brackets[i][1] !== 0){
//         tax += salary * brackets[i][1]/100
//       }
//       if(flag == 1){
//         break
//       }
//     }
//     return tax
// };

// console.log(calculateTax([[1,0],[4,25],[5,50]],2));