'use strict';

const input = document.querySelector('input');
const add_task = document.querySelector('.add-task');
const clear_all = document.querySelector('.clear-all');

const task_list_box = document.getElementsByClassName('task-list-box')[0];
const task = document.getElementsByClassName('task');
const task_about = document.getElementsByClassName('.task-about');
// const tDe_btn = document.getElementsByClassName('tDe-btn')[0];
const tickUntick = document.getElementsByClassName('tick');
const del = document.getElementsByClassName('del');
const edit = document.getElementsByClassName('edit');

const textArea = document.querySelector('textarea');
const edit_ok = document.querySelector('.edit-ok');
const edit_box_cont = document.querySelector('.edit-box-cont');
const overlay = document.querySelector('.overlay');




const tskLine = `<div class="task">
<span class="task-about">i will be back</span>
<div class="tDe-btn">
    <button class="tick">Tick/Untick</button>
    <button class="del">Del</button>
    <button class="edit">Edit</button>
</div>
</div>`;


// function addTAsk (){

// }
let tskLineFun = function (inputValue, i) {

    // let tskLine = `<div class="task">
    // <span class="task-about">${inputValue}</span>
    // <div class="tDe-btn">
    //     <button class="tick">Tick/Untick</button>
    //     <button class="del">Del</button>
    //     <button class="edit">Edit</button>
    // </div>
    // </div>`;

    let tskLine = `<div class="task " id="task${i}">
    <span class="task-about">${inputValue}</span>
    <div class="tDe-btn">
        <button class="tick" id="tick${i}">Tick/Untick</button>
        <button class="del" id="del${i}">Del</button>
        <button class="edit" id="edit${i}">Edit</button>
    </div>
    </div>`;
    console.log(tskLine);

    return tskLine;

}

let len_of_task = 0;

add_task.addEventListener('click', function () {

    let inputValue = input.value;
    console.log(inputValue);
    if (input.value === '') {
        input.placeholder = `Atlest Enter Some Task`;
        input.classList.add('custom-placeholder-color');
    }

    // len_of_task++;
    // let taskLine = tskLineFun(inputValue, len_of_task);
    // console.log(taskLine);
    if (input.value != '') {
        len_of_task++;
        let taskLine = tskLineFun(inputValue, len_of_task);
        console.log(taskLine);


        console.log(input.value != '');
        task_list_box.insertAdjacentHTML('beforeend', taskLine);
        input.value = '';
        input.classList.toggle('custom-placeholder-color');

    }



});


let clickedEle;
task_list_box.addEventListener('click', function (event) {
    clickedEle = event.target;
    for (let i = 1; i <= len_of_task; i++) {

        if (clickedEle.id === `tick${i}`) {
            let lineThroughItEle = clickedEle.parentNode.parentNode.getElementsByClassName('task-about')[0];
            lineThroughItEle.classList.toggle('task-aboutLineThrough');

        }

        if (clickedEle.id === `del${i}`) {
            clickedEle.parentNode.parentNode.remove();
        }

        if (clickedEle.id === `edit${i}`) {
            textArea.value = clickedEle.parentNode.parentNode.getElementsByClassName('task-about')[0].innerHTML;

            edit_box_cont.style.display = 'block';
            overlay.style.display = 'block';


        }
    }
});


// clear All/////////////////////////////////////
///////////////////////////////////////
clear_all.addEventListener('click', function () {
    task_list_box.innerHTML = '';
});

edit_ok.addEventListener('click', function(){
    clickedEle.parentNode.parentNode.getElementsByClassName('task-about')[0].innerHTML = textArea.value;
    edit_box_cont.style.display = 'none';
    overlay.style.display = 'none';
});
///////////////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////
// TICK UNTICK DEL EDIT WAY //////////////////
////////////////////////////////

// add_task.addEventListener('click', function () {
//     tskLinee = `<div class="task${0}">
//     <span class="task-about">${inputValue}</span>
//     <div class="tDe-btn">
//         <button class="tick${0}">Tick/Untick</button>
//         <button class="del${0}">Del</button>
//         <button class="edit${0}">Edit</button>
//     </div>
//     </div>`;
//     i++;

// task_list_box.addEventListener('click', function (event) {
//     let clickedEle = event.target;
//     for (i = 1; i <= len_of_task; i++) {

//         if (clickedEle.className === `tick${0}`) {
//             let lineThroughItEle = clickedEle.parentNode.parentNode.getElementsByClassName('task-about')[0];
//             lineThroughItEle.classList.toggle('task-aboutLineThrough');

//         }
//     }
// });
// tickUntick = `document.getElementsByClassName('tick')`;

// });

// tickUntick.addEventListener('click', function (event) {

// // //     console.log(event.target.parentNode.parentNode)
// // //     let lineThroughItEle = event.target.parentNode.parentNode.querySelector('.task-about');
//     console.log(lineThroughItEle);
//     lineThroughItEle.classList.toggle('task-aboutLineThrough');

// });