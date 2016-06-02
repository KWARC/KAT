# KWARC Annotation Tool

KWARC Annotation Tool: An Annotation Tool for STEM Documents.

KAT 2.0, not yet finished. Documentation is currently being created.

## Development
### Getting started

We use [Grunt](http://gruntjs.com/) for minimising source files and running the demo. To get started, run:

```bash
git clone https://github.com/KWARC/KAT
cd KAT
npm install -g grunt-cli # Might require sudo depending on your system configuration
# Whenever you update you will have to re-run this command.
rm -rf node_modules
# The order is VERY important.
npm install grunt-jsdoc-ng
npm install jsdoc
npm install grunt-jsbeautifier
npm install .
# run either one of the commands below
grunt run # To just start a server
grunt serve # To develop with autoreload enabled.
```

You can then navigate to localhost:3000 and take a look at the demo.

### Developing KAnnSpecs with KAT

Perform the steps described above. To use your own KAnnSpecs you can then:

1. Place your KAnnSpec into the KAnnSpec/ directory.
2. Place your document into the content/ directory. Make sure it only contains the actual document content (inside the body tag)
3. Edit line 3 in js/index.js and change "content/sample1.html" to the path of the document you want to use and change "KAnnSpecs/omdoc-annotations.xml" to the annotation you want to create.
4. Run ```grunt run``` if it is not already running.
5. Navigate to localhost:3000 and see the demo at work.

### Developing KAT itself

The source files are in src/KAT. When your run ```grunt serve``` the will automatically be concatinated and added to the page. The Gruntfile also enables a live reload module which reloads the page automatically when one of the modules is updated. If you add a new file, make sure to add them in Gruntfile.js.

### Documentation

There is auto-generated documentation in the 'doc' subdirectory. [JSDoc](https://github.com/jsdoc3/jsdoc) is used to generate it. You can re-generate by running
```
grunt docs
```
The documentation will also be served by `grunt serve`. You can access it by going to http://localhost:3000/doc.

## Dependencies
* [JOBAD](https://github.com/KWARC/jobad)
  * which depends on [Bootstrap](https://github.com/twbs/bootstrap)
* [jQuery](https://github.com/jquery/jquery)
* [doT](http://olado.github.io/doT/index.html) for templating of \<display> elements. 
* [Raphael](http://raphaeljs.com/) for drawing arrows to annotation references on an SVG
* [Grunt](http://gruntjs.com/) - for the development part.

## Compatibility

The library itself has been tested with latest Chrome and Firefox versions. If you want MathML support, please use Firefox.

## License

KAT is licensed under GPL.

Copyright (c) 2014-16 by the KWARC Group (http://kwarc.info)

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
