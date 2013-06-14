/**
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */
$("body").append("<textarea id='annotation-text' rows='5'></textarea><br/><button id='load-annotation'>Load</button>");
$("#load-annotation").on("click", function(){
  var xmlString = $("#annotation-text").val();
  kat.annotation.AnnotationTypeRegistry.addType(new kat.annotation.AnnotationType("Movie Annotation Type", xmlString));
})

