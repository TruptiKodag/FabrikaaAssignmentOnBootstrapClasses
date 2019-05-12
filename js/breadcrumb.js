$(document).ready(function() {
    $(".stud-info").click(function() {
        $(".stud-data").show();
        $(".edu-data").hide();
    });

    $(".edu-info").click(function() {
        $(".edu-data").show();
        $(".stud-data").hide();
    });


    $(".btnnext").click(function() {
        $(".edu-data").show();
        console.log('.edu-data');
        $(".stud-data").hide();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var contact = $("#contact").val();


    });
    $(".btnPrevious").click(function() {
        $('.edu-data').hide();
        $('.stud-data').show();
    });
    $(".btnSubmit").click(function() {
        var stream = $("#stream").val();
        var branch = $("#branch").val();
        var institute = $("#institute").val();

        $(".edu-data").hide();
        $(".stud-data").show();

        $(".table1").show();
        var tbody = document.getElementById("tbody");
        var tr = document.createElement('tr');
        var fname = document.createElement('td');
        var lname = document.createElement('td');
        var contact = document.createElement('td');
        var stream = document.createElement('td');
        var branch = document.createElement('td');
        var institute = document.createElement('td');

        fname.innerHTML = $("#fname").val();
        lname.innerHTML = $("#lname").val();
        contact.innerHTML = $("#contact").val();
        stream.innerHTML = $("#stream").val();;
        branch.innerHTML = $("#branch").val();
        institute.innerHTML = $("#institute").val();
        tr.appendChild(fname);
        tr.appendChild(lname);
        tr.appendChild(contact);
        tr.appendChild(stream);
        tr.appendChild(branch);
        tr.appendChild(institute);
        tbody.appendChild(tr);
        $("#fname").val(null);
        $("#lname").val(null);
        $("#contact").val(null);
        $("#stream").val(null);
        $("#branch").val(null);
        $("#institute").val(null);
        return tr;
    });
});