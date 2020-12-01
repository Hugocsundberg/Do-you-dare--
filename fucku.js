console.log('jsworks')
trumpet.currentTime=32
    

function fuckyoufunction() {
    console.log('works')
    document.getElementById('fuk').classList.remove('hidden')
    document.getElementById('fuk').className = "animation"
    // getById = document.getElementById 
    // trumpet = getById('trumpet')
    trumpet = document.getElementById('trumpet')
    trumpet.play(); 
    setTimeout(() => {
    trumpet.pause()        
    }, 6000); 
}