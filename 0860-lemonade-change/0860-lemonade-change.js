/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  var obj ={5:0,
           10:0,
           20:0}
  var total =0
  for(item of bills){
    if(item == 5){
      obj[item]++
      total +=5
    }
      
    else if(item == 10){  
      if(obj[5] > 0 ){
        obj[5]--
        obj[10]++ 
        total+=5
      }  
      else{
        return false
      }
    }
    
    else if(item == 20){  
      if(total<15){
        return false
      } 
      else if(total>=15){
        if(obj[10]>0){
          obj[10]--
          if(obj[5]>0){
            obj[5]--
            total -= 15
          }
          else{
            return false
          }
        }
        else{
          obj[5] -= 3
          total -= 15
        }
      }
    }
  }
  return true
};

console.log(lemonadeChange([5,5,5,10,20]));

// var lemonadeChange = function(bills) {
//   var count =0;
//   for(item of bills){
//     if(item == 5){
//       count++
//     }
//   }
//   if(count >= bills.length-count){
//     return true
//   } 
//   else{
//     return false
//   }
// };

// console.log(lemonadeChange([5,5,5,10,20]));

// var lemonadeChange = function(bills) {
//     var bag = 0
//     for(item of bills){
//       if(item == 5){
//         bag += item
//       }
//       else if(item == 10){
//         if(bag < 5){
//           return false
//         }
//         else{
//           bag+=5
//         }
//       }

//       else if(item == 20){
//         if(bag < 15){
//           return false
//         }
//         else{
//           bag+=5
//         }
//       }
//     }
//     return true
// };

// console.log(lemonadeChange([5,5,5,10,20]));