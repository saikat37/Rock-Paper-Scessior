let nameArray = [{name:'wake upp',
    dueDate: '17-06-2001'
}];

function displayTodo() {
    let html = '';
    for (let i=0; i<nameArray.length;i++) {
        const arrayObject = nameArray[i];
        const {name,dueDate} = arrayObject;

        let htmlCode = `
        <div>${name}</div>
        <div> ${dueDate}</div> 
        <button class = "delete-btn" onclick = "
        nameArray.splice(${i}, ${1});
        displayTodo();
        ">Delete</button>`;
        html += htmlCode;
    }
    
    document.querySelector('.js-rendarTodo').innerHTML = html;
}

function todo() {
const nameElement = document.querySelector('.js-name');
const name = nameElement.value;
const dueDateElement = document.querySelector('.js-date');
dueDate = dueDateElement.value;

nameArray.push({
    name: name,
    dueDate: dueDate
}); 
nameElement.value = '';
dueDateElement.value=''
displayTodo();
}