/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var lastsum =1;
    var res=[]
    for(item of list1){
        if(list2.includes(item)){
            var sum =list1.indexOf(item)+list2.indexOf(item)
            if(  sum <= lastsum || sum ==0 || res.length ==0 ){
                
                res.push(item)
                if(sum < lastsum){
                    res =[item]
                }
                lastsum = list1.indexOf(item)+list2.indexOf(item)
                
            }
        }
    }
    return res
};

console.log(findRestaurant(["Shogun","Piatti","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))