import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { TilCardType } from '../types'

export const dataERC20: TilCardType[] = [
	{
		id: 0,
		date: '08/04/2025',
		tags: ['ERC', 'EIP', 'Smart Contract', 'Blockchain'],
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
]
