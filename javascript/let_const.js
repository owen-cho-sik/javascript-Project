/* // number, string, boolean, null, undefined
let number = 2;
let num = '3';

let obj = {
    name : 'ellie',
    age : 5,
};
console.log(obj.name);
// object는 값이 담겨잇는 변수의 주소를 가리킴
let obj2 = obj;
console.log(obj2.name)

obj.name = 'james';
console.log('-------');
console.log(obj.name);
console.log(obj2.name);

//   < 함수 포인터 >

function add(a, b){
    return a + b;
}

const sum = add(3, 4);
console.log(sum);

function print(a, b){
    console.log(`${a} ${b}`);
}
print(8, 32);

const doSomething = add; // do~가 add의 함수를 가리킴
const result = doSomething(3,5);
console.log(result);

function surprise(operator){
    const result = operator(3, 5);  // operator == add
    console.log(result);
}
surprise(add);


// <클래스와 콜백함수>
class Counter{
    constructor(runEvery5Times) {
        this.counter = 0;
        this.callback = runEvery5Times;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 == 0){
            this.callback && this.callback(this.counter);   // 콜백 함수란다
        }
    }
}
function printSomething(num){
    console.log(`Yo! ${num}`);
}
function alertNum(num){
    alert(`Wow! ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum); */

'use strict';

/*// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

// 3. Looping over an array
//print all fruits

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit, index, array) => {
    console.log(fruit, index, array);
});

// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);
// pop : remove an tiem from the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the begining
fruits.unshift('딸기', '레몬');
console.log(fruits);
// shift: remove an item from the beggining
fruits.shift();
fruits.shift();
console.log(fruits);
//note!! shift, unshift are slower than pop, push
//splice: rmove an item by index position
fruits.push('딸기','복숭아');
console.log(fruits);
fruits.splice(1,2);  //(시작, 지우고싶은 개수)
console.log(fruits);
fruits.splice(1,1,'코코넛'); // (1,1) 자리를 지우고 입력값을 추가
console.log(fruits);

//combine two arrays
const fruits2 = ['두리안', '수박'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('코코넛')); //해당값의 index 출력
console.log(fruits.includes('apple')); //해당값을 포함하는지 출력
fruits.push('apple');
console.log(fruits.indexOf('apple')); // 제일 앞의 apple index값  출력
console.log(fruits.lastIndexOf('apple')); //마지막 apple index값 출력

//Q1. make a string out of an array
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join();
    console.log(result);
}
//Q2. make an array out of a string
{
    const fruits = 'apple, kiwi, banana, apple';
    const result = fruits.split(",",2);
    console.log(result);
}
//Q3. make this array look like this: [5,4,3,2,1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
}
//Q4 make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    //const result = array.splice(0,2); //array자체를 변환 
    const result = array.slice(2,5); // 2~4까지 출력 (이상,미만)
    console.log(result);
} 
//Q5 90점인학생 찾기 
class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 100),
    new Student('C', 27, true, 60),
    new Student('D', 26, false, 90),
    new Student('E', 22, true, 25),
];

{
    const result = student.find((student) => student.score === 90);
    console.log(result);
}

//Q6. 수업에 등록한 친구 찾아서 배열만들기
{
    const result = student.filter((student) => student.enrolled);
    console.log(result); 
}

//Q7. 점수만 포함하는 배열생성
{
    const result = student.map((student) => student.score)
    console.log(result);
}

//Q8. 조건에 만족하는 item이 하나라도 있으면 TRUE
{
    console.clear();
    const result = student.some((student) => student.score < 50);
    console.log(result);
    //모든학생들이 해당해야함
    const result = student.every((student) => student.score < 50);
    console.log(result);
}

//Q9. 평균점수
{
    const result = student.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / student.length);
}

//Q10 string으로 변환해서 점수출력
{
    const result = student
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
} */

/* function countOf(arr, value) { //---가
    var count = 0;
    arr.forEach(element => {
        if (element == value) count++;
    });
    return count;
}

function solution(arr) {
    var answer = [];
    var set = new Set([]);
    arr.forEach( element => {
        if (set.has(element)) return;   //---나
        set.add(element);
        count = countOf(arr, element);  
        if (count > 1) answer.push(count); //---다
    });
    if (answer.length == 0) answer.push(-1); //---라
    return answer;
} */

/* const result = student.filter((student) => student.enrolled);
    console.log(result); 
 */
const arr = [1,2,2,3,3,3,4,4,5];
console.log(solution(arr));

function solution(arr) {
    var answer = [];
    var map = new Map();
    arr.forEach( element => {
        if(map.has(element)){
            map.set(element, map.get(element) + 1);
        }
        else{
            map.set(element, 1);
        }
    });
    map.forEach((value) => {
        if(value > 1){
            answer.push(value);
        }
    })
    if(answer.length == 0) answer.push(-1);
    return answer;
}
