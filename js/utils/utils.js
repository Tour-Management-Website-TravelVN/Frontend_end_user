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