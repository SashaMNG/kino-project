
// const pagesArray = [...document.querySelectorAll(".list")];
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

// const pagesSwiper = swipe(pagesArray, [prevBtn, nextBtn]);

// prevBtn.onclick = () => pagesSwiper("backwards");
// nextBtn.onclick = () => pagesSwiper("forwards");

// function swipe(elemsArray, buttonsArray) {
//   const elems = elemsArray;
//   let currentIndex = 0;
//   function controllButtons(status) {
//     if (status === "enable") {
//       buttonsArray.forEach((item) => (item.style.pointerEvents = "initial"));
//     }
//     if (status === "disable") {
//       buttonsArray.forEach((item) => (item.style.pointerEvents = "none"));
//     }
//   }
//   return function (dir) {
//     if (dir === "forwards") {
//       if (currentIndex + 1 <= elems.length) {
//         controllButtons("disable");
//         elems[currentIndex].classList.add("animated");
//         setTimeout(() => {
//           elems[currentIndex].style.zIndex = currentIndex;
//           elems[currentIndex].querySelector(".back").style.zIndex = 1;
//           currentIndex += 1;
//           controllButtons("enable");
//         }, 500);
//       }
//     }
//     if (dir === "backwards") {
//       if (elems[currentIndex - 1]) {
//         elems[currentIndex - 1].classList.remove("animated");
//         controllButtons("disable");
//         setTimeout(() => {
//           elems[currentIndex - 1].style.zIndex =
//             elems.length - currentIndex + 1;
//           elems[currentIndex - 1].querySelector(".back").style.zIndex =
//             "initial";
//           currentIndex -= 1;
//           controllButtons("enable");
//         }, 500);
//       }
//     }
//   };
// }
