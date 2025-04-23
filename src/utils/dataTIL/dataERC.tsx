import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { TilCardType } from '../types/types'

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
	{
		id: 7,
		date: '14/04/2025',
		tags: ['Metadata', 'NFT', 'NFT Storage', 'Blockchain'],
		title: 'NFT metadata',
		content: (
			<div>
				<pre>{`✔️ NFT의 메타데이터는 해당 NFT가 가진 정보를 포함하는 JSON 형식의 데이터`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 예제: NFT 메타데이터(JSON 형식)

{
  "name": "CryptoPunk #5822",
  "description": "이 NFT는 희귀한 CryptoPunk 중 하나입니다.",
  "image": "https://ipfs.io/ipfs/QmExampleImageHash",
  "attributes": [
    { "trait_type": "Type", "value": "Alien" },
    { "trait_type": "Accessory", "value": "Bandana" }
  ]
}

// name - NFT의 이름
// description - NFT의 설명
// image - NFT를 나타내는 이미지의 URL
// attributes - NFT의 특징을 나타내는 속성 값들
`}
				</SyntaxHighlighter>

				<h3>NFT 메타데이터가 중요한 이유</h3>
				<pre>{`* NFT는 단순한 토큰 ID와 소유자 정보만 저장
* 하지만 NFT의 가치와 의미는 메타데이터에 의해 결정됩니다.

	- 소유권 증명: NFT가 특정 디지털 자산(이미지, 동영상 등)을 나타냄을 보장
	- 희소성 & 속성 제공: 메타데이터의 속성을 기반으로 희소성을 판단
	- 디지털 자산 연결: NFT가 특정 이미지나 아이템과 연결될 수 있도록 함
	- 만약 메타데이터가 없다면, NFT는 단순한 숫자(TOKEN ID)에 불과하며 의미를 가지지 못합니다.`}</pre>
			</div>
		),
	},
	{
		id: 8,
		date: '14/04/2025',
		tags: ['Onchain', 'Offchain ', 'Metadata', 'NFT', 'NFT Storage', 'Blockchain'],
		title: 'NFT metadata 저장방식',
		content: (
			<div>
				<h3>온체인(On-Chain) 저장 방식</h3>
				<pre>{`✔️ NFT의 메타데이터를 블록체인 자체에 저장하는 방식
✔️ 블록체인에 직접 기록되므로 변경이 불가능(immutable)하며 영구적으로 유지
✔️ 단점: 저장 비용(가스비)이 높고, 긴 데이터를 저장하기 어려움`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 예제) 온체인 NFT 저장 컨트랙트의 tokenURI 기능

function tokenURI(uint256 tokenId) public view override returns (string memory) {
    return string(abi.encodePacked("data:application/json;base64,", base64EncodedMetadata));
}

// ✅ 변조 불가능, 영구 저장
// ❌ 블록체인에 직접 저장하므로 가스 비용 증가`}
				</SyntaxHighlighter>

				<h3>오프체인(Off-Chain) 저장 방식</h3>
				<pre>{`✔️ NFT의 메타데이터를 IPFS, Arweave 같은 외부 저장소에 저장하고, 그 URL만 블록체인에 기록
✔️ 블록체인에는 메타데이터의 링크(URL)만 저장
✔️ 대부분의 NFT 프로젝트가 비용 절감과 확장성을 이유로 오프체인 방식을 사용
`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 예제) MyNFT에서 사용되었던 mint 기능

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
특징

// ✅ 비용 절감, 더 많은 데이터를 저장 가능
// ❌ 링크가 사라지면(NFT 메타데이터가 손실되면) NFT의 가치를 잃을 위험
`}
				</SyntaxHighlighter>

				<h3>왜 NFT 메타데이터를 온체인에 저장하지 않을까?</h3>
				<pre>{`NFT(ERC-721, ERC-1155)에서는 토큰 자체는 온체인에 저장되지만, 
메타데이터(예: 이미지, 설명 등)는 보통 오프체인에 저장됩니다.
그 이유는 여러 가지가 있으며, 가장 중요한 이유는 비용, 유연성, 효율성 때문입니다.`}</pre>

				<h3>메타데이터 온체인 저장이 꺼려지는 4가지 이유</h3>
				<h3>1. 가스비가 너무 비쌈</h3>
				<pre>{`온체인 저장 = 이미지, 설명 등 모든 데이터를 블록체인에 직접 올림 → 가스비 폭탄
✅ 대안: IPFS 등 URI만 온체인에 저장해서 비용 절감`}</pre>
				<h3>2. 대용량 데이터 저장이 어려움</h3>
				<pre>{`블록체인은 트랜잭션 크기 제한이 있어 고화질 이미지·영상 저장에 부적합
→ 노드의 저장 부담 커지고 네트워크 느려질 수 있음`}</pre>
				<h3>3. 수정 불가(Immutable)</h3>
				<pre>{`블록체인에 올린 데이터는 수정 불가
→ 잘못된 정보 수정이나 프로젝트 업데이트가 어려움
✅ 오프체인 저장이면 교체·추가 가능`}</pre>
				<h3>4. 이미 잘 구축된 오프체인 저장소 존재</h3>
				<pre>{`IPFS, Arweave, AWS, GCP 등 다양한 저장소 활용 가능
→ 온체인엔 링크만 저장해 효율적이고 유연하게 관리 가능`}</pre>
			</div>
		),
	},
	{
		id: 9,
		date: '14/04/2025',
		tags: ['Offchain ', 'Metadata', 'NFT', 'NFT Storage', 'Blockchain'],
		title: 'Offchain solution',
		content: (
			<div>
				<h3>탈중앙화 스토리지란?</h3>
				<pre>{`블록체인처럼 분산 저장 구조를 가진 시스템으로, 특정 서버에 의존하지 않음.
데이터를 작은 조각으로 나눠 여러 노드에 분산 저장함.`}</pre>
				<h3>1. IPFS (InterPlanetary File System)</h3>
				<pre>{`가장 널리 쓰이는 분산 파일 시스템.
콘텐츠 주소(CID)로 데이터 검색.
저장된 데이터는 변경 불가(Immutable).`}</pre>
				<h3>2. Pinata</h3>
				<pre>{`IPFS 기반의 NFT 데이터 관리 플랫폼.
메타데이터 업로드 및 Pinning 기능 제공.
API로 메타데이터를 손쉽게 관리 가능.`}</pre>
				<h3>3. Arweave</h3>
				<pre>{`블록체인 기반의 영구 저장소.
한 번 저장된 데이터는 영구 보존됨.
Solana, Ethereum NFT 프로젝트에서 활용됨.`}</pre>
				<h3>4. Filecoin</h3>
				<pre>{`IPFS와 연동된 탈중앙 스토리지.
일정 비용을 지불하면 데이터 보존 보장.
NFT.Storage, OpenSea 등에서 사용됨.`}</pre>
				<h3>중앙화 스토리지란?</h3>
				<pre>{`속도와 비용 최적화를 위해 NFT 프로젝트에서 사용되는 클라우드 기반 스토리지.`}</pre>
				<h3>1. AWS S3</h3>
				<pre>{`아마존의 클라우드 스토리지.
강력한 보안, 높은 확장성.
NFT 이미지와 메타데이터 저장에 자주 사용됨.`}</pre>
				<h3>2. Google Cloud Storage</h3>
				<pre>{`NFT 이미지와 메타데이터 저장 가능.
IPFS보다 빠른 접근성 제공.
다만 중앙화된 구조.`}</pre>
				<h3>3. Firebase Storage</h3>
				<pre>{`웹/모바일 앱과 쉽게 연동 가능.
NFT 이미지 및 JSON 메타데이터 저장에 적합.`}</pre>
				<h3>현 NFT 프로젝트 오프체인 저장 방식 예시</h3>
				<pre>{`• 온체인 저장 (예: Autoglyphs)
  - 장점: 데이터가 영구적으로 저장되고 변경이 불가능함
  - 단점: 저장 비용이 매우 높고, 저장할 수 있는 용량이 제한적임

• IPFS (예: CryptoPunks, Bored Ape Yacht Club)
  - 장점: 탈중앙화 저장이 가능하고, 한 번 저장된 데이터는 변경할 수 없음
  - 단점: Pinning을 하지 않으면 가비지 컬렉션으로 인해 데이터가 사라질 수 있음

• Pinata (예: OpenSea, Rarible)
  - 장점: IPFS 기반이지만 사용이 더 간편하고 관리 도구 제공
  - 단점: Pinata 자체는 중앙화된 서비스임

• Arweave (예: Solana 기반 NFT 프로젝트)
  - 장점: 영구 저장이 가능하여 데이터가 영원히 유지됨
  - 단점: 초기 저장 비용이 발생함

• AWS S3 (예: NBA Top Shot)
  - 장점: 매우 빠르고 확장성이 뛰어남
  - 단점: 중앙화된 서버에 저장되므로 신뢰 이슈가 존재함`}</pre>
			</div>
		),
	},
	{
		id: 10,
		date: '14/04/2025',
		tags: ['Metadata', 'NFT', 'NFT Storage', 'Blockchain'],
		title: 'NFT 생성과정',
		content: (
			<div>
				<pre>{`1. 먼저, 이미지 NFT를 만든다고 했을때, 이미지 파일이 있어야 합니다.
2. 해당 이미지를 Storage에 저장 후 이미지가 저장되어있는 주소값을 얻습니다.
3. NFT Metadata를 구성하면서 해당 이미지의 주소값을 "image"라는 속성에 포함합니다. 이 후, 구성된 Metadata를 Storage에 다시 저장후 주소값을 얻습니다.
4. NFT 컨트랙트를 통해 NFT를 민팅할 때, 해당 주소값을 tokenUri로 사용하여 NFT를 민팅합니다.`}</pre>

				<h3>Pinata 환경설정(.env)</h3>
				<pre>{`.env 파일의 PINATA_JWT 값을 넣기
Pinata API Key를 발급 받을 때의 JWT 토큰을 사용.`}</pre>
				<h3>이미지 끌어다놓기</h3>
				<pre>{`pinata/input 폴더에 NFT로 만들고 싶은 이미지를 넣기`}</pre>
				<h3>Metadata 완성하기</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`const metadata = {
    name: '', // Todo: 원하는 이름을 넣습니다.
    description: '', // Todo: 원하는 이름을 넣습니다.
    image: imageUrl,
    attributes: [
      // attributes는 어떤 속성(trait_type)에 값(value)을 넣을 것인지 자신의 프로젝트에 따라서 재량것 지정합니다.
      { trait_type: 'Rarity', value: 'Legendary' },
      { trait_type: 'Power', value: 100 },
    ],
  };`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 11,
		date: '15/04/2025',
		tags: ['Web-based Minting', 'NFT', 'NFT Storage', 'Blockchain'],
		title: 'NFT Platforms',
		content: (
			<div>
				<pre>{`1. NFT는 웹 기반 민팅 시스템으로 사용자가 직접 발행 가능.
2. 스마트 컨트랙트를 배포하고, 사용자는 웹에서 지갑 연결 후 민팅.
3. ETH, MATIC 등 토큰으로 결제하고 NFT 생성.`}</pre>

				<h3>웹 민팅 플랫폼 예시</h3>
				<pre>{`• OpenSea
  - 이더리움, 폴리곤 등 지원
  - 컨트랙트 없이도 민팅 가능

• Magic Eden
  - 솔라나, 비트코인 오디널 지원
  - 자체 민팅 페이지 생성 가능

• Manifold
  - No-Code 기반
  - 직접 스마트 컨트랙트 배포 및 민팅 설정

• Zora
  - 오픈소스 NFT 플랫폼
  - 커스텀 민팅 시스템 구축 가능`}</pre>
			</div>
		),
	},
	{
		id: 12,
		date: '22/04/2025',
		tags: ['Permit', 'EIP-2612', 'Gasless', 'Blockchain'],
		title: 'Gas를 소모하는 tx',
		content: (
			<div>
				<h3>e.g. 기본 트랜잭션 (ETH 전송)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`await sender.sendTransaction({
  to: recipient,
  value: ethers.utils.parseEther("1.0"),
});

// Gas 소모: 약 21,000 Gas (가장 기본적인 트랜잭션)
// 이더리움 네트워크에서의 단순 전송도 블록 검증 및 서명을 요구하기 때문에 Gas가 필요함`}</SyntaxHighlighter>

				<h3>e.g. 스마트 컨트랙트 실행 트랜잭션</h3>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`await token.transfer(recipient, ethers.utils.parseUnits("100", 18));

// 예제: USDT, DAI, LINK 같은 ERC-20 토큰 전송
// Gas 소모: 40,000 ~ 65,000 Gas
// ETH 전송보다 더 많은 Gas가 소모됨 → 컨트랙트 상태 변경 필요`}</SyntaxHighlighter>

				<h3>ERC-20의 기본 전송 메커니즘</h3>
				<pre>{`1. transfer : 기본 전송 → 직접 송신자가 수신자에게 토큰을 전송
2. approve + transferFrom : 승인 후 대리 전송 → 제3자가 송신자를 대신해 토큰을 전송`}</pre>

				<h3>approve: 토큰 사용 권한 부여</h3>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function approve(address spender, uint256 amount) public returns (bool)
						
// approve 함수는 지정된 spender(위임받을 주소)가 amount 만큼의 토큰을 사용하도록 허가하는 역할을 합니다.`}</SyntaxHighlighter>

				<h3>transferFrom: 위임받은 토큰 전송</h3>
				<SyntaxHighlighter
					language='solidity'
					style={
						vscDarkPlus
					}>{`function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)

// transferFrom은 미리 approve를 받은 토큰을 spender가 송신자를 대신해 전송할 때 사용됩니다.`}</SyntaxHighlighter>

				<h3>transferFrom의 주요 조건</h3>
				<pre>{`1. 소유자(Owner)가 먼저 approve를 실행해야 함. >> 이 때 사용자에게서 가스비가 소모됨.
2. 스마트 컨트랙트가 transferFrom을 실행할 때 approve한 금액 내에서만 전송 가능.
3. 성공적인 실행 후 Approval 이벤트가 발생하여 허용된 금액이 업데이트됨.`}</pre>

				<h3>approve와 transferFrom을 활용하는 이유</h3>
				<pre>{`* 스마트 컨트랙트를 통한 자동 결제 시스템
	- 사용자가 서비스에 가입할 때, 일정량의 토큰을 컨트랙트에 위임하여 자동 결제가 가능하도록 설정할 수 있습니다.
	- 예시: 구독 서비스, 게임 내 결제, 스테이킹 및 리워드 시스템
* Dapp에서의 토큰 거래
	- Uniswap 같은 DEX or Dapp에서 ERC-20 토큰을 거래할 때, DEX 컨트랙트에 먼저 approve를 호출하여 토큰을 사용할 권한을 부여해야 합니다.`}</pre>
			</div>
		),
	},
	{
		id: 13,
		date: '22/04/2025',
		tags: ['Typed Structured Data Signing', 'EIP-712', 'Gasless', 'Blockchain'],
		title: 'EIP-712 : Typed Structured Data Signing',
		content: (
			<div>
				<pre>{`✔️ EIP-712는 Ethereum 서명 방식의 표준
✔️ Typed Structured Data Signing (타입이 지정된 구조화된 데이터 서명)을 지원하는 EIP (Ethereum Improvement Proposal)
✔️ 기존의 일반적인 Ethereum 서명 방식에서는 단순히 메시지를 서명(sign)하지만,
✔️ EIP-712를 사용하면 타입과 구조가 정의된 데이터를 보다 안전하고 직관적으로 서명할 수 있음`}</pre>

				<h3>Ethereum 서명 방식</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// 1️⃣ 메시지를 먼저 Keccak256 해싱

const hashedMessage = ethers.hashMessage("Allow 100 tokens for Spender");
console.log(hashedMessage);
// "0x4e07408562bedb8b60ce05c1decfe3ad16b7223091b5eae9f07759b7c6e01c6f"

// 2️⃣ 이 해시 값(0x4e07...6e01c6f)을 사용자의 프라이빗 키(private key) 로 서명(signing)

const signature = await wallet.signMessage(hashedMessage);
console.log(signature);
// "0x6b3a55e29d63a73978...f74a80e5a94b3a727"

// 3️⃣ ECDSA(Elliptic Curve Digital Signature Algorithm)를 사용하여 서명 검증

const recoveredAddress = ethers.verifyMessage(message, signature);
console.log(recoveredAddress === wallet.address); // true

// 서명된 signature와 원본 메시지를 사용하여 공개 키(주소)를 복원
// 복원된 주소가 원래 서명자의 주소와 일치하는지 확인
// 일치하면 서명이 유효한 것!`}</SyntaxHighlighter>

				<h3>기존 서명 방식의 문제점(왜 EIP-712가 필요할까?)</h3>
				<pre>{`기존 서명 방식(EIP-191)에서는,
사용자가 지갑이나 익스플로러에서 서명을 확인할 때 의미를 알 수 없는 긴 Hex 코드만 보게 됩니다. 
이렇게 되면 서명하는 내용이 어떤 의미인지 사용자 입장에서 알기 어려움.

* signMessage()는 원본 메시지가 아니라, 해싱된 데이터를 서명
* 서명된 Hex 값만 표시되므로, 사용자가 직관적으로 이해하기 어려움.
* 해결책: signTypedData()(EIP-712)를 사용하면, 원본 메시지를 확인할 수 있음.
`}</pre>

				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`🔐 서명 요청 (사용자가 지갑에서 서명할 때 보이는 화면(MetaMask 예시)
---------------------------------------------------
서명할 데이터:
0x4e07408562bedb8b60ce05c1decfe3ad16b7223091b5eae9f07759b7c6e01c6f
---------------------------------------------------
⚠️주의: Hex 코드만 표시되어, 사용자는 정확한 메시지를 알기 어려움!`}</SyntaxHighlighter>

				<h3>보안 문제 (Phishing 공격)</h3>
				<pre>{`기존 방식에서는 단순한 string 또는 hex 데이터를 서명하므로,
악의적인 스마트 컨트랙트가 사용자가 서명한 메시지를 재사용(replay attack)하여 악용할 가능성이 있습니다.

⚠️ 문제점 예시
	* 사용자가 signMessage()로 단순한 승인 메시지를 서명
	* 악의적인 컨트랙트가 이 서명을 가져가 다른 거래에 재사용 (Replay Attack)
		=> 즉, 서명된 데이터가 정확히 어떤 내용인지 사용자가 확인하기 어려운 문제 발생.`}</pre>

				<h3>EIP-712의 해결책</h3>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`// EIP-712 방식의 서명 예시 (Typed Structured Data Signing)

const domain = {
  name: "MyToken",
  version: "1",
  chainId: 1,
  verifyingContract: "0x1234567890abcdef...",
};

const types = {
  Permit: [
    { name: "owner", type: "address" },
    { name: "spender", type: "address" },
    { name: "value", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "deadline", type: "uint256" },
  ],
};

const message = {
  owner: "0xabc...",
  spender: "0xdef...",
  value: 100,
  nonce: 1,
  deadline: 1713200000, // Math.floor(Date.now() / 1000) + 3600;
};

const signature = await signer.signTypedData(domain, types, message);

// EIP-712에서는 데이터의 구조를 명확하게 정의한 후 서명할 수 있도록 함.
// 즉, 사용자가 정확히 무엇을 서명하는지 사람이 읽을 수 있는 방식으로 변환 가능!`}</SyntaxHighlighter>

				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`// 사용자가 지갑에서 서명할 때 보이는 화면 (MetaMask 예시)

🔐 서명 요청
---------------------------------------------------
도메인: MyToken (ver.1) 
컨트랙트: 0x1234567890abcdef...
---------------------------------------------------
서명 데이터:
- Owner: 0xabc...
- Spender: 0xdef...
- Amount: 100 tokens
- Nonce: 1
- Deadline: 2025-04-15 12:00:00 UTC
---------------------------------------------------
✅ 서명할 내용을 직관적으로 확인 가능!
`}</SyntaxHighlighter>

				<h3>EIP-712의 핵심 요소</h3>
				<pre>{`EIP-712 서명에는 다음 3가지 핵심 요소가 필요합니다.

1️⃣ 도메인(domain) : 어떤 컨트랙트와 체인에서 서명이 이루어지는지 지정
2️⃣ 데이터 타입(types) : 서명할 데이터의 타입 정의
3️⃣ 메시지(message)	: 실제 서명할 데이터`}</pre>

				<h3>1️⃣ domain (도메인 정보)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`const domain = {
  name: "MyToken",
  version: "1",
  chainId: 1,
  verifyingContract: "0x1234567890abcdef...",
};

// 도메인은 서명을 검증할 때 고유한 환경을 설정하는 역할.
// chainId나 verifyingContract 값을 포함하여 다른 체인에서 서명이 재사용되지 않도록 방지.

// name	: 서명하는 토큰 또는 애플리케이션의 이름
// version	: 버전 정보
// chainId : 이 서명이 유효한 체인 (Ethereum Mainnet = 1, Goerli = 5 등)
// verifyingContract : 이 서명을 검증할 스마트 컨트랙트 주소`}</SyntaxHighlighter>

				<h3>2️⃣ types (데이터 타입 정의)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`const types = {
  Permit: [
    { name: "owner", type: "address" },
    { name: "spender", type: "address" },
    { name: "value", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "deadline", type: "uint256" },
  ],
};

// Permit 타입을 정의하여 어떤 데이터를 서명하는지 명확하게 만듦.
// 여기서 name, type은 각각 필드명과 데이터 타입을 의미.
`}</SyntaxHighlighter>

				<h3>3️⃣ message (실제 서명할 데이터)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`const message = {
  owner: "0xabc...",
  spender: "0xdef...",
  value: 100,
  nonce: 1,
  deadline: 1713200000,
};

// 서명할 데이터를 Permit 타입의 구조에 맞게 정의.
// 사용자가 어떤 값을 서명하는지 명확하게 알 수 있음.
`}</SyntaxHighlighter>

				<h3>EIP-712의 장점</h3>
				<pre>{`* 사람이 읽을 수 있는 서명 데이터 제공
* Replay Attack(리플레이 공격) 방지
* 도메인(네트워크, 컨트랙트) 바인딩으로 보안 강화
* Gasless 트랜잭션(ERC-2612 Permit) 가능`}</pre>
			</div>
		),
	},
	{
		id: 14,
		date: '22/04/2025',
		tags: ['Permit', 'EIP-2612', 'Gasless', 'Blockchain'],
		title: 'EIP-2612: Permit (Gasless)',
		content: (
			<div>
				<pre>{`✔️ EIP-2612는 ERC-20 토큰에서 approve를 가스 없이 서명(signature)만으로 수행할 수 있도록 확장하는 표준
✔️ 기존 approve는 직접적인 트랜잭션이 필요하여 사용자가 가스를 지불해야 하는 문제가 있었음
✔️ EIP-2612를 적용하면, MetaTransaction 방식으로 approve를 처리하여 사용자의 가스비 부담을 줄일 수 있음

* (사용자) 기존 approve는 가스비 필요 => permit 은 가스비 불필요
* Permit을 사용하면 서명만으로 허가 가능
* e.g. DEX, DeFi, NFT 등 사용자 경험(UX) 개선`}</pre>

				<h3>기존 ERC-20 approve의 문제점</h3>
				<pre>{`1. 사용자가 approve(spender, amount)를 실행 → 트랜잭션을 생성해야 함(setter 함수)으로 가스비 필요
2. 이후 spender가 transferFrom을 실행하여 토큰 전송

⚠️ 문제점
	* 사용자의 가스비 부담 증가
	* 프론트엔드 UX가 불편함 (사용자가 먼저 approve를 해야 하는 문제)
	* 가스 없는 지갑(Gasless Wallet) 지원 어려움`}</pre>

				<h3>EIP-2612 Permit 동작 방식</h3>
				<pre>{`EIP-2612에서는 트랜잭션을 직접 실행하지 않고, 사용자의 서명(Signature)만으로 허가가 가능

✅ Permit 흐름 (Gasless Approve)
	1. 사용자가 permit()을 위한 서명 생성 (EIP-712 구조체 서명)
	2. 가스 지불자가 서명을 permit() 함수로 제출하여 approve 실행 (사용자가스 없음)
	3. spender가 transferFrom()을 실행하여 토큰 전송`}</pre>

				<h3>Permit 함수 정의</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// EIP-2612의 permit 함수

function permit(
    address owner,
    address spender,
    uint256 value,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
) external;
 
// owner	토큰 소유자의 주소
// spender	토큰을 사용할 주소
// value	허가할 토큰 수량
// deadline	서명이 유효한 기한 (타임스탬프)
// v, r, s	EIP-712 서명 데이터
`}</SyntaxHighlighter>
				<pre>{`📌 동작 방식
	1. 사용자는 permit()을 호출하지 않고, EIP-712 형식으로 서명(signature)을 생성
	2. 이 서명을 permit() 함수에 전달하여, 스마트 컨트랙트가 approve() 없이 직접 승인 처리
	3. spender는 transferFrom()을 호출하여 토큰을 사용할 수 있음
	4. 이 과정에서 msg.sender는 필요 없음! (즉, Gas가 필요하지 않음)

📌 permit() 조건
	1. 현재 블록 시간이 deadline보다 작아야 함 (즉, 만료되지 않아야 함)
	2. owner가 0x0이 아니어야 함
	3. nonce 값이 현재 nonces[owner]와 같아야 함 (Replay Attack 방지)
	4. r, s, v 값이 secp256k1 서명 검증을 통과해야 함`}</pre>

				<h3>nonces</h3>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function nonces(address owner) external view returns (uint);

// 각 owner 주소별로 서명이 사용된 횟수를 관리하는 Nonce 카운터
// permit()이 호출될 때마다 nonces[owner]가 증가하며, 같은 서명이 반복 사용되지 않도록 방지
`}</SyntaxHighlighter>

				<h3>DOMAIN_SEPARATOR</h3>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function DOMAIN_SEPARATOR() external view returns (bytes32);

// EIP-712에서 사용되는 도메인 분리자(Domain Separator) 값을 반환
// 도메인 분리자는 네트워크, 컨트랙트 주소 등을 포함하여 서명이 특정 컨트랙트에서만 유효하도록 보장
// 체인 간 리플레이 공격(Replay Attack) 방지 기능을 수행

e.g.

DOMAIN_SEPARATOR = keccak256(
    abi.encode(
        keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),
        keccak256(bytes(name)),
        keccak256(bytes(version)),
        chainid,
        address(this)
    )
);`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 15,
		date: '23/04/2025',
		tags: ['msg.sender', 'ERC-20', 'Gasless', 'Blockchain'],
		title: 'msg.sender (ERC-20)',
		content: (
			<div>
				<h3>msg.sender란?</h3>
				<pre>{`✔️ msg.sender는 이더리움 스마트 컨트랙트에서 현재 실행 중인 함수의 호출자를 나타내는 특별한 전역 변수
✔️ 트랜잭션이 발생하면 트랜잭션을 발생시킨 주소(EOA 또는 컨트랙트 주소)가 msg.sender`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SenderExample {
    function whoIsSender() public view returns (address) {
        return msg.sender;
    }
}

// 만약 Alice(EOA: 0xABC)가 whoIsSender()를 호출하면, 반환값은 0xABC가 됩니다.`}</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// 컨트랙트가 컨트랙트를 호출하는 경우
contract A {
    function callB(address _b) public view returns (address) {
        return B(_b).whoIsSender();
    }
}

contract B {
    function whoIsSender() public view returns (address) {
        return msg.sender;
    }
}

// 만약 A 컨트랙트가 B 컨트랙트를 호출하면, msg.sender는 A 컨트랙트의 주소가 됩니다.

// 1. Alice(EOA: 0xABC)가 A 컨트랙트의 callB() 함수를 실행하면
// 2. A 컨트랙트가 B 컨트랙트의 whoIsSender()를 호출
// 3. B 컨트랙트의 msg.sender는 A 컨트랙트의 주소가 됨.
// 4. 즉, B 컨트랙트 입장에서는 A 컨트랙트가 호출한 것이므로 msg.sender는 A 컨트랙트가 됨.`}</SyntaxHighlighter>

				<h3>msg.sender가 ERC-20에서 동작하는 방식</h3>
				<h3>1. transfer: 토큰 전송 (msg.sender = 토큰을 보내는 사람)</h3>
				<pre>{`✅ 기능: msg.sender가 자신의 토큰을 다른 주소로 전송할 때 사용됩니다.`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function transfer(address recipient, uint256 amount) public returns (bool) {
    require(recipient != address(0), "Invalid recipient");
    require(_balances[msg.sender] >= amount, "Insufficient balance");

    _balances[msg.sender] -= amount;
    _balances[recipient] += amount;
    emit Transfer(msg.sender, recipient, amount);
    return true;
}

// ✅ msg.sender 역할
//	* 송금자(토큰 보유자)의 주소를 나타냄.
//	* _balances[msg.sender]를 확인하여 잔액이 충분한지 검증.
//	* 토큰을 msg.sender → recipient로 전송.`}</SyntaxHighlighter>

				<h3>2. approve: 토큰 사용 권한 위임 (msg.sender = 토큰 소유자)</h3>
				<pre>{`✅ 기능: msg.sender가 특정 spender 주소에게 자신의 토큰을 사용할 수 있도록 허락.`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function approve(address spender, uint256 amount) public returns (bool) {
    require(spender != address(0), "Invalid spender");

    _allowances[msg.sender][spender] = amount;
    emit Approval(msg.sender, spender, amount);
    return true;
}

// ✅ msg.sender 역할
//	* msg.sender(토큰 소유자)가 spender(제3자, 보통 스마트 컨트랙트)에게 일정량의 토큰 사용을 허가.
//	*_allowances[msg.sender][spender]에 허용된 금액 저장.
`}</SyntaxHighlighter>

				<h3>3. transferFrom: 위임된 토큰 전송 (msg.sender = 승인받은 사용자)</h3>
				<pre>{`✅ 기능: msg.sender가 approve를 통해 허가받은 토큰을 대신 전송.`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={
						vscDarkPlus
					}>{`function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
    require(sender != address(0), "Invalid sender");
    require(recipient != address(0), "Invalid recipient");
    require(_balances[sender] >= amount, "Insufficient balance");
    require(_allowances[sender][msg.sender] >= amount, "Allowance exceeded");

    _balances[sender] -= amount;
    _balances[recipient] += amount;
    _allowances[sender][msg.sender] -= amount;

    emit Transfer(sender, recipient, amount);
    return true;
}

// ✅ msg.sender 역할
//	* msg.sender는 spender 역할 (토큰 소유자로부터 위임받은 계정).
//	*_allowances[sender][msg.sender]를 확인하여 권한 내에서 실행하는지 검증.
//	* msg.sender는 sender의 토큰을 대신 recipient에게 전송 가능.
`}</SyntaxHighlighter>

				<h3>4. _mint: 새로운 토큰 발행 (msg.sender = 발행자)</h3>
				<pre>{`✅ 기능: 컨트랙트 배포자(관리자)가 새로운 토큰을 생성.
`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function _mint(address account, uint256 amount) internal {
    require(account != address(0), "Invalid account");

    _totalSupply += amount;
    _balances[account] += amount;
    emit Transfer(address(0), account, amount);
}

// ✅ msg.sender 역할
//	* _mint는 보통 onlyOwner 제한이 있으며, 토큰 발행 권한이 있는 관리자만 호출 가능.
//	* msg.sender가 새로운 토큰을 생성하고 특정 주소에 할당.`}</SyntaxHighlighter>

				<h3>5. msg.sender가 자신의 토큰을 소각(삭제).</h3>
				<pre>{`✅ 기능: msg.sender가 자신의 토큰을 소각(삭제).`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function _burn(address account, uint256 amount) internal {
    require(account != address(0), "Invalid account");
    require(_balances[account] >= amount, "Insufficient balance");

    _balances[account] -= amount;
    _totalSupply -= amount;
    emit Transfer(account, address(0), amount);
}

// ✅ msg.sender 역할
//	* msg.sender가 자신의 토큰을 소각할 때 호출.
//	* _balances[msg.sender]에서 소각할 수량만큼 차감.
`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 16,
		date: '23/04/2025',
		tags: ['Meta Transaction', 'ERC-2771', 'Gasless', 'Blockchain'],
		title: 'Secure Protocol for Native Meta Transactions',
		content: (
			<div>
				<h3>Meta Transaction?</h3>
				<pre>{`✔️ ETH가 없는 사용자도 트랜잭션을 실행할 수 있도록 하기 위해 메타 트랜잭션이 등장
✔️ Meta Transaction은 사용자가 가스비(ETH)를 직접 지불하지 않고 스마트 컨트랙트와 상호작용할 수 있도록 하는 트랜잭션 방식

⭐️ 사용자는 트랜잭션에 서명만 하고,
⭐️ 제3자(릴레이어, Relayer)가 해당 트랜잭션을 블록체인에 제출하며 가스비를 대신 지불`}</pre>

				<h3>용어</h3>
				<pre>{`✅ 사용자 (Transaction Signer)	: 트랜잭션을 서명하는 주체
✅ Relayer (가스 대납자)	: 사용자의 서명된 트랜잭션을 블록체인에 제출하는 주체
✅ Forwarder (포워더)	: 트랜잭션을 중계하고 검증하는 컨트랙트
✅ Recipient (최종 컨트랙트)	: 트랜잭션을 실행하는 컨트랙트`}</pre>

				<h3>메타 트랜잭션 실행 과정</h3>
				<pre>{`* 사용자가 직접 트랜잭션을 실행하는 것이 아니라, 제3자(Relayer)가 가스비를 대신 지불하는 방식
* 사용자는 서명만 하면 되고, Relayer가 블록체인에 제출하여 트랜잭션을 실행
* 이 과정에서 Forwarder(포워더) 컨트랙트가 서명을 검증하고, 올바른 트랜잭션인지 확인
* 이 후 Recipient(최종 컨트랙트)는 사용자가 실행하고자 했던 기능을 실행
* msg.sender를 실제 사용자로 인식하여 트랜잭션 실행(Relayer X, 사용자 O)
`}</pre>

				<h3>사용자의 실제 주소 추출하기</h3>
				<pre>{`메타 트랜잭션이 담긴 트랜잭션에서는 msg.sender가 Forwarder 주소로 설정되기 때문에, 실제 사용자의 주소를 별도로 추출해야 합니다.`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`/**
* @dev Indicates whether any particular address is the trusted forwarder.
*/

function isTrustedForwarder(address forwarder) public view virtual returns (bool) {
	return forwarder == trustedForwarder();
}

/**
 * @dev Override for \`msg.sender\`. Defaults to the original \`msg.sender\` whenever
 * a call is not performed by the trusted forwarder or the calldata length is less than
 * 20 bytes (an address length).
 */

function _msgSender() internal view virtual override returns (address) {
	uint256 calldataLength = msg.data.length;
	uint256 contextSuffixLength = _contextSuffixLength();
	if (isTrustedForwarder(msg.sender) && calldataLength >= contextSuffixLength) {
		return address(bytes20(msg.data[calldataLength - contextSuffixLength:]));
	} else {
		return super._msgSender();
	}
}
	
// Forwarder를 신뢰할 수 있는지 확인 (isTrustedForwarder 함수 호출)
// msg.data의 마지막 20바이트에서 실제 사용자 주소를 추출
// 만약 Forwarder가 아닐 경우 기존 msg.sender 그대로 반환
`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 17,
		date: '23/04/2025',
		tags: ['Meta Transaction', 'EIP-2771', 'ERC-2771', 'Gasless', 'Blockchain'],
		title: 'EIP-2771 주요 함수',
		content: (
			<div>
				<h3>1. isTrustedForwarder(address forwarder) → bool</h3>
				<pre>{`✅ 특정 Forwarder(중계자)가 신뢰할 수 있는지 확인하는 함수입니다.
✅ Recipient(최종 실행 컨트랙트)는 Forwarder가 신뢰할 수 있는지를 검증해야 합니다.
✅ 메타 트랜잭션을 처리할 때 필수적인 보안 기능을 제공합니다.`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function isTrustedForwarder(address forwarder) external view returns (bool);

// 신뢰할 수 없는 Forwarder가 msg.sender를 조작하는 것을 방지합니다.
// 메타 트랜잭션을 수락할지를 결정하는 필터 역할을 합니다.`}</SyntaxHighlighter>

				<h3>2. _msgSender() → address</h3>
				<pre>{`✅ 일반 트랜잭션에서는 msg.sender가 그대로 반환되지만,
✅ Forwarder를 통한 메타 트랜잭션일 경우 실제 사용자 주소를 반환합니다.`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function _msgSender() internal view returns (address) {
    if (msg.data.length >= 20 && isTrustedForwarder(msg.sender)) {
        address signer;
        assembly {
            signer := shr(96, calldataload(sub(calldatasize(), 20)))
        }
        return signer;
    }
    return msg.sender;
}

// 메타 트랜잭션을 통해 실행되는 경우, Forwarder가 아닌 실제 사용자(Transaction Signer)의 주소를 반환합니다.
// 스마트 컨트랙트가 올바른 사용자 권한을 확인할 수 있도록 보장합니다.`}</SyntaxHighlighter>

				<h3>3. _msgData() → bytes calldata</h3>
				<pre>{`✅ 일반 트랜잭션에서는 msg.data를 그대로 반환하지만,
✅ 메타 트랜잭션에서는 추가된 데이터(사용자 주소를 포함) 부분을 제거하고 반환합니다.`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function _msgData() internal view returns (bytes calldata) {
    if (msg.data.length >= 20 && isTrustedForwarder(msg.sender)) {
        return msg.data[:msg.data.length - 20];
    }
    return msg.data;
}

// 메타 트랜잭션을 사용할 때, 추가된 Forwarder 정보 없이 원래의 데이터를 처리할 수 있도록 합니다.`}</SyntaxHighlighter>

				<h3>4. execute(ForwardRequest request) → bool</h3>
				<pre>{`✅ Relayer가 메타 트랜잭션을 실제로 실행하는 함수입니다.
✅ 사용자의 서명을 검증한 후, Forwarder가 Recipient 컨트랙트에 트랜잭션을 전달합니다.`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function execute(ForwardRequest calldata request) public payable;

// Forwarder가 요청을 받아 서명을 검증한 후, 실제 트랜잭션을 실행합니다.`}</SyntaxHighlighter>

				<h3>5. verify(ForwardRequest request) → bool</h3>
				<pre>{`✅ 사용자의 서명이 올바른지 검증하는 함수입니다.
✅ 잘못된 서명이 제출될 경우, 메타 트랜잭션이 실행되지 않도록 방지합니다.`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function verify(ForwardRequest calldata request) public view returns (bool);

// 서명을 검증하여 Replay Attack 및 위조된 트랜잭션을 방지합니다.
// Forwarder가 악성 서명을 실행하지 않도록 보장합니다.`}</SyntaxHighlighter>

				<h3>5. verify(ForwardRequest request) → bool</h3>
				<pre>{`✅ 사용자의 서명이 올바른지 검증하는 함수입니다.
✅ 잘못된 서명이 제출될 경우, 메타 트랜잭션이 실행되지 않도록 방지합니다.`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function verify(ForwardRequest calldata request) public view returns (bool);

// 서명을 검증하여 Replay Attack 및 위조된 트랜잭션을 방지합니다.
// Forwarder가 악성 서명을 실행하지 않도록 보장합니다.`}</SyntaxHighlighter>

				<h3>6. nonces(address signer) → uint256</h3>
				<pre>{`✅ 각 사용자의 Nonce(트랜잭션 실행 순서)를 관리합니다.
✅ 메타 트랜잭션이 중복 실행되지 않도록 방지하는 역할을 합니다.`}</pre>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function nonces(address signer) public view returns (uint256);

// 동일한 서명이 여러 번 사용되지 않도록 방지 (Replay Attack 방지)`}</SyntaxHighlighter>
			</div>
		),
	},
]
