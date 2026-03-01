
let users = [
    { name: "Alice Johnson", email: "alice@example.com", age: 25, isActive: true },
    { name: "Bob Smith", email: "bob@example.com", age: 30, isActive: false },

];

let tbody = document.getElementById("tbody");
function loadData() {
    tbody.innerHTML = ""
    users.map((e, key) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
<td>${key + 1}</td>
<td>${e.name}</td>
<td>${e.email}</td>
<td>${e.age}</td>
<td><button onclick="deleteData(${key})">Delete</button></td>
`
        tbody.append(tr);
    })
}
let form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let i1 = document.getElementById("i1").value;
    let i2 = document.getElementById("i2").value;
    let i3 = document.getElementById("i3").value;
    let obj = { name: i1, email: i2, age: i3 };
    users.push(obj)
    loadData()

})

function deleteData(key) {
    if (window.confirm("are you sure to delete this data?")) {
        users.splice(key, 1)
        loadData()

    }
}
loadData()
function updateData(id){
    
}