let simulate=document.querySelector('.createLiftFloorButton');
simulate.addEventListener('click',hideFirstPage);
let restart=document.querySelector('.goToFirstPage');
restart.addEventListener('click',hideSecondPage);

function hideFirstPage(){
    document.querySelector('.firstPage').style.display='none';
    document.querySelector('.secondPage').style.display='block';
    console.log('second')
    makingFloors();
    // makingLifts()
}

function hideSecondPage(){
    document.querySelector('.secondPage').style.display='none';
    document.querySelector('.firstPage').style.display='block';
    deletingFloors()
}

function makingFloors(){
    let floorInput = document.querySelector('#floorNumber').value;
    let liftInput = document.querySelector('#liftNumber').value;
    for(let i=floorInput;i>0;i--){
        
        let floordiv=document.createElement('div');
        floordiv.className='box';
        // if(i==1){
        //     console.log('a')
        //     let liftdiv= makingLifts();
        //     floordiv.appendChild(liftdiv);
        // }
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
        button2.appendChild(text2);
        //button1 append
        buttondiv1.appendChild(button1);
        //button2 append
        buttondiv1.appendChild(button2);
        //floordiv append
        floordiv.appendChild(buttondiv1)


        let hrdiv=document.createElement('div');
        hrdiv.className="hrfloorName";
        let hr=document.createElement("HR");
        let spanFloorNo=document.createElement("span");
        spanFloorNo.innerText=`Floor${i}`;
        hrdiv.appendChild(hr);
        hrdiv.appendChild(spanFloorNo);
        floordiv.appendChild(hrdiv)

        // create lift
        if(i==1){
            console.log('a')
            for(let i=0;i<liftInput;i++){
                // makinglift()
                let liftdiv=document.createElement('div');
                liftdiv.className='lift';
                floordiv.appendChild(liftdiv);
            }
        }
        document.querySelector('.secondPage').appendChild(floordiv);
    }
    
}

function deletingFloors(){

    let floorInput = document.querySelector('#floorNumber').value;

    for (let i = floorInput; i > 0; i--) {
        let floordiv=document.querySelector('.box');
        floordiv.remove();
        
    }
}

// function makingLifts(){

//     let liftInput = document.querySelector('#Number').value;

//     let liftdiv=document.createElement('div');
//     liftdiv.className='lift';
//     return liftdiv;
//     // document.querySelector('.box').appendChild=liftdiv;
// }