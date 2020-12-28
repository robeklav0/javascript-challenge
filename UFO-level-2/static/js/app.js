// from data.js

function handleTable(){
let tbody = d3.select("tbody");
let table = d3.select("table");
table.attr("class","table table-striped table-hover");
tableData = data;
data.forEach(item =>{
let row = tbody.append("tr");
row.append("td").text(item.datetime);
row.append("td").text(item.city);
row.append("td").text(item.state);
row.append("td").text(item.country);
row.append("td").text(item.shape);
row.append("td").text(item.durationMinutes);
row.append("td").text(item.comments);
});
}
handleTable();



function handleClick(){
    let inputBox=d3.select("#datetime");
    let inputText= inputBox.property("value");
    let newData= tableData.filter(item => item.datetime === inputText);
    let tbody = d3.select("tbody");
    let table = d3.select("table");
    tbody.html("");
    table.attr("class","table table-striped table-hover");
    tableData = newData;
    newData.forEach( item =>{
    let row = tbody.append("tr");
    row.append("td").text(item.datetime);
    row.append("td").text(item.city);
    row.append("td").text(item.state);
    row.append("td").text(item.country);
    row.append("td").text(item.shape);
    row.append("td").text(item.durationMinutes);
    row.append("td").text(item.comments);
    });
    console.log(newData);  
}

function handleClick2(){
    let inputBox=d3.select("#city");
    let inputText= inputBox.property("value");
    let newData= tableData.filter(item => item.city === inputText);
    let tbody = d3.select("tbody");
    let table = d3.select("table");
    tbody.html("");
    table.attr("class","table table-striped table-hover");
    tableData = newData;
    newData.forEach( item =>{
    let row = tbody.append("tr");
    row.append("td").text(item.datetime);
    row.append("td").text(item.city);
    row.append("td").text(item.state);
    row.append("td").text(item.country);
    row.append("td").text(item.shape);
    row.append("td").text(item.durationMinutes);
    row.append("td").text(item.comments);
    });
    console.log(newData);  
}

function handleClick3(){
    let inputBox=d3.select("#state");
    let inputText= inputBox.property("value");
    let newData= tableData.filter(item => item.state === inputText);
    let tbody = d3.select("tbody");
    let table = d3.select("table");
    tbody.html("");
    table.attr("class","table table-striped table-hover");
    tableData = newData;
    newData.forEach( item =>{
    let row = tbody.append("tr");
    row.append("td").text(item.datetime);
    row.append("td").text(item.city);
    row.append("td").text(item.state);
    row.append("td").text(item.country);
    row.append("td").text(item.shape);
    row.append("td").text(item.durationMinutes);
    row.append("td").text(item.comments);
    });
    console.log(newData);  
}
function handleClick4(){
    let inputBox=d3.select("#country");
    let inputText= inputBox.property("value");
    let newData= tableData.filter(item => item.country === inputText);
    let tbody = d3.select("tbody");
    let table = d3.select("table");
    tbody.html("");
    table.attr("class","table table-striped table-hover");
    tableData = newData;
    newData.forEach( item =>{
    let row = tbody.append("tr");
    row.append("td").text(item.datetime);
    row.append("td").text(item.city);
    row.append("td").text(item.state);
    row.append("td").text(item.country);
    row.append("td").text(item.shape);
    row.append("td").text(item.durationMinutes);
    row.append("td").text(item.comments);
    });
    console.log(newData);  
}
function handleClick5(){
    let inputBox=d3.select("#shape");
    let inputText= inputBox.property("value");
    let newData= tableData.filter(item => item.shape === inputText);
    let tbody = d3.select("tbody");
    let table = d3.select("table");
    tbody.html("");
    table.attr("class","table table-striped table-hover");
    tableData = newData;
    newData.forEach( item =>{
    let row = tbody.append("tr");
    row.append("td").text(item.datetime);
    row.append("td").text(item.city);
    row.append("td").text(item.state);
    row.append("td").text(item.country);
    row.append("td").text(item.shape);
    row.append("td").text(item.durationMinutes);
    row.append("td").text(item.comments);
    });
    console.log(newData);  
}


let button= d3.select("#datetime").text("Enter Date"); 
if (datetime){
button.on ("change", handleClick); }

let button2= d3.select("#city").text("Enter city");   
if (city){
button2.on ("change", handleClick2); }

let button3= d3.select("#state").text("Enter state");  
if (state){
button3.on ("change", handleClick3); }

let button4= d3.select("#country").text("Enter country");  
if (country){
button4.on ("change", handleClick4); }

let button5= d3.select("#shape").text("Enter shape");   
if (shape){
button5.on ("change", handleClick5); }


let button6= d3.select("#datetime").text("Enter date");   
if (datetime){
button6.on ("click", handleTable); }
let button7= d3.select("#city").text("Enter city");   
if (city){
button7.on ("click", handleTable); }
let button8= d3.select("#state").text("Enter state");   
if (state){
button8.on ("click", handleTable); }
let button9= d3.select("#country").text("Enter country");   
if (country){
button9.on ("click", handleTable); }
let button10= d3.select("#shape").text("Enter shape");   
if (shape){
button10.on ("click", handleTable); }

// let inputfield = d3.select("#datetime");   //devuelve la tabla original
// inputfield.on("change", handleTable);




