const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    let arr1 =[1, 1];
    for (let i = 2; i <= num; i++){
        arr1.push(arr1[i - 2] + arr1[i - 1]);
    }

return arr1[num -1];
   

};



module.exports = fibonacci;
