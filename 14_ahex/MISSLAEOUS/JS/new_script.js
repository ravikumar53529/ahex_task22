var form = document.getElementById("form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var sname = document.getElementById("sname");
var fatname = document.getElementById("fatname");
var motname = document.getElementById("motname");
var email = document.getElementById("email");
var country_code = document.getElementById("countrycode");
var phoneNumber = document.getElementById("phonenumber");
var aadharNumber = document.getElementById("adharnum");
var male = document.getElementById("male");
var female = document.getElementById("female");
var others = document.getElementById("others");
var dateBirth = document.getElementById("dob");
var citizen = document.getElementById("citizen");
var study1 = document.getElementById("field1");
var study2 = document.getElementById("field2");
var study3 = document.getElementById("field3");
var currentAddress = document.getElementById("caddress");
var perAddress = document.getElementById("peraddress");
const input = document.getElementById("file1");
//model form
let editForm = document.getElementById("editform");
let row = null;
// let editFname = document.getElementById("edit_fname");
// let editlname = document.getElementById("edit_lname");
// let editSurname = document.getElementById("edit_sname");
// let editFathername = document.getElementById("edit_fathername");
// let editMothername = document.getElementById("edit_mothername");
// let editEmail = document.getElementById("edit_email");
// let editCountrycode = document.getElementById("edit_countrycode");
// let editPhoneNumber = document.getElementById("edit_phonenum");
// let editAadharNumber = document.getElementById("edit_adharnum");
// let editMale = document.getElementById("edit_male");
// let editFemale = document.getElementById("edit_female");
// let editOthers = document.getElementById("edit_others");
// let editDateBirth = document.getElementById("edit_dob");
// let editCitizen = document.getElementById("edit_citizen");
// var editStudy1 = document.getElementById("edit_field1");
// var editStudy2 = document.getElementById("edit_field2");
// var editStudy3 = document.getElementById("edit_field3");
// var editCurrentAddress = document.getElementById("edit_currentaddress");
// var editPermanantAddress = document.getElementById("edit_permanantaddress");
var table = document.getElementById("myTable");
const strArray = [];
let myArray = [];
let index = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("hello");

  let output = {
    firstname: fname.value,
    lastname: lname.value,
    surname: sname.value,
    Fathername: fatname.value,
    Mothername: motname.value,
    Email_Id: email.value,
    country: country_code.value,
    Phone_No: phoneNumber.value,
    Adhar_No: aadharNumber.value,
    Date_of_Birth: dateBirth.value,
    Nationality: citizen.value,
    Current_Address: currentAddress.value,
    Permanant_Address: perAddress.value,
  };

  //for gender
  if (male.checked == true) {
    output["Gender"] = male.value;
    //console.log(male.value);
  } else if (female.checked == true) {
    output["Gender"] = female.value;
  } else {
    output["Gender"] = others.value;
  }
  //for study
  if (study1.checked == true) {
    output["Study"] = study1.value;
  } else if (study2.checked == true) {
    output["Study"] = study2.value;
  } else {
    output["Study"] = study3.value;
  }

  console.table(output);
  strArray.push(output);
  //form data storing in localstorage
  //string represenation of object
  let myObjSerialized = JSON.stringify(strArray); //serialized means change onject ino some form of redable data.
  localStorage.setItem("myobj", myObjSerialized);
  form.reset();
});

// to get table data.
// function to_getTable_of_data() {

//   let myObj_des = JSON.parse(localStorage.getItem("myobj"));
//   console.log(myObj_des);
//   for (var i = 0; i <= myObj_des.length; i++) {
//     var row = table.insertRow();
//     var cell1 = row.insertCell();
//     var cell2 = row.insertCell();
//     var cell3 = row.insertCell();
//     var cell4 = row.insertCell();
//     var cell5 = row.insertCell();
//     var cell6 = row.insertCell();
//     var cell7 = row.insertCell();
//     var cell8 = row.insertCell();
//     var cell9 = row.insertCell();
//     var cell10 = row.insertCell();
//     var cell11 = row.insertCell();
//     var cell12 = row.insertCell();
//     var cell13 = row.insertCell();
//     var cell14 = row.insertCell();
//     var cell15 = row.insertCell();
//     var cell16 = row.insertCell();
//     var cell17 = row.insertCell();
//     cell1.innerHTML = myObj_des[i].firstname;
//     cell2.innerHTML = myObj_des[i].lastname;
//     cell3.innerHTML = myObj_des[i].surname;
//     cell4.innerHTML = myObj_des[i].Fathername;
//     cell5.innerHTML = myObj_des[i].Mothername;
//     cell6.innerHTML = myObj_des[i].Email_Id;
//     cell7.innerHTML = myObj_des[i].country;
//     cell8.innerHTML = myObj_des[i].Phone_No;
//     cell9.innerHTML = myObj_des[i].Adhar_No;
//     cell10.innerHTML = myObj_des[i].Date_of_Birth;
//     cell11.innerHTML = myObj_des[i].Nationality;
//     cell12.innerHTML = myObj_des[i].Current_Address;
//     cell13.innerHTML = myObj_des[i].Permanant_Address;
//     cell14.innerHTML = myObj_des[i].Gender;
//     cell15.innerHTML = myObj_des[i].Study;
//     // var cell19 = row.insertCell();
//     cell16.innerHTML +=
//       "<button class='btn btn-success' onclick='readData(this)'><i class='fa fa-pencil' data-toggle='modal' data-target='#myModal' aria-hidden='true'></i></button>";

//     cell17.innerHTML =
//       "<button class='btn btn-danger' onclick='deleteData(this)'><i class='fa fa-trash' aria-hidden='true'></i></button>";
//   }
// }

//SHOW DATA ON TABLES
// window.addEventListener("onload", showData());

// window.onload(showData());

function showData() {
  console.log("data visible");

  let rowCount = myTable.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    myTable.deleteRow(i);
  }

  var table = document.getElementById("myTable");
  let myObj_des = JSON.parse(localStorage.getItem("myobj"));
  console.log(myObj_des);
  for (var i = 0; i <= myObj_des.length; i++) {
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    var cell10 = row.insertCell();
    var cell11 = row.insertCell();
    var cell12 = row.insertCell();
    var cell13 = row.insertCell();
    var cell14 = row.insertCell();
    var cell15 = row.insertCell();
    var cell16 = row.insertCell();
    var cell17 = row.insertCell();
    cell1.innerHTML = myObj_des[i].firstname;
    cell2.innerHTML = myObj_des[i].lastname;
    cell3.innerHTML = myObj_des[i].surname;
    cell4.innerHTML = myObj_des[i].Fathername;
    cell5.innerHTML = myObj_des[i].Mothername;
    cell6.innerHTML = myObj_des[i].Email_Id;
    cell7.innerHTML = myObj_des[i].country;
    cell8.innerHTML = myObj_des[i].Phone_No;
    cell9.innerHTML = myObj_des[i].Adhar_No;
    cell10.innerHTML = myObj_des[i].Date_of_Birth;
    cell11.innerHTML = myObj_des[i].Nationality;
    cell12.innerHTML = myObj_des[i].Current_Address;
    cell13.innerHTML = myObj_des[i].Permanant_Address;
    cell14.innerHTML = myObj_des[i].Gender;
    cell15.innerHTML = myObj_des[i].Study;
    // var cell19 = row.insertCell();
    cell16.innerHTML +=
      "<button class='btn btn-success' onclick='readData(this)'> <i class='fa fa-pencil' data-toggle='modal' data-target='#myModal' aria-hidden='true'> </i> </button>";

    cell17.innerHTML =
      "<button class='btn btn-danger' onclick='deleteData(this)'> <i class='fa fa-trash' aria-hidden='true'></i></button>";
  }
}

//read data to new form
function readData(td) {
  row = td.parentElement.parentElement;
  console.log(row);
  console.log(row.rowIndex);
  document.getElementById("edit_fname").value = row.cells[0].innerHTML;
  document.getElementById("edit_lname").value = row.cells[1].innerHTML;
  document.getElementById("edit_sname").value = row.cells[2].innerHTML;
  document.getElementById("edit_fathername").value = row.cells[3].innerHTML;
  document.getElementById("edit_mothername").value = row.cells[4].innerHTML;
  document.getElementById("edit_email").value = row.cells[5].innerHTML;
  document.getElementById("edit_countrycode").value = row.cells[6].innerHTML;
  document.getElementById("edit_phonenumber").value = row.cells[7].innerHTML;
  document.getElementById("edit_adharnum").value = row.cells[8].innerHTML;
  document.getElementById("edit_dob").value = row.cells[9].innerHTML;
  document.getElementById("edit_citizen").value = row.cells[10].innerHTML;
  document.getElementById("myText1").value = row.cells[11].innerHTML;
  document.getElementById("myText2").value = row.cells[12].innerHTML;
  // document.getElementById("edit_male").value = row.cells[14].innerHTML;
}

function updateData() {
  row.cells[0].innerHTML = document.getElementById("edit_fname").value;
  row.cells[1].innerHTML = document.getElementById("edit_lname").value;
  row.cells[2].innerHTML = document.getElementById("edit_sname").value;
  row.cells[3].innerHTML = document.getElementById("edit_fathername").value;
  row.cells[4].innerHTML = document.getElementById("edit_mothername").value;
  row.cells[5].innerHTML = document.getElementById("edit_email").value;
  row.cells[6].innerHTML = document.getElementById("edit_countrycode").value;
  row.cells[7].innerHTML = document.getElementById("edit_phonenumber").value;
  row.cells[8].innerHTML = document.getElementById("edit_adharnum").value;
  row.cells[9].innerHTML = document.getElementById("edit_dob").value;
  row.cells[10].innerHTML = document.getElementById("edit_citizen").value;
  row.cells[11].innerHTML = document.getElementById("myText1").value;
  row.cells[12].innerHTML = document.getElementById("myText2").value;
  console.log("hello");
  const myObj2 = {
    firstname: row.cells[0].innerHTML,
    lastname: row.cells[1].innerHTML,
    surname: row.cells[2].innerHTML,
    fathername: row.cells[3].innerHTML,
    mothername: row.cells[4].innerHTML,
    email: row.cells[5].innerHTML,
    countrycode: row.cells[6].innerHTML,
    phonenumber: row.cells[7].innerHTML,
    adharnumber: row.cells[8].innerHTML,
    dateofbirth: row.cells[9].innerHTML,
    citizen: row.cells[10].innerHTML,
    currentaddress: row.cells[11].innerHTML,
    permanantaddress: row.cells[12].innerHTML,
  };
  console.log(myObj2);
  console.log(row.rowIndex);
  let a = localStorage.getItem("myobj");
  console.log(a);
  let b = JSON.parse(a);
  console.log(b);
  b[row.rowIndex - 1] = myObj2;
  console.log(b);
  localStorage.setItem("myobj", JSON.stringify(b));
}

//DELETE DATA
function deleteData(td) {
  if (window.confirm("please make sure to delete your data")) {
    row = td.parentElement.parentElement.rowIndex;
    document.getElementById("myTable").deleteRow(row);

    let x = localStorage.getItem("myobj");
    let y = JSON.parse(x);
    let obj = y.splice(row - 1, 1);
    localStorage.setItem("myobj", JSON.stringify(y));
  }
}
