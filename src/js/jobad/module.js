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

 /*
 	KAT JOBAD Module
 	added at the end of the KAT sources
 */
JOBAD.modules.register({
	/* Module Info / Meta Data */
	info:{
		'identifier':	'KAT',  //(Unique) identifier for this module, preferably human readable. 
		'title':	'KAT Module', //Human Readable title of the module. 
		'author':	'Tom Wiesing', //Author
		'description':	'Integration of KAT with JOBAD. ', //A human readable description of the module. 
		'url': 'https://github.com/KWARC/KAT', //website url (if available)
		'dependencies':	[], //Array of module dependencies. If ommited, assumed to have no dependencies. 
		'externals': {
			"css": ["./kat.css"] //external css this module depends on
		}, 
		'hasCleanNamespace': true // Does this module contain only standard functions?
	},
	init: function(JOBADInstance){
		//initalise KAT
		var KAT = new kat.main.KATService(JOBADInstance.element);

		//put it in the localstore
		this.localStore.set("katInstance", KAT); 

		KAT.run(); //Start it
	},
	activate: function(JOBADInstance){
		//Nothing yet
	},
	deactivate: function(JOBADInstance){
		//Nothing yet
	}, 
	contextMenuEntries: function(target, JOBADInstance){
		var KAT = this.localStore.get("katInstance"); 
		
		//Lets see if we can make a selection
		var newAnnot = false; 
		try{
			var selectedIds = KAT._preProcessor.getSelectedIds(); //get selceted ids
			if(typeof selectedIds !== "undefined"){
				//if we have a selection, add a callback function
				newAnnot = function(){
					KAT._preProcessor._AddAnnotationHandler(selectedIds); 
				}
			}
		} catch(e){}

		return [
			["New Annotation", newAnnot], 
			["KAT Control Panel", function(){
				//show the control panel
				KAT.showControlPanel(); 
			}]
		]; 
	}
}); //register the module. 
