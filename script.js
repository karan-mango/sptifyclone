let audioE;
let mplay=document.getElementById('mplay');
let mybar=document.getElementById('progressbar');
const songList = document.querySelectorAll('.song-list li');

songList.forEach(function(song) {

    song.addEventListener('click', function() {
    // audioE.pause();
        if(audioE){
            audioE.pause();
          
        }
        mplay.classList.remove("fa-play");
        mplay.classList.add("fa-pause");

      audioE = new Audio(song.getAttribute('data-src'));
      audioE.play();
      audioE.addEventListener('timeupdate',()=>{
        progress=parseInt((audioE.currentTime/audioE.duration)*100);
        mybar.value=progress;
    })


    
audioE.addEventListener('ended', function() {
    mplay.classList.add("fa-play");
    mplay.classList.remove("fa-pause");
});

   
      
      
     
    });
  });
//this is for changing icon and playing songs and pausing it
mplay.addEventListener('click',()=>{

    if(audioE.paused||audioE.currentTime==0){
        mplay.classList.remove("fa-play");
        mplay.classList.add("fa-pause");

        audioE.play();
    }
    else{
        mplay.classList.add("fa-play");
        mplay.classList.remove("fa-pause");

        audioE.pause();
    }


})

audioE.addEventListener('ended', function() {
    mplay.classList.add("fa-play");
    mplay.classList.remove("fa-pause");
});
//this is for the seeking the bar

