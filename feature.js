/** Các bước cần làm
 * 1. Render playlist song  => OK
 * 2. Scroll top            => OK
 * 3. Play/Pause/Seek       => OK
 * 4. CD rotate             => OK
 * 5. Next/Prev             => OK
 * 6. Random                => OK
 * 7. Next/Repeat           => OK
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click => OK
 */
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const player = $(".player");
const playButton = $(".btn-toggle-play");
const progress = $("#progress");

const nextButton = $(".btn-next");
const prevButton = $(".btn-prev");
const randomButton = $(".btn-random");
const repeatButton = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
  currentIndex : 0,
  isPlaying : false,
  isRandom : false,
  isRepeat : false,
  
  songs : [
    {
      name: "THERE'S NO ONE AT ALL (REMIX 2026)",
      singer: "Sơn Tùng MTP",
      path: "./music/song1.mp3",
      image: "./img/img1.png"
    },
    {
      name: "LỠ MỘT LỜI THƯƠNG",
      singer: "Vy Oanh",
      path: "./music/song2.mp3",
      image: "./img/img2.png"
    },
    {
      name: "XAO XUYẾN",
      singer: "Bình Minh Vũ",
      path: "./music/song3.mp3",
      image: "./img/img3.png"
    },
    {
      name: "LO NGƯỜI ƯỚT ÁO",
      singer: "Nguyễn Thạc Bảo Ngọc",
      path: "./music/song4.mp3",
      image: "./img/img4.png"
    },
    {
      name: "MỞ LÒNG VÌ AI",
      singer: "Lý Văn - Inso cover",
      path: "./music/song5.mp3",
      image: "./img/img5.png"
    },
    {
      name: "ĐỊA NGỤC TRẦN GIAN",
      singer: "Phạm Kỳ",
      path: "./music/song6.mp3",
      image: "./img/img6.png"
    },
    {
      name: "HẸN HÒ NHƯNG KHÔNG YÊU",
      singer: "Wendy Thảo",
      path: "./music/song7.mp3",
      image: "./img/img7.png"
    },
    {
      name: "MƯA RỜI VÀO PHÒNG",
      singer: "Khởi My",
      path: "./music/song8.mp3",
      image: "./img/img8.png"
    },
    {
      name: "NẮNG DƯỚI CHÂN MÂY",
      singer: "Nguyễn Hữu Kha",
      path: "./music/song9.mp3",
      image: "./img/img9.png"
    },
    {
      name: "HOA TÀN TÌNH TAN",
      singer: "Giang Jolee",
      path: "./music/song10.mp3",
      image: "./img/img10.png"
    },
    {
      name: "MƯA ĐỢI CHỜ",
      singer: "Miu Lê",
      path: "./music/song11.mp3",
      image: "./img/img11.png"
    },
    {
      name: "DỐI LỪA",
      singer: "Nguyễn Đình Vũ",
      path: "./music/song12.mp3",
      image: "./img/img12.png"
    },
  ],
  
  render : function () {
    var renderPlayList = this.songs.map((song, index) => {
      return `
        <div class="song ${index === this.currentIndex ? "active" : ""}" data-index="${index}">
          <div class="thumb"
              style="background-image: url('${song.image}')">
          </div>
          <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
          </div>
          <div class="option">
              <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      `
    });
    $(".playlist").innerHTML = renderPlayList.join("");
  },

  handleEvents : function () {
    // Xử lý phóng to, thu nhỏ CD
    const cdWidth = cd.offsetWidth;
    document.onscroll = function(){
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    }

    // Xử lý đĩa CD quay
    const cdThumbAnimate = cdThumb.animate(
      [
        { 
          transform: "rotate(360deg)" 
        }
      ], 
      {
      duration: 10000,
      iterations: Infinity
      }
    );
    cdThumbAnimate.pause();

    // Xử lý khi click play/pause
    playButton.onclick = function(){
      if (app.isPlaying){
        audio.pause();
      } else {
        audio.play();
      }
    }
    audio.onplay = function () {
      app.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    }
    audio.onpause = function () {
      app.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    }
    // Xử lý khi tiến trình audio thay đổi
    audio.ontimeupdate = function () {
      if (audio.duration){
        const timePercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = timePercent;
      }
    }
    // Xử lý khi tua
    progress.onchange = function () {
      audio.currentTime = progress.value * audio.duration / 100;
    }

    // Xử lý khi bấm nút Next
    nextButton.onclick = function () {
      if (app.isRandom){
        app.randomSong();
      } else {
        app.nextSong();
      }
      audio.play();
    }

    // Xử lý khi bấm nút Prev
    prevButton.onclick = function () {
      if (app.isRandom){
        app.randomSong();
      } else {
        app.prevSong();
      }
      audio.play();
    }

    // Xử lý khi bấm nút Random
    randomButton.onclick = function () {
      if (app.isRandom){
        app.isRandom = !app.isRandom;
        randomButton.classList.remove("active");
      } else {
        app.isRandom = !app.isRandom;
        randomButton.classList.add("active");
      }
    }

    // Xử lý khi bấm nút Repeat
    repeatButton.onclick = function () {
      if (app.isRepeat){
        app.isRepeat = !app.isRepeat;
        repeatButton.classList.remove("active");
      } else {
        app.isRepeat = !app.isRepeat;
        repeatButton.classList.add("active");
      }
    }

    // Xử lý khi kết thúc bài hát
    audio.onended = function () {
      if (app.isRepeat){
        audio.play();
      } else if (app.isRandom){
        app.randomSong();
        audio.play();
      } else {
        nextButton.click();
      }
    }

    // Xử lý phát nhạc khi click vào một bài bất kỳ trong playlist
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");
      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào một bài hát bất kỳ
        if (songNode) {
          app.currentIndex = Number(songNode.dataset.index);
          app.loadCurrentSong();
          app.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        if (e.target.closest(".option")) {
        }
      }
    };

  },

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get : function (){
        return this.songs[this.currentIndex];
      }
    })
  },

  loadCurrentSong : function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url("${this.currentSong.image}")`;
    audio.src = this.currentSong.path;
  },

  nextSong : function () {
    this.currentIndex ++;
    this.currentIndex = this.currentIndex >= this.songs.length ? 0 : this.currentIndex;
    this.render();
    this.loadCurrentSong();
  },

  prevSong : function () {
    this.currentIndex --;
    this.currentIndex = this.currentIndex < 0 ? this.songs.length -1 : this.currentIndex;
    this.render();
    this.loadCurrentSong();

  },

  randomSong : function () {
    while (true){
      var newIndex = Math.floor(Math.random() * this.songs.length);
      console.log(newIndex);
      if (newIndex != this.currentIndex){
        this.currentIndex = newIndex;
        break;
      }
    }
    this.render();
    this.loadCurrentSong();
  },


  start : function () {
    this.render();
    this.handleEvents();
    this.defineProperties();
    this.loadCurrentSong();
  }
}

app.start();