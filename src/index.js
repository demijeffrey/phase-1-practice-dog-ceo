console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(images => {
        const dogImages = document.getElementById('dog-image-container')
        
        images.message.forEach(element => {
            const img = document.createElement('img')
            img.src = element
            document.getElementById('dog-image-container').appendChild(img)
        })
    })

    const dogBreed = 'https://dog.ceo/api/breeds/list/all'

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breeds => {
        // console.log(breeds.message)
         for(const dog in breeds.message) {
            const li = document.createElement('li')
            li.innerText = dog
            document.getElementById('dog-breeds').appendChild(li)
            
            li.addEventListener('click', () => {
                li.style.color = 'green'
            })
        }
        const dropdown = document.getElementById('breed-dropdown')
        
        dropdown.addEventListener('change', (event) => {
            event.preventDefault()
            let ul = document.querySelector('#dog-breeds')
            let child = ul.lastElementChild
            while(child){
                ul.removeChild(child)
                child = ul.lastElementChild
            }
            // console.log(event.target.value)
            for (const dog in breeds.message) {
                if (dropdown.value === 'a') {
                    if (dog.charAt(0) === 'a') {
                        const li = document.createElement('li')
                        li.innerText = dog
                        document.getElementById('dog-breeds').appendChild(li)
                    }
                } else if (dropdown.value === 'b') {
                    if (dog.charAt(0) === 'b') {
                        const li = document.createElement('li')
                        li.innerText = dog
                        document.getElementById('dog-breeds').appendChild(li)
                    }
                } else if (dropdown.value === 'c') {
                    if (dog.charAt(0) === 'c') {
                        const li = document.createElement('li')
                        li.innerText = dog
                        document.getElementById('dog-breeds').appendChild(li)
                    }
                } else if (dropdown.value === 'd') {
                    if (dog.charAt(0) === 'd') {
                        const li = document.createElement('li')
                        li.innerText = dog
                        document.getElementById('dog-breeds').appendChild(li)
                    }
                }
            }
        })
    })
 
});