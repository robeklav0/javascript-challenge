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

let button = d3.select("#filter-btn").text("Click here for Filter");  
button.on ("click", handleClick); 

let button1= d3.select("#datetime").text("Enter date");   
if (datetime){   
button1.on ("change", handleTable); }




