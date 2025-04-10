import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { TilCardType } from '../types'

export const dataERC: TilCardType[] = [
	{
		id: 0,
		date: '08/04/2025',
		tags: ['ERC-20', 'ERC', 'EIP', 'Smart Contract', 'Blockchain'],
		title: 'EIP & ERC',
		content: (
			<div>
				<pre>
					{`✔ 이더리움 네트워크는 오픈소스 프로젝트로, 
✔ 누구나 스마트 컨트랙트를 개발할 수 있음
✔ 통일된 표준이 없으면 서로 다른 스마트 컨트랙트 및 애플리케이션 간의 호환성 문제가 발생할 수 있음

✔ 이를 해결하기 위해 EIP(이더리움 개선 제안, Ethereum Improvement Proposal) 와,
✔ ERC(이더리움 요청 의견, Ethereum Request for Comments) 가 도입됨`}
				</pre>

				<h3>EIP (Ethereum Improvement Proposal, 이더리움 개선 제안)</h3>
				<pre>{`새로운 기능 추가, 성능 개선, 보안 업데이트 등은 개발자 및 커뮤니티가 직접 제안하고 검토해야 합니다. 이러한 개선 프로세스를 체계적으로 관리하기 위해 EIP라는 공식적인 제안 시스템이 도입되었습니다.

* 이더리움 네트워크의 기능 추가, 성능 개선, 보안 업데이트 등을 제안하는 문서
* 누구나 EIP를 작성하여 네트워크 기능 추가, 최적화, 버그 수정 등을 제안
* EIP는 이더리움 커뮤니티의 논의를 거쳐 승인될 경우, 네트워크에 반영`}</pre>

				<h3>ERC (Ethereum Request for Comments, 이더리움 표준 제안)</h3>
				<pre>{`각 프로젝트가 제각기 다른 방식으로 스마트 컨트랙트를 개발하면, 지갑, 거래소, DApp에서 이를 지원하기 어려운 문제가 발생합니다. 이를 해결하기 위해 스마트 컨트랙트의 표준을 정하는 것이 바로 ERC(Ethereum Request for Comments) 입니다.

* ERC는 스마트 컨트랙트 및 토큰 표준을 정의하는 EIP의 하위 개념
* 개발자들은 ERC 표준을 따르면, 모든 애플리케이션에서 쉽게 호환되는 컨트랙트를 만들 수 있습니다.
* 대표적인 ERC 표준으로 ERC-20(대체 가능 토큰), ERC-721(NFT) 등이 있습니다.`}</pre>

				<h3>결론</h3>
				<pre>{`* EIP는 이더리움 네트워크의 개선을 위한 공식적인 제안 시스템이며, ERC는 스마트 컨트랙트의 표준을 정의하는 제안입니다.
* EIP를 통해 제안된 스마트 컨트랙트 표준이 ERC로 자리 잡을 수 있습니다.
* ERC를 따르면, 개발자들은 표준화된 방식으로 스마트 컨트랙트를 개발하여, DApp, 지갑, 거래소 등과 원활하게 상호작용할 수 있습니다.`}</pre>
			</div>
		),
	},
	{
		id: 1,
		date: '08/04/2025',
		tags: ['ERC-20', 'Smart Contract', 'Blockchain'],
		title: 'ERC-20',
		content: (
			<div>
				<h3>ERC-20이란?</h3>
				<pre>
					{`✔ ERC-20은 이더리움 네트워크에서 사용되는 토큰 표준
✔ 2015년 11월 개발자인 파비안 보글스텔러(Fabian Vogelsteller) 와 비탈릭 부테린(Vitalik Buterin) 에 의해 제안되었습니다.
✔ 이 표준은 이더리움(or EVM) 블록체인에서 스마트 컨트랙트를 통해 생성되는 토큰들이 서로 호환될 수 있도록 기술적 규칙을 정의합니다.`}
				</pre>
				<h3>ERC20의 역할 - 디지털 자산 및 ICO 표준</h3>
				<pre>{`* ERC-20은 ICO(Initial Coin Offering, 초기 코인 공개) 및 다양한 디지털 자산의 표준으로 활용됩니다.
* 이더리움 네트워크에서 토큰 간의 상호 운용성을 보장하고, 전송 및 데이터 접근 방식을 통일하여 개발이 용이해집니다.`}</pre>
				<h3>DApp 및 이더(ETH)와의 호환성</h3>
				<pre>{`* ERC-20 토큰은 이더리움 기반 DApp에서 사용되며, 이더(ETH)와 쉽게 교환될 수 있도록 설계되었습니다.
* ERC-20 표준을 따르는 DApp은 스마트 컨트랙트, 소프트웨어 지갑, 하드웨어 지갑 등에서 자유롭게 지원됩니다.`}</pre>
				<h3>개발자 및 사용자 친화적인 환경 제공</h3>
				<pre>{`* ERC-20 표준을 따르면, 개발자들은 일관된 방식으로 토큰을 생성하고 관리할 수 있습니다.
* 이를 통해 지갑, 거래소, DApp 간의 원활한 상호작용이 가능해집니다.`}</pre>
				<h3>ERC-20 Methods & Events</h3>
				<pre>{`📌 Functions`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`totalSupply() 	: 총발행량으로 토큰이 총 몇 개 있는지 알려줍니다.
transfer() 	: 송금으로 토큰을 총 발행 주소에서 개인 계정으로 송금할 수 있습니다.
balanceOf() 	: 잔액으로 계정에 있는 토큰을 반환합니다.
transferFrom() : 사용자 간 송금 기능으로 사용자는 송금 기능을 이용하여 다른 사용자에게 토큰을 송금할 수 있습니다.
approve()		: 승인 기능으로 사람들이 위조 토큰을 만드는 것을 방지하며 토큰의 총 발행량을 확인하여 트랜잭션을 허용하거나 거부합니다.
allowance() 	: 허용 기능으로 누군가가 시스템을 속이고 본인이 소유한 것보다 더 많은 토큰을 보내고자 하는 경우 이 기능을 인해 사용자는 자신이 가진 것보다 더 많은 토큰을 보낼 수 없으며, 거래가 이루어지는 경우 취소됩니다.`}
				</SyntaxHighlighter>

				<pre>{`📌 Events`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`event Transfer(address indexed _from, address indexed _to, uint256 _value)
event Approval(address indexed _owner, address indexed _spender, uint256 _value)`}
				</SyntaxHighlighter>

				<h3>EIP20 공식 제안문서</h3>
				<u>
					<a href='https://eips.ethereum.org/EIPS/eip-20' target='_blank'>
						https://eips.ethereum.org/EIPS/eip-20
					</a>
				</u>
			</div>
		),
	},
	{
		id: 2,
		date: '08/04/2025',
		tags: ['OpenZeppelin', 'framework', 'Smart Contract', 'Blockchain'],
		title: 'OpenZeppelin',
		content: (
			<div>
				<h3>OpenZeppelin</h3>
				<pre>
					{`✔ 이더리움 및 스마트 컨트랙트 개발을 위한 보안 강화 라이브러리 및 프레임워크를 제공하는 오픈소스 프로젝트
✔ ERC-20, ERC-721, ERC-1155 등의 표준을 포함한 스마트 컨트랙트의 재사용 가능한 코드를 제공
✔ 개발자들은 보안이 검증된 코드 기반을 활용하여 안전한 스마트 컨트랙트를 쉽게 구축할 수 있음`}
				</pre>

				<h3>OpenZeppelin의 주요 특징</h3>
				<pre>{`✅ 스마트 컨트랙트 라이브러리 제공
	* ERC-20(토큰 표준), ERC-721(NFT), 접근 제어(Ownable), 수학 연산(SafeMath) 등 다양한 컨트랙트 모듈을 제공하여 개발자가 직접 작성해야 하는 코드를 줄여줍니다.

✅ 보안성 검증
	* OpenZeppelin의 컨트랙트는 수많은 보안 감사를 거쳐 작성되었으며, 블록체인 보안 연구자들이 지속적으로 점검하고 개선합니다.

✅ Upgradeable Contracts 지원
	* 스마트 컨트랙트 배포 후에도 업그레이드가 가능하도록 Proxy 패턴을 활용한 업그레이드 가능한 컨트랙트 기능을 제공합니다.

✅ Access Control (권한 관리)
	* Ownable, Roles 등의 접근 제어 기능을 제공하여 특정 역할을 가진 사용자만 실행할 수 있는 함수를 정의할 수 있습니다.

✅ 문서화 및 커뮤니티 지원
	* 공식 문서와 GitHub 리포지토리를 통해 코드 예제 및 설명이 제공되며, 개발자 커뮤니티에서 적극적으로 지원됩니다.
`}</pre>

				<h3>OpenZeppelin을 사용하는 이유</h3>
				<pre>{`* 보안성 강화: 직접 컨트랙트를 작성하는 것보다 검증된 코드 라이브러리를 활용하는 것이 안전합니다.
* 개발 시간 단축: 기본적인 기능을 직접 구현하는 대신 OpenZeppelin 컨트랙트를 상속하여 쉽게 개발할 수 있습니다.
* 스마트 컨트랙트 표준 준수: ERC-20, ERC-721 등의 표준을 준수하는 컨트랙트를 쉽게 개발할 수 있습니다.
`}</pre>
				<h3>OpenZeppelin을 사용한 ERC-20 예시</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`//OpenZeppelin 라이브러리 설치

npm install @openzeppelin/contracts`}
				</SyntaxHighlighter>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// ERC-20 토큰 생성(컨트랙트 개발) - ERC20을 상속받아 표준 토큰을 쉽게 만들 수 있습니다.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 3,
		date: '10/04/2025',
		tags: ['ERC-721', 'Smart Contract', 'Blockchain'],
		title: 'ERC-721',
		content: (
			<div>
				<h3>ERC-721과 NFT: 대체 불가능한 토큰 표준</h3>
				<pre>
					{`✔ EIP-721은 "대체 불가능한 토큰(Non-Fungible Token, NFT)" 에 대한 개념을 처음으로 논의한 문서
✔ 이후 EIP-721이 이더리움 표준으로 승인되면서 ERC-721이 되었고 이를 기반으로 NFT가 본격적으로 사용

⚠️ ERC-20 토큰은 대체 가능(Fungible)
	=> ERC-20 토큰들은 개별적인 차이가 없고, 서로 교환이 가능합니다. 예를 들어, 1 ETH는 어떤 주소에서든 동일한 가치
⚠️ ERC-721은 각각의 토큰이 고유한 속성을 가지는 대체 불가능한(Non-Fungible) 토큰
	=> 특정 자산(예: 디지털 아트, 게임 아이템, 부동산 등)의 소유권 증명`}
				</pre>

				<h3>ERC-721의 주요 특징</h3>
				<pre>{`* 대체 불가능(Non-Fungible): 각 토큰이 고유하며, 다른 토큰과 1:1로 교환할 수 없음
* 소유권 증명: 특정 토큰이 특정 주소의 소유라는 점을 블록체인 상에서 증명할 수 있음
* 추적 가능: 토큰의 생성, 전송, 소유권 이전 내역을 블록체인에서 확인 가능

`}</pre>

				<h3>ERC-721과 ERC-20의 차이점</h3>
				<pre>{`🔹 개념
	* ERC-20 (대체 가능 토큰): 모든 토큰이 동일한 가치를 가짐
	* ERC-721 (대체 불가능 토큰): 각 토큰이 고유한 속성을 가짐

🔹 예시
	* ERC-20: 유틸리티 토큰, 스테이블코인 (DAI, USDT, LINK 등)
	* ERC-721: NFT, 게임 아이템, 디지털 아트

🔹 거래 방식
	* ERC-20: 특정 수량을 전송 가능 (예: 10 ETH)
	* ERC-721: 개별 ID를 가진 특정 토큰을 전송

🔹 소유권 조회
	* ERC-20: balanceOf(address) → 토큰 잔액 확인
	* ERC-721: ownerOf(tokenId) → 특정 토큰의 소유자 확인

🔹 사용 사례
	* ERC-20: ICO, 금융, 결제, 거래소 토큰
	* ERC-721: 디지털 아트, 부동산, 게임 아이템, 티켓`}</pre>

				<h3>ERC-721의 활용 사례</h3>
				<pre>{`1. 디지털 아트 & 수집품 : NFT는 디지털 예술 작품과 수집품 시장에서 인기를 끌고 있습니다.

	- 크립토펑크(CryptoPunks) : 10,000개의 픽셀 아트 캐릭터로, 개별적으로 소유할 수 있음.
	- Bored Ape Yacht Club (BAYC) : 독특한 원숭이 캐릭터 NFT.

2. 가상 부동산 : NFT는 가상의 부동산 소유권을 블록체인에 기록하는 데 사용됩니다.

	- Decentraland의 LAND : 사용자가 메타버스에서 가상의 토지를 소유할 수 있도록 함.
	- The Sandbox : 가상 세계에서 토지를 소유하고 거래할 수 있음.

3. 게임 아이템 : NFT를 활용한 게임 아이템은 유저 간 자유로운 거래가 가능하고, 블록체인에 소유권이 기록됩니다.

	- 크립토키티(CryptoKitties) : ERC-721을 최초로 활용한 수집형 게임. 각 고양이는 유일한 개체이며, 교배를 통해 새로운 NFT 생성 가능.
	- Axie Infinity : 유저가 소유하는 NFT 기반의 몬스터를 이용한 배틀 게임.

4. 실제 자산 증명 : NFT는 부동산 소유권 및 문서 관리 등의 실제 자산과 연결될 수도 있습니다.

	- Ubitquity : 블록체인 기반의 부동산 소유권 관리 플랫폼.
	- Propy : 부동산 거래를 블록체인 상에서 기록하는 프로젝트.`}</pre>

				<h3>NFT라는 용어의 탄생</h3>
				<pre>{`NFT(Non-Fungible Token)라는 용어는 설문조사를 통해 결정되었습니다. 구별할 수 있는 디지털 자산을 표현하는 여러 대체 용어(예: Distinguishable Asset, Title Token, Asset, Equity, Ticket)가 고려되었으나, NFT가 가장 광범위하게 적용될 수 있는 표현으로 선정되었습니다.`}</pre>
			</div>
		),
	},
	{
		id: 4,
		date: '10/04/2025',
		tags: ['ERC-721', 'Smart Contract', 'Blockchain'],
		title: 'ERC-721 표준',
		content: (
			<div>
				<pre>
					{`✔ ERC-721을 준수하는 스마트 컨트랙트는 아래와 같은 필수 기능(Functions)과 이벤트(Events)를 구현해야 합니다.`}
				</pre>

				<h3>ERC-721 필수 기능(Functions)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`📌 특정 토큰의 소유자 확인

function ownerOf(uint256 tokenId) external view returns (address);

// 특정 토큰 ID(tokenId) 의 소유자 주소 반환
// NFT는 개별적으로 구별되므로, 각 토큰 ID가 특정 주소에 귀속됨
`}
				</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`📌 토큰 전송 (소유자가 직접 실행)

function safeTransferFrom(address from, address to, uint256 tokenId) external;
function transferFrom(address from, address to, uint256 tokenId) external;

// transferFrom: from 주소에서 to 주소로 특정 NFT(tokenId) 를 전송
// safeTransferFrom: transferFrom과 동일하지만, 수신자가 컨트랙트일 경우, 수신 컨트랙트가 ERC-721을 지원하는지 확인 후 전송
// 소유자만 실행할 수 있으며, approve()를 통해 다른 계정도 실행할 수 있음`}
				</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`📌 승인(Approval) 기능
					
function approve(address to, uint256 tokenId) external;

// 특정 토큰(tokenId) 에 대한 제어 권한을 다른 계정(to)에게 부여
// 이 기능을 사용하면 위임받은 계정이 transferFrom()을 실행할 수 있음`}
				</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`📌 전체 승인(Operator Approval) 기능

function setApprovalForAll(address operator, bool approved) external;

// 특정 주소(operator)가 모든 토큰을 관리할 수 있도록 승인합니다.
// true이면 operator는 소유자의 모든 토큰을 전송할 수 있으며, false이면 권한을 해제합니다.`}
				</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`📌 승인된 주소 조회

function getApproved(uint256 tokenId) external view returns (address);
function isApprovedForAll(address owner, address operator) external view returns (bool);

// getApproved(): 특정 토큰(tokenId) 에 대해 승인된 계정(위임받은 계정)을 반환합니다.
// isApprovedForAll(): 특정 owner의 모든 토큰을 전송할 수 있는 operator인지 확인합니다.`}
				</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`📌 토큰(NFT)의 개수를 조회

function balanceOf(address _owner) external view returns (uint256);

// 특정 주소가 보유한 ERC-721 토큰(NFT)의 개수를 조회하는 함수입니다.
`}
				</SyntaxHighlighter>

				<h3>ERC-721 필수 이벤트(Events)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`📌 전송 이벤트

event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);

// NFT가 from 주소에서 to 주소로 전송될 때 발생하는 이벤트입니다.
// 새로운 NFT가 생성될 경우 from은 0x0이 됩니다.`}
				</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`📌 승인 이벤트

event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);

// 특정 NFT(tokenId) 에 대한 사용 권한이 approved 주소에 부여될 때 발생합니다.`}
				</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`📌 전체 승인(Operator Approval) 이벤트

event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

// owner가 operator에게 모든 NFT에 대한 권한을 부여하거나 해제할 때 발생합니다.
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 5,
		date: '10/04/2025',
		tags: ['Metadata', 'ERC-721', 'Smart Contract', 'Blockchain'],
		title: 'Metadata & TokenURI',
		content: (
			<div>
				<pre>
					{`✔ NFT는 디지털 자산을 소유 및 추적할 수 있도록 하는 블록체인 기술
✔ NFT 자체는 이미지, 비디오, 음악 등의 데이터를 직접 저장하지 않음
✔ 메타데이터(tokenURI)를 사용하여 외부 저장소(예: IPFS, Arweave, AWS, 온체인 등)에 저장된 디지털 자산을 참조`}
				</pre>

				<h3>NFT는 데이터를 직접 저장할 수 없음</h3>
				<pre>{`블록체인 저장 공간의 한계
	- 블록체인은 데이터 저장 비용이 매우 비쌈.
	- NFT 이미지나 동영상 같은 파일을 스마트 컨트랙트 내부에 직접 저장하면 엄청난 가스 비용이 발생.
	- e.g. 1MB의 이미지를 저장하려면 ETH 수백 개 이상의 비용이 필요할 수 있음.

해결 방법:
	- NFT는 데이터를 직접 저장하지 않고, 대신 tokenURI를 통해 외부 저장소에 저장된 데이터를 참조함.
`}</pre>

				<h3>tokenURI가 하는 역할</h3>
				<pre>{`📌 tokenURI란?

- NFT의 메타데이터(JSON 형식)를 저장하는 URI(Uniform Resource Identifier)
- NFT의 정보를 설명하는 JSON 파일의 URL을 반환
- tokenURI(uint256 tokenId) 함수가 호출되면, 해당 토큰의 메타데이터 URL을 반환`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 예제: tokenURI() 함수

function tokenURI(uint256 tokenId) public view override returns (string memory) {
    return string(abi.encodePacked("https://example.com/metadata/", Strings.toString(tokenId), ".json"));
}

// 위 함수가 실행되면 https://example.com/metadata/1.json 같은 URL이 반환됨.
`}
				</SyntaxHighlighter>

				<h3>tokenURI에 저장된 메타데이터(JSON) 구조</h3>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// NFT 메타데이터는 일반적으로 JSON 형식으로 작성됨.
// 예제: NFT 메타데이터 (tokenURI가 가리키는 JSON)

{
  "name": "CryptoKitty #1",
  "description": "이 고양이는 세상에서 하나뿐입니다!",
  "image": "https://example.com/images/1.png",
  "attributes": [
    { "trait_type": "색상", "value": "노랑" },
    { "trait_type": "눈 모양", "value": "둥근 눈" }
  ]
}

// 각 필드의 역할:
//	* name: NFT의 이름.
//	* description: NFT에 대한 설명.
//	* image: NFT가 나타내는 이미지의 URL.
//	* attributes: NFT의 속성(특성).`}
				</SyntaxHighlighter>

				<h3>tokenURI가 필요한 이유</h3>
				<pre>
					{`* NFT의 실제 데이터를 저장할 공간 제공
	→ 블록체인에 직접 이미지를 저장하는 것은 가스비가 너무 높음
* NFT에 대한 정보를 쉽게 조회 가능
	→ NFT 마켓플레이스(OpenSea 등)에서 정보를 쉽게 불러올 수 있음
* 유동성과 거래 가능성 증가
	→ tokenURI가 없으면, NFT를 보유해도 어떤 자산인지 확인할 수 없음
* 확장성 제공
	→ NFT에 새로운 속성을 추가하거나 변경할 수 있음`}
				</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// tokenURI가 사용되는 실제 예제
// NFT 생성 후 tokenURI 설정

contract MyNFT is ERC721URIStorage {
    uint256 private _tokenIds;

    constructor() ERC721("MyNFT", "MNFT") {}

    function mint(address recipient, string memory metadataURI) public returns (uint256) {
        _tokenIds++;
        uint256 newItemId = _tokenIds;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, metadataURI); // 메타데이터 저장

        return newItemId;
    }
}`}
				</SyntaxHighlighter>
				<pre>{`OpenSea 같은 마켓플레이스에서 NFT 표시
	- 마켓플레이스(OpenSea, Rarible 등)는 tokenURI()를 호출하여 NFT의 이미지와 속성을 불러옴
	- 만약 tokenURI()가 없다면, NFT가 어떤 이미지인지 알 수 없음`}</pre>
			</div>
		),
	},
	{
		id: 6,
		date: '10/04/2025',
		tags: ['OpenZeppelin', 'ERC-721', 'Smart Contract', 'Blockchain'],
		title: 'Reference ERC-721',
		content: (
			<div>
				<h3>Reference ERC-721 토큰 생성(컨트랙트 개발)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MyNFT is ERC721, ERC721Enumerable, Ownable, ERC721URIStorage {
    uint256 private _tokenIds;

    constructor(
        string memory name_,
        string memory symbol_
    ) ERC721(name_, symbol_) Ownable(msg.sender) {}

    function mint(
        address recipient,
        string memory _tokenURI
    ) public onlyOwner returns (uint256) {
        unchecked {
            ++_tokenIds;
        }

        _safeMint(recipient, _tokenIds);
        _setTokenURI(_tokenIds, _tokenURI);

        return _tokenIds;
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function tokenURI(
        uint256 _tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(_tokenId);
    }

    function _increaseBalance(
        address account,
        uint128 value
    ) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, tokenId, auth);
    }
}`}
				</SyntaxHighlighter>
				<pre>{`* ERC721을 상속받아 표준 토큰을 쉽게 만들 수 있습니다.
* Ownable 을 상속받아 컨트랙트 owner와 관련된 기능을 사용할 수 있습니다.
* ERC721URIStorage 를 상속받아 각 NFT(토큰 ID)에 대한 메타데이터(URI)를 저장하고 관리할 수 있도록 하는 기능을 사용할 수 있습니다.
* ERC721Enumerable 을 상속받아 총 공급량 조회 및 개별 보유자 목록 조회 기능을 사용할 수 있습니다.`}</pre>
			</div>
		),
	},
]
