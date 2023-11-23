export function requireAuth(to, from, next) {
  const token = localStorage.getItem('access_token'); // Lấy token từ local storage
  console.log(token)
  if (token) {
    next(); // Cho phép truy cập tới tuyến (route) tiếp theo
  } else {
    localStorage.setItem('redirectPath', this.$router.currentRoute._value.fullPath)
    next('/login'); // Chuyển hướng đến trang đăng nhập nếu không có token
  }
}

