export function getItemFromLocalStorage(key) {
    try {
      const item = localStorage.getItem(key);
      // Kiểm tra xem item có tồn tại không
      if (item === null) {
        return undefined; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
      }
      // Chuyển đổi chuỗi JSON thành đối tượng JavaScript
      return JSON.parse(item);
    } catch (error) {
      console.error(`Lỗi khi lấy giá trị từ localStorage: ${error}`);
      return undefined; // hoặc giá trị mặc định khác tùy thuộc vào yêu cầu của bạn
    }
  }
  
  // Hàm để thiết lập giá trị vào localStorage
  export function setItemToLocalStorage(key, value) {
    try {
      // Chuyển đối tượng JavaScript thành chuỗi JSON
      const item = JSON.stringify(value);
      localStorage.setItem(key, item);
    } catch (error) {
      console.error(`Lỗi khi thiết lập giá trị vào localStorage: ${error}`);
    }
  }