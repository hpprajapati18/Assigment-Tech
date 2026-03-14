document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("complaintForm");

if(form)
{

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let phone = document.getElementById("phone").value.trim();
let email = document.getElementById("email").value.trim();
let vehicle = document.getElementById("vehicle").value;
let complaint = document.getElementById("complaint").value.trim();

let valid = true;

document.getElementById("nameError").innerText="";
document.getElementById("phoneError").innerText="";
document.getElementById("emailError").innerText="";

if(name=="")
{
document.getElementById("nameError").innerText="Name required";
valid=false;
}

if(!/^[0-9]{10}$/.test(phone))
{
document.getElementById("phoneError").innerText="Phone must be 10 digits";
valid=false;
}

if(!/^\S+@\S+\.\S+$/.test(email))
{
document.getElementById("emailError").innerText="Invalid email";
valid=false;
}

if(valid)
{

let submissions = JSON.parse(localStorage.getItem("complaints")) || [];

submissions.push({
name,
phone,
email,
vehicle,
complaint
});

localStorage.setItem("complaints", JSON.stringify(submissions));

document.getElementById("success").innerText="Complaint Submitted Successfully";

form.reset();

}

});

}

/* Display data on index page */

let table = document.getElementById("dataTable");

if(table)
{

let data = JSON.parse(localStorage.getItem("complaints"));

if(!data || data.length===0)
{
document.getElementById("nodata").innerText="No data available";
}
else
{

data.forEach(item => {

let row = `<tr>
<td>${item.name}</td>
<td>${item.phone}</td>
<td>${item.email}</td>
<td>${item.vehicle}</td>
<td>${item.complaint}</td>
</tr>`;

table.innerHTML += row;

});

}

}

});