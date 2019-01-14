let arr = [1,2,3,4,5];

arr.pop();
arr.push("5");
arr.shift();
arr.unshift("1");


let arr7 = ['first',2,3,"four",5];
arr7[99] = 99;
console.log(arr7.length);
console.log(arr7);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log(arr);

let arr9 = ['first',2,3,"four",5];
arr9.forEach(function(item, i, mass){
    console.log(i + ": " + item + "(массив: " + mass + ")");
});

let mass = [1,3,4,6,7];
for (let key in mass) {
    console.log (key);
}

for (let key of mass) {
    console.log (key);
}


let ans = "ads,sdf,edf,ads,eerr,ffc",
    arr1 = [];

arr1 = ans.split(',');

console.log(arr1);

let arr2 = ['aaaa','ssss','dddd','ggg'],
    i = arr2.join(', ');
console.log(arr2);
console.log(i);

let arr3 = ['aaaa','ssss','dddd','ggg'],
    i1 = arr3.sort();
console.log(arr3);
console.log(i1);

let arr4 = [1,15,4];
arr4.sort(compareNum);
function compareNum(a,b) {
    return a-b;
}
console.log(arr4);