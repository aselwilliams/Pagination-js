let tableBody = document.querySelector(".info");
const lastBtn = document.querySelector(".last");
const firstBtn = document.querySelector(".first");
const pageLinks=document.querySelectorAll('a')
let data = [];
let limit = 15


function getUrl(start=0) {
  return "https://api.coinlore.com/api/tickers/?start=" + start + "&limit="+ limit;
}

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => loadToTable(data))
    .catch((err) => console.log(err));
}

function loadToTable(data) {

  data["data"].map((coin) => {
    tableBody.innerHTML=''
    for (let i = 0; i < data['data'].length; i++) {
        
      tableBody.innerHTML += `
      <tr>
          <td>${data['data'][i].rank}</td>
          <td>${data['data'][i].name}(${data['data'][i].symbol})</td>
          <td> $ ${data['data'][i].price_usd}</td>
          <td>${data['data'][i].percent_change_24h}</td>
      </tr>`;
    }
  });

//   tableBody.innerHTML=''
//   for (let i = 0; i < coinName.length; i++) {
      
//     tableBody.innerHTML += `
//     <tr>
//         <td>${coinRank[i]}</td>
//         <td>${coinName[i]}(${coinSymbol[i]})</td>
//         <td> $ ${coinPrice[i]}</td>
//         <td>${coin24Change[i]}</td>
//     </tr>`;
//   }
}
function init() {
    let url = getUrl();
    getData(url);
  }
  init();

function handleNumClick(clickedLink){
    clickedLink.parentElement.classList='active';
    let clickedPageNum=parseInt(clickedLink.innerText)
    const url=getUrl((clickedPageNum*limit)-limit);
    getData(url)

    // switch(clickedPageNum){
    //     case 1:
    //         disablePrev(prevBtn);
    //         if(nextBtn.className.indexOf('disabled') !==-1){ //if next btn has a disabled class,it should give num
    //             enableNext(nextBtn)
    //         }
    //         break;
    //     case 10:
    //     disableNext()
    //         if(prevBtn.className.indexOf('disabled')!==-1){
    //             enablePrev(prevBtn)
    //         }
    //         break;
    //     default:
    //         if(prevBtn.className.indexOf('disabled')!==-1){
    //             enablePrev(prevBtn)
    //         }
    //         if(nextBtn.className.indexOf('disabled')!==-1){
    //           enableNext(nextBtn)  
    //         }
    //         break;
    // }
}
// function handlePrev(activePageNum,prevBtn,nextBtn){
//     //move to prev page
// let prevPage=document.querySelectorAll('li')[activePageNum - 1]
// prevPage.classList='active'
// url= getUrl(((activePageNum-1)*10)-10);
// getData(url)

// if(activePageNum===10){

//     // enableNext(nextBtn)
// }
// if(activePageNum-1===1){
//     disablePrev(prevBtn)
// }
// }


// function handleNext(activePageNum,prevBtn, nextBtn){
// //move to next page
// let nextPage= document.querySelectorAll('li')[activePageNum+1];
// nextPage.classList='active'
// url= getUrl(((activePageNum+1)*10)-10);
// getData(url)

// if(activePageNum===1){
//     enablePrev(prevBtn)
// }
// if(activePageNum+1===10){
//     disableNext(nextBtn)
// }
// }
// function disablePrev(prevBtn){
//   prevBtn.classList='disabled page-item prev'

// }
// function enablePrev(prevBtn){
//     prevBtn.classList='page-item prev'
//     prevBtn.classList.remove('disabled');
// }

// function disableNext(nextBtn){
//     nextBtn.classList='disabled page-item next'
//     nextBtn.classList.add('disabled')
//   }
//   function enableNext(nextBtn){
//       nextBtn.classList='page-item next'
//       nextBtn.classList.remove('disabled');
//   }


// //handle pagination
let activePageNum
let clickedLink
let nextPage


pageLinks.forEach((el)=>{
    el.addEventListener('click', function(){
       activeLink=document.querySelector('.active') 

       //get active page number
    //    activePageNum=parseInt(activeLink.innerText)
    //    if((this.innerText==='<<' && activePageNum===1) || (this.innerText==='>>' && activePageNum===10)){
    //        return;
    //    }
       //update active class
       activeLink.classList='page-item'
       activeLink.classList.remove('active')

       handleNumClick(this)

    //    if(this.innerText==='<<') {
    //     activePageNum=parseInt(activelink.innerText)
    //     url= getUrl(((activePageNum-1)*10)-10);
    //         getData(url)
    //    } else if(this.innerText==='>>'){
    //     activePageNum=10
    //     url= getUrl(((activePageNum)*10)-10);
    //     getData(url)
    //     //    handleNext(activePageNum, prevBtn,nextBtn)
    //    }else{
    //        handleNumClick(this)
    //    }
    })
})
lastBtn.addEventListener('click', function(){
    activePageNum=10
    url= getUrl(((activePageNum)*limit)-limit);
        getData(url)
})
