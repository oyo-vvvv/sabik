var appDiv = document.getElementById("main");
const user = {
  fullName: "Serge Lama",
  email: "serge@lama.com",
  pas: "lamafaché.2",
};

init();

function init() {
  var loginSection = document.createElement("section");
  var emailDiv = document.createElement("div");
  var emailLabel = document.createElement("label");
  emailLabel.innerText = "Enter your E-mail";
  var emailInput = document.createElement("input");
  emailLabel.append(emailInput);
  emailDiv.append(emailLabel);
  loginSection.append(emailDiv);

  emailInput.addEventListener("input", checkEmail);

  function checkEmail() {
    if (emailInput.value.includes("@") && emailInput.value.includes(".com")) {
      passDiv.style.display = "block";
    } else {
      passDiv.style.display = "none";
    }
  }

  var passDiv = document.createElement("div"); // <div></div>
  var passLabel = document.createElement("label"); // <label></label>
  passLabel.innerText = "Enter your password"; // <label>"Enter your password"</label>
  var passInput = document.createElement("input"); // <input>
  passLabel.append(passInput); // <label>"Enter your password"<input></label>
  passDiv.append(passLabel); // <div><label>"Enter your password"<input></label></div>
  loginSection.append(passDiv); // <section><div><label>"Enter your password"<input></label></div></section>
  passDiv.style.display = "none";
  // passInput.addEventListener("input", checkPass);

  // function checkPass(){
  //     if(passInput.value.includes("lamafaché.2")){
  //         passDiv.style.display = "block";
  //     }else{
  //         passDiv.style.display = "none";
  //     }
  // }

  var btnDiv = document.createElement("div");
  var btnLabel = document.createElement("label");
  btn.innerText = "Click me !";
  btnDiv.append(btn);
  loginSection.append(btnDiv);
  btnDiv.style.display = "none";
  appDiv.append(loginSection);

  passInput.addEventListener("input", checkPass);
  function checkPass() {
    if (passInput.value.includes(".") && passInput.value.length > 7) {
      btnDiv.style.display = "block";
    } else {
      btnDiv.style.display = "none";
    }
  }
}
