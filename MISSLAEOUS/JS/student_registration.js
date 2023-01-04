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
let editForm = document.getElementById("editform");
let editFname = document.getElementById("edit_fname");
let editlname = document.getElementById("edit_lname");
let editSurname = document.getElementById("edit_sname");
let editFathername = document.getElementById("edit_fathername");
let editMothername = document.getElementById("edit_mothername");
let editEmail = document.getElementById("edit_email");
var editCountrycode = document.getElementById("edit_countrycode");
var editPhoneNumber = document.getElementById("edit_phonenum");
var editAadharNumber = document.getElementById("edit_adharnum");
var editMale = document.getElementById("edit_male");
var editFemale = document.getElementById("edit_female");
var editOthers = document.getElementById("edit_others");
var editDateBirth = document.getElementById("edit_dob");
var editCitizen = document.getElementById("edit_citizen");
var editStudy1 = document.getElementById("edit_field1");
var editStudy2 = document.getElementById("edit_field2");
var editStudy3 = document.getElementById("edit_field3");
var editCurrentAddress = document.getElementById("edit_currentaddress");
var editPermanantAddress = document.getElementById("edit_permanantaddress");
var table = document.getElementById("myTable");
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
const strArray = [];
const updatedArray = [];
let index = 0;
let index1 = 0;
if (form) {
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

    // var table=document.createElement('table');
    // for(let i=0;i<=5;i++){
    //    var tr=document.createElement('tr');
    //    var td1=document.createElement('td');
    //    var td2=document.createComment("td");
    //    var text1=document.createTextNode('text1');
    //    var  text2=documnet.createTextNode('text2');

    //    td1.appendChild(text1);

    //    td2.appendChild(text2);
    //    tr.appendChild(td1);
    //    tr.appendChild(td2);
    //    table.appendChild(tr);
    //  }
    form.reset();
    var table = document.getElementById("myTable");
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
    // var cell18 = row.insertCell();
    let myObj_deserialized = JSON.parse(localStorage.getItem("myobj"));
    cell1.innerHTML = myObj_deserialized[index].firstname;
    cell2.innerHTML = myObj_deserialized[index].lastname;
    cell3.innerHTML = myObj_deserialized[index].surname;
    cell4.innerHTML = myObj_deserialized[index].Fathername;
    cell5.innerHTML = myObj_deserialized[index].Mothername;
    cell6.innerHTML = myObj_deserialized[index].Email_Id;
    cell7.innerHTML = myObj_deserialized[index].country;
    cell8.innerHTML = myObj_deserialized[index].Phone_No;
    cell9.innerHTML = myObj_deserialized[index].Adhar_No;
    cell10.innerHTML = myObj_deserialized[index].Date_of_Birth;
    cell11.innerHTML = myObj_deserialized[index].Nationality;
    cell12.innerHTML = myObj_deserialized[index].Current_Address;
    cell13.innerHTML = myObj_deserialized[index].Permanant_Address;
    cell14.innerHTML = myObj_deserialized[index].Gender;
    cell15.innerHTML = myObj_deserialized[index].Study;

    //ID VALUES
    cell1.setAttribute("id", "cell1");
    // var cell19 = row.insertCell();
    cell16.innerHTML +=
      "<button class='btn btn-success' onclick=''><i class='fa fa-pencil' data-toggle='modal' data-target='#myModal' aria-hidden='true'></i></button>";
    // cell16.setAttribute("id", "edit-data");
    // const list_item = document.getElementById("edit-data");
    // const new_item = document.getElementById("bootpop");
    // list_item.parentNode.replaceChild(new_item, list_item);
    cell17.innerHTML =
      "<button class='btn btn-danger' onclick='deleteData()'><i class='fa fa-trash' aria-hidden='true'></i></button>";
    // cell17.setAttribute("class", "delete-data");
    // cell18.innerHTML +=
    //   "<button class='btn btn-success'><i class='fa fa-pencil' data-toggle='modal' data-target='#myModal' aria-hidden='true'></i></button>";
    // cell18.innerHTML = document.getElementById("test1");
    // let head1 = document.getElementById("head1");
    // head1.addEventListener("mouseover", function (e) {
    //   window.alert("hello");
    // });

    //   let text="";
    //   for(let x in myObj_deserialized){
    //      text+=myObj_deserialized[x]+" ";
    //   };
    //   const myArray=text.split(" ");

    editFname.setAttribute("value", myObj_deserialized[index].firstname);
    editlname.setAttribute("value", myObj_deserialized[index].lastname);
    editSurname.setAttribute("value", myObj_deserialized[index].surname);
    editFathername.setAttribute("value", myObj_deserialized[index].Fathername);
    editMothername.setAttribute("value", myObj_deserialized[index].Mothername);
    editEmail.setAttribute("value", myObj_deserialized[index].Email_Id);
    editCountrycode.setAttribute("value", myObj_deserialized[index].country);
    editPhoneNumber.setAttribute("value", myObj_deserialized[index].Phone_No);
    // editAadharNumber.setAttribute("value", myObjSerialized[index].Adhar_No);
    editDateBirth.setAttribute(
      "value",
      myObj_deserialized[index].Date_of_Birth
    );
    editCurrentAddress.setAttribute(
      "value",
      myObjSerialized[index].Current_Address
    );
    editPermanantAddress.setAttribute(
      "value",
      myObj_deserialized[index].Permanant_Address
    );
    index += 1;
    //storing image file in localstorage

    input.addEventListener("change", (event) => {
      const img = event.target.files[0];

      //dataURL conevrsion bcz local stors only string type.
      const reader = new FileReader();
      reader.readAsDataURL(img);

      reader.addEventListener("load", () => {
        localStorage.setItem("file1", reader.result);
      });
    });
  });
}
//deleting data
function deleteFun() {
  confirm("PLEASE MAKE SURE FOR DATA DELETION");
}

//table view in new tab
window.addEventListener("load", showData());
// window.onload(showData());
function showData() {
  var table = document.getElementById("myTable");
  let myObj_des = JSON.parse(localStorage.getItem("myobj"));
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
    // var cell18 = row.insertCell();

    //ID VALUES
    cell1.setAttribute("id", "cell1");
    // var cell19 = row.insertCell();
    cell16.innerHTML +=
      "<button class='btn btn-success'><i class='fa fa-pencil' data-toggle='modal' data-target='#myModal' aria-hidden='true'></i></button>";
    // cell16.setAttribute("id", "edit-data");
    // const list_item = document.getElementById("edit-data");
    // const new_item = document.getElementById("bootpop");
    // list_item.parentNode.replaceChild(new_item, list_item);
    cell17.innerHTML =
      "<button class='btn btn-danger' onclick='deleteData()'><i class='fa fa-trash' aria-hidden='true'></i></button>";
    // cell17.setAttribute("class", "delete-data");
    // cell18.innerHTML +=
    //   "<button class='btn btn-success'><i class='fa fa-pencil' data-toggle='modal' data-target='#myModal' aria-hidden='true'></i></button>";
    // cell18.innerHTML = document.getElementById("test1");
    // let head1 = document.getElementById("head1");
    // head1.addEventListener("mouseover", function (e) {
    //   window.alert("hello");
    // });

    // let myObj_deserialized = JSON.parse(localStorage.getItem("myobj"));
    //   let text="";
    //   for(let x in myObj_deserialized){
    //      text+=myObj_deserialized[x]+" ";
    //   };
    //   const myArray=text.split(" ");
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

    // let rowTablelength =
    //   document.getElementById("myTable").rows[0].cells.length;
    // let table_row = document.getElementById("myTable").rows[i].cells;
    // for (var ii = 0; i <= rowTablelength; ii++) {
    //   table_row[ii].innerHTML = myObj_des[i].firstname;
    // editFname.setAttribute("value", myObj_des[i].firstname);
    // editlname.setAttribute("value", myObj_des[i].lastname);
    // editSurname.setAttribute("value", myObj_des[i].surname);
    // editFathername.setAttribute("value", myObj_des[i].Fathername);
    // editMothername.setAttribute("value", myObj_des[i].Mothername);
    // editEmail.setAttribute("value", myObj_des[i].Email_Id);
    // editCountrycode.setAttribute("value", myObj_des[i].country);
    // editPhoneNumber.setAttribute("value", myObj_des[i].Phone_No);
  }
  // edit_fname.setAttribute("value",myObj_deserialized[index].firstname);
}
// }
//   document.getElementById("col1").innerHTML=1;

//    //create table

//  document.getElementById("new_table").innerHTML="hello";

// let myObj_deserialized=JSON.parse(localStorage.getItem("myObj"));
// let text="";
// for(let x in myObj_deserialized){
//    text+=myObj_deserialized[x]+" ";
// };
// const myArray=text.split(" ");
// var x = document.getElementById("myTable").rows[1].cells;

// for (let i=0;i<=15;i++){

//  x[i+1].innerHTML = myArray[i];
// }

//   const display_image=document.getElementById("displayimg");
//   if(image1){
//    display_image.setAttribute('src',image1);
//   }else{
//    display_image.setAttribute('src','default.jpg');
//   }

// var x = document.getElementById("myTable").rows[1].cells;
//  x[0].innerHTML = "NEW";
// let va=document.getElementById("myTable").rows[1].cells;
// va[2].innerHTML="hello";

//let arr=[col1,col2,col3,col4,col5,col6,col6,col7,col8,col9,col10,col11,col12,col13,col14];
//for (y of arr){
//  document.getElementById("y").innerHTML=myArray[1];
// }

//for (let i=0;i<=15;i++){
//document.getElementById("id1").innerHTML=myArray;
//}

//update form  data

editForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("hello");
  window.alert("hello");
  let output = {
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
  updatedArray.push(output);
  let myObjSerialized = JSON.stringify(updatedArray);
  localStorage.setItem("myobj", myObjSerialized);
  let myObj_deserialized = JSON.parse(localStorage.getItem("myobj"));
  // window.alert(document.getElementById("myTable").rows[0].cells[0].innerHTML);
  editForm.reset();
  //table creation
  let rowTablelength = document.getElementById("myTable").rows[0].cells.length;
  let table_row = document.getElementById("myTable").rows[1].cells;
  for (var ii = 1; ii <= rowTablelength - 3; ii++) {
    table_row[ii].innerHTML = "hello";
  }

  // // var cell18 = row.insertCell();
  // cell1.setAttribute("id", cell1);
  // document.getElementById("cell1").innerHTML =
  //   myObj_deserialized[index1].firstname;
  // cell2.setAttribute("id", cell2);
  // document.getElementById("cell2").innerHTML =
  //   myObj_deserialized[index1].lastname;
  // cell3.setAttribute("id", cell3);
  // document.getElementById("cell3").innerHTML =
  //   myObj_deserialized[index1].surname;
  // cell4.setAttribute("id", cell4);
  // document.getElementById("cell4").innerHTML =
  //   myObj_deserialized[index1].Fathername;
  // cell5.setAttribute("id", cell5);
  // document.getElementById("cell5").innerHTML =
  //   myObj_deserialized[index1].Mothername;
  // cell6.setAttribute("id", cell6);
  // document.getElementById("cell6").innerHTML =
  //   myObj_deserialized[index1].country_code;
  // cell7.setAttribute("id", cell7);
  // document.getElementById("cell7").innerHTML =
  //   myObj_deserialized[index1].phoneNumber;
  // cell8.setAttribute("id", cell8);
  // document.getElementById("cell8").innerHTML =
  //   myObj_deserialized[index1].aadharNumber;

  // cell3.innerHTML = myObj_deserialized[index1].surname;
  // cell4.innerHTML = myObj_deserialized[index1].Fathername;
  // cell5.innerHTML = myObj_deserialized[index1].Mothername;
  // cell6.innerHTML = myObj_deserialized[index1].Email_Id;
  // cell7.innerHTML = myObj_deserialized[index1].country;
  // cell8.innerHTML = myObj_deserialized[index1].Phone_No;
  // cell9.innerHTML = myObj_deserialized[index1].Adhar_No;
  // cell10.innerHTML = myObj_deserialized[index1].Date_of_Birth;
  // cell11.innerHTML = myObj_deserialized[index1].Nationality;
  // cell12.innerHTML = myObj_deserialized[index1].Current_Address;
  // cell13.innerHTML = myObj_deserialized[index1].Permanant_Address;
  // cell14.innerHTML = myObj_deserialized[index1].Gender;
  // cell15.innerHTML = myObj_deserialized[index1].Study;
  // cell14.innerHTML = myObj_deserialized[index1].Gender;
  // cell15.innerHTML = myObj_deserialized[index1].Study;
});

//   cell1.innerHTML = myObj_deserialized[index].firstname;
//   let edit_fname = document.getElementById("edit_fname");
//   let myObj_deserialized = JSON.parse(localStorage.getItem("myobj"));
//   index=0;
//   edit_fname.innerHTML=myObj_deserialized[index].firstname;
//   index+=1

// }

//DELETE BUTTON
function deleteData() {
  if (window.confirm("please make sure to delete your data")) {
    localStorage.removeItem("myobj");
  }
}

// let edit_btn = document.getElementById("edit");
// if (edit_btn) {
//   edit_btn.addEventListener("click", function (e) {
//     window.alert("hello Iam edit");
//   });
// }

// console.log(text);

function myFun11() {
  window.alert("hello");
  const val1 = localStorage.getItem("file1");
  const previewImage = document.getElementById("one3");

  if (val1) {
    previewImage.setAttribute("src", val1);
  } else {
    previewImage.setAttribute("src", "default.jpg");
  }
}
