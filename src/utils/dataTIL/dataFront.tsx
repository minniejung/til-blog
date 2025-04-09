import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { TilCardType } from '../types'

export const dataFront: TilCardType[] = [
	{
		id: 0,
		date: '10/02/2025',
		tags: ['WEB', 'HTML', 'HTTP', 'WEB3.0', 'Client', 'Server'],
		title: 'WEB',
		content: (
			<div>
				<pre>
					{`- CERN : 최초의 웹 브라우저(1991) https://info.cern.ch/
- HTML (HyperText Markup Language) : 웹 문서의 구조를 정의, HTML은 웹 페이지를 구성하는 "뼈대" 역할
- HTTP (HyperText Transfer Protocol) : 클라이언트(브라우저)와 서버 간에 데이터를 주고받는 프로토콜
- URL (Uniform Resource Locator) : 웹 리소스의 위치를 지정하는 주소
`}
				</pre>

				<h3>WEB 3.0</h3>
				<pre>
					{`- WEB 1.0 : 정보 제공, 사용자는 정보를 읽은 소비자 역할, 상호작용 없음
- WEB 2.0 : 사용자 참여와 협업, 사용자가 직접 콘텐츠 생성/공유, 참여형 플랫폼과 소셜 미디어 활성
- WEB 3.0 : 데이터는 사용자 소유, 신뢰 기반 네트워크에서 자동화된 상호작용

- Web3 : 웹3.0에서 블록체인의 역할을 극대화 시켜 설명하기 위해 사용된 것
		블록체인을 포함한 다양한 탈중앙화 기술을 활용하여 데이터를 사용자에게 소유권과 제어권을 돌려주고,
		보다 신뢰할 수 있고 투명한 인터넷 환경을 만드는 차세대 웹
`}
				</pre>

				<h3>HTML (HyperText Markup Language)</h3>
				<pre>
					{`- 웹 페이지 구조와 내용 작성에 사용되는 언어
- 텍스트 이미지, 링크 등을 정의
- 하이퍼 텍스트라는 개념을 통해 다른 문서로 연결 가능
- 태그 기반 언어
- 시각적으로 웹 페이지를 표시
`}
				</pre>

				<h3>HTTP (HyperText Transfer Protocol)</h3>
				<pre>
					{`- 클라이언트 <-> 서버 간의 통신규칙을 정의하는 프로토콜
- 리소스를 요청하고 응답을 받는 방식
- Request Response 구조
- GET POST PUT DELETE 요청 메서드
`}
				</pre>

				<h3>Client</h3>
				<pre>
					{`- 사용자가 서버와 상호작용하기 위한 장치나 소프트웨어
- 서버에 Request (서버에 데이터 요청) 하고 Response (렌더링해서 사용자 화면에 표시) 받아서 사용자에게 데이터를 표시
- 사용자 중심 인터페이스 : 사용자가 서버 데이터를 시각적으로 확인하거나 입력할 수 있는 환경을 제공
- Cache 기능 : 이전에 받은 데이터를 저장하여 네트워크 요청을 줄임
`}
				</pre>

				<h3>Server</h3>
				<pre>
					{`- 데어터 저장 및 관리
- 트래픽 증가에 따라 여러 서버를 연결 하거나 클라우드 서비스로 확장 가능
- HTTPS를 통해 클라이언트와 데이터를 암호화하여 안전하게 통신

- 종류: 웹서버 / 애플리케이션 서버 (node.js 등) / 데이터베이스 서버(mongoDB 등) / 파일 서버(클라우드 기반 등)
`}
				</pre>
			</div>
		),
	},
	{
		id: 1,
		date: '11/03/2025',
		tags: ['GIT'],
		title: 'GIT',
		content: (
			<div>
				<pre>
					{`- Git : 분산 버전 관리 시스템, Distributed Version Control System
- 원격 저장소 제공 / 협업 도구 (PR/MR) / 코드 리뷰 / 이슈 트래킹
`}
				</pre>

				<h3>Git 태그</h3>
				<pre>
					{`- 특정 커밋을 가리키는 읽기 전용 reference
- 일반적으로는 릴리스 버전을 표시하기 위해 사용 e.g. v1.0.0, v2.1.3
`}
				</pre>

				<h3>Git 태그 유형</h3>
				<pre>
					{`- Annotated Tag (주석 태그)
	* 작성자, 날짜, 주석 메시지를 포함할 수�있음
	* Git 데이터베이스에 저장되며 서명(GPG)도 가능
	* git tag -a v1.0.0 -m "Initial release"

- Lightweight Tag (경량 태그)
	* 주석 없이 커밋을 가리키는 단순한 태그
	* 브랜치처럼 동작하며, 메타데이터가 포함되지 않음
	* git tag v1.0.0

- 모든 태그 보기: git tag
- 특정 패턴에 해당하는 태그 보기: git tag -l "v1.*"
- 로컬 태그 삭제: git tag -d v1.0.0
- 원격 태그 삭제: git push origin --delete v1.0.0
- 특정 태그 푸시: git push origin v1.0.0
- 모든 태그 푸시: git push origin --tags
- 태그로 체크아웃: git checkout v1.0.0
`}
				</pre>

				<h3>버전 관리</h3>
				<pre>
					{`Semantic Versioning:
    - 태그 이름에 시맨틱 버전(Semantic Versioning)을 따르는 것이 일반적
    - 형식: MAJOR.MINOR.PATCH (예: v1.2.3)
		* MAJOR: 호환되지 않는 변경 사항
		* MINOR: 새로운 기능 추가
		* PATCH: 버그 수정
`}
				</pre>
			</div>
		),
	},
	{
		id: 2,
		date: '19/02/2025',
		tags: ['Object', 'Array', 'JavaScript'],
		title: 'JavaScript 1',
		content: (
			<div>
				<h3>얕은 복사</h3>
				<pre>
					{`얕은 복사는 객체의 1단계 데이터만 복사하며, 중첩된 객체나 배열은 참조(주소)만 복사합니다.
따라서, 복사본에서 중첩 데이터를 수정하면 원본에도 영향을 미칩니다.`}
				</pre>

				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`const original = { name: "철수", info: { age: 30 } };
const shallowCopy = { ...original }; // 얕은 복사
shallowCopy.info.age = 31; // 중첩된 객체를 수정
console.log(original.info.age); // 31 (원본도 영향을 받음)`}</SyntaxHighlighter>

				<h3>깊은 복사</h3>
				<pre>
					{`깊은 복사는 객체의 모든 데이터(중첩된 객체나 배열 포함)를 완전히 새로운 메모리 공간에 복사합니다. 
복사본과 원본은 독립적이어서, 한쪽을 수정해도 다른 쪽에 영향을 미치지 않습니다.`}
				</pre>

				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`const original = { name: "철수", info: { age: 30 } };
const deepCopy = JSON.parse(JSON.stringify(original)); // 깊은 복사`}</SyntaxHighlighter>

				<h3>문자열</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`const str = "hello world";
console.log(str.length); // 11
console.log(str.charAt(1)); // "e"
console.log(str.indexOf("o")); // 4
console.log(str.slice(0, 5)); // "hello"
console.log(str.toUpperCase()); // "HELLO WORLD"`}
				</SyntaxHighlighter>

				<h3>배열</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`const arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5
console.log(arr[2]); // 3
console.log(arr.slice(0, 3)); // [1, 2, 3]
console.log(arr.map(x => x * 2)); // [2, 4, 6, 8, 10]
console.log(arr.reduce((acc, cur) => acc + cur)); // 15`}
				</SyntaxHighlighter>

				<h3>객체</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`const obj = { name: "John", age: 30 };
console.log(obj.name); // "John"
console.log(Object.keys(obj)); // ["name", "age"]
console.log(Object.values(obj)); // ["John", 30]
console.log(Object.entries(obj)); // [["name", "John"], ["age", 30]]
console.log(JSON.stringify(obj)); // '{"name":"John","age":30}'
`}
				</SyntaxHighlighter>

				<h3>숫자</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`const num = 3.141592;
console.log(num.toFixed(2)); // "3.14"
console.log(Math.floor(num)); // 3
console.log(Math.ceil(num)); // 4
console.log(Math.round(num)); // 3

console.log(Math.max(1, 2, 3)); // 3
console.log(Math.random()); // 임의의 0 이상 1 미만의 숫자
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 3,
		date: '20/02/2025',
		tags: ['원시타입', '참조타입', 'Scope', 'JavaScript'],
		title: 'JavaScript 2',
		content: (
			<div>
				<h3>원시 타입 vs 참조 타입</h3>
				<pre>
					{`원시 타입: string, number, boolean, null, undefined, bigint, symbol
참조 타입: object, array, function`}
				</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // "Bob"`}</SyntaxHighlighter>

				<h3>스코프 & 키워드</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 스코프 종류: 전역, 함수, 블록

function testScope() {
let a = 10;
if (true) {
let b = 20;
const c = 30;}
console.log(a); // 10}`}
				</SyntaxHighlighter>

				<h3>클로저</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 내부 함수가 외부 함수의 변수를 기억하는 개념

function outer(outerValue) {
return function inner(innerValue) {
console.log(\`Outer: \${outerValue}, Inner: \${innerValue}\`);};}
const closureExample = outer("Hello");
closureExample("World")
`}
				</SyntaxHighlighter>

				<h3>Spread & Rest</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`//Spread는 요소 확장, Rest는 여러 인자 수집

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

function sum(...numbers) {
return numbers.reduce((acc, num) => acc + num, 0);}
console.log(sum(1, 2, 3, 4));
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 4,
		date: '21/02/2025',
		tags: ['DOM', 'JavaScript'],
		title: 'JavaScript 3 - DOM',
		content: (
			<div>
				<h3>DOM (Document Object Model)</h3>
				<pre>
					{`HTML, XML 문서의 구조를 트리 형태로 표현한 프로그래밍 인터페이스,
이를 통해 웹 페이지의 내용과 구조를 동적으로 변경할 수 있다.
`}
				</pre>

				<h3>DOM의 구조</h3>
				<pre>
					{`DOM은 계층적인 트리 구조를 가지며,

- Document : 웹 페이지 전체를 나타내는 최상위 객체 (document 객체).
- Element : HTML 태그 하나하나를 객체로 표현 (div, p, a 등).
- Attribute : 요소의 속성 (id, class, src, href 등).
- Text : 요소 안에 들어가는 텍스트 콘텐츠.
`}
				</pre>

				<h3>DOM 조작</h3>
				<pre>{`JavaScript를 사용하여 DOM 조작`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// e.g.

✅ 요소 선택 방법
document.getElementById("id값");
document.querySelector(".class명");
document.querySelectorAll("태그명");

✅ 새로운 요소 추가
const newElement = document.createElement("div");
newElement.textContent = "새로운 요소";
document.body.appendChild(newElement);

✅ 요소 삭제
const element = document.getElementById("id값");
element.remove();

✅ 스타일 변경
element.style.color = "red";

✅ 이벤트 리스너 추가
element.addEventListener("click", () => {
  alert("클릭됨!");
});
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 5,
		date: '24/02/2025',
		tags: ['Higher order function', 'Callback', 'JavaScript'],
		title: 'JavaScript 4 - Function',
		content: (
			<div>
				<h3>일급 객체(first-class citizen)</h3>
				<pre>
					{`- 변수에 할당(assignment)할 수 있다
- 다른 함수의 전달인자(argument)로 전달될 수 있다
- 다른 함수의 결과로써 리턴될 수 있다
- 함수를 변수에 할당할 수 있기 때문에, 함수를 배열의 요소나 객체의 속성 값으로 저장할 수 있습니다 
- 함수를 데이터(string, number, boolean, array, object)처럼 다룰 수 있습니다
`}
				</pre>

				<h3>고차 함수(higher order function)</h3>
				<pre>
					{`함수를 인자로 받을 수 있거나, 함수를 리턴할 수 있는 함수를 의미
	예) doubleNum(func, num): 다른 함수를 인자로 받아 실행
	예) adder(added): 함수를 리턴하는 함수
`}
				</pre>

				<h3>콜백 함수(Callback Function)</h3>
				<pre>
					{`- 다른 함수(고차 함수)의 인자로 전달되는 함수
- 고차 함수 내부에서 콜백 함수를 호출하거나, 조건에 따라 호출하지 않을 수도 있음
`}
				</pre>

				<h3>커링 함수(Currying Function)</h3>
				<pre>
					{`- ‘함수를 리턴하는 함수’를 가리키는 용어
- 고차 함수의 한 형태로 볼 수 있음
`}
				</pre>

				<h3>내장 고차 함수</h3>
				<pre>
					{`filter, map, reduce 등
`}
				</pre>
			</div>
		),
	},
	{
		id: 6,
		date: '25/02/2025',
		tags: ['OOP', 'JavaScript'],
		title: 'JavaScript 4 - OOP',
		content: (
			<div>
				<h3>OOP 개념</h3>
				<pre>
					{`- 객체 지향 프로그래밍(OOP)은 현실 세계를 프로그래밍에 반영하는 방식
- 클래스(Class): 객체를 만들기 위한 청사진
- 인스턴스(Instance): 클래스를 기반으로 생성된 실제 객체
- 자동차 설계도(클래스) → 자동차(인스턴스)와 같은 개념
`}
				</pre>

				<h3>캡슐화 (Encapsulation)</h3>
				<pre>
					{`- 데이터(속성)와 기능(메서드)를 하나의 객체로 묶는 것
- **은닉화(정보 숨김)**를 통해 불필요한 접근 차단
`}
				</pre>

				<h3>추상화 (Abstraction)</h3>
				<pre>
					{`- 필요한 기능만 공개, 복잡한 내부 구조는 감춤
- 예: 전화기 사용자는 내부 회로를 알 필요 없음, 버튼만 누르면 됨
`}
				</pre>

				<h3>상속 (Inheritance)</h3>
				<pre>
					{`- 부모 클래스의 속성과 메서드를 자식 클래스가 물려받음
- 예: Human(사람) 클래스를 상속받는 Student(학생) 클래스
`}
				</pre>

				<h3>다형성 (Polymorphism)</h3>
				<pre>
					{`- 같은 메서드 이름이라도 각 클래스에서 다르게 구현 가능
- 예: render() 메서드가 TextBox, Checkbox에서 각기 다른 방식으로 작동
`}
				</pre>
			</div>
		),
	},
	{
		id: 7,
		date: '26/02/2025',
		tags: ['Promise', 'async/await', 'JavaScript'],
		title: 'JavaScript 4 - Promise',
		content: (
			<div>
				<h3>Promise (new Promise)</h3>
				<pre>
					{`let promise = new Promise((resolve, reject) => {
	// 1. 정상적으로 처리되는 경우
	// resolve의 인자에 값을 전달할 수도 있습니다.
	resolve(value);

	// 2. 에러가 발생하는 경우
	// reject의 인자에 에러메세지를 전달할 수도 있습니다.
	reject(error);
});
`}
				</pre>

				<h3>Promise chaining with then, catch, finally</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`let promise = new Promise(function(resolve, reject) {
	resolve('성공');
	...
});

promise
  .then((value) => {
    console.log(value);
    return '성공';
  })
  .then((value) => {
    console.log(value);
    return '성공';
  })
  .then((value) => {
    console.log(value);
    return '성공';
  })
  .catch((error) => {
    console.log(error);
    return '실패';
  })
  .finally(() => {
    console.log('성공이든 실패든 작동!');
  });`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 8,
		date: '05/03/2025 (1)',
		tags: ['Client', 'Server', '2-Tier', '3-Tier', 'Architecture', 'Serverless'],
		title: '2-Tier Architecture',
		content: (
			<div>
				<h3>Client - Server Architecture</h3>
				<pre>
					{`- 리소스가 존재하는 곳과 리소스를 사용하는 앱을 분리시킨 것
- Client 는 Server에 요청, 요청에 따라 Server는 리소스를 응답
`}
				</pre>

				<h3>3-Tier achitecture</h3>
				<pre>{`Client - Server - Database 의 형태
`}</pre>

				<h3>Serverless architecture</h3>
				<pre>{`Dapp의 경우, 컨트랙트를 이용하여 데이터를 제공해 줄 수 있기 때문에 서버리스
`}</pre>
			</div>
		),
	},
	{
		id: 9,
		date: '05/03/2025 (2)',
		tags: ['HTTP', 'HTTPS', 'Stateless', 'Request', 'Response'],
		title: 'HTTP',
		content: (
			<div>
				<h3>HTTP(HyperText Transfer Protocol) 의 역할</h3>
				<pre>
					{`- 웹 페이지 로딩: 리소스를 요청하고 표시할 수 있도록 함
- API 통신: 클라이언트와 서버 간의 데이터 교환을 지원
- 파일 전송: 이미지, 동영상, 문서 등의 리소스를 서버에서 클라이언트로 전송
- 상태 비저장(Stateless): HTTP는 각 요청을 독립적으로 처리, 서버는 이전 요청의 정보를 기억하지 않음
`}
				</pre>

				<h3>HTTPS(HyperText Transfer Protocol Secure) 란?</h3>
				<pre>
					{`HTTPS는 HTTP에 보안 계층(SSL/TLS)이 추가된 버전으로, 데이터가 암호화되어 안전하게 전송 됨 

	* 기밀성(Confidentiality): 데이터가 암호화되어 외부에서 볼 수 없음
	* 무결성(Integrity): 데이터가 전송 중 변조되지 않음
	* 인증(Authentication): 신뢰할 수 있는 웹사이트인지 확인 가능
`}
				</pre>

				<h3>HTTP Messages 구조</h3>
				<pre>
					{`- start line : 요청이나 응답의 상태, 항상 첫 번째 줄에 위치. 응답에서는 status line이라고 부름
- HTTP headers : 요청을 지정하거나, 메시지에 포함된 본문을 설명하는 헤더의 집합
- empty line : 헤더와 본문을 구분하는 빈 줄
- body : 요청과 관련된 데이터나 응답과 관련된 데이터 또는 문서, 요청과 응답의 유형에 따라 선택적으로 사용

요청이나 응답의 
	* head : start line과 HTTP headers
	* body : payload
`}
				</pre>

				<h3>Stateless</h3>
				<pre>
					{`Stateless는 말 그대로 상태를 가지지 않는다는 뜻

HTTP로 클라이언트와 서버가 통신을 주고받는 과정에서, HTTP가 클라이언트나 서버의 상태를 확인하지 않습니다. 사용자는 쇼핑몰에 로그인하거나 상품을 클릭해서 상세 화면으로 이동하고, 상품을 카트에 담거나 로그아웃할 수도 있습니다. 클라이언트에서 발생한 이런 모든 상태를 HTTP 통신이 추적하지 않습니다. 만약 쇼핑몰에서 카트에 담기 버튼을 눌렀을 때, 카트에 담긴 상품 정보(상태)를 저장해둬야 합니다. 그러나 HTTP는 통신 규약일 뿐이므로, 상태를 저장하지 않습니다. 

따라서 필요에 따라 다른 방법(쿠키-세션, API 등)을 통해 상태를 확인할 수 있습니다.
`}
				</pre>
			</div>
		),
	},
	{
		id: 10,
		date: '05/03/2025 (3)',
		tags: ['URL', 'URI', 'IP', 'Port', 'Domain', 'DNS'],
		title: '브라우저의 보이지 않는 곳',
		content: (
			<div>
				<h3>URL (Uniform Resource Locator)</h3>
				<pre>
					{`- 네트워크 상에서 웹 페이지, 이미지, 동영상 등의 파일이 위치한 정보를 나타냄 
- URL은 scheme, hosts, url-path로 구분
	* 가장 먼저 작성하는 scheme은 통신 방식(프로토콜)을 결정
	* 일반적인 웹 브라우저에서는 http(s)를 사용
	* hosts는 웹 서버의 이름이나 도메인, IP를 사용하며 주소를 나타냄
	* url-path는 웹 서버에서 지정한 루트 디렉토리, 페이지, 이미지 등이 위치한 경로와 파일명을 나타냄
`}
				</pre>

				<h3>URI (Uniform Resource Identifier)</h3>
				<pre>
					{`- 일반적으로 URL의 기본 요소인 scheme, hosts, url-path에 더해 query, fragment를 포함
- query는 웹 서버에 보내는 추가적인 질문 
	e.g. http://www.google.com:80/search?q=JavaScript
- fragment는 일종의 북마크 기능. URL에 fragment(#)와 특정 HTML 요소의 id를 전달하면 해당 요소가 있는 곳으로 스크롤을 이동할 수 있음

- 브라우저의 검색창을 클릭하면 나타나는 주소가 URI
- URI는 URL을 포함하는 상위개념
- "URL은 URI다."는 참이고, "URI는 URL이다."는 거짓
`}
				</pre>

				<h3>IP & Port</h3>
				<pre>
					{`- 127.0.0.1 : 현재 사용 중인 로컬 PC를 지칭

- 포트 번호는 0~ 65535까지 사용가능
- 그중에서 0 ~ 1024번까지의 포트 번호는 주요 통신을 위한 규약에 따라 이미 정해져 있음
- e.g. 대표 예시)
	22 : SSH
	80 : HTTP
	443: HTTPS
`}
				</pre>
			</div>
		),
	},
	{
		id: 11,
		date: '05/03/2025 (4)',
		tags: ['SPA', 'AJAX', 'SSR', 'CSR'],
		title: '브라우저의 보이는 곳',
		content: (
			<div>
				<h3>SSR(Server Side Rendering)</h3>
				<pre>
					{`- 웹 페이지를 브라우저에서 렌더링하는 대신에 서버에서 렌더링
- 브라우저가 서버의 URI로 GET 요청을 보내면, 서버는 정해진 웹 페이지 파일을 브라우저로 전송 

- 서버의 웹 페이지가 브라우저에 도착하면 완전히 렌더링 됨 
e.g. 웹 페이지의 내용에 데이터가 필요한 경우, 데이터를 불러온 다음, 웹 페이지를 완전히 렌더링 된 페이지로 변환한 후에 브라우저에 응답으로 보냄

- 브라우저가 다른 경로로 이동할 때마다 서버는 같은 작업을 다시 수행

`}
				</pre>

				<h3>CSR(Client Side Rendering)</h3>
				<pre>
					{`- 브라우저의 요청을 서버로 보내면 서버는 웹 페이지의 골격이 될 단일 페이지(Single Page)를 보냄
- 서버는 웹 페이지와 함께 JavaScript 파일을 보냄
- 클라이언트가 웹 페이지를 받으면, 웹 페이지와 함께 전달된 JavaScript 파일은 브라우저의 웹 페이지를 완전히 렌더링 된 페이지로 바꿈
- Fetch와 같은 API를 이용해 브라우저는 데이터베이스에 저장된 데이터를 가져와서 웹 페이지에 렌더링

Q. 브라우저가 다른 경로로 이동하면 어떻게 될까요? 
	CSR에서는 SSR과 다르게, 서버가 웹 페이지를 다시 보내지 않습니다. 
	브라우저는 브라우저가 요청한 경로에 따라 페이지를 다시 렌더링합니다. 
	이때 보이는 웹 페이지의 파일은 맨 처음 서버로부터 전달받은 웹 페이지 파일과 동일한 파일입니다.
`}
				</pre>

				<h3>SSR vs CSR</h3>
				<pre>
					{`[ SSR 사용 ]
    - SEO(Search Engine Optimization)가 우선순위인 경우, 일반적으로 SSR(Server Side Rendering)을 사용
    - 웹 페이지의 첫 화면 렌더링이 빠르게 필요한 경우, 단일 파일의 용량이 적은 SSR 이 적합
    - 웹 페이지가 사용자와 상호작용이 적은 경우, SSR 활용가능

[ CSR 사용 ] 
    - SEO 가 우선순위가 아닌 경우, CSR을 이용
    - 사이트에 풍부한 상호 작용이 있는 경우, CSR 은 빠른 라우팅으로 강력한 사용자 경험을 제공
    - 웹 애플리케이션을 제작하는 경우, CSR을 이용해 더 나은 사용자 경험(빠른 동적 렌더링 등)을 제공
`}
				</pre>
			</div>
		),
	},
	{
		id: 12,
		date: '07/03/2025',
		tags: ['Math module', 'Types', 'Python'],
		title: 'Python 1',
		content: (
			<div>
				<h3>Basic Syntax</h3>
				<pre>{`- f-string(f"{}")은 자바스크립트의 템플릿 리터럴과 유사한 개념
- Scope가 없는 대신, 들여쓰기가 매우 중요!
- 변수명을 작성할 때 스네이크 케이스(snake_case) 사용`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`for i in range(1, 10):
    print(f"2 x {i} = {2 * i}")`}</SyntaxHighlighter>

				<h3>List</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`fruits = ["사과", "바나나", "딸기"]
fruits.append("오렌지")  # 리스트에 값 추가
print(fruits)  # 출력: ["사과", "바나나", "딸기", "오렌지"]`}</SyntaxHighlighter>

				<h3>Dictionary</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`person = {"name": "John", "age": 30}
person["age"] = 31  # 값 변경
print(person)  # 출력: {"name": "John", "age": 31}`}</SyntaxHighlighter>

				<h3>Set</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`unique_numbers = {1, 2, 3}
unique_numbers.add(4)  # 값 추가
print(unique_numbers)  # 출력: {1, 2, 3, 4}`}</SyntaxHighlighter>

				<h3>데이터 타입 확인</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`print(type(42))  # <class 'int'>
print(type("안녕"))  # <class 'str'>
print(type(True))  # <class 'bool'>
print(type(None))  # <class 'NoneType'>`}</SyntaxHighlighter>

				<h3>math 모듈의 주요 함수</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`math.floor(x)	x를 내림 (가장 가까운 작은 정수)
math.ceil(x)	x를 올림 (가장 가까운 큰 정수)
math.fabs(x)	x의 절대값 (항상 양수)
math.sqrt(x)	x의 제곱근 계산
math.pow(x, y)	x의 y제곱 (x^y)
math.factorial(x)	x의 팩토리얼 계산 (x!)

print(int(10.9))    # 10 (소수점 버림)
print(float(10))    # 10.0 (정수를 실수로 변환)`}</SyntaxHighlighter>

				<h3>String</h3>
				<pre>{`삼중 따옴표(''' 또는 """)를 사용하면 여러 줄 문자열(Multiline String) 작성 가능
'''
Python은 배우기 쉬운 문법과 강력한 기능을 제공하는 프로그래밍 언어입니다.
다양한 분야에서 활용됩니다.
'''
				`}</pre>

				<h3>길이 확인 len</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`print(len("欢迎你"))  # 3
print(len("파이썬은 배우기 쉬운 언어입니다."))  # 17`}</SyntaxHighlighter>

				<h3>대소문자</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`print("HELLO WORLD".lower())  # 'hello world'
print("hello world".upper())  # 'HELLO WORLD'`}</SyntaxHighlighter>

				<h3>문자 포함 여부 확인</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`print("🍎🍓🍉🍇".count("🍎"))  # 1
print("파이썬은 배우기 쉬운 언어입니다.".count("배우기"))  # 1
print("파이썬" in "파이썬은 배우기 쉬운 언어입니다.")  # True`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 13,
		date: '07/03/2025 (2)',
		tags: ['Loop', 'Conditions', 'Function', 'Python'],
		title: 'Python 2',
		content: (
			<div>
				<h3>lambda 함수</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// 짧고 간결한 함수를 만들 때 유용

add = lambda x, y: x + y
print(add(2, 3)) // 출력: 5`}</SyntaxHighlighter>

				<h3>if else</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`name = "aliceKim"
rocket = "boost"

if name == "aliceKim" and rocket == "boost":
    print("정보가 일치합니다.")
elif name == "aliceKim" and rocket != "boost":
    print("코스를 확인하세요.")  // 출력: '코스를 확인하세요.'
else:
    print("일치하지 않는 정보입니다.")`}</SyntaxHighlighter>

				<h3>Ternary operator</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// 한 줄로 간결하게 조건을 표현할 때 유용

num = 5
print("짝수" if num % 2 == 0 else "홀수")  # 출력: '홀수'`}</SyntaxHighlighter>

				<h3>for문 (반복문)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`result = 0

for num in range(1, 6):
    result += num

print(result)  // 출력: 15`}</SyntaxHighlighter>

				<h3>while 문 (조건이 참일 동안 반복)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`ser_input = ""
while user_input != "exit":
    user_input = input("입력하세요 (종료: exit): ")
    print(f"입력한 값: {user_input}")`}</SyntaxHighlighter>

				<h3>List</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`fruits = ["apple", "banana"]
fruits.append("cherry")  # 리스트 끝에 요소 추가
print(fruits)  # ['apple', 'banana', 'cherry']

fruits.pop()  # 마지막 요소 제거
print(fruits)  # ['apple', 'banana']

fruits.insert(0, "grape")  # 특정 위치에 요소 추가
print(fruits)  # ['grape', 'apple', 'banana']

fruits.remove("apple")  # 특정 요소 제거
print(fruits)  # ['grape', 'banana']`}</SyntaxHighlighter>

				<h3>List - 리스트 변환 및 필터링</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`numbers = [1, 2, 3, 4]

doubled = [num * 2 for num in numbers]  # 리스트 내포(List Comprehension) 사용
print(doubled)  # [2, 4, 6, 8]

evens = list(filter(lambda num: num % 2 == 0, numbers))  # 짝수만 필터링
print(evens)  # [2, 4]`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 14,
		date: '07/03/2025 (3)',
		tags: ['Generic', '<T>', 'Public', 'Private', 'Readonly', 'Typescript'],
		title: 'Typescript',
		content: (
			<div>
				<h3>public, private</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`type Person {
  public name: string;
  private age: number;
}`}</SyntaxHighlighter>

				<h3>readonly</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`type Mydog {
    readonly name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}`}</SyntaxHighlighter>

				<h3>Generic</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`function printLog<T>(text: T): T {
	return text;
}	

interface Item<T> {
	name: T;
	stock: number;
	selected: boolean;
}

function printLog<T>(text: T): T {
	console.log(text.length);
	return text;
}`}</SyntaxHighlighter>

				<h3>제네릭 제약 조건</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`interface TextLength {
	length: number;
}

function printLog<T extends TextLength>(text: T): T {
	console.log(text.length);
	return text;
}

interface Item<T> {
	name: T;
	stock: number;
	selected: boolean;
}

function printLog<T extends keyof Item>(text: T): T {
	return text;
}`}</SyntaxHighlighter>
			</div>
		),
	},
]
