//1. Grab elements from the HTML (using a dom element selector)
//2. Add Event Listeners
//3. Define the functions that the Event Listeners use
//First the user should type in their query, then they should click the button, and then the results should show

const baseUrl = "https://www.googleapis.com/books/v1/volumes?q="

let input = document.getElementById('search-input')
//let button = document.getElementById('search-button')
let submit = document.getElementById('submit')
let results = document.getElementById('results-list') //we'll display the results here

submit.addEventListener('click', handleSubmit)
//the second argument to addEventListener accepts an anonymous function (arrow or regular), OR a reference to a function define elsewehre

//function definition
function handleSubmit(event) {
  //Take the search term string entered by the user in the input field, add it to the baseUrl, make a fetch request to that new url, and append the results of what we searched for to the DOM in the correct element, wrapped in li tags
  let searchTerm = input.value.split(" ").join("+")
  console.log("")
  callAPI(searchTerm)
}

//function invocation, or CALLLing a function

function callAPI(searchTerm){
  console.log("callAPI")
  fetch(baseUrl + searchTerm)
  .then(function(resp){
    return resp.json()
  })
  .then(addBookToDom)
}
// handleSubmit()
function addBookToDom(resp){
  let items = resp.items
  let titles = items.map(function(book){
    return book.volumeInfo.title
  })
  titles.forEach(function(title){
    results.innerHTML += `<li>${title}</li>`
  })
}
