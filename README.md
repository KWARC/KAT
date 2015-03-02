# KWARC Annotation Tool

KWARC Annotation Tool: An Annotation Tool for STEM Documents.

Version 2.0, not yet finished. Documentation is currently being created.

## Documentation

There is auto-generated documentation in the 'doc' subdirectory. [JSDoc](https://github.com/jsdoc3/jsdoc) is used to generate it. You can re-generate it with:
```
rm -rf doc && jsdoc -c jsdoc.json
```

## How to use your own KAnnSpec and documents

1. Place your KAnnSpec into the KAnnSpec/ directory.
2. Place your document into the content/ directory. Make sure it only contains the actual document content (inside the body tag)
3. Edit lines 30 and 33 in js/index.js and change "content/sample1.html" to the path of the document you want to use and change "KAnnSpecs/omdoc-annotations.xml" to the annotation you want to create.
4. Start up a webserver and serve the this directory.
5. Navigate your webbrowser to the URL where you are serving this directory at. 

## Dependencies
* [JOBAD](https://github.com/KWARC/jobad)
  * which depends on [Bootstrap](https://github.com/twbs/bootstrap)
* [jQuery](https://github.com/jquery/jquery)

## Compatibility

The library itself has been tested with latest Chrome and Firefox versions. If you want MathML support, please use Firefox.

## License

KAT is licensed under GPL.

Copyright (c) 2014-15 by the KWARC Group (http://kwarc.info)

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
