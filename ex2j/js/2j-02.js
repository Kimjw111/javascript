const input = prompt('숫자를 입력하세요.')
let list = '';
    list += `<h2>입력하신 ${input}값은 ${typeof input} 타입입니다.<br>이 타입을 Number()를 사용하여 숫자로 변환 하겠습니다.</h2>`
    list += `<h2><mark>변환 완료: ${input*1} (타입:${typeof (input*1)})</mark></h2>`
    list += `<h2>이제 위 숫자 타입을 Boolean()을 사용하여 불리언으로 변환 하겠습니다.</h2>`
    list += `<h2>위 값 ${Number(input)}(타입:${typeof Number(input)}) 을 불리언 타입으로 변환하면 이렇게 됩니다.</h2>`
    list += `<h2><mark>변형 완료: ${Boolean(input)} (타입:${typeof Boolean(input)})</mark></h2>`
document.write(list)