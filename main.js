let simulate = document.querySelector('.createLiftFloorButton');
simulate.addEventListener('click', hideFirstPage);
let restart = document.querySelector('.goToFirstPage');
restart.addEventListener('click', hideSecondPage);

function hideFirstPage() {
    document.querySelector('.firstPage').style.display = 'none';
    document.querySelector('.secondPage').style.display = 'block';
    makingFloors();
}

function hideSecondPage() {
    document.querySelector('.secondPage').style.display = 'none';
    document.querySelector('.firstPage').style.display = 'block';
    deletingFloors();

}

function makingFloors() {
    
    let floorInput = document.querySelector('#floorNumber').value;
    let liftInput = document.querySelector('#liftNumber').value;

    for (let i = floorInput; i > 0; i--) {

        let floordiv = document.createElement('div');
        floordiv.className = 'box';

        let buttonLift=document.createElement('div');
        buttonLift.className='buttonLift';

        let buttondiv1 = document.createElement('div');
        buttondiv1.className = 'button';

        //button1 create
        let button1 = document.createElement("button");
        let text1 = document.createTextNode("Up");
        button1.className = "up";
        button1.setAttribute('id',`up${i}`);
        button1.appendChild(text1);

        //button2 create 
        let button2 = document.createElement("button");
        let text2 = document.createTextNode("Down");
        button2.className = "down";
        button2.setAttribute('id',`down${i}`);
        button2.appendChild(text2);

        //button1 append
        buttondiv1.appendChild(button1);

        //button2 append
        buttondiv1.appendChild(button2);

        buttonLift.appendChild(buttondiv1);

        //buttonLift append
        floordiv.appendChild(buttonLift);


        //Creating lifts
        if(i==1){
            let mainLift=document.createElement('div');
            mainLift.className='mainLift';

            for(let j=1;j<=liftInput;j++){
                let liftdiv=document.createElement('div');
                liftdiv.className='lift';
                liftdiv.setAttribute('id',`lift${j}`);

                let gates=document.createElement('div');
                gates.className='gates';
                gates.setAttribute('id',`gates${1}`);

                let gate1=document.createElement('div');
                gate1.className='gate1';
                gates.appendChild(gate1);

                let gate2=document.createElement('div');
                gate2.className='gate2';
                gates.appendChild(gate2);

                liftdiv.appendChild(gates);
                mainLift.appendChild(liftdiv);

            }
            buttonLift.appendChild(mainLift);
        }
  

        //Creating HrFloor
        let hrdiv=document.createElement('div');
        hrdiv.className='hrfloorName';

        let hr=document.createElement('hr');
        
        let spanFloorNo=document.createElement('span');
        spanFloorNo.innerText=`Floor ${i}`;

        hrdiv.appendChild(hr);
        hrdiv.appendChild(spanFloorNo);

        floordiv.appendChild(hrdiv);

        document.querySelector('.secondPage').appendChild(floordiv);
    }

    //moving lift up
    let newlift=document.querySelectorAll('.lift')[0];
    document.querySelector('#up2').addEventListener('click',()=>{
        newlift.style.transform='translateY(-94px)';

        //opening gates
        let gate1=document.querySelector('.gate1');
        let gate2=document.querySelector('.gate2');

        setTimeout(()=>{
            gate1.style.width='3px';
            gate2.style.width='3px';
        },3000);

        setTimeout(()=>{
            gate1.style.width='25px';
            gate2.style.width='25px';
        },6000)
        
    });
    
}

function deletingFloors(){

    let floorInput = document.querySelector('#floorNumber').value;

    for (let i = floorInput; i > 0; i--) {
        let floordiv=document.querySelector('.box');
        floordiv.remove();
    }
}

