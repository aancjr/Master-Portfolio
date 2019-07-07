$(document).ready(function () {
    $('#my-carousel').carousel({
        interval: false
    });


    // $('.contactModal').on('click', function(e){
    //     e.preventDefault();
    //     $('#theModal').modal('show').find('.modal-content').load($(this).attr('href'));
    //   });

    // $('.modal-link').on("show.bs.modal", function(e){
    //     e.preventDefault();
    //     $('#theModal').modal('show').find('.modal-body').load($(this).attr('href'));
    //       console.log (this)  
    // });  

    $("#theModal").on("show.bs.modal", function (e) {
        var button = $(e.relatedTarget);
        var modal = $(this);
    
        modal.find(".modal-body").load(button.data("remote"));
        console.log(this)
    })

    // contact form animations
//   $('#contact').click(function() {
//     $('#contactForm').fadeToggle();
//   })
//   $(document).mouseup(function (e) {
//     var container = $("#contactForm");

//     if (!container.is(e.target) // if the target of the click isn't the container...
//         && container.has(e.target).length === 0) // ... nor a descendant of the container
//     {
//         container.fadeOut();
//     }
//   });
});


