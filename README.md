# 🎵 Music Player Web Application
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Deployment](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
> Một ứng dụng nghe nhạc trực tuyến được xây dựng hoàn toàn bằng Vanilla JavaScript, HTML5 và CSS3.

---

## 📌 Tổng quan dự án
Dự án này là một trình phát nhạc tập trung vào trải nghiệm người dùng với các hiệu ứng chuyển động mượt mà và logic xử lý âm thanh chặt chẽ. Đây là minh chứng cho việc vận dụng kiến thức về **DOM Manipulation**, **Event Handling** và **Array Methods** trong JavaScript.

## ✨ Các tính năng đã hoàn thiện
Ứng dụng đã hỗ trợ:
- ✅ **Render Playlist:** Tự động hiển thị danh sách bài hát từ dữ liệu có sẵn.
- ✅ **CD Animation:** Đĩa CD quay khi phát nhạc và dừng khi tạm dừng.
- ✅ **Scroll Interaction:** Hiệu ứng phóng to/thu nhỏ đĩa CD khi cuộn danh sách.
- ✅ **Playback Control:** Đầy đủ các nút Play/Pause, Next, Previous.
- ✅ **Smart Modes:** Chế độ phát ngẫu nhiên (Random) và phát lại (Repeat).
- ✅ **Interactive Progress Bar:** Thanh tua nhạc (Seek) đồng bộ theo thời gian thực của bài hát.

## 🛠 Công nghệ sử dụng
- **Frontend:** HTML5, CSS3 (Sử dụng Flexbox, Keyframes Animation).
- **Logic:** Vanilla JavaScript (ES6+).
- **Icons:** Font Awesome 5.
- **Fonts:** Poppins từ Google Fonts.

## 📂 Cấu trúc mã nguồn
Mã nguồn được tổ chức theo cấu trúc hướng đối tượng (Object Literal) để dễ quản lý:
- `render()`: Xử lý hiển thị danh sách bài hát ra giao diện.
- `handleEvents()`: Tập hợp tất cả các sự kiện tương tác người dùng (scroll, click, audio events).
- `loadCurrentSong()`: Cập nhật thông tin bài hát hiện tại lên dashboard.
- `randomSong()` / `nextSong()` / `prevSong()`: Logic điều hướng danh sách phát.

## 🚀 Cách chạy dự án
1. Clone repository này về máy:
```bash
git clone https://github.com/quoctrung74/music-player.git
```
2. Mở file index.html trực tiếp trên trình duyệt hoặc sử dụng extension Live Server trong VS Code để có trải nghiệm tốt nhất.

## 👤 Thông tin tác giả
* Họ tên: Nguyễn Quốc Trung
* Mã số sinh viên: 2413707
* Trường: Đại học Bách khoa - ĐHQG TP.HCM
* Nickname: RamTy
* Email: quoctrung.08042006@gmail.com
* GitHub: quoctrung74
