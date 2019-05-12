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
        $('.edu-info').show();
        $('.edu-info').css('display', 'inline-block');
        $(".edu-data").show();
        console.log('.edu-data');
        $(".stud-data").hide();



    });
    $(".btnPrevious").click(function() {
        $('.edu-data').hide();
        $('.edu-info').hide();
        $('.stud-data').show();
    });
    $(".btnSubmit").click(function() {
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
        clear();
        return tr;
    });
});

function clear() {
    $("#fname").val(null);
    $("#lname").val(null);
    $("#contact").val(null);
    $("#stream").val(null);
    $("#branch").val(null);
    $("#institute").val(null);
}