$(document).ready(function(){
    $("#submit-button").click(function(){
        var todoBlock = $(this).closest("#new-todo-block");
        var description = todoBlock.find("#enter-task");
    $("ul").append("<li> <input type='checkbox'/>" + description.val() + "<span class='todo'>" + "</span> </li>")
    description.val("")
    })
})