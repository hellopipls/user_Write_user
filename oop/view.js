/* СТАТИКА элементов   .user1  */

function createComponent1(){
  return `
    <form id="toSend1">      
        <input type="text" id="numberInput"/> 
        <button id="addTrack" type="submit"> click1</button>  
      </form>  

       <div id="user1">
          <div class = "toAccept1"></div>
       </div>
  `
}
const templat1=createComponent1();
document.querySelector('.user1').innerHTML = templat1;

/* СТАТИКА элементов  .user2  */
function createComponent2(){
  return `
    <div>
      <form id = "toSend2">      
        <input type="text" id="trackInput"/> 
        <button id="addTrack2" type="submit"> click2</button>  
      </form> 

      <div id="user2">
       <div class = "toAccept2"></div>
      </div>           
    </div>
  `
}
const templat2=createComponent2();
document.querySelector('.user2').innerHTML = templat2;



    /*динамический процесс в ООП для .user1 и .user2 */

 class View{
    constructor(){ 
        /*.user1 */ 
        this.toSend2 = document.getElementById('toSend2');
        this.trackInput = document.getElementById('trackInput');
        this.user2 = document.getElementById('user2');
        /*.user2 */ 
        this.toSend1 = document.getElementById('toSend1');
        this.numberInput = document.getElementById('numberInput');
        this.user1 = document.getElementById('user1'); 

 /*.user1 */  toSend1.addEventListener('submit', this.addHandler1.bind(this));
 /*.user2 */  toSend2.addEventListener('submit', this.addHandler2.bind(this));
    }
   /*.user1 */   
addHandler2(event){
	event.preventDefault();
	if(!this.trackInput.value) return alert('вы ничего не отправили');
  const title  = this.trackInput.value;
	const todoItem = this.createToAccept(title);
	const todoItem2 = this.createToAccept(title);//созд demo1
	this.user2.insertBefore(todoItem,this.user2.firstChild);
  this.user1.insertBefore(todoItem2,this.user1.firstChild);
	this.trackInput.value='';
}

createToAccept(title){	
     const demo2aCopy = document.createElement('p');
      demo2aCopy.id="demo2a";
      demo2aCopy.innerText=title;     

     const toAcceptCopy = document.createElement('div');
     toAcceptCopy.className="toAccept2";
     toAcceptCopy.appendChild(demo2aCopy);
    
     return toAcceptCopy;
 }


  /* .user2 */
addHandler1(event){
	event.preventDefault();	
	if(!this.numberInput.value) {
    return alert('вы ничего не отправили');
  }
  const title2 = this.numberInput.value;
	const todoItem = this.createToAccept1(title2);
	const todoItem2 = this.createToAccept1(title2);//созд demo2
	this.user1.insertBefore(todoItem,this.user1.firstChild);
  this.user2.insertBefore(todoItem2,this.user2.firstChild);
	this.numberInput.value='';
}

createToAccept1(title2){	
     const demo1aCopy = document.createElement('p');
      demo1aCopy.id="demo1a";
      demo1aCopy.innerText=title2;   
      
     
    const toAcceptCopy = document.createElement('div');
     toAcceptCopy.className="toAccept1";
     toAcceptCopy.appendChild(demo1aCopy);
    
     return toAcceptCopy;
  }
}


const view = new View(); 



/* так подключиться к index.js */
/* <script  src="./oop/view.js"></script> */
