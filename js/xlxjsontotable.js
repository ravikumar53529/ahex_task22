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
        document.getElementById("xlsTable").style.display = "inline-table";
        let xlsTable1 = document
          .getElementById("xlsTable")
          .getElementsByTagName("tbody")[0];
        let dataXls = JSON.parse(localStorage.getItem("xlsxfile"));
        console.log(dataXls);

        for (let i = 0; i < dataXls.length; i++) {
          console.log("hello");
          var row1 = xlsTable1.insertRow();
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
        $(document).ready(function () {
          $("#xlsTable").DataTable();
        });
      });
    };
  }
});
