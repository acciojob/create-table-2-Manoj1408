const tbody = document.getElementById("myTable");
function createTable() {
    //Write your code here
	let rows = prompt("Input number of rows");
	let columns = prompt("Input number of columns");
	for (let row = 0; row < rows; row++) {
  let tr = document.createElement("tr");

  for (let col = 0; col < columns; col++) {
    let td = document.createElement("td");
	  td.innerText = `Row-${row} Column-${col}`
    tr.appendChild(td);
  }
  //append the row into the bodyw
  tbody.appendChild(tr);
}
	
  
}
