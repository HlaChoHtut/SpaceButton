const showImage = document.getElementById('show-image')
const button = document.getElementById('btn')

button.addEventListener('click', () => {
    if (showImage.style.transform === 'translateY(0%)') {
        showImage.style.transform = 'translateY(100%)'
    } else {
        showImage.style.transform = 'translateY(0%)'
    }
})

// JS