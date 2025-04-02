document.addEventListener('DOMContentLoaded', function () {
    var header_auth = document.getElementById("header-auth");

    document.getElementById('btnRegister').addEventListener('click',
        function () {
            let username = document.getElementById('floatingUsername').value;
            let password = document.getElementById('floatingPassword').value;

            let fullname = document.getElementById('floatingFullName').value.trim().split(' ');
            let temp = document.getElementById('floatingFullName').value.trim();
            let lastname = fullname.pop();
            let firstname = fullname.join(' ');

            let dob = document.getElementById('floatingDob').value;
            let gender = parseInt(document.querySelector('input[name=optradio]:checked').value);

            let c = { firstname: firstname, lastname: lastname, dob: dob, gender: gender };

            let email = document.getElementById('floatingEmail').value;
            let status = "OFF";

            let useraccount = { username: username, password: password, c: c, status: status, email: email };

            console.log(useraccount);
            fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    useraccount
                )
            })
                .then(response => response.json())
                .then(data => {
                    if (data.code == 0) {
                        document.getElementById("register").addEventListener("hidden.bs.modal", function () {
                            document.activeElement.blur(); // Bỏ focus khỏi phần tử đang focus
                        });

                        let modal = bootstrap.Modal.getInstance(document.getElementById("register")); // Lấy instance của modal
                        modal.hide(); // Ẩn modal

                        document.querySelectorAll('.header-unauth').forEach(element => {
                            element.classList.add("d-none");
                        });

                        header_auth.classList.remove("d-none");

                        document.getElementById('fullname').textContent = temp;

                        localStorage.setItem("token", data.result.token);  // Lưu token vào localStorage
                        // localStorage.setItem("fullname", fullname);  // Lưu thông tin người dùng vào localStorage
                    }
                    console.log("Data: ", data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        });

    document.getElementById('btnLogout').addEventListener('click', function () {
        fetch('http://localhost:8080/auth/logout', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {}
                // { "token": localStorage.getItem("token") }
            )
        })
            .then(response => response.json())
            .then(data => {
                if (data.code == 0) {
                    // localStorage.removeItem("token");
                    localStorage.removeItem("fullname");
                    header_auth.classList.add("d-none");

                    document.querySelectorAll('.header-unauth').forEach(element => {
                        element.classList.remove("d-none");
                    });

                    document.querySelector("#header-auth").classList.add("d-none");

                }
                console.log("Data: ", data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    document.getElementById('btnLogin').addEventListener('click', function () {
        let username = document.getElementById('floatingUsernameLogin').value;
        let password = document.getElementById('floatingPasswordLogin').value;

        fetch('http://localhost:8080/auth/token', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                { "username": username, "password": password }
            )
        })
            .then(response => response.json())
            .then(data => {
                if (data.code == 0) {
                    document.getElementById("login").addEventListener("hidden.bs.modal", function () {
                        document.activeElement.blur(); // Bỏ focus khỏi phần tử đang focus
                    });

                    let modal = bootstrap.Modal.getInstance(document.getElementById("login")); // Lấy instance của modal
                    modal.hide(); // Ẩn modal                        

                    document.querySelectorAll('.header-unauth').forEach(element => {
                        element.classList.add("d-none");
                    });
                    header_auth.classList.remove("d-none");

                    document.getElementById('fullname').textContent = data.result.fullname;

                    // localStorage.setItem("token", data.result.token);  // Lưu token vào localStorage
                    localStorage.setItem("fullname", data.result.fullname);  // Lưu thông tin người dùng vào localStorage
                }
                console.log("Status: ", data.status);
                console.log("Code: ", data.code);
                console.log("Data: ", data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
});