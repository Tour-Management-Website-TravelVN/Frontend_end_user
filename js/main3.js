document.addEventListener('DOMContentLoaded', function () {
    var header_auth = document.getElementById("header-auth");

    //Do trùng header nhiều => Sửa lâu nên dùng file js sửa nhanh hơn
    document.querySelectorAll('.header-unauth').forEach(element => {
        element.classList.add("d-none");
    });
    header_auth.classList.remove("d-none");
})