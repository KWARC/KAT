# KWARC Annotation Tool

KWARC Annotation Tool: An Annotation Tool for STEM Documents.

Version 2.0, not yet finished. Documentation is currently being created.

## OntologyModel

The concepts are stored in the following hierachical architecture:

* KAT.model.OntologyStore: A collection of ontologies. All references must remain within the OntologyStore.
* KAT.model.Ontology: A single ontology, containing several collections.
* KAT.model.Concept: A single concept within an ontology
* KAT.mode.Field: A filed within a concept.

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
