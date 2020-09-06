 //initialize web3 library.  GivenProvider is whatever provider we get. In this case metamask gives us one
var web3 = new Web3(Web3.givenProvider);

// this defines variables
var instance;
var user;
var contractAddress="0xf73818DAf8e88B4aBE30C022A2Cf954Fe266EC2D";

           //after the page loads
$(document).ready(()=>{
       // this allows the website to use the metamask account
    window.ethereum.enable().then((accounts)=>{

            // we create an instance in order to call our contract's functions
            // abi is what functions are available for this contract. If you change or create a new function you have to change abi.
        instance= new web3.eth.Contract(abi, contractAddress, {from:accounts[0]})

        readMessage();

         //we use the first address in Ganachi, so the account id is "0"
        user=accounts[0];
           
        console.log(instance);
    })

})    

               
            //  that connects html page with blockhain
        function blockchainMessage(){
            console.log("i was clicked"); 
            // this take the value of what we write in the input bar
            var message=$("#message").val();
            console.log(message);
            // this sends a message to the blockchain. 
        instance.methods.setMessage(message).send({}, function(err, txHash){
            // if the transaction  is not sent successfully it throws an error in the console
            if(err)
              console.log(err);
              // if the transaction  is sent successfully it throws a hush number in the console
              else
                  console.log(txHash);
                  readMessage();
                  // this sets a timeout before the new message pops up because it takes time between the call and the moment the call comes back from the blockchain 
                  setTimeout(()=>readMessage(), 3000);
                
            })

        }
       

        function readMessage(){
            //this shows the message. It pretty much calls it from the blockchain
           instance.methods.getMessage().call().then(function(message){
               console.log(message);
               $('#showTheMessage').html(message);
               

           })
           }
        
        
       