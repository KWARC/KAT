
(function init_jquery_spaceSwitcher ($) {

  var pluginName = 'searchSelect';
  var infoName = pluginName;

  var KEYS = {
    ENTER: 13,
    ESC: 27,
    SHIFT: 16,
    CONTROL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINTSCREEN: 44,
    INSERT: 45,
    COMMAND: 91,
    CONTEXT_MENU: 93,
    NUM_LOCK: 144,
    SCROLL_LOCK: 145,
    META: 224,
  };

  // When any of the meta keys are pressed, don't perform search.
  var searchExcludeKeys = Object.keys(KEYS).map(function (name) {
    return KEYS[name];
  });

  // Setup global defaults for the plugin
  $[pluginName] = {
    // All the default options supported are defined here.
    options: {
      // Pass an array of Category objects each containing an array of Element
      //  objects to be used as the selectors.
      data: null,

      // The class to be added to the handler when the menu is open.
      openClass: 'selected',

      // Whether to hide the original target or not.
      hideTarget: true,

      // Which element # to be selected.
      selectedIndex: 0,
    },

    // All the classes being used in the plugin are defined here.
    classes: {
      wrapper: pluginName,
      handle: pluginName + '-handle',
      search: pluginName + '-search',
      listWrapper: pluginName + '-listWrapper',
      element: pluginName + '-element',
      trigger: pluginName + '-trigger',
      selected: pluginName + '-selected',
      highlighted: pluginName + '-highlighted',
      searchable: pluginName + '-searchable',
      addElement: pluginName + '-addElement',
    },

    // All methods that the plugin supports are bellow.
    // Methods are passed as the first argument the jQuery element.
    methods: {
      search: search,
      select: select,
      isOpen: isOpen,
      setValue: setValue,
      hide: hide,
      show: show,
    },
  };

  /**
   * Creates a new searchSelect on the matched elements.
   *
   * @param  {Object} options Optional. Overwrite the default options provided
   *                            in $.spaceSwitcher.options;
   * @param  {Object} classes Optional. Overwrite the default classes provided
   *                            in $.spaceSwitcher.classes;
   * @return {jQuery}
   */
  $.fn[pluginName] = function init_jquery_plugin (options, classes) {
    // If the first argument is a string, treat this as a method name.
    if (typeof options == 'string') {
      if (!(options in $[pluginName].methods)) {
        throw new Error('[$.' + pluginName + '] Unknown method `' + options + '`');
      }
      var args = toArray(arguments);
      return this.each(function () {
        var tmp_args = toArray(args);
        tmp_args[0] = $(this);
        $[pluginName].methods[options].apply(null, tmp_args);
      });
    };

    // Apply the plugin on every selected element.
    return this.each(function init () {
      var $this = $(this);

      // Extend arguments with defaults.
      var opt = $.extend(true, {}, $[pluginName].options, options);
      var cls = $.extend(true, {}, $[pluginName].classes, classes);

      var data = opt.data;

      // Don't apply the plugin if it has already been initialized.
      if ($this.data(infoName)) { return; }

      // If no data is passed, try to auto-generate it.
      if (!data) {
        if (this.tagName.toLowerCase() != 'select') {
          throw new Error('[$.' + pluginName + '] Invalid data object and target element is not a <select> tag');
        }
        data = $this.find('option').get().map(function (elem, index) {
          if (elem.getAttribute('selected') !== null) {
            opt.selectedIndex = index;
          }
          return [elem.getAttribute('value'), elem.innerHTML];
        });
      } else {
        data = data.map(function (option) {
          if (Array.isArray(option)) { return option; }
          return [option, option];
        });
      }

      // input[type="search"] has huge style limitations, so we'll go the classic way.
      var $searchField = jqElement('input').attr({type:'text'});
      var $trigger = jqElement('span').addClass(cls.trigger).addClass('icon-chevron-down');
      var $search = jqElement('span').addClass(cls.search).append($searchField, $trigger);

      var $listWrapper = jqElement('div').addClass(cls.listWrapper);

      var $wrapper = jqElement('span');
      $wrapper.addClass(cls.wrapper).append($search).append($listWrapper);

      // Build options.
      data.forEach(function (option, index) {
        $listWrapper.append(
          jqElement('div').
            data('value', option[0] !== null ? option[0] : option[1]).
            data('index', index).
            addClass(cls.element).
            addClass(cls.searchable).
            html(option[1])
        );
      });

      $wrapper.insertAfter($this);
      opt.hideTarget && $this.hide();

      // Save info.
      $this.
        addClass(cls.handle).
        data(infoName, {
          options: opt,
          classes: cls,
          wrapper: $wrapper,
          searchField: $searchField,
          trigger: $trigger,
          search: $search,
          listWrapper: $listWrapper,
          searchable: $listWrapper.find('.' + cls.searchable),
          addElements: $(),
        });

      // Post Setup.
      addSearchEvents($this);
      addDisplayEvents($this);
      select($this, opt.selectedIndex);
      setValue($this, opt.selectedIndex);
      hide($this, true);
      $searchField[0].focus();
    });

  };

  /**
   * Checks to see if the menu is open/visible.
   * @param  {jQuery}  $elem
   * @return {Boolean}
   */
  function isOpen ($elem) {
    var info = $elem.data(infoName);
    return info.listWrapper.is(':visible');
  }

  /**
   * Display the menu.
   * @param  {jQuery} $elem
   * @param  {Boolean} instant=false Whether to animate or just .show();
   * @return {jQuery}
   */
  function show ($elem, instant) {
    instant = !!instant;

    $elem.trigger('show-before', [instant]);

    var info = $elem.data(infoName);
    if (instant) {
      info.listWrapper.show();
    } else {
      info.listWrapper.fadeIn('fast');
    }
    $elem.addClass(info.options.openClass);
    var offset = $elem.offset();
    info.listWrapper.css({
      position: 'absolute',
      top: info.searchField.outerHeight(),
      left: 0,
    });

    $elem.trigger('show-after', [instant]);

    return $elem;
  }

  /**
   * Hide the menu.
   * @param  {jQuery} $elem
   * @param  {Boolean} instant=false Whether to animate or just .hide();
   * @return {jQuery}
   */
  function hide ($elem, instant) {
    instant = !!instant;

    $elem.trigger('hide-before', [instant]);

    var info = $elem.data(infoName);
    instant ? info.listWrapper.hide() : info.listWrapper.fadeOut('fast');
    $elem.removeClass(info.options.openClass);

    $elem.trigger('hide-after', [instant]);

    return $elem;
  }

  /**
   * Selects an Element name by an index.
   * @param  {jQuery} $elem
   * @param  {Number} index
   * @return {jQuery}
   */
  function select ($elem, index, noScroll) {
    $elem.trigger('select-before', [index]);

    var info = $elem.data(infoName);

    index = wrapAround(index, info.searchable.length);

    var $selected = info.searchable.
                          removeClass(info.classes.selected).
                          eq(index).
                          addClass(info.classes.selected);

    !noScroll && $selected[0].scrollIntoView(false);

    info.selected = index;

    $elem.trigger('select-after', [index]);

    return $elem;
  }

  /**
   * Sets the value of the given element.
   * @param {jQuery} $elem
   * @param {Number} index
   */
  function setValue ($elem, index) {
    $elem.trigger('setValue-before', [index]);

    var info = $elem.data(infoName);

    index = wrapAround(index, info.searchable.length);

    var $target = info.searchable.eq(index);
    $elem.val($target.data('value')).trigger('change');
    info.searchField.val($target.text())[0].focus();
    hide($elem);

    $elem.trigger('setValue-after', [index]);

    return $elem;
  }

  /**
   * Makes sure that a value wraps around a 0 based interval.
   * Used for navigating up/down.
   *
   * @param  {Number} value
   * @param  {Number} interval
   * @return {Number}
   */
  function wrapAround (value, interval) {
    return value < 0 ? interval - 1 : value % interval;
  }

  /**
   * Adds show/hide events
   * @param {jQUery} $elem
   */
  function addDisplayEvents ($elem) {
    var info = $elem.data(infoName);

    info.trigger.on('click.show-options', function on_click (event) {
      show($elem);
      info.searchField[0].focus();
    });

    info.searchField.on('focus.show-options', function on_focus (event) {
      show($elem);
    });

    // Clicking outside of the menu, closes the menu.
    $(document).on('click.closeMenu', function on_close_menu (event) {
      var $target = $(event.target);
      while ($target && $target.length > 0) {
        if ($target.is(info.wrapper) || $target.is($elem)) {
          return;
        }
        $target = $target.parent();
      }
      hide($elem);
    });
  }

  /**
   * Add the search events to the textfield
   * @param {jQuery} $elem
   */
  function addSearchEvents ($elem) {
    var info = $elem.data(infoName);

    // Search events.
    info.searchField.on('keyup.search', function on_search (event) {
      var val = $(this).val();

      // Apparently CMD+delete does not re-trigger show, so just re-check for it.
      if (val.length == 0) {
        search($elem, false);
        return;
      }

      if (searchExcludeKeys.indexOf(event.keyCode) > -1) { return; }

      search($elem, val);
    });

    // Meta events (e.g. UP/DOWN/ENTER/etc).
    info.wrapper.on('keydown.search-actions', function on_search_actions (event) {
      var stopEvent = true;

      switch (event.keyCode) {
        case KEYS.ENTER: setValue($elem, info.selected); break;
        case KEYS.UP:
        case KEYS.DOWN:
          if (!isOpen($elem)) {
            show($elem);
            select($elem, 0);
            return;
          }

          var $visible = info.searchable.filter(':visible');
          // Convert from global to visible index.
          var index = $visible.index(info.searchable.eq(info.selected));
          index = wrapAround(index + (event.keyCode == KEYS.UP ? -1 : 1), $visible.length);

          // Convert from visible to global index.
          select($elem, info.searchable.index($visible.eq(index)), true);

          // Scroll into view the next element in line, if it exists.
          var viz_index = Math.min(index + 1, $visible.length - 1);
          $visible[viz_index].scrollIntoView(false);
          break;
        default:
          stopEvent = false;
      }

      if (stopEvent) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    });

    info.searchable.on('mouseenter', function on_searchable_hover (event) {
      select($elem, $(this).data('index'), true);
    });

    info.searchable.on('click', function on_searchable_click (event) {
      setValue($elem, $(this).data('index'));
    });
  }

  /**
   * Search through the elements for the given string and highlighted the matches.
   * Side-effect: selects the first element in the remaining set.
   *
   * @param  {jQuery} $elem
   * @param  {String} str   If false is passed, the search will only do a cleanup and not the search part.
   * @return {jQuery}
   */
  function search ($elem, str) {
    $elem.trigger('search-before', [str]);

    show($elem);

    var info = $elem.data(infoName);

    // Remove old matches.
    info.searchable.show().find('.' + info.classes.highlighted).each(function () {
      $(this).replaceWith(this.innerHTML);
    });

    if (str === false) { return; }

    str = str.toLowerCase();

    // Highlight new matches.
    info.searchable.each(function highlight_matches () {
      var $this = $(this);
      var text = this.textContent;
      var begin = text.toLowerCase().indexOf(str);

      if (begin === -1) {
        $this.hide();
        return;
      }

      var end = begin + str.length;
      this.innerHTML = text.slice(0, begin) +
                      '<span class="' + info.classes.highlighted + '">' +
                        text.slice(begin, end) +
                      '</span>' +
                      text.slice(end);
    });

    // Select first visible element.
    select($elem, info.searchable.index(info.searchable.filter(':visible').eq(0)));

    $elem.trigger('search-after', [str]);

    return $elem;
  }

  /**
   * Create a new jQuery element of specified type.
   * @param {String} type
   * @return {jQuery}
   */
  function jqElement (type) {
    return $(document.createElement(type));
  }

  /**
   * Either clones an array or converts form arguments to an actual array.
   * Note: No deep-clone
   *
   * @param  {Array|Object} obj
   * @return {Array}
   */
  function toArray (obj) {
    return Array.prototype.slice.call(obj);
  }

})(jQuery);