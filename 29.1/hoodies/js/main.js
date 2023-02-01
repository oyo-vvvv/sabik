const Categories = [
  { value: "", text: "--Chose a category--", active: true },
  { value: "Sport", text: "Sport", active: true },
  { value: "Casual", text: "Casual", active: true },
  { value: "Evening", text: "Evening", active: true },
  { value: "Relax", text: "Relax", active: true },
];

const Products = [
  { brand: "Adidas", model: "AirForce", category: "casual", price: "120" },
  { brand: "Adidas", model: "Tong", category: "eveaning", price: "144" },
  { brand: "Nike", model: "Tn", category: "luxury", price: "145" },
  { brand: "Nike", model: "Supra", category: "casual", price: "127" },
  { brand: "Puma", model: "socks", category: "relax", price: "14.99" },
  { brand: "Asics", model: "SpeedTurn", category: "sport", price: "1222" },
];

// faire une boucle for qui passe
// pour chacun des elemetns et qui appelle crete card
function init() {
  for (let i = 0; i < Products.length; i++) {
    const obj = Products[i];
    createCard(obj);
  }
}

const MainDiv = document.getElementById("main");
init();

createForm();
function createForm() {
  var model = new myInput("model-input", "Enter the model name", "text");
  var brand = new myInput("brand-input", "Enter the brand name", "text");
  var price = new myInput("price-input", "Enter the price", "number");
  var categories = new mySelect("category-select", "", Categories);
  var sale = new myInput("sale-input", "", "checkbox", "form-check-input");
  var btn = myButton("submit", "btn-primary", "Add this product", addProduct);
  var formDiv = document.getElementById("form-div");
  formDiv.append(
    model.div,
    brand.div,
    price.div,
    categories.div,
    sale.div,
    btn
  );

  function addProduct() {
    var obj = {};
    obj.model = model.input.value;
    obj.brand = brand.input.value;
    obj.price = price.input.value;
    obj.category = categories.select.value;
    if (validateForm(obj)) {
      Products.push(obj);
      createCard(obj);
      model.input.value = "";
      brand.input.value = "";
      price.input.value = "";
      categories.select.value = "";
    }
  }

  function validateForm(x) {
    var valid = true;
    if (!x.brand) {
      brand.input.classList.add("red-border");
      valid = false;
    } else {
      brand.input.classList.remove("red-border");
    }

    if (!x.model) {
      model.input.classList.add("red-border");
      valid = false;
    } else {
      model.input.classList.remove("red-border");
    }

    if (!x.price) {
      price.input.classList.add("red-border");
      valid = false;
    } else {
      price.input.classList.remove("red-border");
    }

    if (!x.category) {
      categories.select.classList.add("red-border");
      valid = false;
    } else {
      categories.select.classList.remove("red-border");
    }
    return true;
    //   document.input.onfocus = function() {
    //     if (this.value === "") {
    //       this.style.border = "1px solid red";
    //     }
    //   };
    //   document.input.onblur = function() {
    //     if (this.value === "") {
    //       this.style.border = "";
    //     }
    //   };
  }
}

function createCard(obj) {
  var article = document.createElement("article");
  article.className = "grid-item";
  var h3 = document.createElement("h3");
  h3.className = "brand-name";
  h3.innerText = obj.brand;
  var h4 = document.createElement("h4");
  h4.innerText = obj.model;
  var p = document.createElement("p");
  p.innerText = obj.category;
  h4.className = "model-item";
  var btn = myButton(
    "",
    "btn btn-success",
    obj.price,
    buyNow,
    "fa-basket-shoping"
  );
  article.append(h3, h4, p, btn);
  MainDiv.append(article);
}

function buyNow() {
  console.log(this);
  this.parentElement.parentElement.remove();
}

function myInput(_id, _placeholder, _type, _class = "") {
  this.div = document.createElement("div");
  this.input = document.createElement("input");
  this.input.className = "form-control" + _class;
  this.input.id = _id;
  this.input.placeholder = _placeholder;
  this.input.type = _type;
  this.div.append(this.input);
}

function mySelect(_id, _class = "", _arr) {

  this.div = document.createElement("div");
  this.select = document.createElement("select");
  this.select.className = "form-select " + _class;
  this.select.id = _id;
  for (let i = 0; i < _arr.length; i++) {
    const opt = _arr[i];
    if (opt.active) {
      var option = document.createElement("option");
      option.value = opt.value;
      option.innerText = opt.text;
      this.select.append(option);
    }
  }
  this.div.append(this.select);
  
}

function myButton(_id, _class = "", _text, _callback, _icon) {
  var div = document.createElement("div");
  var btn = document.createElement("button");
  if (_icon) {
    var i = document.createElement("i");
    i.className = "fa-solid " + _icon;
    btn.append(i);
  }
  var span = document.createElement("span");
  span.innerText = _text;
  btn.className = "btn " + _class;
  btn.id = _id;
  btn.append(span);
  btn.addEventListener("click", _callback);
  div.append(btn);
  return div;
}
