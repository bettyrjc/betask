$('#toDoCont').on('click', '.deleteAll',function (){
    $(this).parent().parent().remove();
})

$('#toDoCont').on('click', '.finishAll',function (){
    $(this).parent().parent().css("background-color", "lightgray")
})
