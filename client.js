
console.log('Js is working guys!')

$(document).ready(handleReady);

let info = [];

function handleReady(){
    console.log('jquery is running!');

    $('#addBtn').on('click', addItem);
    $('#salaryTable').on('click', ".deleteBtn", addItem);
}

function addItem(){ 
    console.log('clicked!'); 
    let submitItem = {
    firstName : $('#firstName').val(),
    lastName : $('#lastName').val(),
    employeeID : $('#employeeID').val(),
    title : $('#title').val(),
    annualSalary : $('#annualSalary').val()

 
}
    console.log(submitItem);

    info.push(submitItem);

    appendItemsToDom();

    $('#firstName').val(''),
    $('#lastName').val(''),
    $('#employeeID').val(''),
    $('#title').val(''),
    $('#annualSalary').val('')
}

function appendItemsToDom(){

    $('#salaryTable').empty();

    for(let item of info){
       
        $('#salaryTable').append(`
        <tr><td>${item.firstName}</td>
        <td>${item.lastName}</td>
        <td>${item.employeeID}</td>
        <td>${item.title}</td>
        <td>${item.annualSalary}</td>
        <td> <button class="deleteBtn">Delete</button> </td></tr>
        
        `)
    }

    let totalSalaryCost = 0
    for(let i = 0; i ,employees.length; i++) {
        totalSalaryCost =+ employees[i].annualSalary/12; 
        console.log('in totalSalaryCost', totalSalaryCost);
    }
    
    function delete() { 
        $(this).closest('tr').remove();
    
    }
    
}
















