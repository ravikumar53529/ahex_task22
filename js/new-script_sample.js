let form = document.getElementById("form");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let sname = document.getElementById("sname");
let fatname = document.getElementById("fatname");
let motname = document.getElementById("motname");
let email = document.getElementById("email");
let country_code = document.getElementById("countrycode");
let phoneNumber = document.getElementById("phonenumber");
let aadharNumber = document.getElementById("adharnum");
let male = document.getElementById("male");
let female = document.getElementById("female");
let others = document.getElementById("others");
let dateBirth = document.getElementById("dob");
let citizen = document.getElementById("citizen");
let study1 = document.getElementById("field1");
let study2 = document.getElementById("field2");
let study3 = document.getElementById("field3");
let currentAddress = document.getElementById("caddress");
let perAddress = document.getElementById("peraddress");
let hobby1 = document.getElementById("hobby1");
let hobby2 = document.getElementById("hobby2");
let hobby3 = document.getElementById("hobby3");
let hobby4 = document.getElementById("hobby4");
let studyFrom = document.getElementById("study_from");
let studyTo = document.getElementById("study_to");
let studyFromTo;
let editForm = document.getElementById("editform");
let editFname = document.getElementById("edit_fname");
let editlname = document.getElementById("edit_lname");
let editSurname = document.getElementById("edit_sname");
let editFathername = document.getElementById("edit_fathername");
let editMothername = document.getElementById("edit_mothername");
let editEmail = document.getElementById("edit_email");
let editCountrycode = document.getElementById("edit_countrycode");
let editPhoneNumber = document.getElementById("edit_phonenumber");
let editAadharNumber = document.getElementById("edit_adharnum");
let editMale = document.getElementById("editmale");
let editFemale = document.getElementById("edit_female");
let editOthers = document.getElementById("edit_others");
let editDateBirth = document.getElementById("edit_dob");
let editCitizen = document.getElementById("edit_citizen");
let editStudy1 = document.getElementById("edit_field1");
let editStudy2 = document.getElementById("edit_field2");
let editStudy3 = document.getElementById("edit_field3");
let editCurrentAddress = document.getElementById("myText1");
let editPermanantAddress = document.getElementById("myText2");
let editHobby1 = document.getElementById("edit_hobby1");
let editHobby2 = document.getElementById("edit_hobby2");
let editHobby3 = document.getElementById("edit_hobby3");
let editHobby4 = document.getElementById("edit_hobby4");
var table = document.getElementById("myTable");
let editStudyfrom = document.getElementById("edit_study_from");
let editStudyto = document.getElementById("edit_study_to");
let myArray1 = [];
let hobbies_array = [];
let indexValue;
let hobbies_res;
let row;
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let myObj1 = {
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
    myObj1["Gender"] = male.value;
    //console.log(male.value);
  } else if (female.checked == true) {
    myObj1["Gender"] = female.value;
  } else {
    myObj1["Gender"] = others.value;
  }
  //for study
  if (study1.checked == true) {
    myObj1["Study"] = study1.value;
  } else if (study2.checked == true) {
    myObj1["Study"] = study2.value;
  } else {
    myObj1["Study"] = study3.value;
  }
  //for hoobies
  //for hoobies
  let checkbox = document.querySelectorAll(".checkbox");
  for (var check of checkbox) {
    if (check.checked == true) {
      hobbies_array.push(check.value);
    } else {
      console.log("you unchecked values ");
    }
  }
  hobbies_res = hobbies_array.toString();
  myObj1["Hobbies"] = hobbies_res;
  console.log(myObj1);

  // if (hobbiesArray[num].checked == true) {
  //   hobbies_array.push(hobbiesArray[num].value);
  // }

  myArray1.push(myObj1);
  console.log(myObj1);
  //Timestamp
  let timeStamp = new Date().toUTCString();
  console.log(timeStamp);
  myObj1["timestamp"] = timeStamp;
  //date picker
  studyFromTo = studyFrom.value + " To " + studyTo.value;
  myObj1["studyFromTo"] = studyFromTo;
  console.log(studyFromTo);
  let storage1 = JSON.stringify(myArray1);
  localStorage.setItem("myobj", storage1);
  let storage_op = JSON.parse(localStorage.getItem("myobj"));
  console.log(storage_op);
  while (hobbies_array.length > 0) {
    hobbies_array.pop();
  }
});

function showData() {
  console.log("iam showData fuinction");
  let rowCount = table.rows.length;
  console.log(rowCount);
  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  let showOp1 = localStorage.getItem("myobj");
  let showOp = JSON.parse(showOp1);
  for (var i = 0; i < showOp.length; i++) {
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
    var cell18 = row.insertCell();
    var cell19 = row.insertCell();
    var cell20 = row.insertCell();
    cell1.innerHTML = showOp[i].firstname;
    cell2.innerHTML = showOp[i].lastname;
    cell3.innerHTML = showOp[i].surname;
    cell4.innerHTML = showOp[i].Fathername;
    cell5.innerHTML = showOp[i].Mothername;
    cell6.innerHTML = showOp[i].Email_Id;
    cell7.innerHTML = showOp[i].country;
    cell8.innerHTML = showOp[i].Phone_No;
    cell9.innerHTML = showOp[i].Adhar_No;
    cell10.innerHTML = showOp[i].Date_of_Birth;
    cell11.innerHTML = showOp[i].Nationality;
    cell12.innerHTML = showOp[i].Current_Address;
    cell13.innerHTML = showOp[i].Permanant_Address;
    cell14.innerHTML = showOp[i].Gender;
    cell15.innerHTML = showOp[i].Study;
    cell16.innerHTML = showOp[i].Hobbies;
    cell17.innerHTML = showOp[i].studyFromTo;
    cell18.innerHTML = showOp[i].timestamp;
    // var cell19 = row.insertCell();
    cell19.innerHTML +=
      "<button class='btn btn-success' onclick='readData(this)'> <i class='fa fa-pencil' data-toggle='modal' data-target='#myModal' aria-hidden='true'> </i> </button>";

    cell20.innerHTML =
      "<button class='btn btn-danger' onclick='deleteData(this)'> <i class='fa fa-trash' aria-hidden='true'></i></button>";
  }
}

function readData(td) {
  row = td.parentElement.parentElement;
  console.log(row);
  indexValue = row;
  let readOp = JSON.parse(localStorage.getItem("myobj"));
  console.log(readOp);
  let x = readOp[row.rowIndex - 1];
  editFname.value = x.firstname;
  editlname.value = x.lastname;
  editSurname.value = x.surname;
  editFathername.value = x.Fathername;
  editMothername.value = x.Mothername;
  editEmail.value = x.Email_Id;
  editCountrycode.value = x.country;
  editPhoneNumber.value = x.Phone_No;
  editAadharNumber.value = x.Adhar_No;
  editDateBirth.value = x.Date_of_Birth;
  editCitizen.value = x.Nationality;
  editCurrentAddress.innerHTML = x.Current_Address;
  editPermanantAddress.innerHTML = x.Permanant_Address;
  //DATE PICKER
  let editDatePicker = x.studyFromTo;
  let editDatePickerres = editDatePicker.split(" ");
  editStudyfrom.value = editDatePickerres[0];
  editStudyto.value = editDatePickerres[2];

  //GENDER
  if (x.Gender == "Male") {
    editMale.checked = true;
  } else if (x.Gender == "Female") {
    editFemale.checked = true;
  } else {
    editOthers.checked = true;
  }

  if (x.Study == "B.Tech") {
    editStudy1.checked = true;
  } else if (x.Study == "M.Tech") {
    editStudy2.checked = true;
  } else {
    editStudy3.checked = true;
  }
  //hobbies
  let hobbies = x.Hobbies;
  let hobbies_res;
  console.log(hobbies);
  let editCheckbox = document.querySelectorAll(".edit_checkbox");
  for (let i = 0; i < editCheckbox.length; i++) {
    if ((editCheckbox[i].type = "checkbox")) {
      editCheckbox[i].checked = false;
    }
  }
  hobbies_res = hobbies.split(",");
  for (let i = 0; i < hobbies_res.length; i++) {
    for (var check2 of editCheckbox) {
      if (check2.value == hobbies_res[i]) {
        check2.checked = true;
      }
    }
  }
}

let editedHobbiesarray = [];
let editedHobbiesres;
function updateData() {
  let op = JSON.parse(localStorage.getItem("myobj"));
  let value = indexValue.rowIndex;
  let myObj2 = {
    firstname: editFname.value,
    lastname: editlname.value,
    surname: editSurname.value,
    Fathername: editFathername.value,
    Mothername: editMothername.value,
    Email_Id: editEmail.value,
    country: editCountrycode.value,
    Phone_No: editPhoneNumber.value,
    Adhar_No: editAadharNumber.value,
    Date_of_Birth: editDateBirth.value,
    Nationality: editCitizen.value,
    Current_Address: editCurrentAddress.value,
    Permanant_Address: editPermanantAddress.value,
  };

  //for study
  if (editStudy1.checked == true) {
    myObj2["Study"] = editStudy1.value;
  } else if (editStudy2.checked == true) {
    myObj2["Study"] = editStudy2.value;
  } else {
    myObj2["Study"] = editStudy3.value;
  }

  //for gender
  if (editMale.checked == true) {
    myObj2["Gender"] = editMale.value;
    //console.log(male.value);
  } else if (editFemale.checked == true) {
    myObj2["Gender"] = editFemale.value;
  } else {
    myObj2["Gender"] = editOthers.value;
  }

  //studyfromto
  myObj2["studyFromTo"] = editStudyfrom.value + " To " + editStudyto.value;
  //for hoobies
  let edit_checkbox = document.querySelectorAll(".edit_checkbox");
  for (var check2 of edit_checkbox) {
    if (check2.checked == true) {
      editedHobbiesarray.push(check2.value);
    } else {
      console.log("you unchecked values ");
    }
  }

  editedHobbiesres = editedHobbiesarray.toString();
  myObj2["Hobbies"] = editedHobbiesres;
  console.log(editedHobbiesarray);
  op[value - 1] = myObj2;
  while (editedHobbiesarray.length > 0) {
    editedHobbiesarray.pop();
  }
  let a = JSON.stringify(op);
  localStorage.removeItem("myobj");
  localStorage.setItem("myobj", a);
  showData();
  readData();
}

function deleteData(td) {
  alert("hello");
  if (window.confirm("please make sure to delete your data")) {
    row = td.parentElement.parentElement.rowIndex;
    console.log(row);
    document.getElementById("myTable").deleteRow(row);
    let x = localStorage.getItem("myobj");
    let y = JSON.parse(x);
    y.splice(row - 1, 1);
    localStorage.setItem("myobj", JSON.stringify(y));
  }
}
