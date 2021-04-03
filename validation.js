// validation script here
var reg = /[a-z]/gi;
var reg2 = new RegExp(reg, "i");
const inputs = document.querySelectorAll("input");
console.log(inputs);

var patterns = {
  //   username: /^[a-zA-Z0-9]{5,12}$/,
  username: /^[a-z\d]{5,12}$/i,
  //   email: /^[a-z\d\.-]@[a-z\d\.-]\.[a-z]\.[a-z]$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
  //   password:/^\w{8,20}$/,if you place the @ and - outside of [] like in the beggining it it basically saying you need to have those two first before you  type anything else
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8,20}$/,
  //   telephoneMyAnswer: /^[0-9]{11}$/,
  telephone: /^\d{11}$/,
};

//validation function
function validate(field, regex) {
  console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(e.target.attributes.name.value);
    console.log(e.target.value);

    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
