# KAT API Documentation


# kat.display

* ```kat.display(annotations, annotationRegistry, conceptRegistry, specialClass)```: Creates and controls the annotation displays.
	* ```annotations = [{idBase, idExtent, content}]```: The array of annotations to be displayed.
	* ```annotationRegistry```: The annotationRegistry to use for the Control Panel. 
	* ```conceptRegistry```: The conceptRegistry to use for the Control Panel. 
	* ```specialClass```: The class to be added to the words having annotations bound.

* ```kat.Display.setAnnotations(annotations)```: Sets the annotations property. 
	* ```annotations```: Value for the property. 
* ```kat.Display.getAnnotations()```: Gets the annotations property. 
* ```kat.Display.setSpecialClass(specialClass)```: Sets the specialClass property. 
	* ```specialClass```: Value for the property. 
* ```kat.Display.getSpecialClass()```: Gets the specialClass property. 
* ```kat.Display.addAnnotation(annotation)```: Adds an annotation to the display.
	* ```annotation``` Annotation to add. 
* ```kat.Display.deleteAnnotation(id)```: Removes an annotation from the display. 
	* ```id``` Id of annotation to remove. 
* ```kat.Display.addSpecialClassToSpans()```: Adds the class to the spans having annotations bound
* ```kat.Display.createTooltipDisplays()```: Creates Tooltip Displays. 
* ```kat.Display.createReferenceArrow(currentAnnotation, annotationId)```: Creates reference arrows between annotations. 
	*	```currentAnnotation``` The current Annotation
	*	```annotationId``` Annotation id
* ```kat.Display.run()```: Encapsulates the behavior of the Display by adding classes to annotated spans and creating display handlers. 
* ```kat.Display.reset()```: Resets the display object.
* ```kat.Display.update()```: Updates the display. 
* ```kat.Display._registerEditAnnotationCallback(bubble)```: registers an edit Annotation Callback. 
	* ```bubble``` jQuery reference to the bubble displaying the current annotation. 
* ```kat.Display._registerCloseAnnotationCallback(bubble)```: registers an close Annotation Callback. 
	* ```bubble``` jQuery reference to the bubble displaying the current annotation. 

# kat.display.ArrowConnector

* ```kat.display.ArrowConnector(arrowBaseElement, arrowHeadElement): Creates an svg arrow that can be used to connect two dom elements, for example a reference field annotation to the referenced item. 
	* ```arrowBaseElement```: Base Element for the arrow. 
	* ```arrowHeadElement```: Head Element for the arrow. 
* ```kat.display.ArrowConnector.render()```: Renders the arrow represented by this class instance. 
* ```kat.display.ArrowConnector.destroy()```: Removes the rendered arrow represented by this class instance. 
* ```kat.display.ArrowConnector._createSVGArrow()```: Creates the SVG object belonging to the arrow. 

# kat.display.ControlPanel

* ```kat.display.ControlPanel(ontologyRegistry, conceptRegistry, annotationRegistry)```: Creates a KAT Control Panel. 
	* ```ontologyRegistry```: The ontologyRegistry to use for the Control Panel. 
	* ```conceptRegistry```: The conceptRegistry to use for the Control Panel. 
	* ```annotationRegistry```: The annotationRegistry to use for the Control Panel. 
* ```kat.display.ControlPanel.show()```: Shows the Control Panel. 
* ```kat.display.ControlPanel._registerSaveHandler()```: Registers the save button handler inside the control panel. 
* ```kat.display.ControlPanel._registerClearRegistryHandler()```: Registers the clear Registry handler inside the control panel. 
* ```kat.display.ControlPanel._registerDeleteAllAnnotationsHandler()```: Registers the delete all Annotations handler inside the KAT control panel. 
* ```kat.display.ControlPanel._registerDeleteHandler()```: Registers the delete Ontology handler inside the KAT control panel. 
* ```kat.display.ControlPanel._registerShowHideAllAnnotations()```: Registers the show / hide all annotations handler inside the KAT control panel. 
* ```kat.display.ControlPanel._registerDisplayAllConnections()```: Registers the display all Connections handler inside the KAT control panel. 