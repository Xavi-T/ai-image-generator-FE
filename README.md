# AI Image Generator - Frontend

🚀 **AI Image Generator - Frontend** là ứng dụng React + Vite giúp tạo hình ảnh từ mô tả bằng AI.

## 🛠 Công nghệ sử dụng
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Ant Design](https://ant.design/)
- [Framer Motion](https://www.framer.com/motion/)

## ⚡ Cài đặt & Chạy dự án

### 1. Clone repository
```sh
git clone https://github.com/your-username/ai-image-generator-FE.git
cd ai-image-generator-FE
```

### 2. Cài đặt dependencies
```sh
yarn install  # hoặc npm install
```

### 3. Chạy project
```sh
yarn dev  # hoặc npm run dev
```
Sau đó, mở trình duyệt và truy cập: **http://localhost:5173/**

## 📝 Cấu hình môi trường
Tạo file `.env` trong thư mục gốc và thêm:
```
VITE_BACKEND_API_URL=http://localhost:5000
```
Thay đổi URL phù hợp với backend của bạn.

## 🚀 Build production
```sh
yarn build  # hoặc npm run build
```
Output sẽ nằm trong thư mục `dist/`.

## 📂 Cấu trúc thư mục
```
ai-image-generator-FE/
├── src/
│   ├── components/    # Các component tái sử dụng
│   ├── pages/         # Các trang chính
│   ├── assets/        # Hình ảnh & CSS
│   ├── App.tsx        # Component chính
│   ├── main.tsx       # Điểm vào chính
├── public/            # Static files
├── .env               # Cấu hình môi trường
├── package.json       # Thông tin dự án
├── vite.config.ts     # Cấu hình Vite
└── README.md          # Tài liệu hướng dẫn
```

## 🤝 Đóng góp
1. Fork dự án 🍴
2. Tạo nhánh feature mới (`git checkout -b feature-name`)
3. Commit thay đổi (`git commit -m 'Add new feature'`)
4. Push lên branch (`git push origin feature-name`)
5. Mở Pull Request 🚀

## 📜 Giấy phép
Dự án này sử dụng giấy phép **MIT**.

---
🎨 **AI Image Generator** - Tạo hình ảnh từ trí tuệ nhân tạo! 🚀

