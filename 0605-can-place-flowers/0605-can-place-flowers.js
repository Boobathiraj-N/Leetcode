/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length ==1 && flowerbed[0]==0) return true

    for(i=0;i<flowerbed.length-1;i++){
        if(n>0)
        {
            if(i==0 && flowerbed[i] ==0 && flowerbed[i+1] ==0){
                flowerbed[i] = 1
                    n--;
            }
            else if(flowerbed[i-1]==0 && flowerbed[i]==0 && flowerbed[i+1]==0){
                flowerbed[i] = 1
                    n--;
            }
            else if(i==flowerbed.length-2 && flowerbed[i]==0 && flowerbed[i+1]==0){
                flowerbed[i] = 1
                    n--;
            }
        } 
        else{
            break
        }
    }
    if(n==0){
        return true;
    }
    else{
        return false;
    }
     
};

console.log(canPlaceFlowers([0,0,1,0,1],1))