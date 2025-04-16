$(function () {
    let booking = JSON.parse(sessionStorage.getItem('bookingChoiced'));
    let foundtour = booking.tourUnit;
    let tourUnitId = foundtour.tourUnitId;

    const toast2 = new bootstrap.Toast($('#liveToast2')[0]);

    $('#btnSend').click(function () {
        const modal = bootstrap.Modal.getInstance($('#ratingTour')[0]);
        fetch(`http://localhost:8080/rating/rating-tour`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "tourUnitId": tourUnitId,
                "ratingValue": parseInt($('#ratingRange').val()),
                "comment": $('#rating-content').val()
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.code == 0) {
                    if (data.result) {
                        $('#toastPwd2').html("Đã gửi đánh giá tour.");
                        toast2.show();
                        $('#btnRating').addClass('d-none');
                        modal.hide();
                    } else {
                        $('#toastPwd2').text("Có lỗi xảy ra. Không thể đánh giá tour.");
                        toast2.show();
                    }
                }
            })
            .catch(error => {
                console.log("Error: ", error);
            })
    })
})