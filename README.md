# KWARC Annotation Tool

** This is the classic branch. See the master branch for the current version. This branch  is no longer maintained and almost completely undocumented. **

KWARC Annotation Tool: An Annotation Tool for STEM Documents. 

## Installation

* In Makefile, change INSTALLDIR to the desired installation directory (e.g. /srv/http/kat or /var/www/kat). 
* run ```make all install```
* You will find a proof of concept demo at http://localhost/katInstallDir/test.
* In order to add annotations, you need to add an annotation ontology first. You can do that in the KAT Control Panel 
(link in the bottom-right of the page). For starting you can copy the example you find in test/annotations.xml.
* The default storage environment is the browser's local storage. An API to connect to different storage environment
can be found in the classes from the remote/ directory. 

## Manual & Demo

A pdf manual for KAT can be found in [doc/manual/kat.pdf](doc/manual/kat.pdf)


## License

KAT is licensed under GPL. 

	Copyright (c) 2014 by the KWARC Group (http://kwarc.info)

	KAT is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	KAT is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with KAT.  If not, see <http://www.gnu.org/licenses/>
