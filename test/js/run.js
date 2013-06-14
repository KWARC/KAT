/**
 * Script to demonstrate the KATService
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */
jQuery(document).ready(function () {
  //nice and simple
  var service = new kat.main.KATService("#text");
  service.run();
})


/**
 * Loader for user-supplied ontologies
 */
jQuery(document).ready(function () {
  $(".annotation-loader a").click(function () {
    $("#annotation-loader-modal").modal("show");
    $("#annotation-loader-save").click(function () {
      var xmlOntology = $("#annotation-loader-container").val();
      var ontoName = $("#name").val();
      kat.annotation.AnnotationTypeRegistry.addType(new kat.annotation.AnnotationType(ontoName, xmlOntology));
      $.pnotify({
        title: 'KAT Message',
        text : 'Annotation Ontology was successfully loaded in the registry.',
        type : 'success'
      });
    })
  })
});
