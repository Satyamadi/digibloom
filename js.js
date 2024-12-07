//scroll more design
const text = document.querySelector('.scroll p');
text.innerHTML = text.innerText.split("").map(
    (char, i) => `<span style="transform:rotate(${i * 13}deg); mix-blend-mode:difference;">${char}</span>`
).join("")


//following circle
const circle = document.querySelector('.circle');

document.addEventListener('mousemove', e => {
  const centerX = circle.offsetLeft + circle.clientWidth / 2;
  const centerY = circle.offsetTop + circle.clientHeight / 2;
  const distanceFromCenter = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
  const maxDistance = circle.clientWidth / 2 - 10;
  let x, y;
  if (distanceFromCenter > maxDistance) {
    x = e.clientX - centerX;
    y = e.clientY - centerY;
  } else {
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    x = Math.cos(angle) * maxDistance;
    y = Math.sin(angle) * maxDistance;
  }
  circle.style.transform = `translate(${x}px, ${y}px)`;
});



  //cursor hover
    const cursor = document.getElementById("cursor");
    document.addEventListener("mouseover", function(event) {

      const cursorType = getComputedStyle(event.target).getPropertyValue("cursor");
      
      if (cursorType === "pointer") {
        cursor.classList.add("active");
      }
    });
  
    document.addEventListener("mouseout", function(event) {
      cursor.classList.remove("active");
    });

//hambuger
let hamburger = document.querySelector(".hamburger");

let phoneNav = document.querySelectorAll(".phone-lists");

document.addEventListener("click", (event) => {
  if (event.target === hamburger) {
    hamburger.classList.toggle("active");
    
    phoneNav.forEach((phone) => phone.classList.toggle("active"));
  } else {
    hamburger.classList.remove("active");
    
    phoneNav.forEach((phone) => phone.classList.remove("active"));
  }
});

//paket
let paket = document.querySelector(".pesan1");
let paket2 = document.querySelector(".pesan2");
let paket3= document.querySelector(".pesan3");

let paketNav = document.querySelectorAll(".paket-popup");

let paketLive = `<div class="nav-back">
        <h1 class="paket-category">PAKET LIVE STREAMING</h1>
        <a href="#package" class="back-btn"
          ><img src="img/back_icon.png" alt=""
        /></a>
      </div>
      <div class="paket">
        <div class="pack-wrap">
          <section class="p-live pad-paket">
            <h1 class="p-tag">LIVE PRO 12 JAM Non-Stop</h1>
            <p class="p-desc">
              Streaming To Tiktok & Shopee Masa Berlaku 30 Hari
            </p>
            <div class="p-list">
              <ul>
                <li>- Include 6 talent </li>
                <li>- Include properti </li>
                <li>- 15 Vidio gimmick Pre-Heat Live </li>
                <li>- Include ads </li>
                <li>- layanan digital strategis</li>
                <li>- Optimasi Judul & Gimmick live</li>
                <li>- Setting Affiliasi Program (25 Influencer)</li>
                <li>- Paket Live Streaming (24x Jam Live dalam 30Hari)</li>
                <li>- Studio Live Streaming</li>
                <li>- Saldo Ads atau Coin</li>
                <li>- FREE UPLOAD 10 PRODUK</li>
              </ul>
            </div>
            <h1 class="p-price">
              PREMIUM
              <p>6jt</p>
            </h1>
            <a href="#">PESAN</a>
          </section>
          <section class="p-live pad-paket">
            <h1 class="p-tag">LIVE PRO 8 JAM/HARI</h1>
            <p class="p-desc">
              Design Sosial Media, Aplicated to Website Streaming To Tiktok &
              Shopee Masa Berlaku 12 Bulan
            </p>
            <div class="p-list">
              <ul>
                <li>- Include 2 talent </li>
                <li>- Include properti </li>
                <li>- 15 Vidio gimmick Pre-Heat Live </li>
                <li>- Include ads </li>
                <li>- layanan digital strategis</li>
                <li>- Optimasi Judul & Gimmick live</li>
                <li>- Setting Affiliasi Program (10 Influencer)</li>
                <li>- Paket Live Streaming (21x Jam Live dalam 30Hari)</li>
                <li>- Studio Live Streaming</li>
                <li>- Saldo Ads atau Coin</li>
                <li>- FREE UPLOAD 10 PRODUK</li>
              </ul>
            </div>
            <h1 class="p-price">
              PLUS
              <p>5jt</p>
            </h1>
            <a href="#">PESAN</a>
          </section>
          <section class="p-live pad-paket">
            <h1 class="p-tag">LIVE PRO 4 JAM/HARI</h1>
            <p class="p-desc">
              Design Sosial Media, Aplicated to Website Streaming To Tiktok &
              Shopee Masa Berlaku 12 Bulan
            </p>
            <div class="p-list">
              <ul>
                <li>- Include 1 talent </li>
                <li>- Include properti </li>
                <li>- 8 Vidio gimmick Pre-Heat Live </li>
                <li>- Include ads </li>
                <li>- layanan digital strategis</li>
                <li>- Optimasi Judul & Gimmick live</li>
                <li>- Setting Affiliasi Program (5 Influencer)</li>
                <li>- Paket Live Streaming (16x Jam Live dalam 30Hari)</li>
                <li>- Studio Live Streaming</li>
                <li>- Saldo Ads atau Coin</li>
                <li>- FREE UPLOAD 10 PRODUK</li>
              </ul>
            </div>
            <h1 class="p-price">
              BASIC
              <p>4jt</p>
            </h1>
            <a href="#">PESAN</a>
          </section>
        </div>
      </div>`;

let paketWeb = `<div class="nav-back">
        <h1 class="paket-category">PAKET WEBSITE</h1>
        <a href="#package" class="back-btn"
          ><img src="img/back_icon.png" alt=""
        /></a>
      </div>
      <div class="paket">
         <div class="pack-wrap">
        <section class="p-web pad-paket">
          <h1 class="p-tag">KORPORAT WEBSITE</h1>
          <p class="p-desc">
            Website untuk perusahaan besar dengan menyediakan berbagai vitur dan
            jumlah halaman yang banyak
          </p>
          <div class="p-list">
            <ul>
              <li>- 3 Email Bisnis</li>
              <li>- Kontak WhatsApp</li>
              <li>- Intergrasi media sosial</li>
              <li>Tutorial Kelola Website</li>
              <li>- layanan digital strategi</li>
              <li>- 20 Halaman</li>
              <li>- masa berlaku 1 tahun</li>
              <li>- Request fitur</li>
            </ul>
          </div>
          <h1 class="p-price">
            PAKET
            <p>5jt</p>
          </h1>
          <a href="#">PESAN</a>
        </section>
        <section class="p-web pad-paket">
          <h1 class="p-tag">BUSINESS WEBSITE</h1>
          <p class="p-desc">
            Website bisnis cocok untuk bisnis kecil untuk memperkenalkan
            perusahaan, layanan, dan produk
          </p>
          <div class="p-list">
            <ul>
              <li>- 2 Email Bisnis</li>
              <li>- Kontak WhatsApp</li>
              <li>- Intergrasi media sosial</li>
              <li>Tutorial Website</li>
              <li>- layanan digital strategi</li>
              <li>- 10 Halaman</li>
              <li>- masa berlaku 1 tahun</li>
            </ul>
          </div>
          <h1 class="p-price">
            PAKET
            <p>3jt</p>
          </h1>
          <a href="#">PESAN</a>
        </section>
        <section class="p-web pad-paket">
          <h1 class="p-tag">PERSONAL WEBSITE</h1>
          <p class="p-desc">
            Website pribadi cocok untuk profil diri, porfolio, blogger, personal
            branding, dan usaha perseorangan
          </p>
          <div class="p-list">
            <ul>
              <li>- 1 Email Bisnis</li>
              <li>- Kontak WhatsApp</li>
              <li>- Intergrasi media sosial</li>
              <li>Tutorial Website</li>
              <li>- layanan digital strategi</li>
              <li>- 5 Halaman</li>
              <li>- masa berlaku 1 tahun</li>
            </ul>
          </div>
          <h1 class="p-price">
            PAKET
            <p>2jt</p>
          </h1>
          <a href="#">PESAN</a>
        </section>
      </div>
      </div>`;
let paketKonten = `
<div class="nav-back">
        <h1 class="paket-category">PAKET MEDIA SOSIAL</h1>
        <a href="#package" class="back-btn"
          ><img src="img/back_icon.png" alt=""
        /></a>
      </div>
      <div class="paket paket-medsos">
       <div class="pack-wrap kontens">
        <div class="scroll-wrap">
          <section class="p-konten pad-paket">
            <h1 class="p-tag">
              PAKET BULANAN - Video IG Reels & TikTok Content Hardselling
            </h1>
            <p class="p-desc">VIDEO CONTENT REELS & TIKTOK</p>
            <div class="p-list">
              <ul>
                <li>- Konsep, ide, script & materi full dari DigiBloom</li>
                <li>-Maksimal 2 talent in frame dalam 1 konten</li>
                <li>-Setiap konten maks 1 Menit untuk IG Reels & TikTok</li>
                <li>layanan digital strategis</li>
                <li>-Diproduksi dengan device iPhone 11 - iPhone 13 Pro Max</li>
              </ul>
            </div>
            <h1 class="p-price">
              6 Bulan / Kontrak
              <p>2,5jt</p>
              /Bulan
            </h1>
            <h1 class="p-price">
              12 Bulan / Kontrak
              <p>2jt</p>
              /Bulan
            </h1>
            <a href="#">PESAN</a>
          </section>
          <section class="p-konten pad-paket">
            <h1 class="p-tag">PAKET BULANAN - CAROUSEL IG FEED</h1>
            <p class="p-desc">DESIGN CAROUSEL SLIDE IG FEED</p>
            <div class="p-list">
              <ul>
                <li>
                  - 1 konten maksimal 5 slide (Tergantung materi kontennya)
                </li>
                <li>
                  -konten design carousel ( slide ) untuk IG Feed Konsep, ide &
                  materi dari DigiBloom.
                </li>
                <li>
                  - Content slide carousel IG Feed: Storytelling / informatif /
                  edukatif dll yang sesuai dengan target audience
                </li>
                <li>Design, caption & Hashtag</li>
                <li>- layanan digital strategis</li>
                <li>- Setiap hari 1 konten</li>
              </ul>
            </div>
            <h1 class="p-price">
              6 Bulan / Kontrak
              <p>2jt</p>
              /Bulan
            </h1>
            <h1 class="p-price">
              12 Bulan / Kontrak
              <p>1,5jt</p>
              /Bulan
            </h1>
            <a href="#">PESAN</a>
          </section>
          <section class="p-konten pad-paket">
            <h1 class="p-tag">VIDEO DRAMA IG REELS & TIKTOK</h1>
            <p class="p-desc">Untuk naikin traffic supaya akun makin rame!</p>
            <div class="p-list">
              <ul>
                <li>- Pembuatan dan pengelolaan sosial media </li>
                <li>- Jasa live streaming include Talent </li>
                <li>- Pembuatan website lengkap  </li>
                <li>
                  - Include Digital Strategies (As a Consulting for Social
                  Media)
                </li>
              </ul>
            </div>
            <h1 class="p-price">
              PAKET
              <p>3,5jt</p>
            </h1>
            <a href="#">PESAN</a>
          </section>

          <section class="p-konten pad-paket">
            <h1 class="p-tag">CAROUSEL IG FEED</h1>
            <p class="p-desc">DESIGN CAROUSEL SLIDE IG FEED</p>
            <div class="p-list">
              <ul>
                <li>- 26 CONTENT CAROUSEL SLIDE DESIGN IG FEED</li>
                <li>
                  -1 konten maksimal 5 slide (Tergantung materi kontennya)
                </li>
                <li>
                  - 26 konten design carousel ( slide ) untuk IG Feed Konsep,
                  ide & materi dari Adsfort.
                </li>
                <li>
                  Content slide carousel IG Feed: Storytelling / informatif /
                  edukatif dll yang sesuai dengan target audience
                </li>
                <li>- layanan digital strategis</li>
                <li>
                  - Design, caption & Hashtag Setiap hari 1 konten ( Kecuali
                  hari libur )
                </li>
                <li>- 26 Carousel Slide Content IG</li>
              </ul>
            </div>
            <h1 class="p-price">
              PAKET
              <p>2jt</p>
            </h1>
            <a href="#">PESAN</a>
          </section>
          <section class="p-konten pad-paket">
            <h1 class="p-tag">VIDEO CONTENT REELS & TIKTOK</h1>
            <p class="p-desc">Video IG Reels & TikTok Content Hardselling</p>
            <div class="p-list">
              <ul>
                <li>- 11 Video Content IG Reels & TikTok</li>
                <li>-Konsep, ide, script & materi full dari DigiBloom</li>
                <li>- Maksimal 2 talent in frame dalam 1 konten</li>
                <li>Diproduksi dengan device iPhone 11 - iPhone 13 Pro Max</li>
                <li>- layanan digital strategis</li>
                <li>- Setiap konten maks 1 Menit untuk IG Reels & TikTok</li>
                <li>- 11 Video Content</li>
              </ul>
            </div>
            <h1 class="p-price">
              PAKET
              <p>2,5jt</p>
            </h1>
            <a href="#">PESAN</a>
          </section>
        </div>
      </div>
      </div>
`;



// Fungsi untuk mengatur toggle paket
const togglePaket = (button, content) => {
  // Toggle class active untuk tombol
  button.classList.toggle("active");

  // Menampilkan atau menyembunyikan popup berdasarkan active
  paketNav.forEach((e) => {
      if (e.classList.contains("active")) {
          e.innerHTML = content;
          e.classList.remove("active");
      } else {
          e.innerHTML = content;
          e.classList.add("active");
      }
  });
};

// Fungsi untuk menutup popup
const closePopup = () => {
  // Hapus class active dari popup dan tombol
  paketNav.forEach((e) => {
      e.classList.remove("active");
  });
  paket.classList.remove("active");
  paket2.classList.remove("active");
  paket3.classList.remove("active");
};

// Menangani klik pada tombol paket dan tombol kembali
document.addEventListener("click", (event) => {
  // Klik pada tombol paket 1 (Live Streaming)
  if (event.target === paket) {
      togglePaket(paket, paketLive);
  }
  // Klik pada tombol paket 2 (Website)
  else if (event.target === paket2) {
      togglePaket(paket2, paketWeb);
  }
  // Klik pada tombol paket 3 (Media Sosial)
  else if (event.target === paket3) {
      togglePaket(paket3, paketKonten);
  }
  
  // Klik pada tombol "back" untuk menutup popup
  else if (event.target.closest('.back-btn')) {
    closePopup(); // Menutup popup jika tombol kembali diklik
  }
});
