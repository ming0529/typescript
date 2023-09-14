//object 타입정하기
const player2 : {
    name : string,
    age? : number,  //? 를 붙일 경우 age는 선택사항이란 뜻 
}={
    name : "nico"
}
//다른 파일에 있는 변수도 재선언 불가야??

//age가 선택사항이기에 없는애를 조건문 걸려할 수 있으니 에러남
if(player2.age<10){

}

//아래와 같이 조건을 추가해 수정해야함
if(player2.age && player2.age<10){

}

//사용하는 object 타입이 중복되는경우 type을 만드는게 효율적
const playerMin : {
    name : string,
    age ? : number,
}= {
    name : "lynn",
    age : 22,
}

const playerji : {
    name : string,
    age ? : number,
}= {
    name : "ming",
    age : 20,
}

//Player라는 type을 만들어 재사용하도록 코드 수정
type Player = {
    name : string,
    age? : number,
}

const Min : Player = {
    name : 'nick'
}

const ji : Player = {
    name : 'lynn',
    age : 12
}

//object 외에도 type 정의 가능
type Age = number; 
type Name = string;
type Player2 = {
    name : Name,
    age? : Age,
}

const mini : Player = {
    name : "mini"
}

const lynn : Player = {
    name : 'lynn',
    age : 12
}

//함수 파라미터 타입정의
function playerMaker(name : string){
    return {name : name}
}

const nick = playerMaker('nick');
nick.age = 22;

//함수 표현식일때 타입의정의, return 형식지정하기 Player로 
const playerMaker2 = (name : string) : Player =>({name})

const ming = playerMaker('ming');
ming.age = 22;//playerMaker리턴 형식에 어긋나는 경우 에러


//읽기전용만들기 readonly:Tuple, 호출만 가능, 수정불가 
type Player3 = {
    readonly  name : Name,
    age? : Age,
}
const playerMaker3 = (name:string) : Player3 =>({name})
const ming2 = playerMaker3('ming2')
ming2.age = 12
ming2.name = 'min'

//읽기전용배열 , push불가
const numbers : readonly number[]= [1,2,3,4]
numbers.push(5)

//배열의 요소까지 타입정의, 정해진 갯수의 요소만 가져야함, 순서도 지켜야함
const player4 : [string, number, boolean] = ['min', 1, true]
player4[0]=1 

//읽기전용일때
const player5 : readonly [string, number, boolean] = ['min', 1, false]
player5[0]='ji'


//추가 타입 
let a1 : undefined = undefined;
let b1 : null = null;

//프로퍼티가 선택사항일경우의 타입은 undefined 포함
type Player6 = {
    age? : number
}
//위 같은 경우 age의 타입은 number or undefined

//any타입 (비어있는 값의 경우, 타입스크립트의 보호장치에서 빠져나가기)
//자바스크립트와 다를게 없어짐, 되도록 안쓰기

const a2 : any[] = [1,2,3,4]
const b2 : any= true

let c2 = a+b  //타입이 다른 두 인자를 +연산하여해도 자바스크립트와 같이 에러나지 않음




