import { validatePwd, validateVerifyPwd } from "../validate.js"

$(function () {

    (function () {
        $('#oldPwd, #newPwd').on("input", function () {
            if (!validatePwd($(this).val())) {
                $(this).addClass("is-invalid");
                $(this).removeClass("is-valid");
                $(this).siblings('.invalid-feedback').text('Mật khẩu từ 6 đến 20 ký tự.');
                // $(this).next().next().text('Mật khẩu từ 6 đến 20 ký tự.');
            } else {
                $(this).removeClass("is-invalid");
                $(this).addClass("is-valid");
            }
        });

        $('#verifyPwd').on('input', function () {
            if (!validateVerifyPwd($(this).val(), $('#newPwd').val())) {
                $(this).addClass("is-invalid");
                $(this).removeClass("is-valid");
                $(this).siblings('.invalid-feedback').text('Mật khẩu không khớp.');
                // $(this).next().next().text('Mật khẩu không khớp.');
            } else {
                $(this).removeClass("is-invalid");
                $(this).addClass("is-valid");
            }
        });
    })();

    $('#btnSubmitChange').on('click', function (e) {
        const form = document.getElementById('changePwdForm');

        const html5Valid = form.checkValidity();
        const hasInvalid = $('#changePwdForm').find('.is-invalid').length > 0;

        const toast = new bootstrap.Toast($('#liveToast')[0]);
        const toast2 = new bootstrap.Toast($('#liveToast2')[0]);
        if (!html5Valid || hasInvalid) {
            // e.preventDefault(); // nếu dùng type="submit" thì cần
            // console.warn("Form không hợp lệ, không gửi dữ liệu");

            // Cho hiển thị validate UI (nếu có dùng Bootstrap 5)
            $('#changePwdForm').removeClass('needs-validated');
            form.classList.add('was-validated');


            $('#toastPwd').text("Hãy kiểm tra lại thông tin nhập vào.");
            toast.show();
            return;
        }

        // Nếu hợp lệ thì tiến hành gửi
        fetch('http://localhost:8080/changePwd', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "oldPassword": $('#oldPwd').val(),
                "newPassword": $('#newPwd').val()
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.code == 0) {
                    $('#toastPwd2').text("Đổi mật khẩu thành công.");
                    const modal = bootstrap.Modal.getInstance($('#staticBackdrop')[0]);
                    modal.hide();
                    toast2.show();
                    $("#staticBackdrop").find("input").val(null);
                } else {
                    $('#toastPwd').text(data.message);
                    toast.show();
                }
            })
            .catch((error) => {
                // window.location.href = "500.html";
                console.error('Error2:', error);
                // window.location.href = "500.html";
            });
    })
})