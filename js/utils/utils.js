export function formatDate(isoDate) {
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

export function formatIsoDate(localDate) {
    // Kiểm tra định dạng đầu vào
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(localDate)) {
        return "Định dạng ngày không hợp lệ (dd/mm/yyyy)";
    }

    const parts = localDate.split('/');
    const year = parts[2];
    const month = parts[1];
    const day = parts[0];

    return `${year}-${month}-${day}`;
}

export function convertNewlineToBr(text) {
    if (!text) return '';
    return text.replace(/\r\n|\n/g, '<br><br>');
}

export function buildUrl(baseUrl, params) {
    const query = new URLSearchParams(params).toString();
    return `${baseUrl}?${query}`;
  }

  //Chưa sửa tính giá sau giảm
export function getPrice(price, discount) {
    return formatNumberWithDots(Math.round((discount.discountUnit == "%") ?
        price * (1 - discount.discountValue / 100)
        :
        price - discount.discountValue))
}

export function getPriceToCell(price, discount) {
    return formatNumberWithK(Math.round((discount.discountUnit == "%") ?
        price * (1 - discount.discountValue / 100)
        :
        price - discount.discountValue))
}

export function formatNumberWithK(numberString) {
    numberString = numberString + "";
    // Loại bỏ các dấu chấm hiện có (nếu có) để đảm bảo xử lý đúng
    const cleanedString = numberString.replace(/\./g, '');

    // Chuyển chuỗi thành số
    let number = parseInt(cleanedString, 10);

    // Kiểm tra xem có phải là số hợp lệ không
    if (isNaN(number)) {
        return "Không phải là số hợp lệ";
    }

    number = Math.round(number/1000);

    // Sử dụng toLocaleString để định dạng với dấu chấm phân cách hàng nghìn
    return number.toLocaleString('vi-VN') + "K";
}

export function formatNumberWithDots(numberString) {
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

//Hàm tách tên
export function splitFullName(fullName) {
    fullName = fullName.trim().split(' ');
    let lastname = fullName.pop();
    let firstname = fullName.join(' ');
    return [firstname, lastname];
}

//Hàm cắt chữ
export function splitString(s, len){
    if(s.length > len){
        return s.substring(0, len) + '...'
    }
    return s;
}

//Hàm nối chữ
export function formatToChars(str, range) {
    if (str.length > range) {
        return str.slice(0, range);
    } else {
        // Thêm khoảng trắng không bị rút gọn
        let padLength = range - str.length;
        return str + '&nbsp;'.repeat(padLength);
    }
}

