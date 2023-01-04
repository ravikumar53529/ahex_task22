//table view in new tab
window.addEventListener("load", showData());
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
