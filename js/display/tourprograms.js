import { convertNewlineToBr } from "../utils/utils.js"
$(function () {
    let foundtour = JSON.parse(localStorage.getItem("foundtour"));
    let tourId = foundtour.tour.tourId;

    //Hiển thị chương trình tour
    fetch(`http://localhost:8080/program/tour-detail/${tourId}`, {
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.code == 0) {
                let rs = data.result; //Tương ứng với programs
                rs.forEach((item, index) => {
                    displayProgram(item, index);
                });
            }
        })
        .catch(error => {
            console.log('Error: ', error);
        })

    function displayProgram(program, index) {
        let item = $(`<div class="accordion-item mb-1"></div>`);
        item.append(`
            <h2 class="accordion-header">
                <button class="accordion-button collapsed border" type="button"
                    data-bs-toggle="collapse" data-bs-target="#arc${index}" aria-expanded="false"
                    aria-controls="arc${index}">
                    <div>
                        <span class="d-block text-primary fw-bold">${program.locations}</span>
                        <br><span class="text-dark fw-normal"><i
                            class="fa-solid fa-utensils me-2"></i>${program.mealDescription}</span>
                    </div>
                </button>
            </h2>
            `);
        let arc = $(`<div id="arc${index}" class="accordion-collapse collapse"
                                    "></div>`);
        let arcBody = $(`<div class="accordion-body bg-white border shadow text-justify text-dark"></div>`);
        arcBody.html(convertNewlineToBr(program.desciption));
        arc.append(arcBody);
        item.append(arc);
        $('#accordionTourPrograms').append(item);     
    }
})