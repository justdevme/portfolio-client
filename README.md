# Le Petit Miracle Tarot — portfolio client

Website đặt lịch Private Tarot của Nhê (@foolishnhe_), dựng theo bản thiết kế `Main.dc.html` / `Mobile.dc.html`
(responsive: một codebase cho desktop 1440px và mobile 390px).

## Chạy

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output: dist/
```

## Cấu trúc

- `src/App.jsx` — điều hướng theo hash (`#/about`, `#/pricing`, `#/feedback`, `#/book`), nền động, hiệu ứng chạm.
- `src/pages/` — Home, About, Pricing, Feedback (carousel ảnh feedback), Book (gợi ý tin nhắn + copy).
- `src/components/Backdrop.jsx` — glitter, nền sao cho trang con, trăng/sao hai bên, tap burst.
- `src/data.js` — gói giá, danh sách feedback, link IG/Zalo (sửa nội dung ở đây).
- `src/styles.css` — CSS gốc của thiết kế; `src/layout.css` — layout từng trang.
- `src/markup/*.html` — SVG trang trí tĩnh sinh sẵn (trăng, chòm sao, mây) nhúng qua `?raw`.
- `public/img/` — ảnh hero, chân dung, 20 ảnh feedback, SVG sao.

## Deploy (GitHub Pages)

Push lên `main` sẽ tự build và deploy qua `.github/workflows/deploy.yml`.
Lần đầu: GitHub repo → Settings → Pages → Build and deployment → Source: **GitHub Actions**.
Site chạy tại `https://<user>.github.io/portfolio-client/` (dùng `base: './'` và hash routing nên không cần cấu hình thêm).
