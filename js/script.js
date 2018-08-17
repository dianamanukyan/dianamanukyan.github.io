$(document).ready(function () {
    //scroll top
    $('#top').on('click', function () {
        $('html').animate({scrollTop: 0}, 1500);
    });
    //End scroll top


    //ToolTip
    $("[title]").tooltip({
        show: {
            effect: "explode",
            delay: 250
        }
    });
    // End ToolTip

    /*Home*/
    $("a[href*='#home']").on("click", function () {
        let anchor = $(this);
        $('html,body').animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
    });
    /*End Home*/
    /*Services*/
    $("a[href*='#services']").on("click", function () {
        let anchor = $(this);
        $('html,body').animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
    });
    /*End Services*/

    /*Book*/
    $("a[href*='#book']").on("click", function () {
        let anchor = $(this);
        $('html, body').animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
    });
    /*End Book*/

    /*Contact*/
    $("a[href*='#contact']").on("click", function () {
        let anchor = $(this);
        $('html, body').animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500);
    });
    /*End Contact*/


    /*Validation*/
    //Name
    $("#firstname").focusout(function () {
        if ($(this).val() == '') {
            $(this).css("border-color", "#cd2d00");
            $('#submit').attr('disabled', true);
            $("#error_name").text("* You have to enter your first name!");
        } else {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled', false);
            $("#error_name").text("");

        }
    });
    //End Name

    //Email
    $("#Email").focusout(function () {
        if ($(this).val() == '') {
            $(this).css("border-color", "#cd2d00");
            $('#submit').attr('disabled', true);
            $("#error_name").text("* You have to enter your first name!");
        } else {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled', false);
            $("#error_name").text("");

        }
    });
    function validateEmail(sEmail) {
        var  filter = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
        if (filter.test(sEmail)) {
            return true;
        } else {
            return false;
        }
    }
    $("#email").focusout(function () {
        let sEmail = $('#email').val();
        if ($.trim(sEmail).length === 0) {
            $(this).css("border-color", "#cd2d00");
            $('#submit').attr('disabled', true);
            $("#error_email").text("Please enter valid email address");

            e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled', false);
            $("#error_email").text("");

        } else {
            $(this).css("border-color", "#cd2d00");
            $('#submit').attr('disabled', true);
            $("#error_email").text("Invalid email address");
            e.preventDefault();
        }
    });
    //End Email


    // Message
    $("#message").focusout(function () {
        if ($(this).val() == '') {
            $(this).css("border-color", "#cd2d00");
            $('#submit').attr('disabled', true);
            $("#error_message").text("* You have to enter your message!");
        } else {
            $(this).css("border-color", "#2eb82e");
            $('#submit').attr('disabled', false);
            $("#error_message").text("");

        }
    });
    //End  Message

    /*End Validation*/

});
