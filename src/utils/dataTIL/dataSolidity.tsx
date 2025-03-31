import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { TilCardType } from '../types'

{
	/* <SyntaxHighlighter language='solidity' style={vscDarkPlus}>
{``}
</SyntaxHighlighter> */
}

export const dataSolidity: TilCardType[] = [
	{
		id: 0,
		date: '21/03/2025',
		tags: ['Compile', 'Deploy', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Compile & Deploy',
		content: (
			<div>
				<h3>1. Compile</h3>
				<pre>
					{`✔ 컴파일 과정은 Solidity 코드를 EVM이 이해할 수 있도록 변환하는 과정
✔ Solidity 코드를 EVM이 이해할 수 있는 바이트코드(Bytecode)로 변환
`}
				</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`truffle compile
or
npx hardhat compile`}
				</SyntaxHighlighter>
				<pre>
					{`	* Solidity 소스 코드(.sol) → 바이트코드(.bin)로 변환
	* ABI(Application Binary Interface) 생성 (.json 파일)
		=> 컴파일 후 생성되는 파일 구조 (build/contracts/or artifacts/)
	* 컴파일 된 JSON 파일 저장
`}
				</pre>

				<h3>2. Deploy</h3>
				<pre>{`✔ 배포 과정은 변환된 바이트코드를 블록체인에 올리는 과정

	* 스마트 컨트랙트 배포 트랜잭션 생성 및 블록체인에 전송
	* 배포된 컨트랙트 주소 반환
`}</pre>
			</div>
		),
	},
	{
		id: 1,
		date: '21/03/2025',
		tags: ['Truffle', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Truffle',
		content: (
			<div>
				<h3>Setting</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`npm install -g truffle`}
				</SyntaxHighlighter>
				<pre>
					{`✔ Truffle 공식 문서
  https://trufflesuite.com/docs/truffle/overview
`}
				</pre>

				<h3>Project creation</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`mkdir sample
cd sample
truffle init`}
				</SyntaxHighlighter>
				<pre>{`* contracts: solidity로 개발된 스마튼 컨트랙트 소스 파일 폴더
* migrations: 스크립트 가능한 파일을 위한 폴더
* test: 개발된 컨트랙트를 테스트 하기 위한 폴더
* truffle-config.js: truffle 설정 파일
`}</pre>

				<h3>Truffle Develop : 이더리움 클라이언트 실행</h3>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`truffle develop`}
				</SyntaxHighlighter>
				<pre>{`* 위 명령어를 프로젝트 루트폴더(sample 폴더)에서 실행하면 
* 10개의 Accounts와 Private Keys 가 리스트업 되면서 
* truffle(develop)> 프롬프트가 나타나게 됩니다.
* 또한 JSON-RPC용(http://127.0.0.1:9545/) 서비스가 제공됩니다.`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`.exit // 콘솔 종료`}
				</SyntaxHighlighter>

				<h3>스마트 컨트랙트 코드 작성 예시</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`1. /contracts 폴더에 SimpleContract.sol 파일 생성

2. truffle(develop)> compile
	// /build 폴더가 생성이 되며 contracts 폴더 아래에 있는 solidity 파일이 json 형태로 변경되어 생성

3. /migrations 폴더에 1_deploy_contracts.js 파일 생성

4. truffle(develop)> migrate
	// 로컬 블록체인에 컨트랙트가 배포

5. /test 폴더에 SimpleContract.test.js 파일 생성

6. truffle(develop)> test
`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 2,
		date: '21/03/2025',
		tags: ['Truffle', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'truffle-config.js',
		content: (
			<div>
				<h3>1. networks (네트워크 설정)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`networks: {
  development: {
    host: "127.0.0.1", // 로컬 이더리움 노드
    port: 8545,        // 기본 Ethereum RPC 포트
    network_id: "*",   // 어떤 네트워크에서도 작동하도록 설정
  },

  goerli: {
    provider: () => new HDWalletProvider(MNEMONIC or PrivateKey, "https://goerli.infura.io/v3/$ {PROJECT_ID}"),
    network_id: 5,       // Goerli 네트워크 ID
    confirmations: 2,    // 배포 시 몇 개의 블록을 기다릴지 설정
    timeoutBlocks: 200,  // 몇 블록 이후 타임아웃될지 설정
    skipDryRun: true,    // 배포 전에 dry-run(테스트 배포) 스킵 여부
  }`}
				</SyntaxHighlighter>

				<h3>2. compilers (Solidity 컴파일러 설정)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`compilers: {
  solc: {
    version: "0.8.21", // 사용하려는 Solidity 버전 (truffle의 기본 버전이 아닌 직접 지정 가능)
    settings: {
      optimizer: {
        enabled: true, // 컴파일러 최적화 활성화
        runs: 200      // 최적화 실행 횟수
      },
      evmVersion: "byzantium" // 특정 EVM 버전 설정 가능
    }
  }
}`}
				</SyntaxHighlighter>

				<h3>mocha (테스트 설정)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`mocha: {
  timeout: 100000 // 테스트 실행 시간 제한 (기본값보다 크게 설정 가능)
}`}
				</SyntaxHighlighter>

				<h3>4. db (Truffle DB 설정)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`db: {
  enabled: false,  // 기본적으로 비활성화됨
  host: "127.0.0.1",
  adapter: {
    name: "indexeddb",
    settings: {
      directory: ".db"
    }
  }
}`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 3,
		date: '21/03/2025',
		tags: ['Hardhat', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Hardhat',
		content: (
			<div>
				<h3>Project creation</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`mkdir sample-hardhat
cd sample-hardhat
npx hardhat init

>> Create a TypeScript project
`}
				</SyntaxHighlighter>

				<pre>{`* contracts: solidity로 개발된 스마튼 컨트랙트 소스 파일 폴더
* ignition: 배포 모듈을 관리하는 폴더
* (이전 버전) scripts: 배포관련 스크립트를 관리하는 폴더
* test: 개발된 컨트랙트를 테스트 하기 위한 폴더
* hardhat.config.js: hardhat 설정 파일
`}</pre>

				<h3>로컬 블록체인 네트워크 실행</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`npx hardhat node`}
				</SyntaxHighlighter>

				<h3>스마트 컨트랙트 코드 작성</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`1. /contracts 폴더에 SimpleContract.sol 파일 생성

2. npx hardhat compile
	// 프로젝트 루트 폴더에 artifacts , cache폴더가 생성
	// artifacts : Solidity 스마트 컨트랙트를 컴파일한 후 생성된 아티팩트(배포 정보)가 저장됩니다.
	// cache : Hardhat이 컴파일된 파일을 캐싱하여, 변경되지 않은 파일을 다시 컴파일하지 않도록 합니다.

3. ignition/modules 폴더에 SimpleContract.ts 파일 생성

4. npx hardhat ignition deploy ignition/modules/SimpleContract.ts     
	// 로컬 블록체인에 컨트랙트가 배포

5. test 폴더에 SimpleContract.test.ts 파일 생성

6. npx hardhat test
`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 4,
		date: '21/03/2025',
		tags: ['Hardhat', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'hardhat-config.js',
		content: (
			<div>
				<h3>1. defaultNetwork (기본 네트워크)</h3>
				<pre>{`✔️ Hardhat 실행 시 기본으로 사용할 네트워크 지정 (hardhat, localhost, sepolia 등)
✔️ npx hardhat test 또는 npx hardhat deploy 실행 시 이 네트워크를 사용
`}</pre>

				<h3>2. networks (네트워크 설정)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`networks: {
  hardhat: {},  // Hardhat 내장 네트워크
  localhost: {
    url: "http://127.0.0.1:8545",
  },
  sepolia: {
    url: process.env.ALCHEMY_SEPOLIA_URL || "https://sepolia.infura.io/v3/<key>",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
  },
  mainnet: {
    url: process.env.ALCHEMY_MAINNET_URL || "https://mainnet.infura.io/v3/<key>",
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    chainId: 1,
    gas: "auto",
    gasPrice: "auto",
  },
},
`}
				</SyntaxHighlighter>

				<h3>3. solidity (컴파일러 설정)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`solidity: {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true, // 가스 비용 절감을 위해 최적화 활성화
      runs: 200, // 200번 실행을 기준으로 최적화
    },
    evmVersion: "paris", // 이더리움 Merge 이후의 환경을 따름
  },
},
`}
				</SyntaxHighlighter>

				<h3>4. paths (폴더 경로 설정)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`paths: {
  root: "./",
  sources: "./contracts",
  tests: "./test",
  cache: "./cache",
  artifacts: "./artifacts",
},
`}
				</SyntaxHighlighter>

				<h3>5. mocha (테스트 설정)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`mocha: {
  timeout: 40000, // 40초 동안 실행되지 않으면 테스트 실패 처리
},
`}
				</SyntaxHighlighter>

				<h3>6. gasReporter (가스 리포트 활성화)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`gasReporter: {
  enabled: process.env.REPORT_GAS === "true",
  currency: "USD",
  gasPrice: 100,
  coinmarketcap: process.env.COINMARKETCAP_API_KEY,
},`}
				</SyntaxHighlighter>

				<pre>{`* Hardhat에서 실행되는 트랜잭션의 가스 비용을 분석하여 리포트 생성
* 환경 변수 REPORT_GAS가 "true"일 때만 활성화
* CoinMarketCap API를 활용하여 실시간 가스비 변환 가능
`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`npm install hardhat-gas-reporter --save-dev`}
				</SyntaxHighlighter>

				<h3>7. etherscan (컨트랙트 검증)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`npm install @nomicfoundation/hardhat-etherscan --save-dev`}
				</SyntaxHighlighter>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`etherscan: {
  apiKey: process.env.ETHERSCAN_API_KEY,
},

npx hardhat verify --network sepolia <DEPLOYED_CONTRACT_ADDRESS> // 컨트랙트 검증 실행
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 5,
		date: '24/03/2025',
		tags: ['Remix IDE', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Basic grammars',
		content: (
			<div>
				<h3>Solidity 코드 예시 (기본 구조)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleContract {
    // 1. 상태 변수 (State Variables)
    string public message;

    // 2. 생성자 (Constructor)
    constructor(string memory _message) {
        message = _message;
    }

    // 3. 함수 (Functions)
    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}`}
				</SyntaxHighlighter>

				<h3>콘솔 출력</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract Logger {
    event Log(string message);

    function logMessage(string memory _message) public {
        emit Log(_message);
    }
}`}
				</SyntaxHighlighter>

				<h3>오류 처리</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ErrorHandling {
    function fail() public pure {
        require(false, "This function always fails");
    }
}`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 6,
		date: '24/03/2025',
		tags: ['Value Type', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'NUMBER (Value type)',
		content: (
			<div>
				<h3>uint & int</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`uint256 public positiveNumber = 100; // 0 이상의 정수
uint8 public smallNumber = 255; // 8비트 정수 (0 ~ 255)

int256 public negativeNumber = -50; // 음수도 포함하는 정수
int8 public smallInt = -128; // -128 ~ 127 범위`}
				</SyntaxHighlighter>

				<h3>uint 범위</h3>
				<pre>{`uint8: 0 ~ 255
uint16: 0 ~ 65,535
uint32: 0 ~ 4,294,967,295
uint64: 0 ~ 18,446,744,073,709,551,615
uint128: 0 ~ 3.40282366920938463463374607431768211455 × 10³⁸
uint256: 0 ~ (2²⁵⁶ - 1)
				`}</pre>

				<h3>int 범위</h3>
				<pre>{`int8: -128 ~ 127
int16: -32,768 ~ 32,767
int32: -2,147,483,648 ~ 2,147,483,647
int64: -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807
int128: -1.70141183460469231731687303715884105728 × 10³⁸ ~ 1.70141183460469231731687303715884105728 × 10³⁸
int256: -(2²⁵⁵) ~ (2²⁵⁵ - 1)`}</pre>

				<h3>주의사항</h3>
				<pre>{`📌 Solidity에서는 0으로 나누는 연산은 require을 사용하여 방지해야 함!`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// e.g.

function mod(uint256 a, uint256 b) public pure returns (uint256) {
	require(b > 0, "Cannot divide by zero");
	return a % b;
}`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 7,
		date: '24/03/2025',
		tags: ['Value Type', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'BOOLEAN (Value type)',
		content: (
			<div>
				<h3>Value type : BOOLEAN</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`bool public isActive = true;`}
				</SyntaxHighlighter>

				<h3>e.g.</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract Voting {
    bool public votingOpen = true;
    
    function closeVoting() public {
        votingOpen = false;
    }
}`}
				</SyntaxHighlighter>

				<h3>e.g.</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract AccessControl {
    bool public isAdmin = false;
    
    modifier onlyAdmin() {
        require(isAdmin, "Access denied: Not an admin");
        _;
    }
    
    function setAdmin(bool status) public {
        isAdmin = status;
    }
    
    function adminFunction() public onlyAdmin {
        // 관리자만 실행 가능
    }
}`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 8,
		date: '24/03/2025',
		tags: ['Value Type', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'ADDRESS (Value type)',
		content: (
			<div>
				<h3>Address type</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`address public wallet = 0x1234567890abcdef1234567890abcdef12345678;
address payable public recipient = payable(wallet);`}
				</SyntaxHighlighter>
				<pre>
					{`* address는 20바이트(160비트) 크기를 가짐
* 특정 계정이나 스마트 컨트랙트 주소를 저장할 때 사용됨
* address payable을 사용하면 이더를 송금할 수 있는 주소로 변환 가능`}
				</pre>

				<h3>이더 송금 (transfer & send & call)</h3>
				<pre>{`📌 Address 타입의 주요 기능 (Methods)
	=> Solidity의 address 타입은 내장된 기능(Methods)을 제공하여 주소 관련 작업을 수행할 수 있음
`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract SendEther {
    function sendViaTransfer(address payable recipient) public payable {
        recipient.transfer(msg.value); // 실패 시 트랜잭션 자동 revert
    }

    function sendViaSend(address payable recipient) public payable {
        bool success = recipient.send(msg.value);
        require(success, "Send failed"); // 실패 시 직접 체크
    }

    function sendViaCall(address payable recipient) public payable {
        (bool success, ) = recipient.call{value: msg.value}("");
        require(success, "Call failed");
    }
}`}
				</SyntaxHighlighter>
				<pre>
					{`* transfer: 실패 시 자동 revert (가장 안전함)
* send: 실패 시 false 반환 (별도 처리 필요)
* call: 가장 유연하지만 보안 위험이 있음 (외부 컨트랙트 실행 가능)
`}
				</pre>

				<h3>특정 주소의 이더 잔액 확인</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract CheckBalance {
    function getBalance(address _addr) public view returns (uint256) {
        return _addr.balance;
    }
}
`}
				</SyntaxHighlighter>

				<h3>특정 주소가 스마트 컨트랙트인지 확인</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract AddressCheck {
    function isContract(address _addr) public view returns (bool) {
        uint256 codeSize;
        assembly {
            codeSize := extcodesize(_addr)
        }
        return codeSize > 0;
    }
}`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 9,
		date: '24/03/2025',
		tags: ['Value Type', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'BYTES (Value type)',
		content: (
			<div>
				<h3>Bytes (bytes1 ~ bytes32)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`bytes32 public data = "0xabcdef123456";
bytes32 public fixedBytes = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
`}
				</SyntaxHighlighter>

				<h3>고정 크기 바이트 배열 (bytes1 ~ bytes32)</h3>
				<pre>{`* bytes1부터 bytes32까지 1~32바이트 크기의 고정 크기 배열 제공
* 더 적은 가스를 사용하며, 연산 속도가 빠름
`}</pre>

				<h3>가변 크기 바이트 배열 (bytes)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`bytes public dynamicBytes = "Hello";`}
				</SyntaxHighlighter>

				<pre>{`* bytes는 동적 크기의 바이트 배열
* string과 유사하지만, 메모리 최적화 측면에서 더 효율적
* 개별 바이트 접근 가능
`}</pre>

				<h3>바이트 배열 길이 확인</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract BytesLength {
    function getLength(bytes memory data) public pure returns (uint) {
        return data.length;
    }
    
    /*
    	string을 bytes화 시켜서 길이 리턴​
    ​*/
    function getStrLength() public pure returns (uint256) {
    	 string memory str = "Hello World";
    	 return bytes(str).length;
    }
}

// bytes("Hello")를 입력하면 5 반환`}
				</SyntaxHighlighter>

				<h3>특정 바이트 값 접근</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract BytesAccess {
    function getByteAt(bytes memory data, uint256 index) public pure returns (bytes1) {
        require(index < data.length, "Index out of bounds");
        return data[index];
    }
    
    // 문자열의 특정 인덱스 접근 방법
    function getStrToByteAt() public pure returns (string memory) {
        string memory str = "Hello World";
        bytes1 firstIndex = bytes(str)[0];
        string memory result = string(abi.encodePacked(firstIndex));

        return result; 
    }
}

// getByteAt(bytes("Hello"), 1) → "e" 반환`}
				</SyntaxHighlighter>

				<h3>바이트 배열 추가</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract BytesAppend {
    function appendByte(bytes memory original, bytes1 newByte) public pure returns (bytes memory) {
        bytes memory newArray = new bytes(original.length + 1);
        for (uint256 i = 0; i < original.length; i++) {
            newArray[i] = original[i];
        }
        newArray[original.length] = newByte;
        return newArray;
    }
}

// appendByte(bytes("Hi"), "!") 실행 시 "Hi!"가 반환됨`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 10,
		date: '24/03/2025',
		tags: ['Value Type', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'ENUMS',
		content: (
			<div>
				<h3>e.g. Enums</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract OrderManagement {
    enum Status { Pending, Shipped, Delivered, Canceled }
    Status public orderStatus;

    function setStatus(Status _status) public {
        orderStatus = _status;
    }

    function getStatus() public view returns (Status) {
        return orderStatus;
    }
}`}
				</SyntaxHighlighter>

				<h3>Enum 값의 숫자 확인</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract EnumValues {
    enum Status { Pending, Shipped, Delivered, Canceled }

    function getNumericValue() public pure returns (uint) {
        return uint(Status.Shipped);
    }
}

// 결과: getNumericValue() 호출 시 1 반환 (Pending=0, Shipped=1)`}
				</SyntaxHighlighter>

				<h3>특정 상태만 허용하는 로직 추가</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract Workflow {
    enum Stage { Start, Process, Completed }
    Stage public currentStage;

    modifier onlyAtStage(Stage _stage) {
        require(currentStage == _stage, "Invalid stage transition");
        _;
    }

    function proceedToNextStage() public onlyAtStage(Stage.Start) {
        currentStage = Stage.Process;
    }
}

// modifier onlyAtStage(Stage _stage)를 사용하여 특정 상태에서만 함수 실행 가능
// proceedToNextStage()는 현재 상태가 Start일 때만 Process로 변경 가능
`}
				</SyntaxHighlighter>

				<h3>Enum을 조건문과 함께 사용하기</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract EnumWithConditions {
    enum Light { Red, Yellow, Green }
    Light public trafficLight;

    function setLight(Light _light) public {
        trafficLight = _light;
    }

    function getAction() public view returns (string memory) {
        if (trafficLight == Light.Red) {
            return "Stop";
        } else if (trafficLight == Light.Yellow) {
            return "Slow Down";
        } else {
            return "Go";
        }
    }
}

// Light enum을 선언하여 신호등 상태(Red, Yellow, Green)를 정의
// setLight()를 사용하여 상태를 설정하고, getAction()을 호출하면 해당 상태에 맞는 메시지 반환`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 11,
		date: '25/03/2025',
		tags: ['Reference Type', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'STRING (Reference Type)',
		content: (
			<div>
				<pre>{`✔️ string 타입은 텍스트 데이터를 저장하는 데 사용
✔️ Solidity는 문자열 조작 기능이 제한적이며, 가스 비용이 높은 연산이 많기 때문에 주의가 필요
✔️ bytes 타입을 활용하는 것이 성능 면에서 더 효율적일 수 있음.
`}</pre>

				<h3>특징</h3>
				<pre>{`* UTF-8 인코딩된 문자들을 저장
* string은 동적 크기(dynamic size)를 가지며, 배열처럼 개별 문자에 직접 접근할 수 없음
* Solidity는 문자열 연결(concatenation), 길이 확인(length) 등의 문자열 조작 기능이 제한적
* 문자열을 더 효율적으로 조작하려면 bytes 타입을 사용하는 것이 더 좋음
`}</pre>

				<h3>기본적인 String 선언</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StringExample {
    string public message = "Hello, Ethereum!";
}

// message 변수에 문자열을 저장하고, public으로 선언하여 자동 getter 함수 생성`}
				</SyntaxHighlighter>

				<h3>문자열 길이 확인 (개별 문자 접근이 불가)</h3>
				<pre>{`📌 Solidity에는 string.length 속성이 없기 때문에, 길이를 확인하려면 bytes로 변환해야 합니다.`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StringLength {
    function getLength(string memory str) public pure returns (uint) {
        return bytes(str).length;
    }
}

// bytes(str).length를 사용하여 문자열 길이 확인 가능
`}
				</SyntaxHighlighter>

				<h3>Concatenation</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StringConcat {
    function concatenate(string memory str1, string memory str2) public pure returns (string memory) {
        return string(abi.encodePacked(str1, str2));
    }
}

// abi.encodePacked()를 활용하여 문자열을 안전하게 연결
`}
				</SyntaxHighlighter>

				<h3>string → bytes 변환</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StringToBytes {
		function convertToBytes(string memory str) public pure returns (bytes memory) {
			return bytes(str);
		}
	}

// bytes(str)를 사용하여 문자열을 바이트 배열로 변환 가능`}
				</SyntaxHighlighter>

				<h3>bytes → string 변환</h3>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract BytesToString {
		function convertToString(bytes memory byteData) public pure returns (string memory) {
			return string(byteData);
		}
	}
// string(byteData)를 사용하여 바이트 배열을 다시 문자열로 변환 가능`}
				</SyntaxHighlighter>

				<h3>문자열 비교 (해시 값 비교 방식)</h3>
				<pre>{`📌 Solidity는 string 타입에 대해 직접 비교 연산(==)을 지원하지 않으므로, keccak256 해시 값을 비교하는 방법을 사용합니다.`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StringCompare {
		function isEqual(string memory str1, string memory str2) public pure returns (bool) {
			return keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
		}
	}

// keccak256을 사용하여 문자열을 비교하는 것이 가장 안전한 방법`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 12,
		date: '25/03/2025',
		tags: ['Reference Type', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'ARRAY (Reference Type)',
		content: (
			<div>
				<pre>{`✔️ array(배열)는 같은 데이터 타입의 여러 값을 저장하는 자료구조

	* 배열은 동적 크기(Dynamic)와 고정 크기(Fixed) 배열로 나뉨
	* push(), pop() 등의 내장 함수 제공
	* 특정 요소 접근 및 수정 가능 (array[index])
	* Solidity의 배열은 가스 비용이 높을 수 있음 → 최적화 필요
`}</pre>

				<h3>동적 크기 배열 (Dynamic Array)</h3>
				<pre>{`📌 numbers.push(num)를 사용하여 배열에 값을 추가 가능`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract DynamicArray {
    uint256[] public numbers;

    function addNumber(uint256 num) public {
        numbers.push(num);
    }
}`}
				</SyntaxHighlighter>

				<h3>고정 크기 배열 (Fixed-Size Array)</h3>
				<pre>{`📌 고정 크기 배열은 선언 후 크기를 변경할 수 없음`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract FixedArray {
    uint256[3] public fixedNumbers = [1, 2, 3];
}
`}
				</SyntaxHighlighter>

				<h3>요소 추가 (push())</h3>
				<pre>{`📌 push()를 사용하여 배열 끝에 요소 추가 가능 (동적 배열에서만 사용 가능)`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ArrayPush {
    uint256[] public numbers;

    function addNumber(uint256 num) public {
        numbers.push(num);
    }
}`}
				</SyntaxHighlighter>

				<h3>요소 제거 (pop())</h3>
				<pre>{`📌 pop()을 사용하면 배열의 마지막 요소 제거 (고정 크기 배열에서는 사용 불가)`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ArrayPop {
    uint256[] public numbers = [10, 20, 30];

    function removeLast() public {
        numbers.pop();
    }
}
`}
				</SyntaxHighlighter>

				<h3>특정 인덱스 값 가져오기 (array[index])</h3>
				<pre>{`📌 배열의 특정 인덱스에 접근하려면 array[index] 형식 사용`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ArrayAccess {
    uint256[] public numbers = [5, 10, 15];

    function getValue(uint256 index) public view returns (uint256) {
        return numbers[index];
    }
}`}
				</SyntaxHighlighter>

				<h3>배열 길이 확인 (.length)</h3>
				<pre>{`📌 .length 속성을 사용하여 배열 크기 확인 가능`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ArrayLength {
    uint256[] public numbers = [1, 2, 3, 4];

    function getLength() public view returns (uint256) {
        return numbers.length;
    }
}
`}
				</SyntaxHighlighter>

				<h3>배열과 루프 활용 - 배열을 반복문으로 조회하기</h3>
				<pre>{`📌 배열의 모든 요소를 합산하는 sumArray() 함수`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ArrayLoop {
    uint256[] public numbers = [1, 2, 3, 4, 5];

    function sumArray() public view returns (uint256 sum) {
        for (uint256 i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
    }
}
`}
				</SyntaxHighlighter>

				<h3>다차원 배열 (Multi-dimensional Array) - 2차원 배열 선언 및 사용</h3>
				<pre>{`📌 배열의 배열(2D 배열) 구조로 데이터를 저장 가능`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract MultiDimArray {
    uint256[][] public matrix;

    function addRow(uint256[] memory row) public {
        matrix.push(row);
    }
}
`}
				</SyntaxHighlighter>

				<h3>특정 인덱스 요소 삭제 (delete)</h3>
				<pre>{`📌 delete numbers[index]를 사용하면 해당 인덱스의 값이 0으로 초기화됨 (배열 크기는 변하지 않음)`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ArrayDelete {
    uint256[] public numbers = [10, 20, 30, 40];

    function removeElement(uint256 index) public {
        require(index < numbers.length, "Index out of bounds");
        delete numbers[index];
    }
}
`}
				</SyntaxHighlighter>

				<h3>특정 요소를 삭제 후 배열 크기 줄이기</h3>
				<pre>{`📌 삭제 후 요소를 이동하여 배열 크기를 줄이는 방식 (가스 비용 높음 → 최적화 필요)`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract RemoveAndShift {
    uint256[] public numbers = [10, 20, 30, 40];

    function removeAt(uint256 index) public {
        require(index < numbers.length, "Index out of bounds");
        for (uint256 i = index; i < numbers.length - 1; i++) {
            numbers[i] = numbers[i + 1];
        }
        numbers.pop();
    }
}
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 13,
		date: '25/03/2025',
		tags: ['Reference Type', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'MAPPING (Reference Type)',
		content: (
			<div>
				<pre>{`✔️ 키-값(Key-Value) 쌍을 저장하는 자료구조

	* mapping(KeyType => ValueType) 형식으로 선언
	* 키를 입력하면 해당하는 값을 즉시 조회 가능
	* 모든 키는 기본적으로 0 또는 false와 같은 초기값을 가짐
	* storage에만 저장 가능 (메모리 변수로 사용 불가)
`}</pre>

				<h3>e.g. 특정 주소의 잔액을 저장하고 조회하는 간단한 매핑 예제</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract SimpleMapping {
    mapping(address => uint256) public balances;

    function setBalance(address user, uint256 amount) public {
        balances[user] = amount;
    }

    function getBalance(address user) public view returns (uint256) {
        return balances[user];
    }
}
`}
				</SyntaxHighlighter>

				<h3>매핑의 주요 기능</h3>
				<pre>{`* 값 설정 (쓰기 연산)`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`balances[msg.sender] = 100;
// 특정 주소(msg.sender)의 값을 100으로 설정`}
				</SyntaxHighlighter>

				<pre>{`* 값 읽기 (조회 연산)`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`uint256 myBalance = balances[msg.sender];
// 특정 주소의 값을 읽어오기`}
				</SyntaxHighlighter>

				<pre>{`* 값 삭제 (delete)`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`delete balances[msg.sender];
// 특정 주소의 값을 초기화 (0으로 설정됨)`}
				</SyntaxHighlighter>

				<h3>중첩 매핑 (Nested Mapping)</h3>
				<pre>{`📌 주소별 특정 ID의 권한을 설정 및 조회할 수 있는 중첩 매핑 예제`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract NestedMapping {
    mapping(address => mapping(uint256 => bool)) public permissions;

    function setPermission(address user, uint256 id, bool status) public {
        permissions[user][id] = status;
    }

    function hasPermission(address user, uint256 id) public view returns (bool) {
        return permissions[user][id];
    }
}
`}
				</SyntaxHighlighter>

				<h3>매핑과 구조체(Struct) 결합</h3>
				<pre>{`📌 사용자 정보를 저장하는 구조체와 매핑을 조합한 예제`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StructMapping {
    struct User {
        string name;
        uint256 balance;
    }

    mapping(address => User) public users;

    function setUser(address _addr, string memory _name, uint256 _balance) public {
        users[_addr] = User(_name, _balance);
    }

    function getUser(address _addr) public view returns (string memory, uint256) {
        return (users[_addr].name, users[_addr].balance);
    }
}
`}
				</SyntaxHighlighter>

				<h3>매핑을 사용할 때 주의할 점</h3>
				<pre>{`✔ 매핑은 storage에서만 사용 가능하며, memory 변수로 선언할 수 없음
✔ 반복문을 사용하여 모든 키를 조회할 수 없음 (키 목록을 별도로 관리해야 함)
✔ 매핑의 키를 delete 하면 기본값으로 초기화되며, 완전히 제거되지 않음
✔ 매핑은 기본적으로 0 또는 false 값을 반환하므로, 존재 여부를 체크하려면 별도의 플래그 변수가 필요
`}</pre>
			</div>
		),
	},
	{
		id: 14,
		date: '25/03/2025',
		tags: ['Reference Type', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'STRUCT (Reference Type)',
		content: (
			<div>
				<pre>{`✔️ 여러 개의 변수를 하나의 사용자 정의 데이터 타입으로 묶어 저장하는 자료구조

	* 여러 타입의 변수를 하나의 데이터 구조로 묶을 수 있음
	* storage, memory 키워드를 사용하여 저장 방식 선택 가능
	* 매핑(mapping)과 함께 사용하면 강력한 데이터 저장 기능을 제공
`}</pre>

				<h3>e.g. 구조체를 사용하여 사용자 정보를 저장 및 조회하는 예제</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StructExample {
    struct User {
        string name;
        uint256 age;
        address wallet;
    }
    
    User public user;
    
    function setUser(string memory _name, uint256 _age, address _wallet) public {
        user = User(_name, _age, _wallet);
    }
    
    function getUser() public view returns (string memory, uint256, address) {
        return (user.name, user.age, user.wallet);
    }
}
`}
				</SyntaxHighlighter>

				<h3>구조체를 배열로 선언하고, push()를 사용하여 데이터 추가 가능</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StructArray {
    struct User {
        string name;
        uint256 age;
    }
    
    User[] public users;
    
    function addUser(string memory _name, uint256 _age) public {
        users.push(User(_name, _age));
    }
}
`}
				</SyntaxHighlighter>

				<h3>매핑과 구조체 결합-</h3>
				<pre>{`📌 사용자의 address를 키로 하여 데이터를 효율적으로 관리 가능`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StructMapping {
    struct User {
        string name;
        uint256 balance;
    }
    
    mapping(address => User) public users;
    
    function setUser(string memory _name, uint256 _balance) public {
        users[msg.sender] = User(_name, _balance);
    }
    
    function getUser(address _addr) public view returns (string memory, uint256) {
        return (users[_addr].name, users[_addr].balance);
    }
}
`}
				</SyntaxHighlighter>

				<h3>구조체 내부 값 수정</h3>
				<pre>{`📌 user.age = _newAge;를 통해 구조체 내부 값 수정 가능`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StructUpdate {
    struct User {
        string name;
        uint256 age;
    }
    
    User public user;
    
    function setUser(string memory _name, uint256 _age) public {
        user = User(_name, _age);
    }
    
    function updateAge(uint256 _newAge) public {
        user.age = _newAge;
    }
}
`}
				</SyntaxHighlighter>

				<h3>구조체 삭제 (delete)</h3>
				<pre>{`📌 delete 키워드를 사용하여 구조체 값을 초기화할 수 있음`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StructDelete {
    struct User {
        string name;
        uint256 age;
    }
    
    User public user;
    
    function setUser(string memory _name, uint256 _age) public {
        user = User(_name, _age);
    }
    
    function deleteUser() public {
        delete user; // 모든 필드를 초기화 (name = "", age = 0)
    }
}`}
				</SyntaxHighlighter>

				<h3>메모리 구조체 사용 (임시 데이터 저장)</h3>
				<pre>{`📌 메모리에서만 사용되는 구조체는 가스 비용 절감 효과가 있음`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract MemoryStruct {
    struct User {
        string name;
        uint256 age;
    }
    
    function getUser(string memory _name, uint256 _age) public pure returns (User memory) {
        return User(_name, _age);
    }
}
`}
				</SyntaxHighlighter>

				<h3>저장소(Storage) 구조체 사용 (영구 데이터 저장)</h3>
				<pre>{`📌 저장소(storage)에 데이터를 저장하면 영구적으로 보관됨`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StorageStruct {
    struct User {
        string name;
        uint256 age;
    }
    
    User public user;
    
    function setUser(string memory _name, uint256 _age) public {
        user = User(_name, _age);
    }
}
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 15,
		date: '25/03/2025',
		tags: ['Reference Type', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'BYTES (Reference Type)',
		content: (
			<div>
				<pre>{`✔️ 이진 데이터(Binary Data)를 저장하는 데 사용됩니다. 
✔️ bytes 타입은 크게 고정 크기 바이트 배열과 가변 크기 바이트 배열로 나뉩니다.`}</pre>

				<h3>BYTES 특징</h3>
				<pre>{`
* bytes 타입은 UTF-8 문자열을 바이트 형태로 저장할 수 있음
* 고정 크기(bytes1 ~ bytes32)와 가변 크기(bytes) 배열이 존재
* string보다 효율적인 저장 및 조작이 가능하며, 가스 비용 절감 효과가 있음
`}</pre>

				<h3>고정 크기 바이트 배열 (bytes1 ~ bytes32)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`bytes32 public fixedBytes = 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef;`}
				</SyntaxHighlighter>

				<pre>{`
📌 특징

	* bytes1부터 bytes32까지 1~32바이트 크기의 고정 크기 배열 제공
	* 더 적은 가스를 사용하며, 연산 속도가 빠름
	* 크기가 정해져 있어 push()나 pop() 등의 조작이 불가능
`}</pre>

				<h3>가변 크기 바이트 배열 (bytes)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`bytes public dynamicBytes = "Hello";`}
				</SyntaxHighlighter>

				<pre>{`
📌 특징

	* bytes는 동적 크기의 바이트 배열
	* string과 유사하지만, 더 적은 가스를 사용하며 개별 바이트 접근 가능
	* push(), pop() 등을 사용하여 크기를 조정할 수 있음
`}</pre>

				<h3>바이트 배열 길이 확인 (.length)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract BytesLength {
    function getLength(bytes memory data) public pure returns (uint) {
        return data.length;
    }
}
`}
				</SyntaxHighlighter>

				<h3>특정 바이트 값 접근</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract BytesAccess {
    function getByteAt(bytes memory data, uint256 index) public pure returns (bytes1) {
        require(index < data.length, "Index out of bounds");
        return data[index];
    }
}
`}
				</SyntaxHighlighter>

				<h3>바이트 배열 추가 (push())</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`contract BytesPush {
    bytes public data;

    function addByte(bytes1 newByte) public {
        data.push(newByte);
    }
}
`}</SyntaxHighlighter>

				<h3>바이트 배열 삭제 (pop())</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`contract BytesPop {
    bytes public data = "Hello";

    function removeLast() public {
        data.pop();
    }
}
`}</SyntaxHighlighter>

				<h3>string → bytes 변환</h3>
				<pre>{`📌 bytes(str)를 사용하여 문자열을 바이트 배열로 변환 가능`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StringToBytes {
    function convertToBytes(string memory str) public pure returns (bytes memory) {
        return bytes(str);
    }
}
`}
				</SyntaxHighlighter>

				<h3>bytes → string 변환</h3>
				<pre>{`📌 string(byteData)를 사용하여 바이트 배열을 다시 문자열로 변환 가능`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract BytesToString {
    function convertToString(bytes memory byteData) public pure returns (string memory) {
        return string(byteData);
    }
}
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 16,
		date: '26/03/2025',
		tags: ['Variables', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Variables',
		content: (
			<div>
				<pre>{`✔️ 변수를 선언할 때 데이터 타입과 가시성(Visibility) 을 명시해야 함
✔️ 선언된 변수는 블록체인 상에 저장되며, public으로 선언된 변수는 자동으로 getter 함수가 생성됨

`}</pre>

				<h3>{`변수 선언 형식 : <데이터 타입> <가시성> <변수명> = <초기값>;`}</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`uint256 public number = 10;
string private name = "Solidity"; // 부호 없는 256비트 정수형 데이터 타입
address internal owner;
bool public isActive = true;`}
				</SyntaxHighlighter>

				<h3>변수의 가시성(Visibility)</h3>
				<pre>{`* public
	- 외부 및 내부에서 접근 가능 (자동으로 getter 함수 생성됨)
	- 접근 가능 범위: 모든 컨트랙트, 외부 계정

* private	
	- 오직 선언된 컨트랙트 내부에서만 접근 가능
	- 접근 가능 범위: 선언된 컨트랙트 내부

* internal	
	- 선언된 컨트랙트 및 상속받은 컨트랙트에서 접근 가능
	- 접근 가능 범위: 내부 및 상속받은 컨트랙트

* external	
	- 외부에서만 접근 가능 (변수에선 사용 불가, 함수에만 사용 가능)
	- 접근 가능 범위: 외부 컨트랙트, 외부 계정
`}</pre>

				<h3>public 예시</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract PublicExample {
    uint256 public value = 100;
}

// 자동으로 생성된 getter 함수 → value()를 호출하면 100 반환
`}
				</SyntaxHighlighter>

				<h3>private 예시</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract PrivateExample {
    uint256 private secretValue = 42;

    function reveal() public view returns (uint256) {
        return secretValue; // 내부에서만 접근 가능
    }
}

// 외부에서는 직접 접근할 수 없으며, 함수를 통해서만 값을 반환 가능`}
				</SyntaxHighlighter>

				<h3>internal 예시</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract InternalExample {
    uint256 internal internalValue = 200;
}

contract DerivedContract is InternalExample {
    function getValue() public view returns (uint256) {
        return internalValue; // 상속받은 컨트랙트에서 접근 가능
    }
}

// 상속받은 컨트랙트에서 내부 값을 직접 접근 가능
`}
				</SyntaxHighlighter>

				<h3>상태 변수(State Variables) </h3>
				<pre>{`* 저장 위치: 블록체인 저장소(Storage)에 저장
* 지속성: 영구적으로 저장 (트랜잭션 후에도 유지)
* 가스 비용: 가스 비용 발생 (쓰기, 읽기 시)
* 선언 위치: 컨트랙트 내부에서 선언`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`contract StateVariableExample {
    uint256 public storedValue = 10; // 상태 변수
}

// or

contract StorageExample {
    struct User {
        string name;
        uint256 age;
    }

    User public user;

    function setUser(string memory _name, uint256 _age) public {
        user = User(_name, _age); // 상태 변수를 storage에 저장
    }

    function updateAge(uint256 _newAge) public {
        User storage storedUser = user; // 상태 변수에 직접 접근
        storedUser.age = _newAge; // 값 수정 (영구 저장)
    }
}

// 컨트랙트 전체에서 접근 가능, 블록체인에 저장됨
`}</SyntaxHighlighter>

				<h3>로컬 변수(Local Variables)</h3>
				<pre>{`* 저장 위치: 메모리(Memory) 또는 스택(Stack)에 저장
* 지속성: 함수 실행 시에만 존재, 실행 후 소멸
* 가스 비용: 가스 비용 적음 (일시적 사용)
* 선언 위치: 함수 내부에서 선언`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`contract LocalVariableExample {
    function calculateSum(uint256 a, uint256 b) public pure returns (uint256) {
        uint256 sum = a + b; // 로컬 변수
        return sum;
    }
}

// or 

contract MemoryExample { 
	struct User { 
		string name; 
		uint256 age; 
	} 
	
	User public user; 
	
	function viewUser() public view returns (string memory, uint256) {
		 User memory tempUser = user; // 메모리로 복사 
		 return (tempUser.name, tempUser.age); // 읽기 전용 
	} 
}

// 함수 내에서만 사용되며, 함수 종료 후 메모리에서 제거됨
`}</SyntaxHighlighter>

				<h3>상수(Constant)</h3>
				<pre>{`* 배포 시점에 고정된 값
* 수정 불가능
* 가스 비용 절감 → 읽기 연산에만 사용되므로 가스 비용이 줄어듦
* e.g. 100, "hello" (단순 숫자 상수 (MAX_SUPPLY, FEE_PERCENT, "VERSION" 등)
`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ConstantExample {
    uint256 public constant FIXED_VALUE = 100;
}
`}
				</SyntaxHighlighter>

				<h3>불변(Immutable)</h3>
				<pre>{`* 배포 시점에서만 설정 가능, 이후에는 변경 불가능
* 배포 이후 값이 변경되지 않는 특성 → 보안성이 향상됨
* e.g. msg.sender, block.timestamp, 외부입력 등 
   (배포 시점에만 알 수 있는 값: 계약 소유자 주소, 초기화 값 등)
`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ImmutableExample {
    address public immutable owner;

    constructor() {
        owner = msg.sender; // 배포 시점에서만 값 설정 가능
    }
}
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 17,
		date: '26/03/2025',
		tags: ['Function', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Function',
		content: (
			<div>
				<pre>{`✔️ 특정 작업을 수행하는 코드 블록
✔️ 외부 호출 또는 내부 로직에서 사용
✔️ 상태 변수에 접근하거나 외부에서 데이터를 가져오는 데 사용됨
✔️ 가시성(Visibility) 및 상태 변경자(State Mutability)를 설정 가능

`}</pre>

				<h3>함수의 기본 구성 요소</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`function functionName(<parameters>) <visibility> <modifier> returns (<returnType>) {
    // 실행할 코드
}

function add(uint256 a, uint256 b) public pure returns (uint256) {
    return a + b;
}`}
				</SyntaxHighlighter>
				<pre>{`* function: 함수 선언 키워드
* add: 함수 이름
* (uint256 a, uint256 b): 입력 파라미터 (타입과 이름)
* public: 가시성 지정자
* pure: 상태 변경자 (상태 변경 없음)
* returns (uint256): 반환 타입
`}</pre>

				<h3>함수의 가시성(Visibility)</h3>
				<pre>{`* public
	- 외부 및 내부에서 접근 가능 (기본적으로 외부에서 호출 가능)
	- 접근 가능 범위: 모든 컨트랙트, 외부 계정

* private	
	- 선언된 컨트랙트 내부에서만 접근 가능
	- 접근 가능 범위: 선언된 컨트랙트 내부

* internal	
	- 선언된 컨트랙트 및 상속받은 컨트랙트에서 접근 가능
	- 접근 가능 범위: 내부 및 상속받은 컨트랙트

* external	
	- 외부에서만 접근 가능 (내부 호출 불가)
	- 접근 가능 범위: 외부 컨트랙트, 외부 계정
`}</pre>

				<h3>가시성 예시</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract VisibilityExample {
    function publicFunction() public pure returns (string memory) {
        return "Public";
    }

    function privateFunction() private pure returns (string memory) {
        return "Private";
    }

    function internalFunction() internal pure returns (string memory) {
        return "Internal";
    }

    function externalFunction() external pure returns (string memory) {
        return "External";
    }
}`}
				</SyntaxHighlighter>

				<h3>상태 변경자(State Mutability)</h3>
				<pre>
					{`* view: 상태 변수의 읽기만 허용 (가스 비용 없음)
* pure: 상태 변수의 읽기 및 쓰기 모두 금지 (가스 비용 없음)
* payable: 이더리움을 받을 수 있는 함수 (특정한 금액을 받기 위한 함수)
`}
				</pre>

				<h3>상태 변경자 예시</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StateMutabilityExample {
    uint256 public value = 10;

    function readValue() public view returns (uint256) {
        return value; // 읽기만 가능
    }

    function calculateSum(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b; // 상태 변수 접근 없음
    }

    function deposit() public payable {
        // 이더를 받을 수 있는 함수
    }
}`}
				</SyntaxHighlighter>

				<h3>반환값(Return Value)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`contract ReturnExample {
    function getDouble(uint256 number) public pure returns (uint256) {
        return number * 2;
    }

    function getUser() public pure returns (string memory, uint256) {
        return ("Alice", 30);
    }
}`}</SyntaxHighlighter>

				<h3>함수 호출 방법 - 내부 호출 (Internal Call)</h3>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function callInternal() public pure returns (string memory) {
    return internalFunction();
}

// 내부에서 internalFunction()을 직접 호출할 수 있음
`}</SyntaxHighlighter>

				<h3>외부 호출 (External Call)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`function callExternal() public view returns (string memory) {
    return this.externalFunction();
}

// 외부 함수 호출은 this.externalFunction() 형식으로 접근해야 함
`}
				</SyntaxHighlighter>

				<h3>접근 제어자 (Modifiers) - Modifier 선언 및 사용</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ModifierExample {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function secureFunction() public onlyOwner {
        // 소유자만 실행 가능
    }
}

// modifier는 함수를 실행하기 전에 특정 조건을 검사하는 데 유용함
`}
				</SyntaxHighlighter>

				<h3>함수 오버로딩 (Overloading)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract OverloadingExample {
    function getValue() public pure returns (uint256) {
        return 1;
    }

    function getValue(uint256 _value) public pure returns (uint256) {
        return _value;
    }
}

//동일한 함수 이름을 사용하지만, 매개변수에 따라 다른 함수가 호출됨
`}
				</SyntaxHighlighter>

				<h3>storage</h3>
				<pre>{`* 저장 위치:	블록체인의 영구 저장소 (상태 변수)
* 지속성: 트랜잭션 이후에도 유지됨
* 가스 비용: 읽기/쓰기 시 비용이 높음
* 변경 가능 여부: 변경 가능
* 용도: 상태 변수에 직접 접근 및 저장`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract StorageExample {
    struct User {
        string name;
        uint256 balance;
    }

    User public user;

    function updateUser(string memory _name, uint256 _balance) public {
        User storage storedUser = user; // 상태 변수를 직접 참조 (영구 저장소)
        storedUser.name = _name;       // 영구적으로 상태 변경
        storedUser.balance = _balance;
    }
}

// User storage storedUser = user; → 상태 변수를 직접 참조
// 함수가 종료된 후에도 변경 사항이 영구적으로 블록체인에 저장됨
`}
				</SyntaxHighlighter>

				<h3>memory</h3>
				<pre>{`* 저장 위치:	임시 메모리 (함수 실행 중에만 유지)
* 지속성: 함수 실행 종료 후 소멸됨
* 가스 비용: 상대적으로 비용이 저렴
* 변경 가능 여부: 변경 가능
* 용도: 임시 데이터 처리 (주로 계산에 필요한 임시 데이터를 저장하거나, 상태 변수의 복사본을 만들 때 사용)`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract MemoryExample {
    struct User {
        string name;
        uint256 balance;
    }

    User public user;

    function viewUser() public view returns (string memory, uint256) {
        User memory tempUser = user; // 메모리로 복사
        return (tempUser.name, tempUser.balance);
    }
}

// User memory tempUser = user; → 상태 변수를 메모리로 복사
// 수정해도 원본 상태 변수는 변경되지 않음
// 함수가 끝나면 복사된 데이터는 삭제됨
`}
				</SyntaxHighlighter>

				<h3>calldata: 외부 입력 처리 (Read-Only External Input)</h3>
				<pre>{`* 저장 위치: 함수 호출 시 외부 입력 데이터 (읽기 전용)
* 지속성: 함수 호출이 끝나면 소멸됨
* 가스 비용: 가장 저렴 (읽기 전용)
* 변경 가능 여부: 변경 불가능
* 용도: 외부 입력값 처리 (예: 함수 매개변수)`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract CalldataExample {
    function logMessage(string calldata message) external pure returns (string memory) {
        return message; // calldata에서 읽기만 가능
    }
}

// calldata는 입력받은 데이터를 변경할 수 없음
// 외부 호출 시 사용되며, 가스 비용이 가장 효율적
// 주로 대량의 입력 데이터 처리에 사용됩니다.
`}
				</SyntaxHighlighter>

				<h3>storage vs memory vs calldata</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract DataLocationExample {
    uint256[] public numbers;

    // 상태 변수(numbers)에 값을 저장 (영구 저장소)
    function addNumber(uint256 _number) public {
        numbers.push(_number);
    }

    // 상태 변수를 참조 (영구적으로 변경)
    function updateFirstNumber(uint256 _newNumber) public {
        uint256[] storage storedNumbers = numbers;
        storedNumbers[0] = _newNumber; // 상태 변수 값 변경
    }

    // 상태 변수 복사 (임시 데이터로 처리)
    function getFirstNumber() public view returns (uint256) {
        uint256[] memory copiedNumbers = numbers;
        return copiedNumbers[0]; // 상태 변수를 복사해서 반환
    }

    // 외부 데이터 입력 처리 (읽기 전용)
    function logExternalData(uint256[] calldata externalData) external pure returns (uint256) {
        return externalData[0]; // 외부 입력 데이터를 반환 (변경 불가)
    }
}

// storage: 상태 변수를 직접 참조하고 값 변경
// memory: 상태 변수를 복사해 임시로 사용 (원본 데이터 변경 X)
// calldata: 외부로부터 받은 데이터를 읽기 전용으로 처리
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 18,
		date: '26/03/2025',
		tags: ['Loop', 'Conditional Statement', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Conditional Statement & Loop',
		content: (
			<div>
				<h3>반복문 사용 시 주의사항 (가스 비용 최적화)</h3>
				<pre>
					{`⚠️ 가스 비용 고려: 반복문은 실행 횟수에 비례하여 가스 비용이 증가함
⚠️ 무한 루프 방지: 무한 루프 발생 시, 트랜잭션이 실패하고 모든 가스가 소모됨
⚠️ 최적화된 데이터 구조 사용: 반복문 대신 mapping이나 event를 활용해 가스 비용 절감 가능
`}
				</pre>

				<h3>조건문 (Conditional Statements) - if/else</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ConditionalExample {
    function checkValue(uint256 value) public pure returns (string memory) {
        if (value > 100) {
            return "Value is greater than 100";
        } else if (value == 100) {
            return "Value is exactly 100";
        } else {
            return "Value is less than 100";
        }
    }
}`}
				</SyntaxHighlighter>

				<h3>조건문 - 삼항 연산자 (Ternary Operator)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`function ternaryCheck(uint256 value) public pure returns (string memory) {
    return (value >= 50) ? "Pass" : "Fail";
}`}
				</SyntaxHighlighter>

				<h3>반복문 (Loops) - for</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract LoopExample {
    function sumUpTo(uint256 limit) public pure returns (uint256) {
        uint256 sum = 0;
        for (uint256 i = 1; i <= limit; i++) {
            sum += i;
        }
        return sum;
    }
}`}
				</SyntaxHighlighter>

				<h3>반복문 (Loops) - while</h3>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`function sumWhile(uint256 limit) public pure returns (uint256) {
    uint256 sum = 0;
    uint256 i = 1;
    while (i <= limit) {
        sum += i;
        i++;
    }
    return sum;
}`}</SyntaxHighlighter>

				<h3>반복문 제어 키워드 break/continue</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// 반복문을 즉시 종료
						
function breakExample(uint256 limit) public pure returns (uint256) {
    uint256 sum = 0;
    for (uint256 i = 1; i <= limit; i++) {
        if (i == 5) {
            break; // i가 5가 되면 반복 종료
        }
        sum += i;
    }
    return sum;
}
`}</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 다음 반복으로 건너뛰기

function continueExample(uint256 limit) public pure returns (uint256) {
    uint256 sum = 0;
    for (uint256 i = 1; i <= limit; i++) {
        if (i % 2 == 0) {
            continue; // 짝수는 건너뜀
        }
        sum += i;
    }
    return sum;
}
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 19,
		date: '26/03/2025',
		tags: ['Event', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Event',
		content: (
			<div>
				<pre>
					{`✔️ 이벤트(Event) 는 스마트 컨트랙트와 외부 애플리케이션(예: DApp 또는 프론트엔드) 간의 통신을 위한 메커니즘
✔️ 스마트 컨트랙트 내에서 발생한 특정 동작을 트랜잭션 로그(Logs) 로 저장 (영구 저장은 아니지만 검색 가능)
✔️ 해당 로그는 이더리움 블록체인에 저장되어 외부에서 읽기 가능
✔️ 스마트 컨트랙트와 외부 애플리케이션 간의 소통에 사용됨

`}
				</pre>

				<h3>가스 비용 최적화와 이벤트</h3>
				<pre>{`* 이벤트는 가스 비용이 낮음 (상태 변수에 데이터를 저장하는 것보다 효율적)
* 로그로 저장되므로, 상태 저장 비용 없이 외부에서 데이터를 추적할 수 있음
* 복잡한 데이터 저장 대신 이벤트를 활용해 가스 비용을 줄이는 것이 일반적`}</pre>

				<h3>이벤트 선언</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract EventExample {
    event ValueChanged(uint256 oldValue, uint256 newValue);
}

// ValueChanged 이벤트는 값이 변경될 때 트리거됨`}
				</SyntaxHighlighter>

				<h3>이벤트 발생 (emit)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract EventExample {
    uint256 public value;

    event ValueChanged(uint256 oldValue, uint256 newValue);

    function updateValue(uint256 newValue) public {
        uint256 oldValue = value;
        value = newValue;
        emit ValueChanged(oldValue, newValue); // 이벤트 발생
    }
}

//이벤트 로그가 블록체인에 기록되어 외부 애플리케이션이 감지할 수 있음`}
				</SyntaxHighlighter>

				<h3>이벤트 필터링 (Indexed Parameters)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`contract IndexedEventExample {
    event Transfer(address indexed from, address indexed to, uint256 amount);

    function transfer(address to, uint256 amount) public {
        emit Transfer(msg.sender, to, amount);
    }
}

// indexed 키워드를 사용하면 해당 필드를 기준으로 값 타입(value types)을 빠르게 검색/필터링 가능
`}</SyntaxHighlighter>

				<h3>외부 애플리케이션에서 필터링 예시 ⬆️</h3>
				<pre>{`* from 주소로 필터링(topics 영역에서 조회 가능)
* 특정 amount 이상의 트랜잭션 조회 가능(amount는 indexed가 아니라서 이벤트 로그 전체를 다 훑어야 합니다.)
⚠️⚠️⚠️ 인덱스 제한: 최대 3개의 인덱스 필드만 설정 가능`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 다음 반복으로 건너뛰기

function continueExample(uint256 limit) public pure returns (uint256) {
    uint256 sum = 0;
    for (uint256 i = 1; i <= limit; i++) {
        if (i % 2 == 0) {
            continue; // 짝수는 건너뜀
        }
        sum += i;
    }
    return sum;
}
`}
				</SyntaxHighlighter>

				<h3>이벤트 활용 사례</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// 📌 상태 변경 로그 기록
// 스마트 컨트랙트 상태가 변경될 때 기록합니다.

event StateChanged(string oldState, string newState);
`}</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// 📌 거래 기록 (Transaction Log)
// 트랜잭션 기록과 함께 외부 애플리케이션이 변화를 감지하도록 사용됩니다.

event PaymentReceived(address sender, uint256 amount);
`}</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// 📌 액세스 제어 로그
// 권한 변경이나 액세스 제어 시 발생하는 이벤트

event AccessGranted(address indexed user, string role);
`}</SyntaxHighlighter>

				<h3>트랜잭션 로그에서 이벤트 확인</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// Hardhat 콘솔에서 조회하기

const tx = await contract.updateValue(42);
const receipt = await tx.wait();
console.log(receipt.events);
`}</SyntaxHighlighter>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 이벤트 필터링 예시 (Ethers.js)

contract.on("ValueChanged", (oldValue, newValue) => {
  console.log(\`Value changed from \${oldValue} to \${newValue}\`);
});`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 20,
		date: '26/03/2025',
		tags: ['Modifiers', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: '접근 제어자(Modifiers)',
		content: (
			<div>
				<pre>
					{`✔️ 함수 실행 전에 특정 조건을 검사하거나, 공통적인 동작을 재사용 가능하게 만드는 기능
✔️ 주로 접근 제어, 상태 확인, 재사용 가능한 코드 작성에 사용
`}
				</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract BasicModifierExample {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _; // 함수를 실행할 위치
    }

    function restrictedFunction() public onlyOwner {
        // 오직 소유자만 실행 가능
    }
}

// modifier onlyOwner() → 특정 조건(msg.sender == owner)이 충족되어야 실행
// _ → 해당 위치에서 원래의 함수 코드가 실행됨
`}
				</SyntaxHighlighter>

				<h3>Modifier의 장점</h3>
				<pre>
					{`✅ 코드 재사용성: 반복되는 조건문을 Modifier로 정의해 중복 코드 제거
✅ 가독성 향상: 조건을 한눈에 쉽게 파악할 수 있음
✅ 보안 강화: 접근 제어나 상태 검증 등을 명확하게 설정 가능
✅ 가스 비용 최적화: 코드 중복 제거로 가스 비용 절감`}
				</pre>

				<h3>Modifier의 활용 사례 - 접근 제어 (Access Control)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 특정 사용자만 함수를 실행할 수 있도록 제한

modifier onlyAdmin(address _admin) {
    require(msg.sender == _admin, "Not authorized");
    _;
}`}
				</SyntaxHighlighter>

				<h3>Modifier의 활용 사례 - 상태 확인 (State Validation)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// 특정 조건이 충족되었을 때만 함수 실행

modifier inProgress(bool _status) {
    require(_status == true, "Operation not allowed");
    _;
}`}</SyntaxHighlighter>

				<h3>Modifier의 활용 사례 - 재진입 방지 (Reentrancy Guard)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 스마트 컨트랙트 재진입 공격 방지 (Reentrancy Attack Prevention)

contract ReentrancyGuard {
    bool private locked = false;

    modifier noReentrancy() {
        require(!locked, "No reentrancy allowed");
        locked = true;
        _;
        locked = false;
    }

    function withdraw() public noReentrancy {
        // 재진입 방지된 함수
    }
}`}
				</SyntaxHighlighter>

				<h3>Modifier에서 인자 사용하기</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`contract ParameterizedModifier {
    mapping(address => bool) public whitelist;

    modifier onlyWhitelisted(address _user) {
        require(whitelist[_user], "User not whitelisted");
        _;
    }

    function setWhitelist(address _user, bool _status) public {
        whitelist[_user] = _status;
    }

    function restrictedFunction() public onlyWhitelisted(msg.sender) {
        // 화이트리스트에 등록된 사용자만 실행 가능
    }
}`}</SyntaxHighlighter>

				<h3>Modifier와 다중 사용</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`contract MultiModifierExample {
    address public owner;
    bool public paused = false;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can execute");
        _;
    }

    modifier whenNotPaused() {
        require(!paused, "Contract is paused");
        _;
    }

    function changeState() public onlyOwner whenNotPaused {
        // 오직 소유자만, 계약이 중지되지 않은 경우 실행 가능
    }
}`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 21,
		date: '26/03/2025',
		tags: ['Error', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Error handling',
		content: (
			<div>
				<pre>
					{`✔️ require() → 조건 검사 및 입력값 검증
✔️ revert() → 명시적으로 오류 발생
✔️ assert() → 내부 논리 오류 체크 (코드의 일관성 유지)
✔️ try/catch → 외부 호출 실패를 처리

`}
				</pre>

				<h3>require() 함수</h3>
				<pre>{`📌 require()는 주로 입력 값 검증이나 특정 조건이 만족되지 않을 경우 사용됩니다.`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`require(condition, "Error message");

// condition: 참이어야 하는 조건
// Error message: 조건이 참이 아닐 경우 출력되는 메시지

e.g.

contract RequireExample {
    uint256 public value;

    function setValue(uint256 _value) public {
        require(_value > 0, "Value must be greater than 0");
        value = _value;
    }
}

// _value가 0 이하일 경우, 트랜잭션을 중단하고 "Value must be greater than 0" 에러 메시지를 반환`}
				</SyntaxHighlighter>

				<h3>revert() 함수</h3>
				<pre>{`📌 revert()는 특정 조건이 충족되지 않을 때 명시적으로 오류를 발생시킵니다.`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`revert("Error message");

e.g.

contract RevertExample {
    function withdraw(uint256 amount, uint256 balance) public pure {
        if (amount > balance) {
            revert("Insufficient balance");
        }
        // 인출 로직
    }
}

// 출금하려는 금액이 잔액보다 많으면 오류 발생
// 가스 낭비 방지 및 상태 변경 방지`}
				</SyntaxHighlighter>

				<h3>assert() 함수</h3>
				<pre>{`📌 assert()는 주로 내부 오류나 불변성(Invariant) 검사를 위해 사용됩니다. 실패 시 모든 가스를 소모하므로 주의해야 합니다.`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`assert(condition);

e.g.

contract AssertExample {
    uint256 public value = 1;

    function increment() public {
        value++;
        assert(value != 0); // 오버플로우 방지 (Solidity 0.8.x 이상에서는 자동 체크됨)
    }
}
📌 설명:

// 코드 로직의 버그나 계약 내 일관성 유지를 위해 사용`}
				</SyntaxHighlighter>

				<h3>try/catch 블록</h3>
				<pre>{`📌 try/catch는 외부 호출이나 저수준 함수 호출에서 발생할 수 있는 실패를 처리합니다.`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`try externalContract.someFunction() returns (returnValue) {
    // 성공 시 실행할 코드
} catch Error(string memory reason) {
    // 실패 시 실행할 코드
}

e.g.

interface ExternalContract {
    function riskyFunction() external;
}

contract TryCatchExample {
    ExternalContract externalContract;

    constructor(address _contractAddress) {
        externalContract = ExternalContract(_contractAddress);
    }

    function callExternalFunction() public {
        try externalContract.riskyFunction() {
            // 성공적으로 실행
        } catch Error(string memory reason) {
            // 명시적인 에러 처리
            revert(reason);
        } catch (bytes memory lowLevelData) {
            // 저수준 에러 처리
            revert("Low-level error occurred");
        }
    }
}

// 외부 함수 호출 시 오류 발생 가능성을 대비
// 명시적 에러(catch Error)와 저수준 에러(catch (bytes memory))를 분리 처리`}
				</SyntaxHighlighter>

				<h3>가스 소비 최적화와 에러 처리</h3>
				<pre>{`* require() → 입력값 검사 및 가스 절약에 가장 효율적
* revert() → 특정 조건을 명시적으로 처리, 트랜잭션 중단 및 가스 반환
* assert() → 코드 버그 및 불변성 유지, 실패 시 모든 가스 소모
`}</pre>
			</div>
		),
	},
	{
		id: 22,
		date: '26/03/2025',
		tags: ['Ether Transfer', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Ether Transfer',
		content: (
			<div>
				<pre>
					{`✔️ 주로 지불(Transactions), 입출금(Deposit & Withdrawal) 기능을 구현할 때 사용

* transfer() → 안전한 이더 송금 (가스 제한: 2300)
* send() → 실패 시 반환값으로 성공 여부 확인
* call() → 가장 유연하지만 주의가 필요한 송금 방법`}
				</pre>

				<h3>이더를 받기 위한 설정 (payable 키워드)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract ReceiveEther {
    receive() external payable {}
	// receive() 함수 → 순수 이더 전송 시 호출 (데이터 없이 전송)

    fallback() external payable {}
	// fallback() 함수 → 이더와 함께 데이터가 전송되거나 함수가 없을 때 호출
}`}
				</SyntaxHighlighter>

				<h3>이더 송금 방법 - transfer() 함수</h3>
				<pre>{`* 이더 전송 시 가장 안전한 방법
* 가스 한도: 2300 gas → 상태 변경 로직이 없는 수신자만 사용 가능
* 실패 시 자동으로 트랜잭션이 롤백됨`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract TransferExample {
    function sendEther(address payable recipient) public payable {
        recipient.transfer(msg.value);
    }
}

// 사용 추천: 기본적인 이더 전송 시 사용`}
				</SyntaxHighlighter>

				<h3>이더 송금 방법 - send() 함수</h3>
				<pre>{`* 가스 한도: 2300 gas
* 반환값으로 성공 여부(true/false) 확인 가능
* 실패 시 트랜잭션은 롤백되지 않음 → 명시적으로 처리해야 함`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract TransferExample {
    function sendEther(address payable recipient) public payable {
        recipient.transfer(msg.value);
    }
}

// 사용 추천: 기본적인 이더 전송 시 사용`}
				</SyntaxHighlighter>

				<h3>이더 송금 방법 - call() 함수</h3>
				<pre>{`* 가장 유연하고 강력한 방법
* 가스 제한이 없으며, 원하는 만큼 가스를 전송 가능
* 재진입 공격(Reentrancy Attack)에 취약할 수 있음 → 보안 조치 필요`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract CallExample {
    function sendEther(address payable recipient) public payable {
        (bool sent, ) = recipient.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}

// 사용 추천: 고급 이더 전송, 계약 호출 시 사용 (항상 보안 검토 필요)`}
				</SyntaxHighlighter>

				<h3>이더 송금 시 보안 고려사항</h3>
				<pre>{`📌 재진입 공격 방지 (Reentrancy Attack Protection)`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// call() 사용 시 재진입 공격 방지를 위한 ReentrancyGuard 패턴 사용

contract SecureTransfer {
    bool private locked;

    modifier noReentrancy() {
        require(!locked, "No reentrancy allowed");
        locked = true;
        _;
        locked = false;
    }

    function withdraw(address payable recipient) public payable noReentrancy {
        (bool sent, ) = recipient.call{value: msg.value}("");
        require(sent, "Withdrawal failed");
    }
}`}
				</SyntaxHighlighter>
				<pre>{`📌 최소한의 가스 소비

* transfer() 또는 send() 함수는 가스 소비가 제한되어 있으므로, 외부 호출에 안전
* call() 사용 시 가스 한도 설정 필요`}</pre>

				<h3>이더 잔액 확인</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract BalanceChecker {
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getAddressBalance(address _addr) public view returns (uint256) {
        return _addr.balance;
    }
}

// address.balance → 해당 주소의 잔액 반환 (단위: Wei)`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 23,
		date: '27/03/2025',
		tags: ['Global Variables', 'Global Functions', 'Variables', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Global Variables & Global Functions',
		content: (
			<div>
				<h3>전역 변수(Global Variables) </h3>
				<pre>{`* msg.sender		(type: address) - 현재 함수를 호출한 주체의 주소 (계정 또는 스마트 계약)
* msg.value		(type: uint) - 호출 시 전송된 이더의 양 (wei 단위)
* msg.data			(type: bytes) - 호출 시 전송된 데이터 전체
* tx.origin		(type: address) - 트랜잭션을 시작한 외부 계정 주소 (최초 발신자의 주소 반환)
* block.timestamp	(type: uint) - 현재 블록이 생성된 시간 (초 단위, 유닉스 타임스탬프)
* block.number		(type: uint) - 현재 블록의 번호
* block.prevrandao	(type: uint) - 이전 블록의 난수(random number) 값
* block.gaslimit	(type: uint) - 현재 블록의 가스 한도 (전체 사용 가능한 가스의 양)
* block.coinbase	(type: address) - 현재 블록을 채굴한 채굴자의 주소
* gasleft()		(type: uint) - 현재 실행 중인 함수에 남아 있는 가스량
`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// e.g. block.prevrandao
function getRandom() external view returns (uint256) {
    return uint256(keccak256(abi.encodePacked(block.prevrandao, msg.sender, block.timestamp)));
}
`}
				</SyntaxHighlighter>

				<h3>예제 1: 기본 전역 변수 사용하기</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GlobalVariablesExample {
    address public owner;
    uint256 public sentValue;
    uint256 public timestamp;

    constructor() {
        owner = msg.sender; // 계약을 배포한 주소 저장
    }

    // 이더를 입금하고 관련 데이터를 기록
    function deposit() public payable {
        require(msg.value > 0, "Must send some ether.");
        sentValue = msg.value;           // 송금한 이더 양 기록
        timestamp = block.timestamp;     // 트랜잭션 발생 시간 기록
    }

    // 호출자의 주소 반환
    function getCaller() public view returns (address) {
        return msg.sender;               // 호출한 주소 반환
    }

    // 최초 트랜잭션 발신자 확인
    function getOrigin() public view returns (address) {
        return tx.origin;                // 트랜잭션 시작 주소 반환
    }
}

// msg.sender: 현재 함수를 호출한 주체의 주소 (주로 인증에 사용)
// msg.value: 송금된 이더의 양 (트랜잭션의 입력 값)
// block.timestamp: 현재 블록의 타임스탬프 (예: 시간 기반 조건 설정)
// tx.origin: 최초의 트랜잭션 발신자 (보안 문제로 주의 필요)`}
				</SyntaxHighlighter>

				<h3>취약한 컨트랙트 tx.origin</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 취약한 컨트랙트
contract VulnerableContract {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function withdraw() public {
        // ❌ 취약한 접근 제어
        require(tx.origin == owner, "Not owner");
        
        // 이더 송금 로직 (생략)
    }
}

// 공격자가 에어드랍 이벤트라고 속여서 owner에게 어떤 버튼을 누르면 트랜잭션이 생성되어 무엇을 실행되게 합니다. 

// 사실상 공격자가 만든 컨트랙트
contract AttackContract {
    address public vulnerableContract;

    constructor(address _victim) {
        vulnerableContract = _victim;
    }

    function attack() public {
        // vulnerableContract = VulnerableContract 주소
        (bool success, ) = victimContract.call(
            abi.encodeWithSignature("withdraw()")
        );
        require(success, "Call failed");
    }
}`}
				</SyntaxHighlighter>

				<h3>예제 2: 블록 정보 확인하기</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BlockInfo {
    function getBlockDetails() public view returns (
        uint blockNum, 
        uint prevrandao, 
        uint gasLimit, 
        address miner
    ) {
        return (
            block.number,         // 현재 블록 번호
            block.prevrandao,     // 이전 블록의 난수
            block.gaslimit,       // 블록 가스 한도
            block.coinbase        // 채굴자의 주소
        );
    }
}

// block.number: 현재 블록의 높이
// block.prevrandao: 이전 블록의 난수(블록 생성 시 채굴자(Proof of Work) 또는 검증자(Proof of Stake)가 제공한 난수 값)
	// Ethereum 2.0 (Proof of Stake) 업그레이드 이후 block.difficulty를 대체.
// block.gaslimit: 해당 블록에서 사용할 수 있는 최대 가스량
// block.coinbase: 해당 블록을 채굴한 채굴자의 주소`}
				</SyntaxHighlighter>

				<h3>전역 함수(Global Functions)</h3>
				<pre>{`* gasleft()		현재 트랜잭션에서 남아 있는 가스 양 확인
* keccak256()		입력된 데이터를 해시 처리 (SHA3)
* blockhash(uint)	특정 블록 번호에 대한 해시 값을 반환 (256개 이내의 최근 블록)

`}</pre>

				<h3>예제 3: 가스 소모 추적하기</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GasTracker {
    uint256 public gasUsed;

    function trackGasUsage() public {
        uint256 initialGas = gasleft();  // 시작 시점 가스량 기록
        uint256 result = 0;

        // 가스를 소모하는 연산 (예: 반복문)
        for (uint i = 0; i < 100; i++) {
            result += i;
        }

        uint256 finalGas = gasleft();    // 종료 시점 가스량 기록
        gasUsed = initialGas - finalGas; // 사용한 가스 계산
    }
}`}
				</SyntaxHighlighter>

				<h3>예제 4: 해시 값 계산하기</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HashGenerator {
    function generateHash(string memory data) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(data)); // 해시 값 생성
    }
}

// keccak256(): 입력된 데이터를 해싱 처리 (암호학적으로 안전한 해시 함수)
`}
				</SyntaxHighlighter>

				<h3>전역 변수와 함수의 활용 시 주의사항</h3>
				<pre>
					{`1. 보안 문제
	* tx.origin은 재진입 공격(Reentrancy attack)에 취약 → 인증에 사용 ❌
	* 대신 msg.sender를 활용하는 것이 권장됩니다.

2. 타임스탬프 조작
	* block.timestamp는 채굴자에 의해 소폭 조작될 수 있음 (약 ±15초) 
		→ 시간 기반 게임 로직에 주의 필요

3. 가스 관리
	* 반복문이나 복잡한 로직은 가스 비용 증가에 주의
	* gasleft() 함수를 활용해 남은 가스량을 실시간으로 추적
`}
				</pre>
			</div>
		),
	},
	{
		id: 24,
		date: '27/03/2025',
		tags: ['Inheritance', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Inheritance',
		content: (
			<div>
				<pre>{`✔️ 기존의 계약(Contract)의 기능을 확장하거나 재사용하기 위한 기능

* 코드 재사용 (DRY: Don't Repeat Yourself)
* 계약의 유지 보수 용이성
* 가독성 향상 및 코드의 명확성 증가
`}</pre>

				<h3>기본 상속 문법</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 부모 계약 (Parent Contract)
pragma solidity ^0.8.0;

contract Parent {
    string public parentName = "Parent Contract";

    function greet() public view returns (string memory) {
        return "Hello from the Parent Contract!";
    }
}

// 자식 계약 (Child Contract)
contract Child is Parent {
    function childGreet() public view returns (string memory) {
        return "Hello from the Child Contract!";
    }
}

// is 키워드를 사용해 부모 계약(Parent Contract)을 상속.
// 부모 계약의 함수나 변수에 접근할 수 있음.
// 상속된 함수와 상태 변수는 별도의 선언 없이도 사용 가능.
`}
				</SyntaxHighlighter>

				<h3>함수 오버라이딩 (Overriding)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 부모 계약
contract Animal {
    function sound() public virtual pure returns (string memory) {
        return "Generic Animal Sound";
    }
}

// 자식 계약
contract Dog is Animal {
    function sound() public pure override returns (string memory) {
        return "Bark";
    }
}

// virtual: 부모 계약에서 오버라이딩 가능하도록 설정.
// override: 자식 계약에서 부모 계약의 함수를 재정의할 때 사용.
`}
				</SyntaxHighlighter>

				<h3>다중 상속 (Multiple Inheritance)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract A {
    function getValue() public pure virtual returns (string memory) {
        return "A";
    }
}

contract B {
    function getValue() public pure virtual returns (string memory) {
        return "B";
    }
}

contract C is A, B {
    function getValue() public pure override(A, B) returns (string memory) {
        return "C";
    }
}

// 상속 우선순위는 상속 선언 순서에 따라 결정됩니다.`}
				</SyntaxHighlighter>

				<h3>접근 제어자(Visibility Specifiers)와 상속</h3>
				<pre>{`* public: 상속받은 계약에서 접근 가능
* internal: 상속받은 계약에서 접근 가능 (외부에서는 접근 불가)
* private: 상속받은 계약에서도 접근 불가
`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`contract Base {
    string public publicData = "Public";
    string internal internalData = "Internal";
    string private privateData = "Private";

    function getPrivateData() private pure returns (string memory) {
        return "Only within Base";
    }
}

contract Derived is Base {
    function accessData() public view returns (string memory, string memory) {
        // 접근 가능
        string memory publicVal = publicData;
        string memory internalVal = internalData;

        // 접근 불가 (컴파일 에러 발생)
        // string memory privateVal = privateData;

        return (publicVal, internalVal);
    }
}`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 25,
		date: '27/03/2025',
		tags: ['Interfaces', 'Abstract Contracts', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Interfaces & Abstract Contracts',
		content: (
			<div>
				<h3>Interfaces</h3>
				<pre>{`✔️ 외부 계약(Contract) 이 따를 수 있는 표준 함수 시그니처만 정의하는 계약
✔️ 상태 변수나 구현 로직은 포함할 수 없고, 오직 함수의 선언만 포함할 수 있음

* 함수 정의만 존재하고 구현(Implementation) 은 없습니다.
* 상태 변수는 가질 수 없습니다.
* 모든 함수는 external로 선언되어야 합니다.
* 다른 계약에서 상속받아 구현해야 합니다.
`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`interface IExample {
    function doSomething(uint256 value) external returns (bool);
}`}
				</SyntaxHighlighter>

				<h3>1-1. 인터페이스 정의</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IAnimal {
    function makeSound() external view returns (string memory);
}`}
				</SyntaxHighlighter>

				<h3>1-2. 인터페이스 구현</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IAnimal.sol";

contract Dog is IAnimal {
    function makeSound() external pure override returns (string memory) {
        return "Bark";
    }
}

contract Cat is IAnimal {
    function makeSound() external pure override returns (string memory) {
        return "Meow";
    }
}`}
				</SyntaxHighlighter>

				<h3>1-3. 사용 방법</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IAnimal.sol";

contract AnimalSound {
    function getSound(IAnimal animal) public view returns (string memory) {
        return animal.makeSound();
    }
}`}
				</SyntaxHighlighter>

				<h3>추상 계약 (Abstract Contracts)</h3>
				<pre>{`✔️ 하나 이상의 구현되지 않은 함수(미구현 함수)를 가진 계약
✔️ 기본 로직이나 공통 기능을 정의하고, 이를 상속받은 계약에서 구현하도록 설계

* 직접 배포할 수 없습니다.
* 최소한 하나 이상의 virtual 함수가 존재해야 합니다.
* 상속받은 계약에서 반드시 override 해야 합니다.
`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`abstract contract BaseContract {
    function doTask() public virtual returns (string memory);
}
`}</SyntaxHighlighter>

				<h3>2-1. 추상 계약 정의</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract Animal {
    string public species;

    constructor(string memory _species) {
        species = _species;
    }

    // 가상 함수: 자식 계약에서 반드시 오버라이딩 필요
    function makeSound() public view virtual returns (string memory);
}`}
				</SyntaxHighlighter>

				<h3>2-2. 추상 계약 상속 및 구현</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Animal.sol";

contract Dog is Animal {
    constructor() Animal("Dog") {}

    function makeSound() public pure override returns (string memory) {
        return "Bark";
    }
}

contract Cat is Animal {
    constructor() Animal("Cat") {}

    function makeSound() public pure override returns (string memory) {
        return "Meow";
    }
}`}
				</SyntaxHighlighter>

				<h3>인터페이스 vs 추상 계약 비교</h3>
				<pre>{`인터페이스 (Interface)
	* 상태 변수: ❌ 불가능
	* 함수 구현: ❌ 불가능
	* 함수 선언: ✅ 필수, external로 선언해야 함
	* 상속받는 계약에서의 구현: ✅ 모든 함수 구현 필수
	* 사용 예시: 표준화된 인터페이스 정의 (예: ERC20)

추상 계약 (Abstract Contract)
	* 상태 변수: ✅ 가능
	* 함수 구현: ✅ 가능
	* 함수 선언: ✅ 가능 (virtual/override 선언 가능)
	* 상속받는 계약에서의 구현: ✅ 필요한 함수만 구현하면 됨
	* 사용 예시: 공통 로직을 제공하는 기반 계약으로 활용
`}</pre>

				<h3>언제 Interface를 사용할까?</h3>
				<pre>{`* 외부 컨트랙트와의 상호작용이 목적일 때 (예: IERC20, IERC721)
* 표준 정의만 필요할 때 (기능 구현은 필요 없음)
* 공통된 함수 시그니처만 공유하고 싶을 때
`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`interface IERC20 {
    function transfer(address to, uint amount) external returns (bool);
    function balanceOf(address account) external view returns (uint);
}`}</SyntaxHighlighter>

				<h3>언제 Abstract Contract를 사용할까?</h3>
				<pre>{`* 일부 공통 로직을 미리 구현해두고 싶은 경우
* 하위 컨트랙트에서 부분 구현만 허용하고 싶은 경우
* 상속 구조를 기반으로 코드 재사용을 하고 싶을 때
`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`abstract contract Animal {
    function makeSound() public virtual returns (string memory);
    
    function sleep() public pure returns (string memory) {
        return "Sleeping...";
    }
}`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 26,
		date: '27/03/2025',
		tags: ['Library', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Library',
		content: (
			<div>
				<pre>{`✔️ 재사용 가능한 코드 집합
✔️ 스마트 계약(Contract)과 유사하지만, 상태 변수가 없고, 배포 불가능하며, 오직 함수 집합만을 제공

* 상태 변수를 가질 수 없습니다.
* library 키워드를 사용해 정의합니다.
* pure 또는 view 함수를 주로 포함합니다.
* 스마트 계약에서 직접 호출되거나 using for 구문을 통해 사용할 수 있습니다.
* 내장된 가스 최적화 기능이 적용됩니다.
`}</pre>

				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`library LibraryName {
    function functionName(parameters) public pure returns (type) {
        // Logic here
    }
}`}
				</SyntaxHighlighter>

				<h3>정수 연산 라이브러리 예시</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 라이브러리 정의

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library MathLibrary {
    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    function subtract(uint256 a, uint256 b) public pure returns (uint256) {
        require(b <= a, "Underflow error");
        return a - b;
    }
}`}
				</SyntaxHighlighter>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// 스마트 계약에서 사용하기

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MathLibrary.sol";

contract Calculator {
    function addNumbers(uint256 a, uint256 b) public pure returns (uint256) {
        return MathLibrary.add(a, b);
    }

    function subtractNumbers(uint256 a, uint256 b) public pure returns (uint256) {
        return MathLibrary.subtract(a, b);
    }
}`}
				</SyntaxHighlighter>

				<h3>using for 구문 활용</h3>
				<pre>{`📌 using for 구문은 라이브러리 함수를 특정 데이터 타입에 연결시켜, 메서드 형식으로 사용할 수 있게 해줌

	* 코드의 가독성이 높아짐
	* 특정 데이터 타입에 맞는 함수를 명확하게 사용할 수 있음`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`using LibraryName for Type; // 문법`}
				</SyntaxHighlighter>

				<h3>배열 관련 라이브러리 예시</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// 라이브러리 정의

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library ArrayUtils {
    function findMax(uint256[] memory self) public pure returns (uint256) {
        require(self.length > 0, "Array is empty");
        uint256 max = self[0];
        for (uint256 i = 1; i < self.length; i++) {
            if (self[i] > max) {
                max = self[i];
            }
        }
        return max;
    }

    function sum(uint256[] memory self) public pure returns (uint256) {
        uint256 total = 0;
        for (uint256 i = 0; i < self.length; i++) {
            total += self[i];
        }
        return total;
    }
}`}</SyntaxHighlighter>

				<h3>using for 구문을 활용한 계약</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ArrayUtils.sol";

contract ArrayProcessor {
    using ArrayUtils for uint256[];

    uint256[] private data;

    function addElement(uint256 value) public {
        data.push(value);
    }

    function getMax() public view returns (uint256) {
        return data.findMax();
    }

    function getSum() public view returns (uint256) {
        return data.sum();
    }
}

// using ArrayUtils for uint256[];: uint256[] 타입의 배열에서 findMax()와 sum() 함수를 메서드처럼 호출할 수 있게 설정
// data.findMax(); → 배열 내 최대값 반환
// data.sum(); → 배열 요소의 합 반환`}
				</SyntaxHighlighter>

				<h3>라이브러리 vs. 계약(Contract)의 차이점</h3>
				<pre>
					{`라이브러리 (Library)
	* 상태 변수: ❌ 가질 수 없음
	* 배포 가능성: ❌ 직접 배포 불가
	* 상속: ❌ 상속 불가
	* 재사용성: ✅ 재사용성 높음 (다른 계약에서 쉽게 호출 가능)
	* 가스 비용 최적화: ✅ 최적화됨

스마트 계약 (Contract)
	* 상태 변수: ✅ 가질 수 있음
	* 배포 가능성: ✅ 배포 가능
	* 상속: ✅ 상속 가능
	* 재사용성: ✅ 제한된 범위 내에서 재사용 가능
	* 가스 비용 최적화: ❌ 상대적으로 비용이 높음`}
				</pre>
			</div>
		),
	},
	{
		id: 27,
		date: '28/03/2025',
		tags: ['Struct', 'Mapping', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Advanced Data Types',
		content: (
			<div>
				<h3>구조체의 매핑(Mapping of Structs)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserProfile {
    struct Profile {
        string name;
        uint256 age;
        string email;
    }

    mapping(address => Profile) public profiles;

    // 사용자 정보 등록
    function setProfile(string memory _name, uint256 _age, string memory _email) public {
        profiles[msg.sender] = Profile(_name, _age, _email);
    }

    // 사용자 정보 조회
    function getProfile(address _user) public view returns (string memory, uint256, string memory) {
        Profile memory profile = profiles[_user];
        return (profile.name, profile.age, profile.email);
    }
}

// 매핑(address => Profile): 사용자 주소별로 정보를 저장
// setProfile: 사용자의 정보를 입력
// getProfile: 사용자 정보를 조회
`}
				</SyntaxHighlighter>

				<h3>다중 매핑 구조(Nested Mappings)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PermissionSystem {
    mapping(address => mapping(string => bool)) public permissions;

    // 권한 부여
    function grantPermission(address _user, string memory _role) public {
        permissions[_user][_role] = true;
    }

    // 권한 회수
    function revokePermission(address _user, string memory _role) public {
        permissions[_user][_role] = false;
    }

    // 권한 확인
    function hasPermission(address _user, string memory _role) public view returns (bool) {
        return permissions[_user][_role];
    }
}

// 첫 번째 키: 사용자 주소
// 두 번째 키: 역할(Role)
// 값: 권한 여부 (true/false)
`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 28,
		date: '28/03/2025',
		tags: ['Fallback', 'Receive', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Fallback & Receive Functions',
		content: (
			<div>
				<h3>(function) Receive</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ReceiveExample {
    event Received(address sender, uint amount);

    // 이더 수신 시 호출
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}

// 계약이 명시적으로 이더를 받을 때 호출
// external과 payable로 선언해야 함`}
				</SyntaxHighlighter>

				<h3>(function) Fallback</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FallbackExample {
    event FallbackCalled(address sender, uint amount, bytes data);

    // 정의되지 않은 호출 발생 시 자동 실행
    fallback() external payable {
        emit FallbackCalled(msg.sender, msg.value, msg.data);
    }
}

// external로 선언되어야 함
// 이더 전송이 포함되었다면 payable도 필요
`}
				</SyntaxHighlighter>

				<h3>Receive vs Fallback 차이점</h3>
				<pre>{`Receive
 * 호출 조건: 이더만 전송될 때 (데이터 없이)
 * 선언 방법: receive() external payable
 * 주 용도: 순수 이더 수신 처리

Fallback
 * 호출 조건: 명시된 함수가 없거나 잘못된 함수 호출 시
 * 선언 방법: fallback() external [payable]
 * 주 용도: 데이터 포함 호출 처리, 예외 처리`}</pre>
			</div>
		),
	},
	{
		id: 29,
		date: '28/03/2025',
		tags: ['try/catch', 'Error', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Advanced Error Handling',
		content: (
			<div>
				<h3>try/catch 문법</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ErrorHandlingExample {
    event ErrorCaught(string reason);

    function divide(uint256 a, uint256 b) public pure returns (uint256) {
        require(b != 0, "Cannot divide by zero");
        return a / b;
    }

    function safeDivide(uint256 a, uint256 b) public {
        try this.divide(a, b) returns (uint256 result) {
            // 성공 시 처리
        } catch Error(string memory reason) {
            emit ErrorCaught(reason);
        }
    }
}

// try: 성공적으로 실행될 경우 결과 반환
// catch: 에러 발생 시 처리`}
				</SyntaxHighlighter>

				<h3>사용자 정의 에러(Custom Errors)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CustomErrorExample {
    error NotOwner(address caller);

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // 소유자만 실행 가능한 함수
    function restrictedFunction() public {
        if (msg.sender != owner) {
            revert NotOwner(msg.sender);
        }
    }
}

// error: 에러 정의
// revert: 에러 발생 시 실행 중단 및 에러 반환`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 30,
		date: '31/03/2025',
		tags: ['Setter', 'Getter', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Getter & Setter',
		content: (
			<div>
				<pre>
					{`✔️ Getter 함수: 상태 변수를 조회하는 함수 (자동 생성 가능)
✔️ Setter 함수: 상태 변수를 변경하는 함수 (수동으로 구현해야 함)`}
				</pre>

				<h3>Getter VS Setter</h3>
				<pre>{`✅ Getter
	자동 생성 여부: 상태 변수를 public으로 선언하면 자동 생성됨
	기능: 상태 변수 값을 조회
	함수 유형: view (state 변경 없음)
	예제 코드: function myNumber() public view returns (uint256)
	가스 비용: 무료 (트랜잭션 없음, view 함수)

✅ Setter
	자동 생성 여부: 직접 구현해야 함
	기능: 상태 변수 값을 변경
	함수 유형: public 또는 external (값 변경 가능)
	예제 코드: function setMyNumber(uint256 _newNumber) public
	가스 비용: 비용 발생 (트랜잭션 실행 필요)`}</pre>

				<h3>Getter (조회 함수)</h3>
				<pre>{`📌 public으로 선언된 상태 변수에 대해 자동으로 getter 함수가 생성됩니다.`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Example {
    uint256 public myNumber = 100; // public 변수 (자동 getter 생성)
}`}
				</SyntaxHighlighter>
				<pre>{`📌 자동 생성되는 Getter 함수`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`function myNumber() public view returns (uint256) {
    return myNumber;
}`}
				</SyntaxHighlighter>

				<pre>{`📌 사용 방법`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// Hardhat(ethers.js)
const number = await contract.myNumber();
console.log(number.toString()); // "100"

// myNumber()는 Solidity에서 자동으로 생성된 함수이며, 값을 조회할 수 있습니다.`}
				</SyntaxHighlighter>

				<h3>Setter (설정 함수)</h3>
				<pre>{`📌 상태 변수를 변경할 때 setter 함수를 직접 구현해야 합니다.
📌 Setter 함수는 public이나 external로 선언되며, 상태 변수 값을 변경합니다.`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Example {
    uint256 public myNumber = 100;

    // Setter 함수 (값 변경 가능)
    function setMyNumber(uint256 _newNumber) public {
        myNumber = _newNumber;
    }
}`}
				</SyntaxHighlighter>

				<pre>{`📌 사용 방법`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// Hardhat(ethers.js)
await contract.setMyNumber(500); // 값 변경
const number = await contract.myNumber();
console.log(number.toString()); // "500"`}
				</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 31,
		date: '31/03/2025',
		tags: ['Chai', 'Test', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Test ⚠️',
		content: (
			<div>
				<pre>
					{`✔️ 한 번 배포되면 수정이 불가능
✔️ 배포 전에 철저하게 테스트하는 것이 필수적
✔️ 새로운 수정 컨트랙트를 배포하게 되면, 비용 증가 및 데이터 손실을 초래
✔️ 테스트를 통해 불필요한 연산을 줄이고 최적화된 코드를 작성 (트랜잭션/가스 비용 절감)
✔️ 재진입 공격(Reentrancy), 오버플로우(Overflow), 접근 제어 오류 등의 보안 취약점을 사전에 발견`}
				</pre>

				<h3>e.g.</h3>
				<pre>{`Contract code`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Example {
    uint256 private value;
    address private owner;

    // 이벤트 선언
    event ValueChanged(uint256 newValue);

    // 컨트랙트 배포 시 실행 (초기값 설정)
    constructor() {
        value = 100; // 초기값 100
        owner = msg.sender; // 배포자(소유자) 설정
    }

    // 현재 값 조회 (Getter)
    function getValue() public view returns (uint256) {
        return value;
    }

    // 값 변경 (Setter) - 소유자만 실행 가능
    function setValue(uint256 _newValue) public {
        require(msg.sender == owner, "Only owner can set value");
        value = _newValue;
        emit ValueChanged(_newValue); // 이벤트 발생
    }

    // 소유자 주소 반환
    function getOwner() public view returns (address) {
        return owner;
    }
}`}
				</SyntaxHighlighter>
				<pre>{`Test code`}</pre>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>
					{`// test/Example.test.ts

import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Example Contract', function () {
  let contract: any;
  let owner: any;
  let addr1: any;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const Example = await ethers.getContractFactory('Example');
    contract = await Example.deploy();
    await contract.waitForDeployment();
  });

  it('초기값이 100이어야 합니다.', async function () {
    expect(await contract.getValue()).to.equal(100);
  });

  it('값을 변경할 수 있어야 합니다.', async function () {
    await contract.setValue(500);
    expect(await contract.getValue()).to.equal(500);
  });

  it('소유자만 값을 변경할 수 있어야 합니다.', async function () {
    await expect(contract.connect(addr1).setValue(300)).to.be.revertedWith(
      'Only owner can set value'
    );
  });

  it('값 변경 시 이벤트가 발생해야 합니다.', async function () {
    await expect(contract.setValue(200))
      .to.emit(contract, 'ValueChanged')
      .withArgs(200);
  });
});`}
				</SyntaxHighlighter>
			</div>
		),
	},
]
