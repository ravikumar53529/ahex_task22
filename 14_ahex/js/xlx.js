let xlsFile1 = document.getElementById("xlxfile1");
let xlsForm = document.getElementById("xls_form");
let xlsTable = document.getElementById("xlsTable");

let selectedFile;
let sheetXlsx;
let row1 = "";
let row2 = "";
xlsFile1.addEventListener("change", (event) => {
  selectedFile = event.target.files[0];
});

xlsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (selectedFile) {
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
      let data = event.target.result;
      let dataOp = XLSX.read(data, { type: "binary" });
      dataOp.SheetNames.forEach((sheet) => {
        let rowObject = XLSX.utils.sheet_to_row_object_array(
          dataOp.Sheets[sheet]
        );
        console.log(rowObject);
        localStorage.setItem("xlsxfile", JSON.stringify(rowObject));
        let dataXls = JSON.parse(localStorage.getItem("xlsxfile"));
        console.log(dataXls);
        document.getElementById("xlx_table_sec").style.display = "block";
        for (let i = 0; i < dataXls.length; i++) {
          var row1 = xlsTable.insertRow();
          var cell1 = row1.insertCell();
          var cell2 = row1.insertCell();
          var cell3 = row1.insertCell();
          var cell4 = row1.insertCell();
          var cell5 = row1.insertCell();
          var cell6 = row1.insertCell();
          cell1.innerHTML = dataXls[i].Name;
          cell2.innerHTML = dataXls[i].Place;
          cell3.innerHTML = dataXls[i].Designation;
          cell4.innerHTML = dataXls[i].Email;
          cell5.innerHTML = dataXls[i].Phonenumber;
          cell6.innerHTML = dataXls[i].Surname;
        }
      });
    };
  }
});
let previouspageData = document.getElementById("xslxprepage");
let xslPage1 = document.getElementById("xslfirstpage");
let xslPage2 = document.getElementById("xslpage2");
let xslPage3 = document.getElementById("xslpage3");
previouspageData.addEventListener("click", prepageData);
function prepageData() {}
// xslPage1.addEventListener("click",xslFirstpage);
// let xlxFirstpage=document.getElementById("xlxfirstpage");
// xlxFirstpage.addEventListener("onclick", xslFirstpage(EVENT));
function xslFirstpage() {
  let rowCount = xlsTable.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    xlsTable.deleteRow(i);
  }
  console.log(rowCount);
  let a = JSON.parse(localStorage.getItem("xlsxfile"));
  console.log(a);
  let b = a.slice(0, 10);
  console.log(b);
  for (i = 0; i < b.length; i++) {
    var row1 = xlsTable.insertRow();
    var cell1 = row1.insertCell();
    var cell2 = row1.insertCell();
    var cell3 = row1.insertCell();
    var cell4 = row1.insertCell();
    var cell5 = row1.insertCell();
    var cell6 = row1.insertCell();
    cell1.innerHTML = b[i].Name;
    cell2.innerHTML = b[i].Place;
    cell3.innerHTML = b[i].Designation;
    cell4.innerHTML = b[i].Email;
    cell5.innerHTML = b[i].Phonenumber;
    cell6.innerHTML = b[i].Surname;
  }
}

xslPage2.addEventListener("click", xslSecondpage);
function xslSecondpage() {
  let rowCount = xlsTable.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    xlsTable.deleteRow(i);
  }
  let a = JSON.parse(localStorage.getItem("xlsxfile"));
  const b = a.slice(10, 20);
  for (i = 0; i < b.length; i++) {
    var row1 = xlsTable.insertRow();
    var cell1 = row1.insertCell();
    var cell2 = row1.insertCell();
    var cell3 = row1.insertCell();
    var cell4 = row1.insertCell();
    var cell5 = row1.insertCell();
    var cell6 = row1.insertCell();
    cell1.innerHTML = b[i].Name;
    cell2.innerHTML = b[i].Place;
    cell3.innerHTML = b[i].Designation;
    cell4.innerHTML = b[i].Email;
    cell5.innerHTML = b[i].Phonenumber;
    cell6.innerHTML = b[i].Surname;
  }
}

xslPage3.addEventListener("click", xslThirdpage);
function xslThirdpage() {
  let rowCount = xlsTable.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    xlsTable.deleteRow(i);
  }
  let a = JSON.parse(localStorage.getItem("xlsxfile"));
  const b = a.slice(20, a.length + 1);
  for (i = 0; i < b.length; i++) {
    var row1 = xlsTable.insertRow();
    var cell1 = row1.insertCell();
    var cell2 = row1.insertCell();
    var cell3 = row1.insertCell();
    var cell4 = row1.insertCell();
    var cell5 = row1.insertCell();
    var cell6 = row1.insertCell();
    cell1.innerHTML = b[i].Name;
    cell2.innerHTML = b[i].Place;
    cell3.innerHTML = b[i].Designation;
    cell4.innerHTML = b[i].Email;
    cell5.innerHTML = b[i].Phonenumber;
    cell6.innerHTML = b[i].Surname;
  }
}

// sorting
function xlsxSorting() {
  let sortingArry1 = [];
  let sortingArray2 = [];
  let a = JSON.parse(localStorage.getItem("xlsxfile"));
  let rowCount1 = xlsTable.rows.length;
  if (rowCount1 > 1) {
    alert("file loded");
    console.log(a);
    for (let x of a) {
      let val1 = x.Name;
      sortingArry1.push(val1);
    }
    console.log(sortingArry1);
    let sortingArrres = sortingArry1.sort();
    console.log(sortingArrres);
    let i = 0;
    while (i <= a.length) {
      for (let y of a) {
        if (sortingArrres[i] === y.Name) {
          sortingArray2.push(y);
          break;
        }
      }
      i++;
    }
    console.log(sortingArray2);
    let rowCount = xlsTable.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
      xlsTable.deleteRow(i);
    }

    for (let i = 0; i < sortingArray2.length; i++) {
      var row1 = xlsTable.insertRow();
      var cell1 = row1.insertCell();
      var cell2 = row1.insertCell();
      var cell3 = row1.insertCell();
      var cell4 = row1.insertCell();
      var cell5 = row1.insertCell();
      var cell6 = row1.insertCell();
      cell1.innerHTML = sortingArray2[i].Name;
      cell2.innerHTML = sortingArray2[i].Place;
      cell3.innerHTML = sortingArray2[i].Designation;
      cell4.innerHTML = sortingArray2[i].Email;
      cell5.innerHTML = sortingArray2[i].Phonenumber;
      cell6.innerHTML = sortingArray2[i].Surname;
    }
  } else {
    alert("No Data");
  }

  // let a=JSON.parse(localStorage.getItem("xlsxfile"));
  // console.log(a);
  // let sortingOp=a.sort();
  // console.log(sortingOp);
}

// searching
let xlxButton = document.getElementById("xlxbutton");
let searchXsldata = document.getElementById("searchxsldata");
let xlxSeRachform = document.getElementById("xlx_seach_form");

xlxButton.addEventListener("click", (e) => {
  let searchArray1 = [];
  let searchArray2 = [];
  let searchingRowcount;
  searchingRowcount = xlsTable.rows.length;
  if (searchingRowcount > 1 && searchXsldata.value == "") {
    window.alert("Please fill search box");
    confirm("Do You want to see table data?");
    myTable();
  } else if (searchingRowcount > 1) {
    // window.alert("hello");
    e.preventDefault();
    let a = JSON.parse(localStorage.getItem("xlsxfile"));
    for (let x of a) {
      let val1 = x.Name;
      searchArray1.push(val1);
    }
    for (let y of a) {
      if (searchXsldata.value === y.Name) {
        searchArray2.push(y);
      }
    }
    console.log(searchArray1);
    console.log(searchArray2);

    let rowCount = xlsTable.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
      xlsTable.deleteRow(i);
    }

    for (let i = 0; i < searchArray2.length; i++) {
      var row1 = xlsTable.insertRow();
      var cell1 = row1.insertCell();
      var cell2 = row1.insertCell();
      var cell3 = row1.insertCell();
      var cell4 = row1.insertCell();
      var cell5 = row1.insertCell();
      var cell6 = row1.insertCell();
      cell1.innerHTML = searchArray2[i].Name;
      cell2.innerHTML = searchArray2[i].Place;
      cell3.innerHTML = searchArray2[i].Designation;
      cell4.innerHTML = searchArray2[i].Email;
      cell5.innerHTML = searchArray2[i].Phonenumber;
      cell6.innerHTML = searchArray2[i].Surname;
    }
    while (searchArray2.length > 0) {
      searchArray2.pop();
    }
  } else {
    window.alert("No Data");
  }
});

// table

function myTable() {
  let a = JSON.parse(localStorage.getItem("xlsxfile"));
  for (let i = 0; i < a.length; i++) {
    var row1 = xlsTable.insertRow();
    var cell1 = row1.insertCell();
    var cell2 = row1.insertCell();
    var cell3 = row1.insertCell();
    var cell4 = row1.insertCell();
    var cell5 = row1.insertCell();
    var cell6 = row1.insertCell();
    cell1.innerHTML = a[i].Name;
    cell2.innerHTML = a[i].Place;
    cell3.innerHTML = a[i].Designation;
    cell4.innerHTML = a[i].Email;
    cell5.innerHTML = a[i].Phonenumber;
    cell6.innerHTML = a[i].Surname;
  }
}

// xlxButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(searchXsldata.value);
//   let a = JSON.parse(localStorage.getItem("xlsxfile"));
//   for (let x of a) {
//     let val1 = x.Name;
//     searchArray1.push(val1);
//   }
//   for (let y of a) {
//     if (searchXsldata.value === y.Name) {
//       searchArray2.push(y);
//     }
//   }
//   console.log(searchArray1);
//   console.log(searchArray2);
//   while (searchArray1.length > 0) {
//     searchArray1.pop();
//   }
//   let rowCount = xlsTable.rows.length;
//   for (let i = rowCount - 1; i > 0; i--) {
//     xlsTable.deleteRow(i);
//   }

//   for (let i = 0; i < searchArray2.length; i++) {
//     var row1 = xlsTable.insertRow();
//     var cell1 = row1.insertCell();
//     var cell2 = row1.insertCell();
//     var cell3 = row1.insertCell();
//     var cell4 = row1.insertCell();
//     var cell5 = row1.insertCell();
//     var cell6 = row1.insertCell();
//     cell1.innerHTML = searchArray2[i].Name;
//     cell2.innerHTML = searchArray2[i].Place;
//     cell3.innerHTML = searchArray2[i].Designation;
//     cell4.innerHTML = searchArray2[i].Email;
//     cell5.innerHTML = searchArray2[i].Phonenumber;
//     cell6.innerHTML = searchArray2[i].Surname;
//     let rowCount = xlsTable.rows.length;
//   }

// });
