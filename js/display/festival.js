$(function(){

    // fetch("", {
    //         method: "GET",
    //         credentials: 'include',
    //         headers: {
    //             'Accept': 'application/json'
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.code == 0) {
    //                 let account = data.result;
    //                 let customer = account.c;
    
    //                 $('#email').text(account.email);
    //                 $('#c-email').val(account.email);
    
    //                 $('#username').text(account.username);
    //                 $('#c-username').val(account.username);
    
    //                 $('#dob').text(formatDate(customer.dateOfBirth));
    //                 $('#c-dob').val(customer.dateOfBirth);
    
    //                 $('#gender').text(customer.gender ? 'Nữ' : 'Nam');
    //                 customer.gender ? $('#female').prop('checked', true) : $('#male').prop('checked', true);
    
    //                 $('#nationality').text(customer.nationality == null ? nullString : customer.nationality);
    //                 if (customer.nationality != null) {
    //                     let options = $('#select-natio').children();
    //                     options.prop('selected', 'false');
    //                     options.each((index, element) => {
    //                         if ($(element).text() == customer.nationality)
    //                             $(element).prop('selected', true);
    //                     });
    //                     // console.log($('#select-natio').val());
    //                 }
    
    //                 $('.address').text(customer.address == null ? nullString : customer.address);
    //                 $('.c-address').val(customer.address);
    
    //                 $('#phonenumber').text(customer.phoneNumber == null ? nullString : customer.phoneNumber);
    //                 $('#c-phone').val(customer.phoneNumber);
    
    //                 $('#ci').text(displayText(customer.citizenId));
    //                 $('#c-ci').val(customer.citizenId);
    
    //                 $('#passport').text(displayText(customer.passport));
    //                 $('#c-passport').val(customer.passport);
    //             }
    //         })
    //         .catch(error => {
    //             console.log('Error: ', error);
    //         })

    $(".festival-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 600,
        center: true,
        dots: true,
        loop: true,
        margin: 5,
        nav : false,
        // navText : [
        //     '<i class="bi bi-arrow-left"></i>',
        //     '<i class="bi bi-arrow-right"></i>'
        // ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });
})