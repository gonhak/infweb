new FroalaEditor('#editor');


$('#save-btn').click(function() {

    var text = $("#editor").val();

    var blob = new Blob([text], { type: 'text/plain' });

    var a = document.createElement('a');
    a.download = 'course.txt';
    a.href = window.URL.createObjectURL(blob);
    a.click();
});


