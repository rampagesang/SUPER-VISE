$(document).ready(function () {
    // Gets an optional query string from our url (i.e. ?post_id=23)
    var url = window.location.search;
    var inventoryId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;



    // Getting jQuery references to the post body, title, form, and category select
    var make = $("#make");
    var model = $("#model");
    var color = $("#color");
    var year = $("#year");
    var msrp = $("#msrp_price");
    var invoice = $("#invoice_price");
    var sticker = $("#sticker_price");
    var sale = $("#sale_price");

        // Constructing a newPost object to hand to the database
        var newPost = {
            make: make.val().trim(),
            model: model.val().trim(),
            year: year.val(),
            color: color.val(),
            msrp_price: msrp.val().parseInt(),
            invoice_price: invoice.val().parseInt(),
            sticker_price: sticker.val().parseInt(),
            sale_price: sale.val().parseInt()

        };

        console.log(newPost)
    });


    $("#submit").on("click", function submitPost(Inventory) {
        $.post("/api/inventory/", Inventory, function () {
            window.location.href = "/";
            
        });
    });