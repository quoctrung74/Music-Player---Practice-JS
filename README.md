# 🎵 Music Player Web Application
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
