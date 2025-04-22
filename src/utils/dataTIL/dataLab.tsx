import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { TilCardType } from '../types'

export const dataLab: TilCardType[] = [
	{
		id: 0,
		date: '09/04/2025',
		tags: ['StyleGuide', 'Practice', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'UserProfile.sol (Basic solidity grammar)',
		content: (
			<div>
				<h3>Solidity 스타일가이드 권장</h3>
				<pre>
					{`1. events
2. errors
3. enums
4. structs
5. state variables
6. constructor
7. modifiers
8. functions`}
				</pre>

				<h3>Lab - UserProfile.sol</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.0 <0.9.0;

contract UserProfile {
    event UserRegistered(address user, string name, uint age);

    struct User {
        string name;
        uint256 age;
        bool isRegistered;
    }

    mapping(address => User) public users;

    address[] public registeredUsers;

    function registerUser(string memory _name, uint _age) public {
        require(users[msg.sender].isRegistered == false, "Already registered!");
        users[msg.sender] = User(_name, _age, true);
        registeredUsers.push(msg.sender);

        emit UserRegistered(msg.sender, _name, _age);
    }

    function getUserProfile(address _user) public view returns (User memory) {
        return users[_user];
    }

    function isUserRegistered(address _user) public view returns (bool) {
        return users[_user].isRegistered;
    }

    function getAllUserAddresses() public view returns (address[] memory) {
        return registeredUsers;
    }

    function getAllUsers() public view returns (User[] memory) {
        // Solidity에서 new 키워드로 동적 배열을 만들 땐 배열 타입 뒤에 괄호 안에 길이 명시
        // new Type[](length)
        User[] memory allUsers = new User[](registeredUsers.length);
        for (uint i = 0; i < registeredUsers.length; i++) {
            allUsers[i] = users[registeredUsers[i]];
        }
        return allUsers;
    }

    // string, bytes, array, struct → 참조 타입 (reference type) → memory나 calldata 명시 필수
    // uint, int, bool, address → 값 타입 (value type) → 기본적으로 stack에 저장되므로 안 붙여도 됨
    // memory 수정가능? 변수재할당 가능, struct내부 필드 수정 가능, 배열 요소수정 가능, 변수자체가 calldata 에서 왔을 땐 수정불가
    function updateUser(string memory _name, uint _age) public {
        require(users[msg.sender].isRegistered == true, "Not registered!");
        users[msg.sender] = User(_name, _age, true);
    }
}`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 1,
		date: '09/04/2025',
		tags: ['OpenZeppelin', 'ERC20', 'Practice', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'MyToken.sol (ERC20, ERC20Burnable, Ownable)',
		content: (
			<div>
				<h3>constant는 함수사용불가</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// decimals()는 함수
// constant는 컴파일 시점에 값이 고정되어야 하는 상수라서 decimals()를 사용할 수 없음
// Solidity는 constant 안에서 런타임 함수를 호출하는 걸 금지

✅ uint256 public constant MAX_SUPPLY = 2_000_000 * 10 ** 18;
❌ uint256 public constant MAX_SUPPLY = 2_000_000 * 10 ** decimals();`}</SyntaxHighlighter>

				<h3>숫자에 _ 언더바 사용 가능</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`코드 가독성 및 사람이 읽기 쉽게 _ 추가 가능
// the underscores are just for readability.

uint256 x = 2_000_000; 
// same as 2000000`}</SyntaxHighlighter>

				<h3>Lab - MyToken.sol</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract MyToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("MyToken", "MKT") Ownable(msg.sender) {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    uint256 public constant MAX_SUPPLY = 2_000_000 * 10 ** 18;

    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Exceeds Max Supply");
        _mint(to, amount);
    }
}
`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 2,
		date: '14/04/2025',
		tags: ['NFT', 'mint', 'ERC721', 'Solidity', 'Smart Contract', 'Blockchain'],
		title: 'NFT 컨트랙트 배포',
		content: (
			<div>
				<h3>NFT 컨트랙트 배포</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
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
}`}</SyntaxHighlighter>

				<h3>Hardhat setting</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`// hardhat.config.ts

import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    kaia: {
      url: 'https://public-en-kairos.node.kaia.io',
      accounts: [
        process.env.PRIVATE_KEY || '', // Todo: Kairos에서 제공하는 프라이빗 키 사용(.env 파일을 사용합니다)
      ],
    },
  },
};

export default config;`}</SyntaxHighlighter>

				<h3>Contract 배포</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`import { ethers } from 'hardhat';
import { makeAbi } from './abiGenerator';

async function main() {
  const contractName = 'MyNFT';
  const name = ''; // Todo: NFT의 이름
  const symbol = ''; // Todo: NFT의 Symbol

  if (!name || !symbol) {
    throw new Error('Todo: (scripts/deploy.ts) name or symbol is empty');
  }

  console.log(\`Deploying contracts\`);

  const Contract = await ethers.getContractFactory(contractName);
  const contract = await Contract.deploy(name, symbol);

  await contract.waitForDeployment();

  console.log(\`Contract deployed at: \${contract.target}\`);
  await makeAbi(\`\${contractName}\`, contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 배포 스크립트
npm run deploy`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 3,
		date: '14/04/2025',
		tags: ['NFT', 'mint', 'IPFS', 'upload'],
		title: 'File upload handler',
		content: (
			<div>
				<h3>파일 업로드 핸들러 작성</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`const handleUpload = async () => {
    if (!file) {
      alert('파일을 선택해주세요.');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);
    formData.append('network', 'public');

    try {
      const result = await uploadFileToIPFS(formData);
      handleImageUpload({
        url: result,
        preview: preview,
      });
    } catch (error) {
      console.error('파일 업로드 실패:', error);
      alert('파일 업로드 실패!');
    } finally {
      setUploading(false);
    }
};

// file 변수가 선택된 파일을 나타냅니다. 파일이 없으면 업로드를 진행하지 않습니다.
// FormData 객체를 생성하여 file, name, network 정보를 추가합니다.
// uploadFileToIPFS(formData) 함수를 호출하여 IPFS에 파일을 업로드합니다.
// 업로드가 완료되면, handleImageUpload() 함수를 호출하여 업로드된 파일의 URL과 미리보기(preview)를 처리합니다.
// 오류 발생 시 에러 메시지를 출력하고, 사용자에게 알림을 표시합니다.
// 업로드 진행 상태를 setUploading 상태 변수로 관리합니다.`}</SyntaxHighlighter>

				<h3>UI에서 업로드 기능 연동하기</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`return (
  <div>
    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
    <button onClick={handleUpload} disabled={uploading}>
      {uploading ? '업로드 중...' : '업로드'}
    </button>
  </div>
);

// <input type="file" /> 요소를 통해 사용자가 파일을 선택합니다.
// 선택된 파일을 setFile()을 이용해 상태로 저장합니다.
// <button>을 클릭하면 handleUpload()가 실행되며, 파일이 업로드됩니다.
// 업로드 중일 때 버튼을 비활성화하여 중복 요청을 방지합니다.`}</SyntaxHighlighter>

				<h3>업로드된 파일 미리보기 기능 추가</h3>
				<SyntaxHighlighter
					language='solidity'
					style={vscDarkPlus}>{`{preview && <img src={preview} alt="미리보기" style={{ width: '200px' }} />}
                    
// 업로드가 완료되면 preview 상태에 URL이 저장됩니다.
// preview가 존재하면 업로드된 이미지를 화면에 표시합니다.`}</SyntaxHighlighter>
			</div>
		),
	},
	{
		id: 4,
		date: '14/04/2025',
		tags: ['NFT', 'mint', 'IPFS', 'upload'],
		title: 'NFT Viewer',
		content: (
			<div>
				<h3>사용자의 NFT 목록 가져오기 (getNfts 함수)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`const getMetadata = async (tokenURI: string) => {
  try {
    const response = await axios.get(tokenURI);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getNfts = async (address: string) => {
  const nfts = [];

  try {
    const totalSupply = Number(await contract.methods.totalSupply().call());

    for (let i = 0; i <= totalSupply; i++) {
      try {
        const owner: string | null | undefined = await contract.methods
          .ownerOf(i)
          .call();

        if (
          owner &&
          typeof owner === 'string' &&
          owner.toLowerCase() === address.toLowerCase()
        ) {
          const tokenURI: string =
            (await contract.methods.tokenURI(i).call()) || '';
          const metadata = await getMetadata(tokenURI);

          const nft = {
            tokenId: i,
            owner,
            contract: MyNFT.address,
            tokenURI,
            network: 'Kaia testnet',
            name: metadata.name,
            image: metadata.image,
            discription: metadata.discription,
            symbol: await contract.methods.symbol().call(),
          };

          nfts.push(nft);
        }
      } catch (error) {
        continue;
      }
    }

    return nfts;
  } catch (error) {
    console.error('Error in getNfts:', error);
    return [];
  }
};`}</SyntaxHighlighter>

				<h3>NFT 목록을 가져와 화면에 출력 (NFTs.tsx)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { getNfts } from '../utils/web3';
import { Tnft } from '../utils/types';
import NFTCard from '../components/NFTCard';

const NFTs = () => {
  const address = sessionStorage.getItem('address') || '';

  const [loading, setLoading] = useState(true);
  const [nfts, setNfts] = useState<Tnft[]>([]);

  useEffect(() => {
    const handleNFTs = async () => {
      setLoading(true);

      try {
        const nfts = await getNfts(address);
        setNfts(nfts);
      } catch (error) {
        console.error('NFT 불러오기 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    handleNFTs();
  }, [address]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h2>NFT 목록</h2>
          {nfts.length === 0 ? (
            <p>아직 보유한 NFT가 없습니다.</p>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '30px',
                justifyContent: 'center',
                alignItems: 'start',
                padding: '20px',
              }}
            >
              {nfts.map((nft, index) => (
                <NFTCard key={index} nft={nft} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NFTs;`}</SyntaxHighlighter>

				<h3>NFT 카드 컴포넌트 (NFTCard.tsx)</h3>
				<SyntaxHighlighter language='solidity' style={vscDarkPlus}>{`import { Tnft } from '../utils/types';
import Loading from '../components/Loading';

const NFTCard = ({ nft }: { nft: Tnft }) => {
  return (
    <div>
      {nft.image ? (
        <img src={nft.image} alt={nft.name} />
      ) : (
        <Loading />
      )}
      <h3>{nft.name}</h3>
      <p>{nft.discription}</p>
      <p>Token ID: {nft.tokenId}</p>
      <p>Owner: {nft.owner}</p>
      <p>Contract: {nft.contract}</p>
      <p>Network: {nft.network}</p>
      <p>Symbol: {nft.symbol || ''}</p>
    </div>
  );
};

export default NFTCard;`}</SyntaxHighlighter>
			</div>
		),
	},
]
