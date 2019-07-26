
$(function() {

    $(".devour").on('click',function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function() {
            console.log("switched to devoured", newDevour);
            location.reload();
        });
    });

    //-----------------------------------------------

    $("#submitButton").on("click", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $('#userBurgerInput').val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("new burger success");
            location.reload();
        });
    });

    //-----------------------------------------------

    $('.remove').on('click', function(event) {
        event.preventDefault();

        var id = $(this).data('id');

        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(function() {
            console.log('deleted burger', id);
            location.reload();
        });
    });


});