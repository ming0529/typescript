//자바스크립트에는 없는 타입들

//어떤 타입인지 모르는 변수를 알려주기
//ex. api에서 응답받는데 무슨 타입인지 모를경우 등

let aa:unknown;
let bb = aa+1 ; //타입아직 모르니 허용하지 않음


//조건문을 걸어 타입에 맞는 작업 허용 
if(typeof aa ==='number'){
    let bb = aa+1;
}

if(typeof aa ==='string'){
    let bb = aa.toUpperCase();
}

//void : 아무것도 리턴하지 않는 함수 유형, void(비어있음)을 리턴함
//보통 void따로 지정해줄 필요없음 
function hello(): void {
    console.log('Hello')
}

const aa1 = hello();
aa1.toUpperCase(); //아무것도 리턴하지 않으니 불가

//never :함수에서 절대 값을 리턴하지 않을때
//보통 에러를 던질때 사용

//아무것도 리턴하지 않겠다 했으므로 return있음 에러
function hello2() : never{
    return "Hello";
}

//리턴하지 않고 오류 발생시키는 함수에 사용가능
function hello3() : never{
    throw new Error('xxx');
}

//절대 도달할일 없을 경우에도 never
//파라미터가 string이나 number일 경우 
function hello4(name : string|number){
    if(typeof name == 'string'){

    }else if(typeof name == 'number'){

    }else {
        name //타입이 never임 
    }
}



