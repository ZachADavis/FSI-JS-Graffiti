let header = document.querySelector("#page-header")
header.style.textAlign = 'left'

let dogImages = document.querySelectorAll('.dog-image')
for( let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '50px'
}

for( let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.transform = 'rotate(180deg)'
}
// Select some elements...