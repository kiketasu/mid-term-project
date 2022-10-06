
projectTitle = document.getElementById("project-title");
projectText = document.getElementById("project-text");

const showDescription = (title, txt) => {
    
    console.log(title,txt)
    projectTitle.innerHTML = title;
    projectText.innerHTML = txt;
    

}

const load = async () => {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await promise.json();
    console.log(data)
    const newData = data.slice(0,3);
    console.log(newData);
    
    let title = data[4].title
    let txt = data[4].body
    showDescription(title, txt)
}
