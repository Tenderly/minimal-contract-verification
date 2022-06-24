//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Greeter3 {
    using SafeMath for uint;

    string private greeting;
    uint256 counter;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

    function failFunction(string memory _greeting) public {
        revert("something failed!");
        greeting = _greeting;
    }

    function inc() public {
        counter = SafeMath.add(counter, 1);
    }
}
