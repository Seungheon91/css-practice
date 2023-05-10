<template>
  <div>
    <h1>미디어 쿼리</h1>
    <p>미디어 쿼리는 화면 크기에 따라 각각의 속성 값을 지정하여, 여러가지 화면을 구성하는 기술</p>
    <p>@media only all and (조건문){실행문} </p>
    <ul>
      <li>@media 미디어 쿼리가 시작됨을 표시</li>
      <li>only : 미디어 쿼리 구문을 해석하라는 명령어(생략가능)</li>
      <li>all : 미디어 쿼리를 해석해야할 대상을 나타냄(생략가능)</li>
      <li>and : 앞과 뒤의 조건을 나타냅니다(생략가능)</li>
      <li>(조건문) : 해당 조건을 설정</li>
      <li>{실행문} : 조건에 따른 실행 설정</li>
    </ul>
  </div>
</template>
<style>
body {
  background: #b71c1c; color: #fff;
}
h1::before {
  content: '1. '
}
h1::after {
  content: '- 기본'
}
@media (max-width: 1280px) {
  body {
    background: #880e4f;
  }
  h1::before {
  content: '2. '
}
h1::after {
  content: '- 1025px ~ 1279px'
}

}
@media (max-width: 1024px) {
  body {
    background: #370e88;
  }
  h1::before {
  content: '3. '
}
h1::after {
  content: '- 961px ~ 1024px'
}

}
@media (max-width: 960px) {
  body {
    background: #370e88;
  }
  h1::before {
  content: '4. '
}
h1::after {
  content: '- 769px ~ 960px'
}

}
@media (max-width: 768px) {
  body {
    background: #0b7837;
  }
  h1::before {
  content: '5. '
}
h1::after {
  content: '- 577px ~ 768px'
}

}
@media (max-width: 576px) {
  body {
    background: #7a980e;
  }
  h1::before {
  content: '6. '
}
h1::after {
  content: '- 0px ~ 576px'
}

}
</style>