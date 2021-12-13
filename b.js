var selectedRow = null

function onFormSubmit() {
   
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    
}

function readFormData() {
    var formData = {};
    formData["titre"] = document.getElementById("titre").value;
    formData["auteur"] = document.getElementById("auteur").value;
    formData["prix"] = document.getElementById("prix").value;
    formData["date"] = document.getElementById("date").value;
    formData["langue"]=document.getElementById("langue").value;
    formData["type"]=document.querySelector('input[name="type"]:checked').value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.titre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.auteur;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.prix;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML=data.langue;
    cell6=newRow.insertCell(5);
    cell6.innerHTML=data.type;
    cell7=newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("date").value = "";
    document.getElementById("langue").value="";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
    document.getElementById("langue").value= selectedRow.cells[4].innerHTML;
    document.getElementById("type").value= selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.titre;
    selectedRow.cells[1].innerHTML = formData.auteur;
    selectedRow.cells[2].innerHTML = formData.prix;
    selectedRow.cells[3].innerHTML = formData.date;
    selectedRow.cells[4].innerHTML= formData.langue;
    selectedRow.cells[5].innerHTML= formData.type;
}

function onDelete(td) {
    if (confirm(' Etes-vous sur de supprimer cet enregistrement ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
// function validate() {
//     isValid = true;
//     if (document.getElementById("titre").value == "") {
//         isValid = false;
//         document.getElementById("titreValidation").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("titreValidation").classList.contains("hide"))
//             document.getElementById("titreValidation").classList.add("hide");
//     }
//     return isValid;
// }
