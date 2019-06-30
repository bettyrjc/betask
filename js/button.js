$('#toDoCont').on('click', '.deleteAll',function (){
    if(confirm('Are you sure of delete it?')){
    $(this).parent().parent().remove();
}
})

$('#toDoCont').on('click', '.finishAll',function (){
    // $(this).parent().parent().css('background', 'lightcoral')
  
    if(confirm('do you finish the task?')){
        $(this).parent().parent().css('background', 'lightgray')
    }
})

// modales


$('#task_').on('click', '.delete-item',function (){
console.log(clickeee);

})
