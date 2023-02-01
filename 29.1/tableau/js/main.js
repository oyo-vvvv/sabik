const Participants = [
  { fName: "Bob", lName: "Sanders", email: "bob@mail.com", tz: 123456789 },
  { fName: "Tom", lName: "Sanders", email: "Tom@mail.com", tz: 123456789 },
  { fName: "Fil", lName: "Sanders", email: "Fil@mail.com", tz: 123456789 },
  { fName: "Ela", lName: "Sanders", email: "Ela@mail.com", tz: 123456789 },
  { fName: "Fana", lName: "Sanders", email: "Fana@mail.com", tz: 123456789 },
];

init();

function init() {
  var table = document.createElement("table");
  table.className = "table table-hover";
  var thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
        <th scope="col">ID</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Teudat Zeut</th>
    </tr>
`;
  var tbody = document.createElement("tbody");

  tbody.innerHTML = Participants.map(function (x, i) {
    return `
  <tr>
    <th scope="row">${i + 1}</th>
    <td>${x.fName}</td>
    <td>${x.lName}</td>
    <td>${x.email}</td>
    <td>${x.tz}</td>
</tr>
`;
  }).join("");

  table.append(thead, tbody);
  document.getElementById("main").append(table);
}
