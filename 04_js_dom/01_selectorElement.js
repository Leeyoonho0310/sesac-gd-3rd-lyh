/*
  요소 선택
  - querySelector ("CSS 선택자")
  - querySelectorAll ("CSS 선택자")
  - getElementById ("id값")
  - getElementsByClassName ("class값")
  - getElementsByTagName ("태그명")
*/

// document 객체
console.log(document); // html 문서 전체
console.log(document.documentElement); // html 문서 내의 모든 element(요소)들을 가져옴
console.log(document.head); // head 태그와 내부 모든 element들
console.log(document.body); // body 태그와 내부 모든 element들
console.log(document.URL); // http, www, ... 전부 포함
console.log(document.domain); // ip주소나 우리가 아는 도메인

// 1. getElementById
console.log("getElementById");
console.log(document.getElementById("green"));
console.log(document.getElementById("gold"));

// 2. getElementsByClassName
// 동일한 클래스를 가진 요소가 여러개 있을 수 있으므로 elements(복수형)
console.log("getElementsByClassName");
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("others"));

// 3. getElementsByTagName
console.log("getElementsByTagName");
console.log(document.getElementsByTagName("div"));

// 4. querySelector
console.log("querySelector");
console.log(document.querySelector("#green"));
console.log(document.querySelector(".pink"));
console.log(document.querySelector("div.pink"));
console.log(document.querySelector("body div"));

// 5. querySelectorALl
// 해당 css 선택자 중에서 일치하는 모든 요소를 선택
console.log("querySelectorAll");
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("div.pink"));
console.log(document.querySelectorAll(".others"));
console.log(document.querySelectorAll("div.pink")[2]);

// NodeList와 HTMLCollection
// getElementBy~~ -> HTMLCollection -> JS에서 노드를 생성하거나 삭제하는 변경 감지
// querySelectorAll -> NodeList
// HTMLCollection, NodeList -> 유사배열

// 유사배열
// length 속성을 가짐
// [i]로 접근 가능 -> 인덱스로 접근 가능
// 표준 객체 메서드 사용 불가 (map)
// 하지만 forEach는 사용 가능

// for of 문으로 pink 클래스 모두 출력하기
console.log("for of 문으로 pink 클래스 모두 출력하기");
let pinks = document.querySelectorAll(".pink"); // pink 클래스를 가진 모든 요소 배열 출력하기

for (let el of pinks) {
  console.log(el);
}
