#Makefile for kat library
#Adjust the setting for your environment
BINDIR=bin
LIBDIR=lib
SRCDIR=src
SOURCES=$(shell find $(SRCDIR)/js/util -name '*.js') fileseparator\
$(shell find $(SRCDIR)/js/preprocessor -name '*.js') fileseparator\
$(shell find $(SRCDIR)/js/input -name '*.js')        fileseparator\
$(shell find $(SRCDIR)/js/output -name '*.js')       fileseparator\
$(shell find $(SRCDIR)/js/display -name '*.js')      fileseparator\
$(shell find $(SRCDIR)/js/remote -name '*.js')       fileseparator\
$(shell find $(SRCDIR)/js/annotation -name '*.js' | sort )   fileseparator\
$(shell find $(SRCDIR)/js/review -name '*.js')       fileseparator\
$(shell find $(SRCDIR)/js/main -name '*.js')       fileseparator\
$(shell find $(SRCDIR)/js/jobad -name '*.js')
INSTALLDIR=./

init:
	mkdir -p $(BINDIR)
	printf "\n\n\n\n" > fileseparator

libjs: init $(LIBDIR)/FlancheJs/flanchejs.js
	cat $(LIBDIR)/FlancheJs/flanchejs.js fileseparator                     \
	$(LIBDIR)/pNotify/js/pnotify.js fileseparator                      \
	$(LIBDIR)/Tooltipster/js/tooltipster.js fileseparator              \
	$(LIBDIR)/bootbox/bootbox.min.js fileseparator                     \
	$(LIBDIR)/jsplumb/jsplumb.min.js fileseparator                     \
  $(LIBDIR)/raphael/raphael.min.js fileseparator                     \
	$(LIBDIR)/UUID/uuid.js fileseparator                               \
	$(LIBDIR)/SearchSelect/search-select.js                            > $(BINDIR)/kat_lib.js

libcss: init
	cat $(LIBDIR)/Tooltipster/css/tooltipster.css                  \
	$(LIBDIR)/pNotify/css/pnotify.css                              \
	$(LIBDIR)/SearchSelect/search-select.css                       > $(BINDIR)/kat_lib.css

srcjs: init 	$(SRCDIR)/js/util/Util.js
	cat $(SOURCES)                                                     > $(BINDIR)/kat_src.js

srccss: init $(SRCDIR)/css/kat.css
	cat $(SRCDIR)/css/kat.css								fileseparator \
	$(SRCDIR)/js/review/ReviewViewer.css									> $(BINDIR)/kat_src.css

js: init libjs srcjs
	cat $(BINDIR)/kat_lib.js fileseparator $(BINDIR)/kat_src.js        > $(BINDIR)/kat.js

css: init libcss srccss
	cat $(BINDIR)/kat_lib.css fileseparator $(BINDIR)/kat_src.css      > $(BINDIR)/kat.css

all: js css
	@echo -e "\n\n#>The build is complete\n\n"

clean:
	rm -rf $(BINDIR)
	rm fileseparator

install: test bin
	rm -rf $(INSTALLDIR)
	mkdir -p $(INSTALLDIR)
	cp -R test $(INSTALLDIR)/test
	cp -R bin  $(INSTALLDIR)/bin
	chmod -R 777 $(INSTALLDIR)/test/annotations
	@echo -e "\n\n#>Installation complete\n\n"
