/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let mid;
    while (left <= right) {
       mid = left + Math.floor((right-left)/2);
       if (mid**2 === x) {
           return mid;
       }
       else if (mid**2 > x) {
           right = mid - 1;
       }
       else {
           if ((mid+1)**2 > x) {
               return mid
           }
           left = mid + 1;
       }
    }
};