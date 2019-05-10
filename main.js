
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


/* СТАТИКА   .user2  */
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



    /*динамический процесс для .user2 императивный стиль */
function  addHandler2(event){
	event.preventDefault();
	title = trackInput.value;
	if(title === '') return alert('вы ничего не отправили');
	const todoItem = createToAccept(title);
	const todoItem2 = createToAccept(title);//созд demo1
	user2.insertBefore(todoItem, user2.firstChild);
  user1.insertBefore(todoItem2, user1.firstChild);
	trackInput.value='';
}

function createToAccept(title){	
     const demo2aCopy = document.createElement('p');
      demo2aCopy.id="demo2a";
      demo2aCopy.innerText=title;     

     const toAcceptCopy = document.createElement('div');
     toAcceptCopy.className="toAccept2";
     toAcceptCopy.appendChild(demo2aCopy);
    
     return toAcceptCopy;
}

const toSend2 = document.getElementById('toSend2');
const trackInput = document.getElementById('trackInput');
const user2 = document.getElementById('user2');


toSend2.addEventListener('submit', addHandler2);


 /*динамический процесс для .user1  императивный стиль*/

function  addHandler1(event){
	event.preventDefault();
	title2 = numberInput.value;
	if(title2 === '') return alert('вы ничего не отправили');
	const todoItem = createToAccept1(title2);
	const todoItem2 = createToAccept1(title2);//созд demo2
	user1.insertBefore(todoItem, user1.firstChild);
  user2.insertBefore(todoItem2, user2.firstChild);

	numberInput.value='';
}


function createToAccept1(title2){	
     const demo1aCopy = document.createElement('p');
      demo1aCopy.id="demo1a";
      demo1aCopy.innerText=title2;    
      
     
    const toAcceptCopy = document.createElement('div');
     toAcceptCopy.className="toAccept1";
     toAcceptCopy.appendChild(demo1aCopy);
    
     return toAcceptCopy;
}


const toSend1 = document.getElementById('toSend1');
const numberInput = document.getElementById('numberInput');
const user1 = document.getElementById('user1');


 toSend1.addEventListener('submit', addHandler1);


/* так подключиться к index.js */
/*<script  src="main.js"></script>*/
