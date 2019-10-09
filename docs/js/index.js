var mailbtn = document.querySelector("#mail-button");
var mailform = document.querySelector("#mail-form");

async function clearFields(){
    mailform.reset();
}

mailbtn.addEventListener("click", async ()=>{
    await clearFields();
    setTimeout(()=>{
        alert("Thank You")
    },100)
})

function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector('.container-nav').classList.toggle("changeContainerNav");
}
function myFunction2(x) {
    x.classList.toggle("changeContainerNav");
    document.querySelector('.container').classList.toggle("change");
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function load() {
    await sleep(100);
    document.querySelector('main').style['display'] = "block"
    await sleep(100);
    document.querySelector('.loader').style['opacity'] = "0"
    await sleep(300);
    document.querySelector('.inner-loader').style['opacity'] = "0"
    await sleep(500);
    document.querySelector('.container').style['opacity'] = "1"
    document.querySelector('.loader').style['display'] = "none"
    document.querySelector('.inner-loader').style['display'] = "none"
}