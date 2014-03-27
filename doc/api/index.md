# KAT API Documentation

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