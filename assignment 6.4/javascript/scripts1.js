//takes user input for number of rows that needs to be added to table
var row = prompt('Enter the number of rows, the table should have');
//creates number of columns based on user input
function columnCreator() {
    var col = prompt('Enter the number of columns, table needs to have');

    var table = document.querySelector('#tableDiv table');
    var tableRow = table.querySelectorAll('tr');
    for (var i = 0; i < tableRow.length; i++) {
        var tablerw = tableRow[i];
        if (col == '') {
            col = 1;
        }
        for (var j = 0; j < col; j++) {
            var tableData = document.createElement('td');
            tablerw.appendChild(tableData);
            var dummyText = document.createTextNode('Table Data');
            tableData.appendChild(dummyText);
        }
    }

    //Inserts number of rows and colums to the table footer
    var rowNum = table.querySelectorAll('tr');
    var tfoot = document.createElement('tfoot');   
    table.appendChild(tfoot); 
    var td = document.createElement('td');
    var tr = document.createElement('tr');
    tfoot.appendChild(tr);
    tr.appendChild(td); 
    var rowNumTxt = document.createTextNode(rowNum.length +' Rows & ');
    td.appendChild(rowNumTxt);
    //ads numbers of rows and columns to tfoot
    var tableRw = document.querySelector('table>tr');
    var colNum = tableRw.querySelectorAll('td');
    var colNumTxt = document.createTextNode(colNum.length +' columns');
    td.appendChild(colNumTxt);
    var tfootTd = document.querySelector('tfoot tr td');
    console.log(col);
    tfootTd.setAttribute('colspan',col);
}

//creates number of rows based on user input
function rowCreator() {
    var tableDiv = document.querySelector('#tableDiv');
    var table = document.createElement('table');
    tableDiv.appendChild(table);
    var caption = document.createElement('caption');
    var captionTxt = document.createTextNode('Dynamically Generated Table');
    caption.appendChild(captionTxt);
    table.appendChild(caption);
    if (row == '') {
        row = 1;
    }
    for (var i = 0; i < row; i++) {
        var tableRow = document.createElement('tr');
        table.appendChild(tableRow);
    }

}

//row creator and column creator functions are invoked
rowCreator();
columnCreator();