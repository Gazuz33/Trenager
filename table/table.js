let A = JSON.parse(localStorage.getItem("data"));
console.log(A);
let Name = document.getElementById("name");
let Surname = document.getElementById("sec_name");
let Age = document.getElementById("age");
let Sex = document.getElementById("sex");
for (let i = 0; i < A.length; i++) {
  let li = document.createElement("li");
  li.textContent = A[i].name;
  Name.appendChild(li);
}
for (let i = 0; i < A.length; i++) {
  let li = document.createElement("li");
  li.textContent = A[i].surname;
  Surname.appendChild(li);
}
for (let i = 0; i < A.length; i++) {
  let li = document.createElement("li");
  li.textContent = A[i].age;
  Age.appendChild(li);
}
for (let i = 0; i < A.length; i++) {
  let li = document.createElement("li");
  li.textContent = A[i].sex;
  Sex.appendChild(li);
}
function clean () {
let elem = document.getElementById('name')
localStorage.clear()
location.reload()
}