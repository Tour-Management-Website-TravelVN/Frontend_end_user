jQuery(function () {
    let foundtour = JSON.parse(localStorage.getItem("foundtour"));
    let category = foundtour.tour.category;
    let tour = foundtour.tour;
    let discount = foundtour.discount;

    let tourName = tour.tourName;
    if (tourName.length > 120)
        tourName = tourName.substring(0, 120) + "...";


    let placesToVisitSub = tour.placesToVisit;
    if (placesToVisitSub.length > 40)
        placesToVisitSub = placesToVisitSub.substring(0, 40) + "...";

    let adultTourPrice = getPrice(foundtour.adultTourPrice);
    let toddlerTourPrice = getPrice(foundtour.toddlerTourPrice);
    let childTourPrice = getPrice(foundtour.childTourPrice);

    let privateRoom = formatNumberWithDots(Math.round(foundtour.privateRoomPrice))

    //Breadcrumb + h3
    $("#category-breadcrumb").text(category.categoryName);
    $(".tourname").text(tour.tourName);
    $(".tourname").eq(0).text(tourName);

    //
    $('#sm-img').html(`<img src="${tour.firstImageUrl}" class="object-fit cover w-100 rounded-1" alt="">`);

    //Carousel
    let imageSet = tour.imageSet;

    let index = 0;
    let activeClass = 'active choose';
    imageSet.forEach(img => {
        let carousel_item = $('<div class="carousel-item w-100" style="height: 70vh;"></div>');

        carousel_item.html(`
                <img src="${img.url}" class="object-fit-cover w-100 h-100" alt="...">
            `);

        $('#carousel-list').append(carousel_item);

        let thumbnail_item = $('<div class="h-100" style="width: 150px;"></div>');
        thumbnail_item.html(`
            <img src="${img.url}" class="thumbnail-img object-fit-cover w-100 h-100 ${activeClass}"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}">
            `);
        $('#carousel-thumbnail').append(thumbnail_item);

        // let btncarou = $(`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}"
        //                         aria-current="true"></button>`);
        if (index == 0) {
            carousel_item.addClass('active');
            activeClass = '';
        }


        // $('#carousel-btn').append(btncarou);
        index++;
    });


    let discount_tag = $('<div class="tour-offer bg-info fw-bold fs-5"></div>');
    discount_tag.text(discount.discountName);
    $('#carousel-list').append(discount_tag);


    $('#de-re-date').text(formatDate(foundtour.departureDate) + " - " + formatDate(foundtour.returnDate));
    $('#departure-date').text(formatDate(foundtour.departureDate));
    $('.adultTourPrice').text(adultTourPrice);
    $('#childTourPrice').text(childTourPrice);
    $('#toddlerTourPrice').text(toddlerTourPrice);
    $('#babyTourPrice').text(foundtour.babyTourPrice);
    $('.privateRoomPrice').text(privateRoom);

    //Additional Info
    $('#targetAudience').text(tour.targetAudience);
    $('#cuisine').text(tour.cuisine);
    $('#idealTime').text(tour.idealTime);

    $('#description').text(tour.description);
    $('#inclusions').text(tour.inclusions);
    $('#exclusions').text(tour.exclusions);

    //Tour-Program => Viết API vào

    //Ratings => Viết API vào

    //Right Side
    $('#tourUnitId').text(foundtour.tourUnitId);
    $('#duration').text(tour.duration);
    $('#departurePlace').text(tour.departurePlace);
    $('#placesToVisit').text(placesToVisitSub);
    $('#availableCapacity').text("Còn " + foundtour.availableCapacity + " chỗ");

    $('#categoryName').text(category.categoryName);
    $('#ca-description').text(category.description);

    let festival = foundtour.festival;
    if (festival == null) {
        $('#festivalName').parent().parent().hide();
    } else {
        $('#festivalName').text(festival.festivalName);
        $('#fes-description').text(festival.description);
    }

    function formatNumberWithDots(numberString) {
        numberString = numberString + "";
        // Loại bỏ các dấu chấm hiện có (nếu có) để đảm bảo xử lý đúng
        const cleanedString = numberString.replace(/\./g, '');

        // Chuyển chuỗi thành số
        const number = parseInt(cleanedString, 10);

        // Kiểm tra xem có phải là số hợp lệ không
        if (isNaN(number)) {
            return "Không phải là số hợp lệ";
        }

        // Sử dụng toLocaleString để định dạng với dấu chấm phân cách hàng nghìn
        return number.toLocaleString('vi-VN');
    }

    function getPrice(price) {
        return formatNumberWithDots(Math.round((discount.discountUnit == "%") ?
            price * (1 - discount.discountValue / 100)
            :
            price - discount.discountValue))
    }

    function formatDate(isoDate) {
        // Kiểm tra định dạng đầu vào
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(isoDate)) {
            return "Định dạng ngày không hợp lệ (yyyy-mm-dd)";
        }

        const parts = isoDate.split('-');
        const year = parts[0];
        const month = parts[1];
        const day = parts[2];

        return `${day}/${month}/${year}`;
    }

    function getPriceToCal(price) {
        return Math.round((discount.discountUnit == "%") ?
            price * (1 - discount.discountValue / 100)
            :
            price - discount.discountValue);
    }

    //Biến cho việc tính toán
    let adultPrice = getPriceToCal(foundtour.adultTourPrice);
    let toddlerPrice = getPriceToCal(foundtour.toddlerTourPrice);
    let childPrice = getPriceToCal(foundtour.childTourPrice);
    let babyPrice = foundtour.babyTourPrice;
    let privateRoomPrice = Math.round(foundtour.privateRoomPrice);
    let adultQuant = 1;
    let toddlerQuant = 0;
    let childQuant = 0;
    let babyQuant = 0;
    let privateRoomQuant = 1;
    let availableCapacity = foundtour.availableCapacity;

    let totalQuant = 1;
    let totalPrice = parseInt(adultPrice) + parseInt(privateRoomPrice);

    $('#total').text(formatNumberWithDots(totalPrice) + " đ");

    let adult_box_item =
        `
        <table class="table table-borderless adult-info-peace">
                                <colgroup>
                                    <col style="width: 50%;">
                                    <col style="width: 15%;">
                                    <col style="width: 15%;">
                                    <col style="width: 20%;">
                                </colgroup>
                                <tr class="text-dark pb-0">
                                    <th class="pb-0">Họ tên</th>
                                    <th class="pb-0 text-center">Giới tính</th>
                                    <th class="pb-0 text-center">Ngày sinh</th>
                                    <th class="pb-0 text-center">Phòng đơn</th>
                                </tr>
                                <tr>
                                    <td class="align-middle">
                                        <input type="text"
                                            class="form-control text-dark custom-info-input border-0 ps-0 fs-6 fullnameIBF" required
                                            placeholder="Liên hệ" name="fullnameC">
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </td>
                                    <td class="align-middle">
                                        <select class="form-select border-0">
                                            <option value="0" selected>Nam</option>
                                            <option value="1">Nữ</option>
                                        </select>
                                    </td>
                                    <td class="align-middle">
                                        <input type="date" name="dobC" class="form-control border-0 dobAIBF" required>
                                        <div class="invalid-feedback">Please fill out this field.</div>
                                    </td>
                                    <td class="align-middle">
                                        <div
                                            class="form-check form-switch d-flex flex-column align-items-center justify-content-center ps-0">
                                            <input class="form-check-input mx-auto fs-4 singleRoom" type="checkbox"
                                                name="darkmode" value="yes" checked>
                                            <p class="text-dark fw-bold mt-2 mb-0 privateRoomPrice">${privateRoom} đ</p>
                                        </div>
                                    </td>
                                </tr>
                        </table>
    `;

    let ctb_box_item =
        `
    <table class="table table-borderless adult-info-peace">
                                        <colgroup>
                                            <col style="width: 70%;">
                                            <col style="width: 15%;">
                                            <col style="width: 15%;">
                                        </colgroup>
                                        <tr class="text-dark pb-0">
                                            <th class="pb-0">Họ tên</th>
                                            <th class="pb-0 text-center">Giới tính</th>
                                            <th class="pb-0 text-center">Ngày sinh</th>
                                        </tr>
                                        <tr>
                                            <td class="align-middle">
                                                <input type="text"
                                                    class="form-control text-dark custom-info-input border-0 ps-0 fs-6 fullnameIBF" required
                                                    placeholder="Liên hệ" name="fullnameC">
                                                <div class="invalid-feedback">Please fill out this field.</div>
                                            </td>
                                            <td class="align-middle">
                                                <select class="form-select border-0">
                                                    <option value="0" selected>Nam</option>
                                                    <option value="1">Nữ</option>
                                                </select>
                                            </td>
                                            <td class="align-middle">
                                                <input type="date" name="dobC" class="form-control border-0" required>
                                                <div class="invalid-feedback">Please fill out this field.</div>
                                            </td>
                                        </tr>
                                </table>
    `;

    $('#btnSubAQ').click(function () {
        if ($('#quanAdult').val() <= 1)
            return;
        adultQuant--;

        if (adultQuant == 1) {
            $('.singleRoom').prop("checked", true);
            privateRoomQuant = 1;
        } else {
            privateRoomQuant--;
        }

        $('#quanAdult').val(adultQuant);
        updateView();

        $('.adult-box').children("table").last().remove();
    })

    $('#btnAddAQ').click(function () {
        if (totalQuant + 1 > availableCapacity)
            return;
        adultQuant++;
        $('#quanAdult').val(adultQuant);

        privateRoomQuant++;

        updateView();

        $('.adult-box').append(adult_box_item);
    })

    $('#btnSubCQ').click(function () {
        if ($('#quanChild').val() <= 0)
            return;
        childQuant--;
        $('#quanChild').val(childQuant);
        updateView();

        $('.child-box').children("table").last().remove();
    })

    $('#btnAddCQ').click(function () {
        if (totalQuant + 1 > availableCapacity)
            return;
        childQuant++;
        $('#quanChild').val(childQuant);
        updateView();

        let $item = $(ctb_box_item); // chuyển thành jQuery element
        $item.find("input").last().addClass('dobCBF'); // thêm class
        $('.child-box').append($item);
    })

    $('#btnSubTQ').click(function () {
        if ($('#quanTod').val() <= 0)
            return;
        toddlerQuant--;
        $('#quanTod').val(toddlerQuant);
        updateView();

        $('.toddler-box').children("table").last().remove();
    })

    $('#btnAddTQ').click(function () {
        if (totalQuant + 1 > availableCapacity)
            return;
        toddlerQuant++;
        $('#quanTod').val(toddlerQuant);
        updateView();
        
        let $item = $(ctb_box_item); // chuyển thành jQuery element
        $item.find("input").last().addClass('dobTBF'); // thêm class
        $('.toddler-box').append($item);
    })

    $('#btnSubBQ').click(function () {
        if ($('#quanBaby').val() <= 0)
            return;
        babyQuant--;
        $('#quanBaby').val(babyQuant);
        updateView();

        $('.baby-box').children("table").last().remove();
    })

    $('#btnAddBQ').click(function () {
        if (totalQuant + 1 > availableCapacity)
            return;
        babyQuant++;
        $('#quanBaby').val(babyQuant);
        updateView();
        
        let $item = $(ctb_box_item); // chuyển thành jQuery element
        $item.find("input").last().addClass('dobBBF'); // thêm class
        $('.baby-box').append($item);

    })


    // document.addEventListener('change', function (event) {
    //     if (event.target.classList.contains('singleRoom')) {
    //         const checkbox = event.target;
    //         if (adultQuant <= 1) {
    //             checkbox.checked = true;
    //             return;
    //         }

    //         if (checkbox.checked) {
    //             privateRoomQuant++;
    //         } else {
    //             privateRoomQuant--;
    //         }
    //         updateView();
    //     }
    // });

    $('.adult-box').on('change', '.singleRoom', function () {
        if (adultQuant <= 1) {
            $(this).prop('checked', true);
            return;
        }

        if ($(this).prop("checked")) {
            privateRoomQuant++;
        } else {
            privateRoomQuant--;
        }
        updateView();
    });


    // $('.singleRoom').change(function () {
    //     if (adultQuant <= 1) {
    //         $(this).prop('checked', true);
    //         return;
    //     }

    //     if ($(this).prop("checked")) {
    //         privateRoomQuant++;
    //     }
    //     else{
    //         privateRoomQuant--;
    //     }
    //     updateView();
    // })

    function updateView() {
        if (childQuant == 0) {
            if (!$('#child-line').hasClass('d-none')){
                $('#child-line').addClass('d-none');
                $('.child-box').addClass('d-none');
            }
        } else {
            if ($('#child-line').hasClass('d-none')){
                $('#child-line').removeClass('d-none');
                $('.child-box').removeClass('d-none');
            }     
        }

        if (toddlerQuant == 0) {
            if (!$('#toddler-line').hasClass('d-none')){
                $('#toddler-line').addClass('d-none');
                $('.toddler-box').addClass('d-none');
            }   
        } else {
            if ($('#toddler-line').hasClass('d-none')){
                $('#toddler-line').removeClass('d-none');
                $('.toddler-box').removeClass('d-none');
            }   
        }

        if (babyQuant == 0) {
            if (!$('#baby-line').hasClass('d-none')){
                $('#baby-line').addClass('d-none');
                $('.baby-box').addClass('d-none');
            }
        } else {
            if ($('#baby-line').hasClass('d-none')){
                $('#baby-line').removeClass('d-none');
                $('.baby-box').removeClass('d-none');
            }
        }

        if (privateRoomQuant == 0) {
            if (!$('#privateRoom-line').hasClass('d-none'))
                $('#privateRoom-line').addClass('d-none');
        } else {
            if ($('#privateRoom-line').hasClass('d-none'))
                $('#privateRoom-line').removeClass('d-none');
        }

        $('.quantAdult').text(adultQuant);
        $('.quantChild').text(childQuant);
        $('.quantToddler').text(toddlerQuant);
        $('.quantBaby').text(babyQuant);

        // console.log(privateRoomQuant);
        $('.quantPrivateRoom').text(privateRoomQuant);

        totalPrice = (adultQuant * adultPrice) + (childQuant * childPrice) + (toddlerQuant * toddlerPrice) + (babyQuant * babyPrice) + (privateRoomQuant * privateRoomPrice);
        totalQuant = adultQuant + childQuant + toddlerQuant + babyQuant;
        $('#total').text(formatNumberWithDots(totalPrice) + " đ");
    }
})