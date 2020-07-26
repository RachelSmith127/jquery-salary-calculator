console.log('Js is working guys!')

$(document).ready(function(){
    // console.log('working')
    // $('#salaryTable.delete').click(function(){
    //     console.log('working')
    //     $(this).closest('tr').remove();
        
    // });
    // $('.submit').on('click',function(){
    //     //    $("salaryTable").append(<tr><td>+$("#fname").val()+</td><td>+$("#lname").val()+</td><td>+$("#employeeID").val()+</td><td>+$("#title").val()+</td><td>+$("#annualSalary").val()+</td><td><button 
    //     //    class='delete'> Delete</button></td></tr>);


    //     });
     Function addEmployee(){
        console.log('Adding Employee');
        let addEmployee = {
            firstName: $('#fname').val(),
            lastName: $('#lname').val(),
            employeeID: $('#employeeID').val(),
            Title: $('#title').val()
            annualSalary: $('#annualSalary').val() 
        }

        if (addEmployee.firstName === '' || addEmployee.lastName === '' || addEmployee.employeeID === '' || addEmployee.Title === '' || addEmployee.annualSalary === '') {
            alert('Enter information in form.')
        } else { 
            employees.push(addEmployee);

            addEmployeeToDOM();
            $('#fname').val(''),
            $('#lname').val(''),
            $('#employeeID').val(''),
            $('#title').val('')
            $('#annualSalary').val('') 

        }
        addEmployee();

     }

     Function addEmployeeToDOM() {
         $('#salaryTable').empty();

    for(let nEmployee of employees){

    
         $('salaryTable').append(`<tr><
    <td>${nEmployee.firstName}</td> 
    <td>${nEmployee.lastName}</td> 
    <td>${nEmployee.employeeID}</td>
    <td>${nEmployee.title}</td>
    <td>${nEmployee.annualSalary}</td>
    <td> <button class="delete">Delete</button> </td><tr>`)
     }

    }

     Function updateMonthlyTotal(){




     }

     Function deleteEmployeeIntoGrid(){




     }
});
