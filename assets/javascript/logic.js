$(document).ready(function () {
    $('#my-carousel').carousel({
        interval: false
    });

    // $('.modal-link').on("show.bs.modal", function(e){
    //     e.preventDefault();
    //     $('#theModal').modal('show').find('.modal-body').load($(this).attr('href'));
    //     console.log (this)  
    // });    

    $("#theModal").on("show.bs.modal", function (e) {
        var button = $(e.relatedTarget);
        var modal = $(this);
    
        modal.find(".modal-body").load(button.data("remote"));
        console.log(this)
    })
});


