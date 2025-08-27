
let switcher  = document.querySelector('.btn')

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

let className = document.body.className
if (className == 'dark-theme') {
    this.textContent = "Dark"
} 
else { 
    this.textContent = "Light"
    console.log('current class name: ' + className)
}
})


