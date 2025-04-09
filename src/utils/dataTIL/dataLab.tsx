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
]
