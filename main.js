let simulate=document.querySelector('.createLiftFloorButton');
simulate.addEventListener('click',hideFirstPage);
let restart=document.querySelector('.goToFirstPage');
restart.addEventListener('click',hideSecondPage);

function hideFirstPage(){
    document.querySelector('.firstPage').style.display='none';
    document.querySelector('.secondPage').style.display='block';
    console.log('second')
    makingFloors();
}

function hideSecondPage(){
    document.querySelector('.secondPage').style.display='none';
    document.querySelector('.firstPage').style.display='block';
}

function makingFloors(){
    console.log('2')
    let floorInput = document.querySelector('#floorNumber').value;
    for(let i=floorInput;i>0;i--){
        let floordiv=document.createElement('div');
        floordiv.className='box';
        let buttondiv1=document.createElement('div');
        buttondiv1.className='button';
        //button1 create
        let button1=document.createElement("BUTTON");
        let text1 = document.createTextNode("Up");
        button1.className="up";
        button1.appendChild(text1);
        //button2 create 
        let button2=document.createElement("BUTTON");
        let text2 = document.createTextNode("Down");
        button2.className="down";
        button1.appendChild(text2);
        //button1 append
        buttondiv1.appendChild(button1);
        //button2 append
        buttondiv1.appendChild(button2);
        //floordiv append
        floordiv.appendChild(buttondiv1)

        document.getElementsByClassName('secondPage').appendChild(floordiv);
    }
    
}
