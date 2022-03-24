/* new smart cintracts update the state of the blockchain like a database. 
Any change requires a migration from one state to the next similar to database migration. 
*/

var TodoList = artifacts.require("./TodoList.sol");

// deploys smart contract 
module.exports = function(deployer) {
  deployer.deploy(TodoList);
};

/* to get an instance of deployed smart contract, 
> truffle console 
> todoList = await TodoList.deployed() [returns undefined]

gets address were deployed to blockchain 
> TodoList.address 

read the value of TaskCount from storage 
> taskCount = await app.taskCount()
*/ 

//await used to interact with blockchain in asynchronous fashion 