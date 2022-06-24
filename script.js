var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password= generatePassword();
     var passwordText = document.querySelector("#password");
 

  passwordText.value = password;
}

var criteria = document.getElementById("password-criteria");
criteria.innerHTML += `<input type="checkbox" id="number" name="number">
<label for="number"> Would you like numbers in your password?</label><br><input type="checkbox" id="uppercase" name="uppercase">
<label for="uppercase">Would you like uppercase letters in your password?</label><br>
<input type="checkbox" id="special-charachter" name="special-charachter">
<label for="special-charachter"> Would you like special charachters in your password?</label><br>`; 

 generateBtn.addEventListener("click", (writePassword) => {

    function makePassword(length) {
        let number = document.getElementById("number");
        let uppercase = document.getElementById("uppercase");
        let specialCharacter = document.getElementById("special-charachter");
        var result = ""
        var characters = "abcdefghijklmnopqrstuvwxyz"

    