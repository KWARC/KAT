LFLAGS = -pdf

all: clean setup
	cd dest && pdflatex paper.tex && bibtex paper && pdflatex paper.tex && pdflatex paper.tex
	cd dest && cp paper.pdf ..

setup:
	mkdir dest
	cp -r *.tex *.bib img parts dest

clean:
	rm -rf dest
	rm -f paper.pdf
