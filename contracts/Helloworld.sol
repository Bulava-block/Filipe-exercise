pragma solidity ^0.5.12;

contract Helloworld{

    string public message="Stas";
    

    event messageUpdated(string message);
    
    function getMessage() public view returns (string memory){

        return message;

    }


    
    function setMessage(string memory newMessage) public {

        message=newMessage;

       

       emit messageUpdated(message);
    }    
    
}