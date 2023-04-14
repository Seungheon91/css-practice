<template>
  <div class="container">
    <div class="item">AAAA</div>
    <div class="item">BBBB</div>
    <div class="item">CCCC</div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  border: 1px solid black;
  background-color: yellow;
}
.item {
  border: 1px solid black;
  background-color: green;
}

/* 
flex-direction 속성 : 아이템들이 배치되는 축의 방향 결정 
  row : 아이템 가로 방향 배치
  row-reverse : 아이템 가로 방향 역순 배치
  column : 아이템 세로 방향 배치
  column-reverse : 아이템 세로 방향 역순 배치
  */
/* 
flex-wrap 속성 : 컨테이너가 아이템들을 한줄에 담을 여유 공간이 없을 때 아이템 줄바꿈 처리 결정하는 속성 
    wrap : 줄바꿈 (float, inline-block으로 배치한 요소들과 비슷하게 동작)
    nowrap : 넘치면 삐져나감
    wrap-reverse : 줄바꿈 하지만 아이템을 역순
  */
/* flex-flow 속성 :  flex-direction과 flex-wrap을 한꺼번에 지정할 수 있는 단축 속성; */

/* 
justyfy-content : 메인축 정렬 속성
flex-start (기본값)
아이템들을 시작점으로 정렬합니다.
flex-direction이 row(가로 배치)일 때는 왼쪽, column(세로 배치)일 때는 위예요.

flex-end
아이템들을 끝점으로 정렬합니다.
flex-direction이 row(가로 배치)일 때는 오른쪽, column(세로 배치)일 때는 아래예요.

center
아이템들을 가운데로 정렬합니다.

space-between
아이템들의 “사이(between)”에 균일한 간격을 만들어 줍니다.

space-around
아이템들의 “둘레(around)”에 균일한 간격을 만들어 줍니다.

space-evenly
아이템들의 사이와 양 끝에 균일한 간격을 만들어 줍니다.
주의! IE와 엣지(Edge)에서는 지원되지 않습니다👎
이 웹사이트의 메뉴 부분은 브라우저 폭이 1024px 이상일 때 space-evenly가 적용되도록 했는데요, IE와 엣지에서만 space-around로 적용이 되도록 처리해 두었어요. 
*/

/*
align-items : 수직 정렬 속성

stretch (기본값)
아이템들이 수직축 방향으로 끝까지 쭈욱 늘어납니다.

flex-start
아이템들을 시작점으로 정렬합니다.
flex-direction이 row(가로 배치)일 때는 위, column(세로 배치)일 때는 왼쪽이에요.

flex-end
아이템들을 끝으로 정렬합니다.
flex-direction이 row(가로 배치)일 때는 아래, column(세로 배치)일 때는 오른쪽이에요.

center
아이템들을 가운데로 정렬합니다.

baseline
아이템들을 텍스트 베이스라인 기준으로 정렬합니다.
*/
</style>
