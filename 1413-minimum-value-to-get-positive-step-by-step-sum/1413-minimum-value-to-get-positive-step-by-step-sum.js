/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
      for(i=1;i<Infinity;i++){
            flag =true;
            for(j=0 ;j<nums.length;j++){
                  if(j == 0){
                        sum = i + nums[j]
                        if(sum <= 0 ){
                              flag =false;
                              // console.log(`i = ${i} j =${j} sum = ${sum}`)
                              break
                              
                        }
                  }
                  else{
                              sum = sum + nums[j]
                              if(sum <= 0){
                                    flag = false
                                    // console.log(`i = ${i} j =${j} sum = ${sum}`)
                                    break
                              }
                        }
            }
            if(flag){
                  return i
            }
      }
    
};

console.log(minStartValue([-3,2,-3,4,2]))