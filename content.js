/* ===== 每週只要改這個檔案 =====
   1. 把新圖片放進 images 資料夾
   2. 修改下面的檔名與文字
   3. 重新上傳到 GitHub 即可 */
const SITE = {
  deadline: "2027/1/23（六）17:00截止",
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScoUBHQNFneUOUD2DYlApitpX0ftXBJ8q8Qdxo1l6DjhjZsvw/viewform?usp=header",              // ← 貼上線上投稿／報名表單連結
  qrImage: "images/EDM.JPG",   // ← 投稿 QR Code 圖片（檔名大小寫要和 images 資料夾裡的一模一樣）

  // 本週題目（把圖片放進 images，填檔名；沒有就留空）
  topic: { title: "本週題目", image: "", text: "我這禮拜看到喜歡的人的心情" },

  // 作品畫廊（精選作品會顯示在首頁，最新的放最前面）
  works: [
    // { image: "happy (1).jpg", title: "作品名稱", author: "王X明", featured: true },
    // { image: "happy (2).jpg", title: "作品名稱", author: "楊X明", featured: false },
    // { image: "happy (3).jpg", title: "作品名稱", author: "楊X明", featured: false },
    // { image: "happy (4).jpg", title: "作品名稱", author: "楊X明", featured: true },
  ],

 // 本輪得獎名單
  winners: {
    "情緒共鳴獎": ["楊X東", "楊X東2", "楊X東4"],
    "我的百變怪": ["楊X東", "楊X東3"]
  }
};
