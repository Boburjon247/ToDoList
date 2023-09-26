document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  // theme window background
  const themeColor = document.querySelector(".theme_color");
  const themePhoto = document.querySelector(".theme_photo");
  const themeColorArr = [
    "#788CDE",
    "#BC7ABC",
    "#E46C8C",
    "#E46B67",
    "#4AA079",
    "#479E98",
    "#8795A0",
    "#A0CBF1",
    "#D6BDE7",
    "#F5B6C2",
    "#ECBDA2",
    "#A48163",
    "#9AD2BA",
    "#8BD3CE",
    "#BAC8D4",
  ];
  const themePhotoArr = [
    "39662.png",
    "39664.png",
    "39665.png",
    "39666.png",
    "39667.png",
    "EDjOfUE.png",
    "f8953b820be0093d552e70a5408622c1.png",
  ];
  for (let key of themeColorArr) {
    themeColor.insertAdjacentHTML(
      "afterbegin",
      `<li style = "background-color:${key}"></li>`
    );
  }
  for (let key of themePhotoArr) {
    themePhoto.insertAdjacentHTML(
      "afterbegin",
      `<li style = "background-image: url(../image/${key})"></li>`
    );
  }

  // accounts
  const userName = document.querySelector(".user_name");
  const showAccount = document.querySelector(".showAcout");
  const menuItem = document.querySelector(".menuItem");
  userName.addEventListener("click", () => {
    showAccount.classList.add("active");
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






});
