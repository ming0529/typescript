"use strict"
//자바스크립트엔 없는 에러들
//1.
const min = {
    nickname : 'ming'
};

min.hello();


//2.
[1,2,3,4]+false


//3.
function divide(a,b){
    return a/b;
}

divide("hello")

//4.
const player = {
    age : 12
}
player.age = false //처음 추론한 숫자형이 아니기에 에러남
player.hello(); //없는 메소드 호출해 에러

//추론해서 타입을 고정하는 타입스크립트(추론형)
let a = 'hello'
a = 'bye'
a = 1;
let arr = [1,2,3]
arr.push("1") //배열을 숫자형으로 추론했고 문자열 런타임 에러
const person = {
    age : 20
}
person.age = false player.age = false //처음 추론한 숫자형이 아니기에 에러남
person.hello(); //없는 메소드 호출해 에러

//명시적으로 타입 정하기, 안맞으면 런타임 에러
let b : boolean = false;
let c : boolean = 11;
let d : number[] = [] //숫자들어간 배열 

let x : number = 1;
let y : string = 'ui';
let z : boolean = true;

let xx : number[] = [1,2];
let yy : string[] = ['ui','mi'];
let zz : boolean[] = [true];






