import { TilCardType } from '../types'

export const dataSolidity: TilCardType[] = [
	{
		id: 0,
		date: '21/03/2025',
		tags: ['Compile', 'Deploy', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'Compile & Deploy',
		content: (
			<div>
				<h3>1. Compile</h3>
				<pre>{`
컴파일 과정은 Solidity 코드를 EVM이 이해할 수 있도록 변환하는 과정
Solidity 코드를 EVM이 이해할 수 있는 바이트코드(Bytecode)로 변환

-------------------------------------
truffle compile
or
npx hardhat compile​
-------------------------------------

✔ Solidity 소스 코드(.sol) → 바이트코드(.bin)로 변환
✔ ABI(Application Binary Interface) 생성 (.json 파일)
	=> 컴파일 후 생성되는 파일 구조 (build/contracts/or artifacts/)
✔ 컴파일 된 JSON 파일 저장
`}</pre>

				<h3>2. Deploy</h3>
				<pre>{`
배포 과정은 변환된 바이트코드를 블록체인에 올리는 과정

✔ 스마트 컨트랙트 배포 트랜잭션 생성 및 블록체인에 전송
✔ 배포된 컨트랙트 주소 반환
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
				<pre>{`
-------------------------------------
npm install -g truffle
-------------------------------------

Truffle 공식 문서
https://trufflesuite.com/docs/truffle/overview
`}</pre>

				<h3>Project creation</h3>
				<pre>{`
mkdir sample
cd sample
truffle init

-------------------------------------

contracts: solidity로 개발된 스마튼 컨트랙트 소스 파일 폴더
migrations: 스크립트 가능한 파일을 위한 폴더
test: 개발된 컨트랙트를 테스트 하기 위한 폴더
truffle-config.js: truffle 설정 파일
`}</pre>

				<h3>Truffle Develop : 이더리움 클라이언트 실행</h3>
				<pre>{`
-------------------------------------
truffle develop
-------------------------------------

위 명령어를 프로젝트 루트폴더(sample 폴더)에서 실행하면 
10개의 Accounts와 Private Keys 가 리스트업 되면서 
truffle(develop)> 프롬프트가 나타나게 됩니다.
또한 JSON-RPC용(http://127.0.0.1:9545/) 서비스가 제공됩니다.

콘솔 종료 : .exit
`}</pre>

				<h3>스마트 컨트랙트 코드 작성 예시</h3>
				<pre>{`
1. /contracts 폴더에 SimpleContract.sol 파일 생성

2. truffle(develop)> compile
	=> /build 폴더가 생성이 되며 contracts 폴더 아래에 있는 solidity 파일이 json 형태로 변경되어 생성

3. /migrations 폴더에 1_deploy_contracts.js 파일 생성

4. truffle(develop)> migrate
	=> 로컬 블록체인에 컨트랙트가 배포

5. /test 폴더에 SimpleContract.test.js 파일 생성

6. truffle(develop)> test
`}</pre>
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
				<pre>{`
networks: {
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
  }
`}</pre>

				<h3>2. compilers (Solidity 컴파일러 설정)</h3>
				<pre>{`
compilers: {
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
}
`}</pre>

				<h3>mocha (테스트 설정)</h3>
				<pre>{`
mocha: {
  timeout: 100000 // 테스트 실행 시간 제한 (기본값보다 크게 설정 가능)
}
`}</pre>

				<h3>4. db (Truffle DB 설정)</h3>
				<pre>{`
db: {
  enabled: false,  // 기본적으로 비활성화됨
  host: "127.0.0.1",
  adapter: {
    name: "indexeddb",
    settings: {
      directory: ".db"
    }
  }
}
`}</pre>
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
				<pre>{`
mkdir sample-hardhat
cd sample-hardhat
npx hardhat init
-------------------------------------
Create a TypeScript project
-------------------------------------

contracts: solidity로 개발된 스마튼 컨트랙트 소스 파일 폴더
ignition: 배포 모듈을 관리하는 폴더
(이전 버전) scripts: 배포관련 스크립트를 관리하는 폴더
test: 개발된 컨트랙트를 테스트 하기 위한 폴더
hardhat.config.js: hardhat 설정 파일
`}</pre>

				<h3>로컬 블록체인 네트워크 실행</h3>
				<pre>{`
-------------------------------------
npx hardhat node
-------------------------------------
`}</pre>

				<h3>스마트 컨트랙트 코드 작성</h3>
				<pre>{`
1. /contracts 폴더에 SimpleContract.sol 파일 생성

2. npx hardhat compile
	=> 프로젝트 루트 폴더에 artifacts , cache폴더가 생성
		artifacts : Solidity 스마트 컨트랙트를 컴파일한 후 생성된 아티팩트(배포 정보)가 저장됩니다.
		cache : Hardhat이 컴파일된 파일을 캐싱하여, 변경되지 않은 파일을 다시 컴파일하지 않도록 합니다.

3. ignition/modules 폴더에 SimpleContract.ts 파일 생성

4. npx hardhat ignition deploy ignition/modules/SimpleContract.ts     
	=> 로컬 블록체인에 컨트랙트가 배포

5. test 폴더에 SimpleContract.test.ts 파일 생성

6. npx hardhat test
`}</pre>
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
				<pre>{`
Hardhat 실행 시 기본으로 사용할 네트워크 지정 (hardhat, localhost, sepolia 등)
npx hardhat test 또는 npx hardhat deploy 실행 시 이 네트워크를 사용
`}</pre>

				<h3>2. networks (네트워크 설정)</h3>
				<pre>{`
networks: {
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
`}</pre>

				<h3>3. solidity (컴파일러 설정)</h3>
				<pre>{`
solidity: {
  version: "0.8.20",
  settings: {
    optimizer: {
      enabled: true, // 가스 비용 절감을 위해 최적화 활성화
      runs: 200, // 200번 실행을 기준으로 최적화
    },
    evmVersion: "paris", // 이더리움 Merge 이후의 환경을 따름
  },
},
`}</pre>

				<h3>4. paths (폴더 경로 설정)</h3>
				<pre>{`
paths: {
  root: "./",
  sources: "./contracts",
  tests: "./test",
  cache: "./cache",
  artifacts: "./artifacts",
},
`}</pre>

				<h3>5. mocha (테스트 설정)</h3>
				<pre>{`
mocha: {
  timeout: 40000, // 40초 동안 실행되지 않으면 테스트 실패 처리
},
`}</pre>

				<h3>6. gasReporter (가스 리포트 활성화)</h3>
				<pre>{`
gasReporter: {
  enabled: process.env.REPORT_GAS === "true",
  currency: "USD",
  gasPrice: 100,
  coinmarketcap: process.env.COINMARKETCAP_API_KEY,
},


Hardhat에서 실행되는 트랜잭션의 가스 비용을 분석하여 리포트 생성
환경 변수 REPORT_GAS가 "true"일 때만 활성화
CoinMarketCap API를 활용하여 실시간 가스비 변환 가능

-------------------------------------
npm install hardhat-gas-reporter --save-dev
-------------------------------------
`}</pre>

				<h3>7. etherscan (컨트랙트 검증)</h3>
				<pre>{`
etherscan: {
  apiKey: process.env.ETHERSCAN_API_KEY,
},

컨트랙트 검증 실행:
npx hardhat verify --network sepolia <DEPLOYED_CONTRACT_ADDRESS>

-------------------------------------
npm install @nomicfoundation/hardhat-etherscan --save-dev
-------------------------------------
`}</pre>
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
				<pre>{`
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SimpleContract {
    // 1️⃣ 상태 변수 (State Variables)
    string public message;

    // 2️⃣ 생성자 (Constructor)
    constructor(string memory _message) {
        message = _message;
    }

    // 3️⃣ 함수 (Functions)
    function setMessage(string memory _newMessage) public {
        message = _newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
				`}</pre>

				<h3>콘솔 출력</h3>
				<pre>{`
contract Logger {
    event Log(string message);

    function logMessage(string memory _message) public {
        emit Log(_message);
    }
}

				`}</pre>

				<h3>오류 처리</h3>
				<pre>{`
contract ErrorHandling {
    function fail() public pure {
        require(false, "This function always fails");
    }
}
				`}</pre>
			</div>
		),
	},
	{
		id: 6,
		date: '24/03/2025',
		tags: ['Solidity', 'Smart Contract', 'Blockchain'],
		title: 'NUMBER (Value type)',
		content: (
			<div>
				<h3>uint & int</h3>
				<pre>{`
uint256 public positiveNumber = 100; // 0 이상의 정수
uint8 public smallNumber = 255; // 8비트 정수 (0 ~ 255)

int256 public negativeNumber = -50; // 음수도 포함하는 정수
int8 public smallInt = -128; // -128 ~ 127 범위
				`}</pre>

				<h3>uint 범위</h3>
				<pre>{`
uint8: 0 ~ 255
uint16: 0 ~ 65,535
uint32: 0 ~ 4,294,967,295
uint64: 0 ~ 18,446,744,073,709,551,615
uint128: 0 ~ 3.40282366920938463463374607431768211455 × 10³⁸
uint256: 0 ~ (2²⁵⁶ - 1)
				`}</pre>

				<h3>int 범위</h3>
				<pre>{`
int8: -128 ~ 127
int16: -32,768 ~ 32,767
int32: -2,147,483,648 ~ 2,147,483,647
int64: -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807
int128: -1.70141183460469231731687303715884105728 × 10³⁸ ~ 1.70141183460469231731687303715884105728 × 10³⁸
int256: -(2²⁵⁵) ~ (2²⁵⁵ - 1)
				`}</pre>

				<h3>주의사항</h3>
				<pre>{`
* Solidity에서는 0으로 나누는 연산은 require을 사용하여 방지해야 함!

e.g.
	function mod(uint256 a, uint256 b) public pure returns (uint256) {
	require(b > 0, "Cannot divide by zero");
	return a % b;
}
				`}</pre>
			</div>
		),
	},
	{
		id: 7,
		date: '24/03/2025',
		tags: ['Solidity', 'Smart Contract', 'Blockchain'],
		title: 'BOOLEAN (Value type)',
		content: (
			<div>
				<h3>Value type : BOOLEAN</h3>
				<pre>{`
bool public isActive = true;
				`}</pre>

				<h3>e.g.</h3>
				<pre>{`
------------------------------------------

contract Voting {
    bool public votingOpen = true;
    
    function closeVoting() public {
        votingOpen = false;
    }
}

------------------------------------------
				`}</pre>

				<h3>e.g.</h3>
				<pre>{`
------------------------------------------

contract AccessControl {
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
}

------------------------------------------
				`}</pre>
			</div>
		),
	},
	{
		id: 8,
		date: '24/03/2025',
		tags: ['Solidity', 'Smart Contract', 'Blockchain'],
		title: 'ADDRESS (Value type)',
		content: (
			<div>
				<h3>Address type</h3>
				<pre>{`
address public wallet = 0x1234567890abcdef1234567890abcdef12345678;
address payable public recipient = payable(wallet);

address는 20바이트(160비트) 크기를 가짐
특정 계정이나 스마트 컨트랙트 주소를 저장할 때 사용됨
address payable을 사용하면 이더를 송금할 수 있는 주소로 변환 가능
`}</pre>

				<h3>이더 송금 (transfer & send & call)</h3>
				<pre>{`
Address 타입의 주요 기능 (Methods)
	=> Solidity의 address 타입은 내장된 기능(Methods)을 제공하여 주소 관련 작업을 수행할 수 있습니다.

contract SendEther {
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
}

- transfer: 실패 시 자동 revert (가장 안전함)
- send: 실패 시 false 반환 (별도 처리 필요)
- call: 가장 유연하지만 보안 위험이 있음 (외부 컨트랙트 실행 가능)
`}</pre>

				<h3>특정 주소의 이더 잔액 확인</h3>
				<pre>{`
contract CheckBalance {
    function getBalance(address _addr) public view returns (uint256) {
        return _addr.balance;
    }
}
`}</pre>

				<h3>특정 주소가 스마트 컨트랙트인지 확인</h3>
				<pre>{`
contract AddressCheck {
    function isContract(address _addr) public view returns (bool) {
        uint256 codeSize;
        assembly {
            codeSize := extcodesize(_addr)
        }
        return codeSize > 0;
    }
}
				`}</pre>
			</div>
		),
	},
	{
		id: 9,
		date: '24/03/2025',
		tags: ['Solidity', 'Smart Contract', 'Blockchain'],
		title: 'BYTES (Value type)',
		content: (
			<div>
				<h3>Bytes (bytes1 ~ bytes32)</h3>
				<pre>{`
bytes32 public data = "0xabcdef123456";
bytes32 public fixedBytes = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
`}</pre>

				<h3>고정 크기 바이트 배열 (bytes1 ~ bytes32)</h3>
				<pre>{`
- bytes1부터 bytes32까지 1~32바이트 크기의 고정 크기 배열 제공
- 더 적은 가스를 사용하며, 연산 속도가 빠름
`}</pre>

				<h3>가변 크기 바이트 배열 (bytes)</h3>
				<pre>{`
bytes public dynamicBytes = "Hello";
	- bytes는 동적 크기의 바이트 배열
	- string과 유사하지만, 메모리 최적화 측면에서 더 효율적
	- 개별 바이트 접근 가능
`}</pre>

				<h3>바이트 배열 길이 확인</h3>
				<pre>{`
contract BytesLength {
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

=> bytes("Hello")를 입력하면 5 반환
`}</pre>

				<h3>특정 바이트 값 접근</h3>
				<pre>{`
contract BytesAccess {
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

=> getByteAt(bytes("Hello"), 1) → "e" 반환
`}</pre>

				<h3>바이트 배열 추가</h3>
				<pre>{`
contract BytesAppend {
    function appendByte(bytes memory original, bytes1 newByte) public pure returns (bytes memory) {
        bytes memory newArray = new bytes(original.length + 1);
        for (uint256 i = 0; i < original.length; i++) {
            newArray[i] = original[i];
        }
        newArray[original.length] = newByte;
        return newArray;
    }
}

=> appendByte(bytes("Hi"), "!") 실행 시 "Hi!"가 반환됨
				`}</pre>
			</div>
		),
	},
	{
		id: 10,
		date: '24/03/2025',
		tags: ['Solidity', 'Smart Contract', 'Blockchain'],
		title: 'ENUMS',
		content: (
			<div>
				<h3>e.g. Enums</h3>
				<pre>{`
contract OrderManagement {
    enum Status { Pending, Shipped, Delivered, Canceled }
    Status public orderStatus;

    function setStatus(Status _status) public {
        orderStatus = _status;
    }

    function getStatus() public view returns (Status) {
        return orderStatus;
    }
}
`}</pre>

				<h3>Enum 값의 숫자 확인</h3>
				<pre>{`
contract EnumValues {
    enum Status { Pending, Shipped, Delivered, Canceled }

    function getNumericValue() public pure returns (uint) {
        return uint(Status.Shipped);
    }
}

=> 결과: getNumericValue() 호출 시 1 반환 (Pending=0, Shipped=1)
`}</pre>

				<h3>특정 상태만 허용하는 로직 추가</h3>
				<pre>{`
contract Workflow {
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


=>
modifier onlyAtStage(Stage _stage)를 사용하여 특정 상태에서만 함수 실행 가능
proceedToNextStage()는 현재 상태가 Start일 때만 Process로 변경 가능
`}</pre>

				<h3>Enum을 조건문과 함께 사용하기</h3>
				<pre>{`
contract EnumWithConditions {
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

=>
Light enum을 선언하여 신호등 상태(Red, Yellow, Green)를 정의
setLight()를 사용하여 상태를 설정하고, getAction()을 호출하면 해당 상태에 맞는 메시지 반환
`}</pre>
			</div>
		),
	},
]
