document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  // theme window background
  const themePhoto = document.querySelectorAll(".theme_photo");
  const themePhotoArr = [
    "39662.png",
    "39664.png",
    "39665.png",
    "39666.png",
    "39667.png",
    "EDjOfUE.png",
    "f8953b820be0093d552e70a5408622c1.png",
  ];
  for (let key of themePhotoArr) {
    themePhoto.forEach(element =>{
      element.insertAdjacentHTML(
        "afterbegin",
        `<li class = "themeItems" style = "background-image: url(../image/${key})"></li>`
      );
    })
  }


  // theme window show 
  const themeColorButton = document.querySelectorAll('.themeColorButton'),
    ThemeColorWindow = document.querySelectorAll('.show_theme'),
    themeColorItemsClick = document.querySelectorAll('.themeItems');

  themeColorButton.forEach((element, i)=>{
    element.addEventListener('click', ()=>{
      ThemeColorWindow.forEach((item, index) => {
        if(i == index){
          item.classList.toggle('active');
          if(item.classList.contains('active')){
            element.classList.remove('fa-ellipsis');
            element.classList.add('fa-xmark');
          }
          else{
            element.classList.remove('fa-xmark');
            element.classList.add('fa-ellipsis');
          }
        }          
      });
    });
  });
  themeColorItemsClick.forEach((e,index)=>{
    e.addEventListener('click',()=>{
      document.querySelectorAll('.result_wdw').forEach((element,index)=>{
        if(element.classList.contains('task_container0') && element.classList.contains('active')){
          localStorageSetImg(e, 0)
        }
        else if(element.classList.contains('task_container1') && element.classList.contains('active')){
          localStorageSetImg(e, 1)
        }
        else if(element.classList.contains('task_container2') && element.classList.contains('active')){
          localStorageSetImg(e, 2)
        }
        else if(element.classList.contains('task_container3') && element.classList.contains('active')){
          localStorageSetImg(e, 3)
        }
        else if(element.classList.contains('task_container4') && element.classList.contains('active')){
          localStorageSetImg(e, 4)
        }
        else if(element.classList.contains('task_container5') && element.classList.contains('active')){
          localStorageSetImg(e, 5)
        }
        else if(element.classList.contains('task_container6') && element.classList.contains('active')){
          localStorageSetImg(e, 6)
        }

      });
    });
  });
  function localStorageSetImg(e, name){
    let bg  = e.style.backgroundImage
    localStorage.setItem(`bg${name}`, bg);
    const bgGet = localStorage.getItem(`bg${name}`);
    document.querySelector(`.task_container${name} .task_container`).style.backgroundImage = bgGet;  
  }
  for (let index = 0; index < 7; index++) {
    let bgGet = localStorage.getItem(`bg${index}`)
    document.querySelector(`.task_container${index} .task_container`).style.backgroundImage = bgGet;  
  }  
  // accounts
  const userName = document.querySelector(".user_name");
  const showAccount = document.querySelector(".showAcout");
  const menuItem = document.querySelector(".menuItem");
  userName.addEventListener("click", () => {
    showAccount.classList.toggle("active");
  });
  // control_window array
  const menuItems = [
    {
      icon: "fas fa-sun",
      text: "my day",
    },
    {
      icon: "fa-regular fa-star",
      text: "important",
    },
    {
      icon: "fa-brands fa-intercom",
      text: "Planned",
    },
    {
      icon: "fa-solid fa-infinity",
      text: "All",
    },
    {
      icon: "fa-regular fa-circle-check",
      text: "Completed",
    },
    {
      icon: "fa-regular fa-user",
      text: "Assigned to me",
    },
    {
      icon: "fa-solid fa-house",
      text: "Tasks",
    },
  ];
  let j = 0;
  for (let i of menuItems) {
    menuItem.insertAdjacentHTML(
      "beforeend",
      `<li class = ${j++ == 0 ? "active" : null} }>
          <i class = '${i.icon}'></i>
          <p>${i.text}</p>  
     </li>`
    );
  }
  const li = document.querySelectorAll(".menuItem li");
  const result_window = document.querySelectorAll('.result_wdw'); 
  // control_window click  
  function onClick(activeIndex) {
    li.forEach((element, index) => {
      element.classList.remove("active");
      if (activeIndex == index) {
        element.classList.add("active");
      }
    });
    result_window.forEach((element, index)=>{
      element.classList.remove('active');
      if(activeIndex == index){
        element.classList.add('active');
      }
    });

  }
  li.forEach((element, index) => {
    element.addEventListener("click", () => {
      onClick(index);
    });
  });
  // add_task input
  const addTaskInput = document.querySelectorAll('.add_task input');
  const addTaskIcon = document.querySelectorAll('.add_task i');
  window.addEventListener('click', (e)=>{
    if(e.target.classList == 'input'){
      addTaskInput.forEach(element => {
        element.placeholder = `Try typing 'Pay utilities bill by Friday 6pm`;
        element.removeAttribute('readonly');
      });
      addTaskIcon.forEach(element =>{
        element.classList.remove('fa-plus');
        element.classList.add('fa-circle');
      })
    }
    else{
      addTaskInput.forEach(element =>{
        element.placeholder = `Add a text`;
        element.setAttribute('readonly', '');
      })
      addTaskIcon.forEach(element => {
        element.classList.remove('fa-circle');
        element.classList.add('fa-plus')
      })      
    }
  });

  // my day date
  const nowDay = document.querySelector('.nowDay span')
  const date = new Date();
  const month = date.getMonth();
  const monthNumber = date.getDate();
  const weekNumber = date.getDay();
  let weekString;
  let monthString;
  switch (month) {
    case 0:monthString = 'January';break;
    case 1:monthString = 'February';break;
    case 2:monthString = 'March';break;
    case 3:monthString = 'April';break;
    case 4:monthString = 'May';break;
    case 5:monthString = 'June';break;
    case 6:monthString = 'July';break;
    case 7:monthString = 'August';break;
    case 8:monthString = 'September';break;
    case 9:monthString = 'October';break;
    case 10:monthString = 'November';break;
    case 11:monthString = 'December';break;
  }
  switch (weekNumber) {
    case 0:weekString = 'Su';break;
    case 1:weekString = 'Mo';break;
    case 2:weekString = 'Tu';break;
    case 3:weekString = 'We';break;
    case 4:weekString = 'Th';break;
    case 5:weekString = 'Fr';break;
    case 6:weekString = 'Sa';break;
  }
  nowDay.innerHTML = `${weekString}, ${monthNumber} ${monthString}`;



});
