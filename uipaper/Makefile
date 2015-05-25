LFLAGS = -pdf

all: clean setup
	cd dest && latexmk $(LFLAGS) paper.tex
	cd dest && cp paper.pdf ..

setup:
	mkdir dest
	cp -r *.tex *.bib parts dest

clean:
	rm -rf dest
	rm -f paper.pdf
