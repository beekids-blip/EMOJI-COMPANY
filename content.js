/* ===== 每週只要改這個檔案 =====
   1. 把新圖片放進 images 資料夾
   2. 修改下面的檔名與文字
   3. 重新上傳到 GitHub 即可 */
const SITE = {
  deadline: "2027/1/23（六）17:00截止",
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScoUBHQNFneUOUD2DYlApitpX0ftXBJ8q8Qdxo1l6DjhjZsvw/viewform?usp=header",              // ← 貼上線上投稿／報名表單連結
  qrImage: "images/EDM.JPG",   // ← 投稿 QR Code 圖片（檔名大小寫要和 images 資料夾裡的一模一樣）

  // 作品畫廊（精選作品會顯示在首頁，最新的放最前面）
 works: [
    { image: "images/photo-001.jpg", title: "禧嘻", author: "", featured: true },
    { image: "images/photo-002.jpg", title: "", author: "", featured: true },
    { image: "images/photo-003.jpg", title: "", author: "", featured: true },
    { image: "images/photo-004.jpg", title: "", author: "", featured: true },
    { image: "images/photo-005.jpg", title: "", author: "", featured: true },
    { image: "images/photo-006.jpg", title: "", author: "", featured: true },
    { image: "images/photo-007.jpg", title: "", author: "", featured: true },
    { image: "images/photo-008.jpg", title: "", author: "", featured: true },
    { image: "images/photo-009.jpg", title: "", author: "", featured: true },
    { image: "images/photo-010.jpg", title: "", author: "", featured: true },
    { image: "images/photo-011.jpg", title: "", author: "", featured: true },
    { image: "images/photo-012.jpg", title: "", author: "", featured: true }
  ],

 // 本輪得獎名單
 winners: [
    { prize: "情緒共鳴獎", name: "尚未開獎" },
    { prize: "我的百變怪", name: "尚未開獎" },
  ]
};
