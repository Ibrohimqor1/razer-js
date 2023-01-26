const getroot = document.querySelector(".root");
const Api_new = "https://razer-api.onrender.com/devices";
const mice = document.querySelector(".mice")
const laptop = document.querySelector(".Laptop")

const Keyboards = document.querySelector(".Keyboards")
const Headsets = document.querySelector(".Headsets")
const Gear = document.querySelector(".Gear")
const Streaming = document.querySelector(".Streaming")

const apiget = async function () {
  const kelmalum = await fetch(Api_new);
  const array = await kelmalum.json();
  console.log(array);
  addhtml(array);
};
mice.addEventListener('click', () => {
    apiget();
})  
    

function addhtml(newarray) {
  let html = "";
  const newfilter = newarray.filter((el) => el.category === "MICE");
  newfilter.map((el) => {
    html += `
        <div class="card">
        <img src=${el.image}>
        <h1> ${el.name}</h1>
        <p>${el.price}$</p>
        <button> ${el.category}</button>
      </div>

        `;
       
  });
  getroot.innerHTML = html;
}





const getlaptop = async function () {
    const kelmalum = await fetch(Api_new);
    const array = await kelmalum.json();
    console.log(array);
    addhtml2(array);
  };
  laptop.addEventListener('click', () => {
        getlaptop();
    })  
  
  function addhtml2(newarray) {
    let html = "";
    const newfilter = newarray.filter((el) => el.category === "Laptop");
    newfilter.map((el) => {
      html += `
          <div class="card">
          <img src=${el.image}>
          <h1> ${el.name}</h1>
          <p>${el.price}$</p>
          <button> ${el.category}</button>
        </div>
  
          `;
         
    });
    getroot.innerHTML = html;
  }
  

  const getkeyboard = async function () {
    const kelmalum = await fetch(Api_new);
    const array = await kelmalum.json();
    console.log(array);
    addhtml2(array);
  };
  Keyboards.addEventListener('click', () => {
    getkeyboard();
    })  
  
  function addhtml2(newarray) {
    let html = "";
    const newfilter = newarray.filter((el) => el.category === "Keyboards");
    newfilter.map((el) => {
      html += `
          <div class="card">
          <img src=${el.image}>
          <h1> ${el.name}</h1>
          <p>${el.price}$</p>
          <button> ${el.category}</button>
        </div>
  
          `;
         
    });
    getroot.innerHTML = html;
  }
  

  
  const getHeadsets = async function () {
    const kelmalum = await fetch(Api_new);
    const array = await kelmalum.json();
    console.log(array);
    addhtml2(array);
  };
  Headsets.addEventListener('click', () => {
    getHeadsets();
    })  
  
  function addhtml2(newarray) {
    let html = "";
    const newfilter = newarray.filter((el) => el.category === "Headsets");
    newfilter.map((el) => {
      html += `
          <div class="card">
          <img src=${el.image}>
          <h1> ${el.name}</h1>
          <p>${el.price}$</p>
          <button> ${el.category}</button>
        </div>
  
          `;
         
    });
    getroot.innerHTML = html;
  }


//   const getStreaming = async function () {
//     const kelmalum = await fetch(Api_new);
//     const array = await kelmalum.json();
//     console.log(array);
//     addhtml2(array);
//   };
//   Streaming.addEventListener('click', () => {
//     getStreaming();
//     })  
  
//   function addhtml2(newarray) {
//     let html = "";
//     const newfilter = newarray.filter((el) => el.category === "Streaming");
//     newfilter.map((el) => {
//       html += `
//           <div class="card">
//           <img src=${el.image}>
//           <h1> ${el.name}</h1>
//           <p>${el.price}$</p>
//           <button> ${el.category}</button>
//         </div>
  
//           `;
         
//     });
//     getroot.innerHTML = html;
//   }
  