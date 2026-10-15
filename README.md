# Mie Bakso Nakal

Website company profile statis sesuai PRD. Buka `dist/index.html` atau layani direktori `dist` menggunakan server HTTP statis.

Menu dan harga di `dist/app.js` merupakan contoh. Foto makanan dari Wikimedia Commons dan foto teh dari Unsplash adalah ilustrasi, bukan foto produk resmi. Aset ditampung lokal dalam `dist/assets/` dan dioptimalkan menjadi WebP. Ganti dengan foto produk sendiri sebelum peluncuran bisnis. Kontak, akun sosial, alamat, jam buka, dan lokasi Maps belum disediakan sehingga tidak dibuat-buat. Kemitraan ditampilkan sebagai rencana.

Formulir memvalidasi input dan menghasilkan berkas pesan untuk diunduh secara lokal; tidak mengirim atau menyimpan data di server. Aktifkan kanal bisnis dan pengiriman formulir setelah kontak resmi tersedia. Website tidak mengumpulkan analitik.

Desain mengikuti skill Hallmark dari https://github.com/Nutlope/hallmark dengan bentuk Catalogue, navigasi masthead N6, footer kolofon Ft4, dan warna brand dari PRD. CSS aktif: `dist/hallmark.css`, token aktif: `dist/tokens.css`. Salinan portabel token tersedia di `tokens.css`. Stylesheet versi sebelumnya tetap tersimpan di `dist/style.css`.

Font Anton dan IBM Plex Sans ditampung lokal dengan lisensi OFL masing-masing. Animasi dibatasi pada entrance awal, crossfade filter, serta pembaruan angka simulator; mendukung `prefers-reduced-motion`.

Simulator menghitung outlet × porsi per outlet per hari × Rp18.000 × 30 hari. Asumsi PRD (50 outlet dan 120 porsi) menghasilkan Rp3,24 miliar omzet bulanan. Rp20 juta profit per outlet dan Rp1 miliar profit gabungan adalah target terpisah; simulator tidak memodelkan biaya.

Validasi: Chrome headless pada lebar 320, 375, 414, 768, 1280, dan 1920 px; tidak ada overflow horizontal, seluruh aset dimuat lokal. Filter menu, konteks pemesanan, simulator, reset, minat kemitraan, validasi dan unduhan pesan diuji. Pemeriksaan axe-core WCAG 2 A/AA dan WCAG 2.1 AA tidak menemukan pelanggaran otomatis; ini bukan pengganti audit aksesibilitas manual penuh.
