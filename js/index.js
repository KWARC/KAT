$(function(){
    $.get("content/sample1.html", function(data){

        //load the content
        var content = $("#content").html(data)
        .annotator();

        //add the right plugins
        content
        .annotator('addPlugin', 'KATOntology')
        .annotator('addPlugin', 'KATStore');
    });
});
