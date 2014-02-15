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
 * Describes an annotation registry that keeps track of all the annotations for the current document.
 *
 * @author <a href="mailto:m.dumitru@jacobs-university.de">Alex Dumitru</a>
 * @author <a href="mailto:v.merticariu@jacobs-university.de">Vlad Merticariu</a>
 */

FlancheJs.defineClass("kat.annotation.AnnotationRegistry", {

  /**
   * Constructor for the class
   */
  init: function (storageService, retrievalService) {
    if (storageService) {
      this._storageService = storageService;
    }
    if (retrievalService) {
      this._retrievalService = retrievalService;
    }
    this._loadRegistry();
  },

  methods: {
    /**
     * Add an annotation to the registry. It will be automatically persisted to the selected storage medium.
     * @param annotation the annotation to be saved
     * @param {Boolean} doNotTriggerSave set to true if the insertion should not persist the annotation to the server
     */
    addAnnotation   : function (annotation, doNotTriggerSave) {
      this._registry[annotation.getId()] = annotation;
      if (!doNotTriggerSave) {
        this._saveRegistry();
      }
    },
    /**
     * Deletes an annotation from the registry
     * @param id - the id of the annotation to be deleted
     */
    deleteAnnotation: function (id) {
      delete this._registry[id];
      this._saveRegistry();
    },
    /**
     * Returns a list of the annotations in the system.
     * @return {Array}
     */
    getAnnotations  : function () {
      var annotations = [];
      for (var name in this._registry) {
        annotations.push(this._registry[name]);
      }
      return annotations;
    },

    /**
     * Returns th annotation with the given id.
     * @return Object
     */
    getAnnotation: function (id) {
      var returnedAnnotation = null;
      for (var annotation in this._registry) {
        if (this._registry[annotation]["$id"] == id) {
          returnedAnnotation = this._registry[annotation];
          break;
        }
      }
      return returnedAnnotation;
    },

    /**
     * Returns the list of annotations corresponding to the given concept
     * @param conceptName
     */
    getAnnotationsForConcept: function (conceptName) {
      var returnedAnnotations = new Array();
      for (var annotation in this._registry) {
        if (this._registry[annotation]["$concept"] == conceptName) {
          returnedAnnotations.push(this._registry[annotation]);
        }
      }
      return returnedAnnotations;
    },

    /**
     * Removes all annotations from the registry and from the storage medium.
     */
    clearRegistry: function () {
      this._registry = {};
      this._saveRegistry();
      this.getDisplay().$annotations = [];
      this.getDisplay().reset();
    }
  },

  internals: {
    registry      : {},
    storageService: null,

    /**
     * Persists the registry to the given storage medium.
     */
    saveRegistry: function () {
      var values = {};
      for (var name in this._registry) {
        values[name] = this._registry[name].serialize();
      }
      window.localStorage.setItem(this.KLocalStorageRegistryKey, JSON.stringify(values));
      if (this._storageService) {
        this._storageService.save(this);
      }
    },

    /**
     * Loads the registry from the given storage medium
     */
    loadRegistry: function () {
      if (this._retrievalService) {
        this._retrievalService.loadRegistry(this);
      }
      else if (localStorage.getItem(this.KLocalStorageRegistryKey)) {
        var values = JSON.parse(window.localStorage.getItem(this.KLocalStorageRegistryKey));
        for (var name in values) {
          this._registry[name] = kat.annotation.Annotation.fromSerializedString(values[name]);
        }
      }
      else {
        this._registry = {};
      }
    }

  },

  properties: {
    display: {}
  },

  statics: {
    KLocalStorageRegistryKey: "annotationRegistry"
  }

});
