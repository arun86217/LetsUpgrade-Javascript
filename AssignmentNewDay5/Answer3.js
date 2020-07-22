console.log('Fetch API');

// Making a get request for all todos
console.log("Getting all posts");
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))

console.log("Getting a random post");

async function fetchTodos(){
    var y =Math.floor(Math.random()*(200));;
    var x='https://jsonplaceholder.typicode.com/todos/' + y
    const response = await fetch(x);
    const data = await response.json();

    console.log(data);
}

fetchTodos();