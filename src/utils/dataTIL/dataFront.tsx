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
					{`
- CERN : 최초의 웹 브라우저(1991) https://info.cern.ch/
- HTML (HyperText Markup Language) : 웹 문서의 구조를 정의, HTML은 웹 페이지를 구성하는 "뼈대" 역할
- HTTP (HyperText Transfer Protocol) : 클라이언트(브라우저)와 서버 간에 데이터를 주고받는 프로토콜
- URL (Uniform Resource Locator) : 웹 리소스의 위치를 지정하는 주소
`}
				</pre>

				<h3>WEB 3.0</h3>
				<pre>
					{`
- WEB 1.0 : 정보 제공, 사용자는 정보를 읽은 소비자 역할, 상호작용 없음
- WEB 2.0 : 사용자 참여와 협업, 사용자가 직접 콘텐츠 생성/공유, 참여형 플랫폼과 소셜 미디어 활성
- WEB 3.0 : 데이터는 사용자 소유, 신뢰 기반 네트워크에서 자동화된 상호작용

- Web3 : 웹3.0에서 블록체인의 역할을 극대화 시켜 설명하기 위해 사용된 것
		블록체인을 포함한 다양한 탈중앙화 기술을 활용하여 데이터를 사용자에게 소유권과 제어권을 돌려주고,
		보다 신뢰할 수 있고 투명한 인터넷 환경을 만드는 차세대 웹
`}
				</pre>

				<h3>HTML (HyperText Markup Language)</h3>
				<pre>
					{`
- 웹 페이지 구조와 내용 작성에 사용되는 언어
- 텍스트 이미지, 링크 등을 정의
- 하이퍼 텍스트라는 개념을 통해 다른 문서로 연결 가능
- 태그 기반 언어
- 시각적으로 웹 페이지를 표시
`}
				</pre>

				<h3>HTTP (HyperText Transfer Protocol)</h3>
				<pre>
					{`
- 클라이언트 <-> 서버 간의 통신규칙을 정의하는 프로토콜
- 리소스를 요청하고 응답을 받는 방식
- Request Response 구조
- GET POST PUT DELETE 요청 메서드
`}
				</pre>

				<h3>Client</h3>
				<pre>
					{`
- 사용자가 서버와 상호작용하기 위한 장치나 소프트웨어
- 서버에 Request (서버에 데이터 요청) 하고 Response (렌더링해서 사용자 화면에 표시) 받아서 사용자에게 데이터를 표시
- 사용자 중심 인터페이스 : 사용자가 서버 데이터를 시각적으로 확인하거나 입력할 수 있는 환경을 제공
- Cache 기능 : 이전에 받은 데이터를 저장하여 네트워크 요청을 줄임
`}
				</pre>

				<h3>Server</h3>
				<pre>
					{`
- 데어터 저장 및 관리
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
					{`
- Git : 분산 버전 관리 시스템, Distributed Version Control System
- 원격 저장소 제공 / 협업 도구 (PR/MR) / 코드 리뷰 / 이슈 트래킹
`}
				</pre>

				<h3>Git 태그</h3>
				<pre>
					{`
- 특정 커밋을 가리키는 읽기 전용 reference
- 일반적으로는 릴리스 버전을 표시하기 위해 사용 e.g. v1.0.0, v2.1.3
`}
				</pre>

				<h3>Git 태그 유형</h3>
				<pre>
					{`
- Annotated Tag (주석 태그)
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
					{`
Semantic Versioning:
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
		date: '05/03/2025 (1)',
		tags: ['Client', 'Server', '2-Tier', '3-Tier', 'Architecture', 'Serverless'],
		title: '2-Tier Architecture',
		content: (
			<div>
				<h3>Client - Server Architecture</h3>
				<pre>
					{`
- 리소스가 존재하는 곳과 리소스를 사용하는 앱을 분리시킨 것
- Client 는 Server에 요청, 요청에 따라 Server는 리소스를 응답
`}
				</pre>

				<h3>3-Tier achitecture</h3>
				<pre>{`
Client - Server - Database 의 형태
`}</pre>

				<h3>Serverless architecture</h3>
				<pre>{`
Dapp의 경우, 컨트랙트를 이용하여 데이터를 제공해 줄 수 있기 때문에 서버리스
`}</pre>
			</div>
		),
	},
	{
		id: 3,
		date: '05/03/2025 (2)',
		tags: ['HTTP', 'HTTPS', 'Stateless', 'Request', 'Response'],
		title: 'HTTP',
		content: (
			<div>
				<h3>HTTP(HyperText Transfer Protocol) 의 역할</h3>
				<pre>
					{`
- 웹 페이지 로딩: 리소스를 요청하고 표시할 수 있도록 함
- API 통신: 클라이언트와 서버 간의 데이터 교환을 지원
- 파일 전송: 이미지, 동영상, 문서 등의 리소스를 서버에서 클라이언트로 전송
- 상태 비저장(Stateless): HTTP는 각 요청을 독립적으로 처리, 서버는 이전 요청의 정보를 기억하지 않음
`}
				</pre>

				<h3>HTTPS(HyperText Transfer Protocol Secure) 란?</h3>
				<pre>
					{`
HTTPS는 HTTP에 보안 계층(SSL/TLS)이 추가된 버전으로, 데이터가 암호화되어 안전하게 전송 됨 

	* 기밀성(Confidentiality): 데이터가 암호화되어 외부에서 볼 수 없음
	* 무결성(Integrity): 데이터가 전송 중 변조되지 않음
	* 인증(Authentication): 신뢰할 수 있는 웹사이트인지 확인 가능
`}
				</pre>

				<h3>HTTP Messages 구조</h3>
				<pre>
					{`
- start line : 요청이나 응답의 상태, 항상 첫 번째 줄에 위치. 응답에서는 status line이라고 부름
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
					{`
Stateless는 말 그대로 상태를 가지지 않는다는 뜻

HTTP로 클라이언트와 서버가 통신을 주고받는 과정에서, HTTP가 클라이언트나 서버의 상태를 확인하지 않습니다. 사용자는 쇼핑몰에 로그인하거나 상품을 클릭해서 상세 화면으로 이동하고, 상품을 카트에 담거나 로그아웃할 수도 있습니다. 클라이언트에서 발생한 이런 모든 상태를 HTTP 통신이 추적하지 않습니다. 만약 쇼핑몰에서 카트에 담기 버튼을 눌렀을 때, 카트에 담긴 상품 정보(상태)를 저장해둬야 합니다. 그러나 HTTP는 통신 규약일 뿐이므로, 상태를 저장하지 않습니다. 

따라서 필요에 따라 다른 방법(쿠키-세션, API 등)을 통해 상태를 확인할 수 있습니다.
`}
				</pre>
			</div>
		),
	},
	{
		id: 4,
		date: '05/03/2025 (3)',
		tags: ['URL', 'URI', 'IP', 'Port', 'Domain', 'DNS'],
		title: '브라우저의 보이지 않는 곳',
		content: (
			<div>
				<h3>URL (Uniform Resource Locator)</h3>
				<pre>
					{`
- 네트워크 상에서 웹 페이지, 이미지, 동영상 등의 파일이 위치한 정보를 나타냄 
- URL은 scheme, hosts, url-path로 구분
	* 가장 먼저 작성하는 scheme은 통신 방식(프로토콜)을 결정
	* 일반적인 웹 브라우저에서는 http(s)를 사용
	* hosts는 웹 서버의 이름이나 도메인, IP를 사용하며 주소를 나타냄
	* url-path는 웹 서버에서 지정한 루트 디렉토리, 페이지, 이미지 등이 위치한 경로와 파일명을 나타냄
`}
				</pre>

				<h3>URI (Uniform Resource Identifier)</h3>
				<pre>
					{`
- 일반적으로 URL의 기본 요소인 scheme, hosts, url-path에 더해 query, fragment를 포함
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
					{`
- 127.0.0.1 : 현재 사용 중인 로컬 PC를 지칭

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
		id: 5,
		date: '05/03/2025 (4)',
		tags: ['SPA', 'AJAX', 'SSR', 'CSR'],
		title: '브라우저의 보이는 곳',
		content: (
			<div>
				<h3>SSR(Server Side Rendering)</h3>
				<pre>
					{`
- 웹 페이지를 브라우저에서 렌더링하는 대신에 서버에서 렌더링
- 브라우저가 서버의 URI로 GET 요청을 보내면, 서버는 정해진 웹 페이지 파일을 브라우저로 전송 

- 서버의 웹 페이지가 브라우저에 도착하면 완전히 렌더링 됨 
e.g. 웹 페이지의 내용에 데이터가 필요한 경우, 데이터를 불러온 다음, 웹 페이지를 완전히 렌더링 된 페이지로 변환한 후에 브라우저에 응답으로 보냄

- 브라우저가 다른 경로로 이동할 때마다 서버는 같은 작업을 다시 수행

`}
				</pre>

				<h3>CSR(Client Side Rendering)</h3>
				<pre>
					{`
- 브라우저의 요청을 서버로 보내면 서버는 웹 페이지의 골격이 될 단일 페이지(Single Page)를 보냄
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
					{`
[ SSR 사용 ]
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
		id: 6,
		date: '05/03/2025 (5)',
		tags: ['REST API'],
		title: 'REST API (WIP)',
		content: (
			<div>
				<h3>REST API</h3>
				<pre>
					{`

`}
				</pre>
			</div>
		),
	},
]
