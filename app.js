
class Task{
    constructor(number, todo, priority){
        this.number=number;
        this.todo=todo
        this.priority=priority
        this.myDate=''
        this.dateComplete=''
    }
}

//onclick="getElementById('demo').innerHTML = Date()"

let num = 1
let todo= "start my list"
let dueDate= "8/3/22"
let priority= "high"


// show form
function clickAdd(id){
    document.getElementById(id).style.display = 'block';
}

// add item from form info unshow form
function submit(){
    let todo=  document.getElementById("task").value
    let prioritySelect = document.getElementById("selectPriority");
    let priority = prioritySelect.options[prioritySelect.selectedIndex].text;
    let task= new Task(num, todo, priority)
    addtoList(task)
    num++;
    document.getElementById('formInfo').style.display = 'none';
}


// add item 
function addtoList(task){
    const d= new Date()
    let myDate= `${d.getMonth()+2}/${d.getDate()}/${d.getFullYear()}`
    let listStart = document.getElementById("listItem")
    task.myDate=myDate
    let bId=num;
    let dId=`${bId}date`
    taskId=`${bId}id`
    rId=`r${bId}`
    let newElement= 
    `<tr id=${taskId}> <th scope="row">${num}</th> 
    <td> ${task.todo}</td>
    <td>${task.priority}</td>
    <td> ${task.myDate}</td>
     <td id=${dId}> </td>
    <td><button id=${bId} type="button" class="btn btn-outline-success" onClick="markComplete(this.id)">Complete</button> 
    <button id=${rId} type="button" class="btn btn-outline-danger" onClick="remove(this.id)">Remove</button></td>
   
    </tr>`
    console.log(taskId)
    listStart.insertAdjacentHTML( 'beforeend', newElement)

}
//Mark item as complete and set completion date
function markComplete(id){
    const d= new Date()
    let completeDate= `${d.getMonth()+2}/${d.getDate()}/${d.getFullYear()}`
    let taskNum = id+"id"
    let dateNum=id+"date"
    let listAmmend = document.getElementById(taskNum)
    console.log(id)
    
    console.log(listAmmend)
    this.dateComplete=completeDate
    
    let newElement= document.getElementById(dateNum)
    newElement.innerHTML= completeDate
    listAmmend.style.textDecoration ="line-through"
    newElement.style.setProperty("textDecoration", "none", "important");

}

function remove(rid){
    let text = "Press a button!\nEither OK or Cancel.";
    if (confirm(text) == true) {
    text = "You pressed OK!";
  } else {
    text = "You canceled!";
  }
    
    let taskid=rid.slice(1)+"id"
    let task= document.getElementById(taskid);
    console.log(taskid)
    task.remove();
}




