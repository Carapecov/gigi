document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('click', () => {
        const videoId = item.getAttribute('data-video');
        const videoPlayer = document.getElementById('videoPlayer');
        
        videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
    });
});

