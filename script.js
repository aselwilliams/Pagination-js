let tableBody = document.querySelector(".info");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const pageLinks=document.querySelectorAll('a')
let data = [];
let pageSize = 5;
let currentPage = 1;

function getUrl(start = 0) {
  return "https://api.coinlore.com/api/tickers/?start=" + start + "&limit=10";
}

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => loadToTable(data))
    .catch((err) => console.log(err));
}

function loadToTable(data) {
  let coinName = [];
  let coinSymbol = [];
  let coinRank = [];
  let coinPrice = [];
  let coin24Change = [];
  console.log(data);

  data["data"].forEach((coin) => {
    coinName.push(coin.name);
    coinSymbol.push(coin.symbol);
    coinRank.push(coin.rank);
    coinPrice.push(coin.price_usd);
    coin24Change.push(coin.percent_change_24h);
  });
  let html = "";
  for (let i = 0; i < coinName.length; i++) {
    tableBody.innerHTML += `
    <tr>
        <td>${i + 1}</td>
        <td>${coinName[i]}(${coinSymbol[i]})</td>
        <td>${coinRank[i]}</td>
        <td> $ ${coinPrice[i]}</td>
        <td>${coin24Change[i]}</td>
    </tr>`;
  }
}

function handleNumClick(clickedLink, prevBtn, nextBtn){
    clickedLink.parenElement.classList='active';
    let clickedPageNum=parseInt(clickedLink.innerText)
    const url=getUrl((clickedLinkPageNumber*10)-10);
    getData(url)
}
function handlePrev(){

}
function handleNext(){

}
function disablePrev(){

}
function enablePrev(){

}
function init() {
  let url = getUrl();
  getData(url);
}
init();

//handle pagination
let activePageNum
let clickedLink
let nextPage


pageLinks.forEach((el)=>{
    element.addEventListener('click', function(){
       activeLink=document.querySelector('.active') 

       //get active page number
       if((this.innerText==='prev' && activePageNum===1) ||(this.innerText==='next' && activePageNum===10)){
           return
       }
       //update active class
       activeLink.classList='effect'
       activeLink.classList.remove('active')

       if(this.innerText==='prev') {
           handlePrev()
       } else if(this.innerText==='next'){
           handleNext()
       }else{
           handleNumClick(this, prevBtn, nextBtn)
       }
    })
})
