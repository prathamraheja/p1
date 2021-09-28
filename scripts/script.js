new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Summer of '69",
          artist: "Bryan Adams",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/1.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=eFjjO_lhf9c",
          favorited: false
        },
        {
          name: "Here With Me",
          artist: "Marshmello",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/2.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=50VNCymT-Cs",
          favorited: false
        },
        {
          name: "Willow",
          artist: "Taylor Swift",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/3.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=RsEZmictANA",
          favorited: false
        },
        {
          name: "Nobody's Love",
          artist: "Maroon 5",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/4.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=7ghhRHRP6t4",
          favorited: false
        },
        {
          name: "Bad Liar",
          artist: "Imagine Dragons",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/5.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=uEDhGX-UTeI",
          favorited: true
        },
        {
          name: "It Ain't Me",
          artist: "Kygo",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/6.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=D5drYkLiLI8",
          favorited: false
        },
        {
          name: "Coming Home",
          artist: "Skylar Grey",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/7.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=k84QxVJd0tI",
          favorited: true
        },
        {
          name: "Everything I Wanted",
          artist: "Billie Eilish ",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/8.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=bit8Zwn3irw",
          favorited: false
        },
        {
          name: "Dancing With Your Ghost",
          artist: "Sasha Sloan",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/9.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=Qzc_aX8c8g4",
          favorited: false
        },
        {
          name: "We will rock you",
          artist: "Queen",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/10.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/10.mp3",
          url: "https://www.youtube.com/watch?v=-tJYN-eG1zk",
          favorited: false
        },
        {
          name: "Someday",
          artist: "OneRepublic",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/11.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/11.mp3",
          url: "https://www.youtube.com/watch?v=vNfgVjZF8_4",
          favorited: false
        },
        {
          name: "No Name",
          artist: "NF",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/12.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/12.mp3",
          url: "https://www.youtube.com/watch?v=CJzaYLc4pPY",
          favorited: false
        },
        {
          name: "You should be sad",
          artist: "Halsey",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/13.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/13.mp3",
          url: "https://www.youtube.com/watch?v=8nBFqZppIF0",
          favorited: false
        },
        {
          name: "Panda",
          artist: "Designer",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/14.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/14.mp3",
          url: "https://www.youtube.com/watch?v=4NJlUribp3c",
          favorited: false
        },
        {
          name: "Say you won't let go",
          artist: "James arthur",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/15.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/15.mp3",
          url: "https://www.youtube.com/watch?v=0yW7w8F2TVA",
          favorited: false
        },
        {
          name: "Duaa",
          artist: "Nandhani Srikar",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/16.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/16.mp3",
          url: "https://www.youtube.com/watch?v=Ycf4Gzg4e-Q",
          favorited: false
        },
        {
          name: "Give me everything",
          artist: "Pitbull",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/17.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/17.mp3",
          url: "https://www.youtube.com/watch?v=EPo5wWmKEaI",
          favorited: false
        },
        {
          name: "Forever",
          artist: "Justin Beiber",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/18.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/18.mp3",
          url: "https://www.youtube.com/watch?v=ZdRfOV5XNNE",
          favorited: false
        },
        {
          name: "Back to you",
          artist: "Selena Gomez",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/19.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/19.mp3",
          url: "https://www.youtube.com/watch?v=VY1eFxgRR-k",
          favorited: false
        },
        {
          name: "Senorita",
          artist: "Shawn Mendes",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/20.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/20.mp3",
          url: "https://www.youtube.com/watch?v=Sebs7UPmcrQ",
          favorited: false
        },
        {
          name: "Alone",
          artist: "Marshmello",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/21.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/21.mp3",
          url: "https://www.youtube.com/watch?v=ALZHF5UqnU4",
          favorited: false
        },
        {
          name: "Candy Paint",
          artist: "Post Malone",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/22.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/22.mp3",
          url: "https://www.youtube.com/watch?v=mThqhAT2Irk",
          favorited: false
        },

        {
          name: "Stay",
          artist: "Justin Beiber",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/23.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/23.mp3",
          url: "https://www.youtube.com/watch?v=kTJczUoc26U",
          favorited: false
        },
        {
          name: "Arcade",
          artist: "Durcan Laurence",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/24.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/24.mp3",
          url: "https://www.youtube.com/watch?v=51u5fnyrGj4",
          favorited: false
        },
        {
          name: "Falling",
          artist: "Harry Styles",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/25.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/25.mp3",
          url: "https://www.youtube.com/watch?v=olGSAVOkkTI",
          favorited: false
        },
        {
          name: "Without Me",
          artist: "Halsey",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/28.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/28.mp3",
          url: "https://www.youtube.com/watch?v=ZAfAud_M_mg",
          favorited: false
        },
        {
          name: "Love Story",
          artist: "Taylor Swift",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/29.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/29.mp3",
          url: "https://www.youtube.com/watch?v=8xg3vE8Ie_E",
          favorited: false
        },
        {
          name: "Enemies",
          artist: "Post Malone",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/30.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/30.mp3",
          url: "https://www.youtube.com/watch?v=qT_y5Yc8jSA",
          favorited: false
        },
        {
          name: "Night Chances",
          artist: "One Direction",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/31.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/31.mp3",
          url: "https://www.youtube.com/watch?v=syFZfO_wfMQ",
          favorited: false
        },
        {
          name: "Happy",
          artist: "All Ok",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/32.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/32.mp3",
          url: "https://www.youtube.com/watch?v=hRkc-OPHApY",
          favorited: false
        },
        {
          name: "Anyone",
          artist: "Justin Beiber",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/33.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/33.mp3",
          url: "https://www.youtube.com/watch?v=KIK3azN4w34",
          favorited: false
        },
        {
          name: "Treat you better",
          artist: "Shawn Mendes",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/34.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/34.mp3",
          url: "https://www.youtube.com/watch?v=lY2yjAdbvdQ",
          favorited: false
        },
        {
          name: "Alone",
          artist: "Alan Walker",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/35.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/35.mp3",
          url: "https://www.youtube.com/watch?v=1-xGerv5FOk",
          favorited: false
        },
        {
          name: "18",
          artist: "1D",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/36.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/36.mp3",
          url: "https://www.youtube.com/watch?v=VRpzJabYlQQ",
          favorited: false
        },
        {
          name: "Happier",
          artist: "Marshmello",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/37.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/37.mp3",
          url: "https://www.youtube.com/watch?v=m7Bc3pLyij0",
          favorited: false
        },
        {
          name: "Smack That",
          artist: "Akon",
          cover: "https://raw.githubusercontent.com/prathamraheja/p1/main/img/38.jpg",
          source: "https://raw.githubusercontent.com/prathamraheja/p1/main/mp3/38.mp3",
          url: "https://www.youtube.com/watch?v=bKDdT_nyP54",
          favorited: false
        },

        
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
