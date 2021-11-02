 //PROBLEM-1 SOLUTION..
 
let n = 23
let clients = ["Bigcorp","Bigcorp","Acme","Bigcorp","Zork","Zork","Abc","Bigcorp","Acme","Bigcorp","Bigcorp","Zork","Bigcorp","Zork","Zork","Bigcorp","Acme","Bigcorp","Acme","Bigcorp","Acme","Littlecorp","Nadircorp"];

let copy=JSON.parse(JSON.stringify(clients));
function Clients(array){
  let obj={};
for(let i of array ){
	if(i in obj){
     obj[i]++
}else{
    obj[i]=1
	}
}
let results=[]
for(let key in obj){
  if(Math.floor((obj[key]/n)*100)>=7){
      results.push(key);
  }
}
let resultorder=results.sort((a,b)=> a>b ? 1 : -1);
console.log(resultorder);
}

Clients(copy);
