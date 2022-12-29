
let simulate = document.querySelector('.createLiftFloorButton');
simulate.addEventListener('click', hideFirstPage);
let restart = document.querySelector('.goToFirstPage');
restart.addEventListener('click', hideSecondPage);

function hideFirstPage() {
    document.querySelector('.firstPage').style.display = 'none';
    document.querySelector('.secondPage').style.display = 'block';
    console.log('second')
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

        let buttonLift = document.createElement('div');
        buttonLift.className = 'buttonLift';

        let buttondiv1 = document.createElement('div');
        buttondiv1.className = 'button';

        //button1 create
        let button1 = document.createElement("button");
        let text1 = document.createTextNode("Up");
        button1.className = "up";
        button1.setAttribute('id', `up${i}`);
        button1.appendChild(text1);

        // select krh rha hu button id


        //button2 create 
        let button2 = document.createElement("button");
        let text2 = document.createTextNode("Down");
        button2.className = "down";
        button2.setAttribute('id', `down${i}`);
        button2.appendChild(text2);

        //button1 append
        buttondiv1.appendChild(button1);

        //button2 append
        buttondiv1.appendChild(button2);

        buttonLift.appendChild(buttondiv1);

        //buttonLift append
        floordiv.appendChild(buttonLift);


        // Creating lifts
        // if (i == 1) {
        //     let mainLift = document.createElement('div');
        //     mainLift.className = 'mainLift';

        //     for (let j = 1; j <= liftInput; j++) {
        //         let liftdiv = document.createElement('div');
        //         liftdiv.className = 'lift';
        //         liftdiv.setAttribute('id', `lift${j}`);

        //         let gates = document.createElement('div');
        //         gates.className = 'gates';
        //         gates.setAttribute('id', `gates`);
        //         let gate1 = document.createElement('div');
        //         gate1.className = 'gate1';
        //         gates.appendChild(gate1);

        //         let gate2 = document.createElement('div');
        //         gate2.className = 'gate2';
        //         gates.appendChild(gate2);

        //         liftdiv.appendChild(gates);
        //         mainLift.appendChild(liftdiv);
        //     }
        //     buttonLift.appendChild(mainLift);

        // }




        //Creating HrFloor
        let hrdiv = document.createElement('div');
        hrdiv.className = 'hrfloorName';

        let hr = document.createElement('hr');

        let spanFloorNo = document.createElement('span');
        spanFloorNo.innerText = `Floor ${i}`;

        hrdiv.appendChild(hr);
        hrdiv.appendChild(spanFloorNo);

        floordiv.appendChild(hrdiv);

        document.querySelector('.secondPage').appendChild(floordiv);


    }
    // let selectBox = document.querySelectorAll('.box')
    // console.log(selectBox);
    // //insert lift in last box of array
    // let liftBox = selectBox[selectBox.length - 1];
    // console.log(liftBox);
    let mainLift = document.createElement('div');
    mainLift.className = 'mainLift';

    for (let j = 1; j <= liftInput; j++) {
        let liftdiv = document.createElement('div');
        liftdiv.className = 'lift';
        liftdiv.setAttribute('id', `lift${j}`);
        liftdiv.setAttribute('flag', `free`);
        let gates = document.createElement('div');
        gates.className = 'gates';
        gates.setAttribute('id', `gates`);
        let gate1 = document.createElement('div');
        gate1.className = 'gate1';
        gates.appendChild(gate1);

        let gate2 = document.createElement('div');
        gate2.className = 'gate2';
        gates.appendChild(gate2);

        liftdiv.appendChild(gates);
        mainLift.appendChild(liftdiv);
    }


    //last box ka button ma lift add krh diye
    const mainbuttonlift = document.querySelectorAll('.buttonLift');
    // console.log(mainbuttonlift);
    const lastbox = mainbuttonlift[mainbuttonlift.length - 1];
    // console.log(lastbox)
    // liftBox.
    lastbox.appendChild(mainLift);

    // select all lift
    

    //we move lift1 after clicking up2  (testing)
    // for(let )
    // let btn=document.querySelector('#up2');
    // btn.addEventListener('click',()=>{
    //     let liftZero=selectAllLift[0];
    //     console.log(liftZero)
    //     liftZero.style.transform='translateY(-95px)';
    // })
    let selectAllLift = document.querySelectorAll('.lift');
    // console.log('s',selectAllLift)
    let up = document.querySelectorAll('.up');
    let nUp = up.length;
    let prev = 0;
    
    let down = document.querySelectorAll('.down');
    // console.log(up);
    // console.log(down);
    
    up.forEach((e, i) => {
        e.addEventListener('click', () => {
            // if (prev < nUp - i) {
                // console.log('up', nUp - i);
                let floorValue=nUp - i;
                for(let i=0;i<selectAllLift.length;i++){
                    // console.log(selectAllLift)
                    if(selectAllLift[i].getAttribute('flag')==='free'){
                        selectAllLift[i].setAttribute('flag','busy');
                        moveLift(selectAllLift[i],floorValue);
                        // selectAllLift[i].setAttribute('flag','free');
                        console.log(selectAllLift[i]);
                        break;
                    }
                    console.log('s')
                }
                // let liftZero = selectAllLift[0];
                // // console.log(liftZero)
                // liftZero.
                // prev = nUp - i;
                // console.log(prev);
            // }
        })
    })
}

function moveLift(liftno,floorNo){
    let oldFloorValue=1;
    liftno.style.transform = `translateY(${-95 * (floorNo- 1)}px)`;
    // // console.log('prev',prev)
    
    // // added transitionDuration to class Lift
    liftno.style.transitionDuration=`${2*(floorNo-oldFloorValue)}s`
    // console.log('snjh',2*(nUp-i-oldFloorValue));
    
    // liftno.setAttribute('flag','free');
    setTimeout(()=>{
        liftno.setAttribute('flag','free')
        console.log(liftno.getAttribute('flag'))
    },2*(floorNo-oldFloorValue)*1000)
    oldFloorValue=floorNo;
}


function deletingFloors() {

    let floorInput = document.querySelector('#floorNumber').value;

    for (let i = floorInput; i > 0; i--) {
        let floordiv = document.querySelector('.box');
        floordiv.remove();
    }
}

// document.addEventListener('DOMContentLoaded', function () {
//     console.log('ss')
//     const btn = document.getElementById('up2');
//     const liftup = document.querySelector('#lift1');

//     btn.addEventListener('click', opening)
//     function opening() {
//         console.log('e');
//         liftup.style.backgroundColor='blue';
//     }
// });