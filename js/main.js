$(document).ready(function() {
    $(".sucess").click(function() {
        $(".alert-success").show();
        $(".alert-info").hide();
        $(".alert-warning").hide();
        $(".alert-danger").hide();
    });
    $(".info").click(function() {
        $(".alert-success").hide();
        $(".alert-info").show();
        $(".alert-warning").hide();
        $(".alert-danger").hide();
    });
    $(".warning").click(function() {
        $(".alert-success").hide();
        $(".alert-info").hide();
        $(".alert-warning").show();
        $(".alert-danger").hide();
    });
    $(".danger").click(function() {
        $(".alert-success").hide();
        $(".alert-info").hide();
        $(".alert-warning").hide();
        $(".alert-danger").show();
    });

    var progress = 0;
    $("#increaseBtn").click(function() {
        if (progress === 100) {
            $("#increaseBtn")[0].disabled = true;
        } else {
            move(progress + 25);
            progress += 25;
            if (progress === 100) {
                $("#increaseBtn")[0].disabled = true;
            }
        }
    });
    $("#completeBtn").click(function() {
        move(100);
        progress = 100;
        $("#increaseBtn")[0].disabled = true;
    });

    $("#resetBtn").click(function() {
        debugger
        var elem = document.getElementById("myBar");
        var width = progress;
        var id = setInterval(frame, 10);

        function frame() {
            if (width <= 0) {
                clearInterval(id);
                //elem.innerHTML = width * 1 + 25 + '%';
            } else {
                width--;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }
        progress = 0;
        $("#increaseBtn")[0].disabled = false;
    });

    function move(val) {
        var elem = document.getElementById("myBar");
        var width = 10;
        var id = setInterval(frame, 10);

        function frame() {
            if (width === val) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width * 1 + '%';
            }
        }
    }
});