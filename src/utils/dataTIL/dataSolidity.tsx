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
]
