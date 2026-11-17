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
  { image: "images/0002.jpg", title: "拉芙U", author: "焦慮到變形但還是很滿足", featured: true  },
  { image: "images/0003.jpg", title: "嘻嘻", author: "因為我是我", featured: false },
  { image: "images/0004.jpg", title: "膠原蛋白", author: "焦綠", featured: false },
  { image: "images/0005.jpg", title: "爆", author: "煩死了", featured: true },
  { image: "images/0006.jpg", title: "無助的紅髮老師", author: "早上小組好吵控制不了", featured: false },
  { image: "images/0007.jpg", title: "雜毛精靈", author: "心事很多但很複雜", featured: true },
  { image: "images/0008.jpg", title: "鼻涕", author: "", featured: true },
  { image: "images/0009.jpg", title: "緊張", author: "要開會", featured: false },
  { image: "images/0010.jpg", title: "", author: "灰色", featured: false },
  { image: "images/0011.jpg", title: "波浪條", author: "我的心情會一直起伏", featured: false },
  { image: "images/0012.jpg", title: "啥都不知", author: "不知道在焦慮甚麼", featured: false }
  ],

 // 本輪得獎名單
 winners: [
    { prize: "情緒共鳴獎", name: "尚未開獎" },
    { prize: "我的百變怪", name: "尚未開獎" },
  ]
};
