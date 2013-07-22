/**
 * Script to demonstrate the KATService
 * @author <a href="mailto:alex@flanche.net">Alex Dumitru</a>
 */
jQuery(document).ready(function () {
  //nice and simple
  var service = new kat.main.KATService("#text");
  service.run();
})

