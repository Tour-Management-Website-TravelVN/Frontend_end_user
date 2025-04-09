import { validateFullName, validateEmail, validateAgeRange, validatePhoneNumber, validateAddress } from "../validate.js";

(function () {
    'use strict'

    $('#fullnameCopy').on(
        'keyup', function () {
            $("#fullnameBF").val($(this).val());
        }
    )

    $('#fullnameBF').on(
        'keyup', function () {
            $("#fullnameCopy").val($(this).val());
        }
    )

    // Lấy form
    const form = document.getElementById('bookingForm');

    //Kiểm tra họ và tên nhập vào
    $('#bookingForm').on({
        'input': function () {
            if (!validateFullName($(this).val())) {
                if ($(this)[0] == $('.fullnameIBF').eq(0)[0] || $(this)[0] == $('.fullnameIBF').eq(1)[0]) {
                    console.log($('.fullnameIBF').eq(0));
                    console.log($('.fullnameIBF').eq(1));
                    console.log($('.fullnameIBF'));
                    $('.fullnameIBF').eq(0).addClass('is-invalid');
                    $('.fullnameIBF').eq(0).removeClass('is-valid');
                    $('.fullnameIBF').eq(0).next().text('Họ và tên chỉ chứa ký tự chữ và khoảng trắng. Từ 5 đến 50 ký tự.');
                    $('.fullnameIBF').eq(1).addClass('is-invalid');
                    $('.fullnameIBF').eq(1).removeClass('is-valid');
                    $('.fullnameIBF').eq(1).next().text('Họ và tên chỉ chứa ký tự chữ và khoảng trắng. Từ 5 đến 50 ký tự.');
                } else {
                    $(this).addClass('is-invalid');
                    $(this).removeClass('is-valid');
                    $(this).next().text('Họ và tên chỉ chứa ký tự chữ và khoảng trắng. Từ 5 đến 50 ký tự.');
                }
            } else {
                if ($(this)[0] == $('.fullnameIBF').eq(0)[0] || $(this)[0] == $('.fullnameIBF').eq(1)[0]) {
                    $('.fullnameIBF').eq(0).removeClass('is-invalid');
                    $('.fullnameIBF').eq(0).addClass('is-valid');
                    $('.fullnameIBF').eq(1).removeClass('is-invalid');
                    $('.fullnameIBF').eq(1).addClass('is-valid');
                } else {
                    $(this).removeClass('is-invalid');
                    $(this).addClass('is-valid');
                }
            }
        }
    }, '.fullnameIBF');

    //Kiểm tra họ và tên nhập vào
    // $('.fullnameIBF').on({
    //     'input': function () {
    //         if (!validateFullName($(this).val())) {
    //             if ($(this)[0] == $('.fullnameIBF').eq(0)[0] || $(this)[0] == $('.fullnameIBF').eq(1)[0]) {
    //                 console.log($('.fullnameIBF').eq(0));
    //                 console.log($('.fullnameIBF').eq(1));
    //                 console.log($('.fullnameIBF'));
    //                 $('.fullnameIBF').eq(0).addClass('is-invalid');
    //                 $('.fullnameIBF').eq(0).removeClass('is-valid');
    //                 $('.fullnameIBF').eq(0).next().text('Họ và tên chỉ chứa ký tự chữ và khoảng trắng. Từ 5 đến 50 ký tự.');
    //                 $('.fullnameIBF').eq(1).addClass('is-invalid');
    //                 $('.fullnameIBF').eq(1).removeClass('is-valid');
    //                 $('.fullnameIBF').eq(1).next().text('Họ và tên chỉ chứa ký tự chữ và khoảng trắng. Từ 5 đến 50 ký tự.');
    //             } else {
    //                 $(this).addClass('is-invalid');
    //                 $(this).removeClass('is-valid');
    //                 $(this).next().text('Họ và tên chỉ chứa ký tự chữ và khoảng trắng. Từ 5 đến 50 ký tự.');
    //             }
    //         } else {
    //             if ($(this)[0] == $('.fullnameIBF').eq(0)[0] || $(this)[0] == $('.fullnameIBF').eq(1)[0]) {
    //                 $('.fullnameIBF').eq(0).removeClass('is-invalid');
    //                 $('.fullnameIBF').eq(0).addClass('is-valid');
    //                 $('.fullnameIBF').eq(1).removeClass('is-invalid');
    //                 $('.fullnameIBF').eq(1).addClass('is-valid');
    //             } else {
    //                 $(this).removeClass('is-invalid');
    //                 $(this).addClass('is-valid');
    //             } 
    //         }
    //     }
    // })

    //Kiểm tra email
    $('.emailIBF').on({
        'input': function () {
            if (!validateEmail($(this).val())) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $(this).next().next().text('Email không hợp lệ');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        }
    })

    //Kiểm tra điện thoại
    $('.phonenumberIBF').on({
        'input': function () {
            if (!validatePhoneNumber($(this).val())) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $(this).next().text('Số điện thoại');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        }
    })

    //Kiểm tra điện thoại
    $('.addressIBF').on({
        'input': function () {
            if (!validateAddress($(this).val())) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $(this).next().text('Địa chỉ không hợp lệ');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        }
    })

    //Kiểm tra tuổi với người đầu tiên
    $('#dobBF').on({
        'input': function () {
            if (!validateAgeRange($(this).val(), 15, 125)) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $(this).next().text('Ngày sinh không hợp lệ. Người 15 tuổi mới được đặt tour.');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        }
    })

    //Kiểm tra tuổi với người lớn
    $('.dobAIBF').on({
        'input': function () {
            if (!validateAgeRange($(this).val(), 10, 125)) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $(this).next().text('Ngày sinh không hợp lệ.');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        }
    })

    //Kiểm tra tuổi với người lớn
    $('#bookingForm').on({
        'input': function () {
            if (!validateAgeRange($(this).val(), 10, 125)) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $(this).next().text('Ngày sinh không hợp lệ.');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        }
    }, '.dobAIBF');

    //Kiểm tra tuổi với trẻ em
    $('#bookingForm').on({
        'input': function () {
            if (!validateAgeRange($(this).val(), 5, 9)) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $(this).next().text('Ngày sinh không hợp lệ.');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        }
    }, '.dobCBF');

    //Kiểm tra tuổi với trẻ nhỏ
    $('#bookingForm').on({
        'input': function () {
            if (!validateAgeRange($(this).val(), 2, 4)) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $(this).next().text('Ngày sinh không hợp lệ.');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        }
    }, '.dobTBF');

    //Kiểm tra tuổi với em bé
    $('#bookingForm').on({
        'input': function () {
            if (!validateAgeRange($(this).val(), 0, 2)) {
                $(this).addClass('is-invalid');
                $(this).removeClass('is-valid');
                $(this).next().text('Ngày sinh không hợp lệ.');
            } else {
                $(this).removeClass('is-invalid');
                $(this).addClass('is-valid');
            }
        }
    }, '.dobBBF');

    //Kiểm tra tuổi với trẻ em
    // $('.dobCBF').on({
    //     'input': function () {
    //         if (!validateAgeRange($(this).val(),5,9)) {
    //             $(this).addClass('is-invalid');
    //             $(this).removeClass('is-valid');
    //             $(this).next().text('Ngày sinh không hợp lệ.');
    //         } else {
    //             $(this).removeClass('is-invalid');
    //             $(this).addClass('is-valid');
    //         }
    //     }
    // })

    //Kiểm tra tuổi với trẻ nhỏ
    // $('.dobTBF').on({
    //     'input': function () {
    //         if (!validateAgeRange($(this).val(),2,4)) {
    //             $(this).addClass('is-invalid');
    //             $(this).removeClass('is-valid');
    //             $(this).next().text('Ngày sinh không hợp lệ.');
    //         } else {
    //             $(this).removeClass('is-invalid');
    //             $(this).addClass('is-valid');
    //         }
    //     }
    // })

    //Kiểm tra tuổi với em bé
    // $('.dobBBF').on({
    //     'input': function () {
    //         if (!validateAgeRange($(this).val(),0,2)) {
    //             $(this).addClass('is-invalid');
    //             $(this).removeClass('is-valid');
    //             $(this).next().text('Ngày sinh không hợp lệ.');
    //         } else {
    //             $(this).removeClass('is-invalid');
    //             $(this).addClass('is-valid');
    //         }
    //     }
    // })

    // Ngăn chặn submit form nếu không hợp lệ (vẫn giữ lại logic submit khi hợp lệ)
    // $('input').on('input', function () {
    //     if (!form.checkValidity()) {
    //         if ($('#book').prop("disabled")) {
    //             $('#book').prop("disabled", false);
    //         }
    //     } else {
    //         if (!$('#book').prop("disabled")) {
    //             $('#book').prop("disabled", true);
    //         }
    //     }
    // })

    // Gắn sự kiện input và change cho tất cả input/select trong form
    $('#bookingForm').on('input change', 'input, select, textarea', function () {
        if (form.checkValidity() && $('#bookingForm').find(".is-invalid").length === 0) {
            $('#book').prop('disabled', false);  // Bật nút
        } else {
            $('#book').prop('disabled', true);   // Tắt nút
        }
    });


    // $('#continueBtn').on('click', function (e) {
    //     const form = document.getElementById('bookingForm');
    
    //     const html5Valid = form.checkValidity();
    //     const hasInvalid = $('#bookingForm').find('.is-invalid').length > 0;
    
    //     if (!html5Valid || hasInvalid) {
    //         e.preventDefault(); // nếu dùng type="submit" thì cần
    //         console.warn("Form không hợp lệ, không gửi dữ liệu");
    
    //         // Cho hiển thị validate UI (nếu có dùng Bootstrap 5)
    //         form.classList.add('was-validated');
    //         return;
    //     }
    
    //     // Nếu hợp lệ thì tiến hành gửi
    //     console.log("Gửi dữ liệu lên server...");
    
    //     // fetch() hoặc $.ajax() tùy bạn
    // });

    //Quan sát form khi form có các input động
    const observer = new MutationObserver(() => {
        if (form.checkValidity() && $('#bookingForm').find(".is-invalid").length === 0) {
            $('#book').prop('disabled', false);
        } else {
            $('#book').prop('disabled', true);
        }
    });
    
    observer.observe(document.getElementById('bookingForm'), {
        childList: true,
        subtree: true,
    });

    // $('#continueBtn')
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
})();