const elInput = document.getElementById('input')
const elButton = document.getElementById('btn')
const elH2 = document.getElementById('h2')



elButton.addEventListener('click' , function () {
    if (elInput.value === '1'){
        elH2.textContent = "Monday"
        elH2.style.color =('#08566e')
    } else if (elInput.value ==='2'){
        elH2.textContent = "Tuesday"
        elH2.style.color =('#08566e')
    }else if (elInput.value ==='3'){
        elH2.textContent = "Wednesday"
        elH2.style.color =('#08566e')
    }else if (elInput.value ==='4'){
        elH2.textContent = "Thursday"
        elH2.style.color =('#08566e')
    }else if (elInput.value ==='5'){
        elH2.textContent = "Friday"
        elH2.style.color =('#08566e')
    }else if (elInput.value ==='6'){
        elH2.textContent = "Saturday"
        elH2.style.color =('#08566e')
    }else if (elInput.value ==='7'){
        elH2.textContent = "Sunday"
        elH2.style.color =('#08566e')
    } else {
        elH2.textContent = 'Please enter numbers from 1 to 7 only'
         elH2.style.color = ('orange')
    }
})



 
