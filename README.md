kat
===

Yet Another Annotation Tool

Deployment
==========

* In Makefile.in, change INSTALLDIR to the desired installation directory (e.g. /srv/http/kat or /var/www/kat).
* Rename Makefile.in into Makefile. Run make, then make install. 
* You will find a proof of concept demo at http://localhost/katInstallDir/test.
* In order to add annotations, you need to add an annotation ontology first. You can do that in the KAT Control Panel 
(link in the bottom-right of the page). For starting you can copy the example you find in test/annotations.xml.
* The default storage environment is the browser's local storage. An API to connect to different storage environment
can be found in the classes from the remote/ directory. 
