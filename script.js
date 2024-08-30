document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const addCarSection = document.getElementById('addCarSection');
    const loginSection = document.getElementById('loginSection');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (validateLogin(username, password)) {
            loginSection.style.display = 'none';
            addCarSection.style.display = 'block';
        } else {
            alert('Invalid username or password');
        }
    });

    function validateLogin(username, password) {
        const usernameRegex = /^[A-Za-z]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$?])[A-Za-z\d@#$?]{6,10}$/;

        return usernameRegex.test(username) && passwordRegex.test(password);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            input.style.backgroundColor = "yellow";
        });
        input.addEventListener("blur", function() {
            input.style.backgroundColor = "white";
        });
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "lightblue";
        });
        button.addEventListener("mouseout", function() {
            button.style.backgroundColor = "";
        });
    });
});
