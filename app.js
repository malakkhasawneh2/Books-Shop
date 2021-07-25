'use strict';
const orderForm = document.getElementById('orderForm');
const table = document.getElementById('table');
function Book(bookName,Price){
    this.bookName=bookName;
    this.Price=Price
    Book.shop.push(this);
    //we need function to convert array

    saveArr();
}
Book.shop=[];
orderForm.addEventListener('submit', handleSubmit);
function handleSubmit (event){
    event.preventDefault();
    const newbookName= event.target.bookName.value;
    const newbookPrice= event.target.Price.value;
    new Book (newbookName,newbookPrice);
    //i need function to render the table
    renderTable();

}
function saveArr(){
    const converedArr= JSON.stringify(Book.shop);
    localStorage.setItem('table',converedArr);
} 

function getFromls(){
    const data =localStorage.getItem('table');
    const parsedTable = JSON.parse(data);
    if (parsedTable){
        for (let i=0;i<parsedTable.length;i++){
            let reInst = new Book (parsedTable[i].bookName,parsedTable[i].Price);
        }

        renderTable();
    }
}

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// Book.prototype.getPrice=function(){
//     this.Price=random(1,500);
// }

function renderTable() {
    table.textContent='';
    const parentElement=document.getElementById('orderForm');
    for (let i=0;i<Book.shop.length;i++){
        let tableElement = document.createElement('table');
        parentElement.appendChild(tableElement);
        let headerRow = document.createElement('tr');
        tableElement.appendChild(headerRow);
        let th1 = document.createElement('th');
        headerRow.appendChild(th1);
        th1.textContent='Book Name';

        let th2 = document.createElement('th');
        headerRow.appendChild(th2);
        th2.textContent='Book pages';

        let th3 = document.createElement('th');
        headerRow.appendChild(th3);
        th3.textContent='Price';

        let dataRow = document.createElement('tr');
        tableElement.appendChild(dataRow);

        let td1=document.createElement('td');
        dataRow.appendChild(td1);
        td1.textContent=`${Book.shop[i].bookName}`;

        let td2=document.createElement('td');
        dataRow.appendChild(td2);
        td2.textContent=``;

        let td3=document.createElement('td');
        dataRow.appendChild(td3);
        td3.textContent=`${Book.shop[i].Price}`;


        table.appendChild(tableElement);

    }
    
}
getFromls();

