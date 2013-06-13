/**
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */
$("body").append("<textarea id='annotation-text' rows='5'></textarea><br/><button id='load-annotation'>Load</button>");
$("#load-annotation").on("click", function(){
  var xmlString = $("#annotation-text").val();
  window.service = new kat.KATService(xmlString);
  service.run();
  //console.log(service)
})

