jQuery.noConflict();

(function($){

  // on startup, we load KAT and everything up.
  // TODO: Wrap this somewhere else.
  $(function(){
    getKATStarted("content/sample1.html", "KAnnSpecs/omdoc-annotations.xml", getKATStarted);
  });

  function getKATStarted(documentURL, KAnnSpecURL, callback){

    //load the document
    $.get(documentURL, function(documentData){

      //if response is XML it has to be parsed into a string first
      var xmlCheck = documentData.contentType == "text/xml" || undefined;
      if(xmlCheck) {

        documentData = (new XMLSerializer()).serializeToString(documentData);

      }

      //some contants
      var data = $("#content").html(documentData);

      //load the KAnnSpec
      $.get(KAnnSpecURL, function(KannSpecXML){

        //now we can load jobad.
        var myJOBADInstance = new JOBAD(data);

        //and set up KAT
        myJOBADInstance.modules.load('KAT.module', [[KannSpecXML, KAnnSpecURL], documentURL, callback], function(){
          this.Setup();
          var myKAT = this.modules.getLoadedModule("KAT.module");
          console.log("loaded KAT", myKAT);  
        });
      });
    });
  };

})(jQuery);
