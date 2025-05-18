// Put it under the yourtheme/assets folder
document.addEventListener('DOMContentLoaded', function() {
  const containers = document.querySelectorAll('.live-photo-container');
  
  containers.forEach(container => {
    const video = container.querySelector('.live-photo-video');
    
    video.load();
    
    // when the cursor hover
    container.addEventListener('mouseenter', () => {
      // auto play from the beginning
      video.currentTime = 0;
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Auto-play was prevented");
        });
      }
    });

    // when the cursor leave
    container.addEventListener('mouseleave', () => {
      // pause the video
      video.pause();
      // reset the video to the beginning
      video.currentTime = 0;
    });
  });
});