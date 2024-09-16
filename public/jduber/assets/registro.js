
document.addEventListener("DOMContentLoaded", function() {
    var operadorBtn = document.getElementById("operador-btn");
    var montadorBtn = document.getElementById("montador-btn");
    var roleInput = document.createElement("input");

    // Create hidden input to store selected role
    roleInput.type = "hidden";
    roleInput.name = "userRole";
    document.querySelector("form").appendChild(roleInput);

    // Add click event listeners to buttons
    operadorBtn.addEventListener("click", function() {
        roleInput.value = "OPERADOR";
        operadorBtn.classList.add("selected");
        montadorBtn.classList.remove("selected");
    });

    montadorBtn.addEventListener("click", function() {
        roleInput.value = "MONTADOR";
        montadorBtn.classList.add("selected");
        operadorBtn.classList.remove("selected");
    });
});
