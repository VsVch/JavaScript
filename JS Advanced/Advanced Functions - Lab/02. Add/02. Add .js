function solution(num) {

    let finctionName = 'add' + num;

    finctionName = function sum(secNum){
        return secNum + num;
    }
    return finctionName;

}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
