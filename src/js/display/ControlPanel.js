/*
 * This file is part of KAT, the KWARC Annotation Tool, 
 * see https://github.com/KWARC/KAT
 * 
 * Copyright (c) 2014 by the KWARC Group (http://kwarc.info)
 * 
 * KAT is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * KAT is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with KAT.  If not, see <http://www.gnu.org/licenses/>
 */

/**
 * Creates a KAT Control Panel. 
 * @method ControlPanel
 * @param {} ontologyRegistry ontologyRegistry to use
 * @param {} conceptRegistry conceptRegistry to use
 * @param {} annotationRegistry annotationRegistry to use. 
 * @return 
 */
kat.display.ControlPanel = function(ontologyRegistry, conceptRegistry, annotationRegistry) {
    //Setup parameters  
    this._ontologyRegistry = ontologyRegistry;
    this._conceptRegistry = conceptRegistry;
    this._annotationRegistry = annotationRegistry;

    //Statics
    this.viewOntologiesTemplate = '<div id="annotation-viewer-modal" class="modal hide fade"><div class="modal-header"><button id="close-cpanel" type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><i id="hide-all-annotations" title="Hide all annotations" class="icon-eye-close pull-right"></i> <i title="Show all annotations" id="show-all-annotations" class="icon-eye-open pull-right"></i> <i title="Show all reference connections" id="show-all-connections" class="icon-refresh pull-right"></i><h3>' + kat.Constants.Display.CPanelTitle + '</h3></div>  <div class="modal-body"> <ul class="nav nav-tabs" id="annotation-tabs">{annotationTabs}</ul> <div id="annotation-viewer-contents"></div>  </div>  <div class="modal-footer">    <a href="#" data-dismiss="modal" data-dismiss="modal" class="btn">Close</a> <a href="#" data-dismiss="modal" id="annotation-registry-clear" class="pull-left btn btn-danger">Clear Registry</a><a href="#" data-dismiss="modal" id="annotations-clear" class="pull-left btn btn-danger">Clear All Annotations</a>    <a href="#" data-dismiss="modal" id="annotation-loader-save" class="btn btn-primary">Save changes</a>  </div></div>';
    this.ontologyHtmlForm = '<input id="annotation-type-name" type="text" value="{annotationName}" placeholder="Annotation Name"/>{delete-annotation} <textarea id="annotation-type-contents" style="width: 90%" rows="14">{annotationText}</textarea>'; 
    this.ontologyViewerLink = '<div id="annotation-viewer-link">      <a href="#">' + kat.Constants.Display.CPanelTitle + '</a></div>'; 

}; 

/**
 * Shows the Control Panel. 
 * @method show
 * @return 
 */
kat.display.ControlPanel.prototype.show =  function () {
  //self reference
  var self = this;

  //get the current list of ontologies
  var ontologies = this._ontologyRegistry.getAllOntologies();
 
  //make a list of all the ontologies
  var ontologyList = _.map(ontologies, function (ontology) {
    return "<li class='ontology-type-view'><a href='#'>" + ontology.getName() + "</a>" + "</li>";
  });
  
  //add the new ontology link
  ontologyList.push("<li class='active ontology-type-view'><a class='new-ontology' href='#'>New Ontology</a></li>")
      
  //create the html
  var ontologyHtml = this.viewOntologiesTemplate.replace("{annotationTabs}", ontologyList.join("\n"));

  //remove any previous viewers just to be sure
  $("#annotation-viewer-modal").remove();

  //and append it to the body
  $("body").append(ontologyHtml);

  //regiester click handlers
  $(".ontology-type-view a").on('click', function (event) {
    event.preventDefault();
    
    //set up css classes
    var $this = $(this);
    $("li.ontology-type-view").removeClass("active");
    $this.parent().addClass("active");

    //create a new ontology
    var ontology = null;

    //can we delete this ontology?
    var deleteOntology = "";
    if ($this.hasClass("new-ontology")) {
      ontology = new kat.annotation.Ontology("", "");
    } else {
      ontology = self._ontologyRegistry.lookupOntology($this.text());
      deleteOntology = '<span class="pull-right"><button id = "delete-' + ontology.getName() + '" class="btn btn-danger delete-ontology" data-dismiss="modal" type="button">Delete this annotation ontology</button><label class="checkbox"><input type="checkbox" name="delete-ontology">all annotations of this type too</label></span>';
    }

    //reset the html
    var formHtml = self.ontologyHtmlForm.replace("{annotationName}", ontology.getName())
    .replace("{annotationText}", ontology.getDefinition())
    .replace("{delete-annotation}", deleteOntology);

    $("#annotation-viewer-contents").html(formHtml);

    //register the handlers again
    self._registerSaveHandler();
    self._registerDeleteHandler();
  }); 

  //show the window
  $("#annotation-viewer-modal").modal("show");

  //register all the handlers
  self._registerClearRegistryHandler();
  self._registerDeleteAllAnnotationsHandler();
  self._registerShowHideAllAnnotations();
  self._registerDisplayAllConnections();

  //initialise the active one
  $(".active.ontology-type-view a").click();
}; 

/*
  Registers the save button handler inside the control panel. 
*/
kat.display.ControlPanel.prototype._registerSaveHandler = function () {
  var self = this;

  $("#annotation-loader-save")
  .off('click.kat')
  .on('click.kat', function () {

    //Get paramters for the ontology
    var name = $("#annotation-type-name").val();
    var ontologyXmlString = $("#annotation-type-contents").val()

    //create the new ontology
    var ontology = new kat.annotation.Ontology(name, ontologyXmlString.trim());


    //remove the old ontology from the registry
    self._ontologyRegistry.removeOntology(name);

    //remove all the concepts
    var concepts = self._conceptRegistry.getAllConcepts();
    for (var i = 0; i < concepts.length; i++) {
      if (concepts[i].getOntology() == name) {
        self._conceptRegistry.removeConcept(concepts[i].getName());
      }
    }

    //add the new ontology
    self._ontologyRegistry.addOntology(ontology);
    
    //add the new concepts
    var conceptsText = "The following concepts have been added:<br/>";
    var newConcepts = ontology.getDefinition().getXmlDoc().getElementsByTagName("concept");
    for (var i = 0; i < newConcepts.length; i++) {
      var conceptName = newConcepts[i].getAttribute("name");
      conceptsText += '<i class="icon-arrow-right"></i> <b>' + name + "." + conceptName + "</b><br/>";
      self._conceptRegistry.addConcept(new kat.annotation.Concept(name + "." + conceptName, newConcepts[i], name));
    }

    //TODO: Somehow change notification styles
    $.pnotify({
      title: 'KAT Message',
      text : 'The annotation ontology <b>' + ontology.getName() + '</b> was successfully saved.<br/>' + conceptsText,
      type : 'success'
    });

  }); 
}; 

/*
  Registers the clear Registry handler inside the control panel. 
*/
kat.display.ControlPanel.prototype._registerClearRegistryHandler = function () {
  var self = this;

  $("#annotation-registry-clear")
  .off('click.kat')
  .on('click.kat', function () {

    //confirm and the clear the registry
    bootbox.confirm("Clearing the registry is irreversible. Do you want to continue?", function (e) {
      if (e) {

        //Clear the registries
        self._ontologyRegistry.clearRegistry();
        self._conceptRegistry.clearRegistry();

        //TODO: Somehow change notification styles
        $.pnotify({
          title: 'KAT Message',
          text : 'The annotation ontology registry was successfully cleared.',
          type : 'success'
        });

      }
    });
  })
};

/*
  Registers the delete all Annotations handler inside the KAT control panel. 
*/
kat.display.ControlPanel.prototype._registerDeleteAllAnnotationsHandler = function () {
  var self = this;
  
  $("#annotations-clear")
  .off('click.kat')
  .on('click.kat', function () {

    //confirm and the clear the registry
    bootbox.confirm("All annotation, of all types, will be deleted. This action is irreversible. Do you want to continue?", function (e) {
      if (e) {

        //Clear the annotations
        self._annotationRegistry.clearRegistry();

        //TODO: Somehow change notification styles
        $.pnotify({
          title: 'KAT Message',
          text : 'The annotation registry was successfully cleared.',
          type : 'success'
        });
      }
    });
  })
}; 

/*
  Registers the delete Ontology handler inside the KAT control panel. 
*/
kat.display.ControlPanel.prototype._registerDeleteHandler = function () {
  var self = this;
  
  $('.delete-ontology')
  .off('click.kat')
  .on('click.kat', function () {
    var id = $(that).attr('id').split("delete-"); //store my id
    
    //Confirm and delete the ontologies
    bootbox.confirm("Removing ontologies is irreversible. Do you want to continue?", function (e) {
      if (e) {
        //get the name of the ontology
        var ontologyName = id[1];

        //remove ontology
        self._ontologyRegistry.removeOntology(ontologyName);
            
        //remove all concepts
        for (var i = 0; i < self._conceptRegistry.getAllConcepts().length; i++) {
          if (self._conceptRegistry.getAllConcepts()[i].getOntology() == ontologyName) {
            self._conceptRegistry.removeConcept(self._conceptRegistry.getAllConcepts()[i].getName());
          }
        }

        var deleteAnnotations = "";

        //if delete-annotations is checked, delete annotations
        if ($('input[name="delete-ontology"]').is(":checked")) {
          var countAnnotations = 0;
          for (var i = 0; i < self._annotationRegistry.getAnnotations().length; i++) {
            if (self._annotationRegistry.getAllAnnotations()[i].getOntology() == ontologyName) {
              countAnnotations++;
              self._annotationRegistry.removeConcept(self._annotationRegistry.getAllAnnotations()[i].getName());
            }
          }
          deleteAnnotations = "</br>" + countAnnotations + " annotations of were deleted as well.";
        }

        //TODO: Somehow change notification styles
        $.pnotify({
          title: 'KAT Message',
          text : 'The ontology <b>' + ontologyName + '</b> was successfully deleted.' + deleteAnnotations,
          type : 'success'
        });

      }
    }); 
  });
}; 

/*
  Registers the show / hide all annotations handler inside the KAT control panel. 
*/
kat.display.ControlPanel.prototype._registerShowHideAllAnnotations = function () {
  
  $("#show-all-annotations")
  .off("click.kat")
  .on("click.kat", function () {

    //Show all popovers
    $("." + kat.Constants.Display.SpecialClass).popover("show");
    
    //TODO: Somehow change notification styles
    $.pnotify({
      title: 'KAT Message',
      text : 'All annotations shown.',
      type : 'success'
    });

    //Close the Control Panel
    $("#close-cpanel").click();
  });
  
  $("#hide-all-annotations")
  .off("click.kat")
  .on("click.kat", function () {

    //Hide all popovers
    $("." + kat.Constants.Display.SpecialClass).popover("hide");

    //TODO: Somehow change notification styles
    $.pnotify({
      title: 'KAT Message',
      text : 'All annotations hidden.',
      type : 'success'
    });

    //Close the Control Panel
    $("#close-cpanel").click();
  });

};

/*
  Registers the display all Connections handler inside the KAT control panel. 
*/
kat.display.ControlPanel.prototype._registerDisplayAllConnections = function () {
  var self = this;

  $("#show-all-connections")
  .click(function () {

    //Show them only if they are not yet displayed
    if (!self._arrowsDisplayed) {

      self._arrowsDisplayed = true;

      //get the annotations
      var annotations = self._annotationRegistry.getAnnotations();
      for (var i = 0; i < annotations.length; i++) {
        var currentAnnotation = annotations[i];

        //Check if we have some arrow data
        if (currentAnnotation.getExtraData().referenceId) {

          //find and render the arrow
          var referencedAnnotation = self._annotationRegistry.getAnnotation(currentAnnotation.getExtraData().referenceId);
          var arrowConnector = new kat.display.ArrowConnector(jQuery("#" + currentAnnotation.getIdBase()), jQuery("#" + referencedAnnotation.getIdBase()));
          self._arrowConnectors.push(arrowConnector);
          arrowConnector.render();
        
        }
      }

      //TODO: Somehow change notification styles
      $.pnotify({
        title: 'KAT Message',
        text : 'All connections shown.',
        type : 'success'
      });

      //Close the Control Panel
      $("#close-cpanel").click();
    } else {

      //unrender all the arrow connectors
      for (var i = 0; i < self._arrowConnectors.length; i++) {
        self._arrowConnectors[i].destroy();
      }

      //empty the ones in the cache
      self._arrowConnectors = [];
      self._arrowsDisplayed = false;

      //TODO: Somehow change notification styles
      $.pnotify({
        title: 'KAT Message',
        text : 'All connections hidden.',
        type : 'success'
      });

      //Close the control panel
      $("#close-cpanel").click();
    }
  });
}; 