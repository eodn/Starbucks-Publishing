 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
     videoId: 'An6LvWQuj_8',
     playerVars: {
       autoplay: true, //자동 재생
       loop: true, //반복 재생
       playlist: 'An6LvWQuj_8' //반복 재생할 유튜부 영상 ID 목록
     },
      events: {
        onReady: function (event) {
          event.target.mute() //음속어
        }
      }
   });
 }