var main = document.querySelector("#main");


function passwordView() {
    main.innerHTML = `
            <h2>Password Reset</h2>
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">Reset</button>
            <div style="margin-top: 10px; text-align: center;">
              <span class="badge badge-light" onclick="loginView()">Back to Login</span>
            </div>`;
  }

  function loginView() {
    main.innerHTML = `
    <h2>Please Login</h2>
    <div class="form-group">
      <label for="email">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        aria-describedby="emailHelp"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" />
    </div>

    <button type="submit" class="btn btn-primary btn-block">Login</button>
  <div style="margin-top: 10px">
    <span class="badge badge-light" onclick="passwordView()">Forgot Your Password?</span>
    <span class="badge badge-light" onclick="registerView()"
      >Not Registered Yet?</span
    >
  </div>
    
    
     `;

  }

  function registerView() {
    main.innerHTML = `
    <h2>Please Register</h2>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" id="lastName" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" onchange="checkEmail()" class="form-control" id="email" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <button type="submit" onclick="register()" class="btn btn-primary btn-block">
        Register
      </button>
      <div style="margin-top: 10px; text-align: center">
        <span class="badge badge-light" onclick="loginView()" >Already Have an Account?</span>
      </div>
     `
}