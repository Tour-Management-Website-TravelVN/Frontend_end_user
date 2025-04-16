import { convertNewlineToBr } from "../utils/utils.js"
$(function () {
    let foundtour = JSON.parse(localStorage.getItem("foundtour"));
    let tourId = foundtour.tour.tourId;

    //Hiển thị chương trình tour
    fetch(`http://localhost:8080/rating/tour-detail/${tourId}`, {
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.code == 0) {
                let rs = data.result; //Tương ứng với ratings
                rs.forEach((item, index) => {
                    displayRating(item, index);
                });
            }
        })
        .catch(error => {
            console.log('Error: ', error);
        })

    function displayRating(rating, index) {
        let item = $(`<div class="card-body shadow rounded px-4 py-4 mb-3"></div>`);
        let head = $(`<div class="d-flex justify-content-between align-items-center"></div>`);
        head.append(`<p class="text-primary h5 fw-bold">${rating.fullName}</p>`);
        
        if(parseInt(rating.ratingValue) < 4){
            head.append(`<span class="badget bg-danger text-white px-3 py-1 rounded-2 align-middle">${rating.ratingValue}</span>`);
        } else if(parseInt(rating.ratingValue)>6){
            head.append(`<span class="badget bg-success text-white px-3 py-1 rounded-2 align-middle">${rating.ratingValue}</span>`);
        } else {
            head.append(`<span class="badget bg-warning text-white px-3 py-1 rounded-2 align-middle">${rating.ratingValue}</span>`);
        }

        let cmt = $(`<p class="text-dark fs-6"></p>`);
        cmt.html(convertNewlineToBr(rating.comment));

        item.append(head);
        item.append(cmt);
        $('#ratings').append(item);
    }
})