let csvFile1 = document.getElementById("csv_file1");
let csvForm = document.getElementById("csv_form");
let csvTable = document.getElementById("csvTable");
csvForm.addEventListener("submit", function (e) {
  e.preventDefault();
  Papa.parse(csvFile1.files[0], {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      let a = JSON.stringify(results);
      localStorage.setItem("csv1", a);
      let csvOp1 = localStorage.getItem("csv1");
      let csvop2 = JSON.parse(csvOp1);
      document.getElementById("csv_table_sec").style.display = "block";
      for (let i = 0; i < csvop2.data.length; i++) {
        var row1 = csvTable.insertRow();
        var cell1 = row1.insertCell();
        var cell2 = row1.insertCell();
        var cell3 = row1.insertCell();
        var cell4 = row1.insertCell();
        var cell5 = row1.insertCell();
        cell1.innerHTML = csvop2.data[i].NAME;
        cell2.innerHTML = csvop2.data[i].MATHS;
        cell3.innerHTML = csvop2.data[i].SOCIAL;
        cell4.innerHTML = csvop2.data[i].ENGLISH;
        cell5.innerHTML = csvop2.data[i].TELUGU;
      }
    },
  });
});

//sorting
let csvSortingbtn = document.getElementById("csv_sorting_btn");
let rowCount1;
function csvSorting() {
  rowCount1 = csvTable.rows.length;
  if (rowCount1 > 1) {
    window.alert("hello");
    let sortingArry1 = [];
    let sortingArray2 = [];
    let a = JSON.parse(localStorage.getItem("csv1"));

    console.log(rowCount1);
    console.log(a.data[0].NAME);
    if (rowCount1 > 1) {
      alert("file loded");
      let num2 = a.data;
      for (let x of num2) {
        let val1 = x.NAME;
        sortingArry1.push(val1);
      }
      console.log(sortingArry1);
      let sortingArrres = sortingArry1.sort();
      console.log(sortingArrres);
      console.log(a.data);
      for (let x of a.data) {
        console.log(x);
      }
      let i = 0;
      while (i <= a.data.length) {
        for (let y of a.data) {
          if (sortingArrres[i] === y.NAME) {
            sortingArray2.push(y);
            break;
          }
        }
        i++;
      }
      console.log(sortingArray2);
      rowCount = csvTable.rows.length;
      for (let i = rowCount - 1; i > 0; i--) {
        csvTable.deleteRow(i);
      }

      for (let i = 0; i < sortingArray2.length; i++) {
        var row1 = csvTable.insertRow();
        var cell1 = row1.insertCell();
        var cell2 = row1.insertCell();
        var cell3 = row1.insertCell();
        var cell4 = row1.insertCell();
        var cell5 = row1.insertCell();
        cell1.innerHTML = sortingArray2[i].NAME;
        cell2.innerHTML = sortingArray2[i].MATHS;
        cell3.innerHTML = sortingArray2[i].SOCIAL;
        cell4.innerHTML = sortingArray2[i].ENGLISH;
        cell5.innerHTML = sortingArray2[i].TELUGU;
      }
    } else {
      alert("No Data");
    }
  } else {
    alert("no data");
  }

  // let a=JSON.parse(localStorage.getItem("xlsxfile"));
  // console.log(a);
  // let sortingOp=a.sort();
  // console.log(sortingOp);
}

//previouspage

function csvPrevpage() {
  alert("no previous pages");
}
function csvlastpage() {
  alert("No Data here");
}
//csv firstpage
function csvFirstpage() {
  rowCount1 = csvTable.rows.length;
  alert("hello");
  console.log(rowCount1);
  rowCount1 = csvTable.rows.length;
  for (let i = rowCount1 - 1; i > 0; i--) {
    csvTable.deleteRow(i);
  }
  let a = JSON.parse(localStorage.getItem("csv1"));
  let b = a.data.slice(0, 5);
  for (let i = 0; i < b.length; i++) {
    let row1 = csvTable.insertRow();
    let cell1 = row1.insertCell();
    let cell2 = row1.insertCell();
    let cell3 = row1.insertCell();
    let cell4 = row1.insertCell();
    let cell5 = row1.insertCell();
    cell1.innerHTML = b[i].NAME;
    cell2.innerHTML = b[i].MATHS;
    cell3.innerHTML = b[i].SOCIAL;
    cell4.innerHTML = b[i].ENGLISH;
    cell5.innerHTML = b[i].TELUGU;
  }
}

//csv second page
function csvSecondpage() {
  alert("secondpage");
  rowCount1 = csvTable.rows.length;
  for (let i = rowCount1 - 1; i > 0; i--) {
    csvTable.deleteRow(i);
  }
  let a = JSON.parse(localStorage.getItem("csv1"));
  let b = a.data.slice(5, a.length);
  for (let i = 0; i < b.length; i++) {
    let row1 = csvTable.insertRow();
    let cell1 = row1.insertCell();
    let cell2 = row1.insertCell();
    let cell3 = row1.insertCell();
    let cell4 = row1.insertCell();
    let cell5 = row1.insertCell();
    cell1.innerHTML = b[i].NAME;
    cell2.innerHTML = b[i].MATHS;
    cell3.innerHTML = b[i].SOCIAL;
    cell4.innerHTML = b[i].ENGLISH;
    cell5.innerHTML = b[i].TELUGU;
  }
}
//csv searching

// searching
let csvSearchingbtn = document.getElementById("csvSearchingbtn");
let searchCsvdata = document.getElementById("searchcsvdata");
let searchArray1 = [];
let searchArray2 = [];
let searchingRowcount;
let regExp = "/i/";
csvSearchingbtn.addEventListener("click", (e) => {
  console.log("hello");
  searchingRowcount = csvTable.rows.length;
  if (searchingRowcount > 1 && searchCsvdata.value == "") {
    window.alert("Please fill search box");
    confirm("Do You want to see table data?");
    myCsvtable();
  } else if (searchingRowcount > 1) {
    // window.alert("hello");
    e.preventDefault();
    let a = JSON.parse(localStorage.getItem("csv1"));
    for (let x of a.data) {
      searchArray1.push(x.NAME);
    }
    console.log(searchArray1);
    for (let y of a.data) {
      if (
        searchCsvdata.value.toUpperCase() === y.NAME.split("") ||
        searchCsvdata.value.toLowerCase() === y.NAME
      ) {
        searchArray2.push(y);
      }
    }
    console.log(searchArray2);

    rowCount = csvTable.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
      csvTable.deleteRow(i);
    }

    for (let i = 0; i < searchArray2.length; i++) {
      var row1 = csvTable.insertRow();
      var cell1 = row1.insertCell();
      var cell2 = row1.insertCell();
      var cell3 = row1.insertCell();
      var cell4 = row1.insertCell();
      var cell5 = row1.insertCell();
      cell1.innerHTML = searchArray2[i].NAME;
      cell2.innerHTML = searchArray2[i].MATHS;
      cell3.innerHTML = searchArray2[i].SOCIAL;
      cell4.innerHTML = searchArray2[i].ENGLISH;
      cell5.innerHTML = searchArray2[i].TELUGU;
    }
    while (searchArray2.length > 0) {
      searchArray2.pop();
    }
  } else {
    window.alert("No Data");
  }
});

//table
function myCsvtable() {
  window.alert("hello");
  let a = JSON.parse(localStorage.getItem("csv1"));
  for (let i = 0; i < a.data.length; i++) {
    var row1 = csvTable.insertRow();
    var cell1 = row1.insertCell();
    var cell2 = row1.insertCell();
    var cell3 = row1.insertCell();
    var cell4 = row1.insertCell();
    var cell5 = row1.insertCell();
    cell1.innerHTML = a.data[i].NAME;
    cell2.innerHTML = a.data[i].MATHS;
    cell3.innerHTML = a.data[i].SOCIAL;
    cell4.innerHTML = a.data[i].ENGLISH;
    cell5.innerHTML = a.data[i].TELUGU;
  }
}
