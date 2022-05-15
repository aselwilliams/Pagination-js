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

function init() {
  let url = getUrl();
  getData(url);
}
init();

//handle pagination

//  function renderData(){
//      getData()
//      tableBody=''
//      data.filter((row, index)=>{
//          let start = (currentPage-1) * pageSize //0
//          let end = currentPage * pageSize //5

//             for (let i=0; i<data.length; i++){
//                 tableBody.innerHTML+=`
//                  <tr>
//                      <td>${i+1}</td>
//                      <td>${data[i].author}</td>
//                      <td>${data[i].title}</td>
//                      <td>${data[i].points}</td>
//                      <td>${data[i].created_at}</td>
//                  </tr>`
//             }

//         })

//     }

//     // const lastPage=Math.ceil(data.length/limit)
//     // const start=pageNumber*limit;
//     // const end= (pageNumber+1) *limit

//     if(pageNumber===0){
//         prevBtn.disabled=true
//     } else {
//         prevBtn.disabled=false
//     }
//     if(pageNumber===lastPage){
//         nextBtn.disabled=true
//     } else {
//         nextBtn.disabled=false;
//     }

//     const partialData= data.slice(start, end)
//     console.log(partialData)

// renderData()
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(response => response.json())
// .then(data =>{
//     console.log(data)
//     // const data=data
//    for (let i=0; i<data.length; i++){
//        tableBody.innerHTML+=`
//         <tr>
//             <td>${data[i].id}</td>
//             <td>${data[i].email}</td>
//             <td>${data[i].name}</td>
//             <td>${data[i].postId}</td>
//         </tr>`
//    }

// })

// let pageNumber=0;
// let limit=20;
// const lastPage=Math.ceil(data.length/limit)
// const start=pageNumber*limit;
// const end= (pageNumber+1) *limit

// if(pageNumber===0){
//     prevBtn.disabled=true
// } else {
//     prevBtn.disabled=false
// }
// if(pageNumber===lastPage){
//     nextBtn.disabled=true
// } else {
//     nextBtn.disabled=false;
// }

// const partialData= data.slice(start, end)
// console.log(partialData)
