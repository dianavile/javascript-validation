const search = document.getElementById('search')
const searchForm = document.getElementById('searchForm')
const errorSearch = document.getElementById('errorSearch')

searchForm.addEventListener('submit', (e) => {
    let messages = []

    if (search.value === '' || search.value == null) {
    messages.push('This field can´t be empty')
    }
    if (search.value.length <= 3){
        messages.push('The search query must contain more then 3 characters')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorSearch.innerText = messages.join(', ')
    }  
}) 