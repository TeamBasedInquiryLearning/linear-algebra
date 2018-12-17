all: pdf/rats/rat-*.pdf pdf/slides/slides*pdf pdf/course-notes.pdf \
	pdf/course-slides.pdf pdf/standards.pdf \
	pdf/exercise-library.pdf pdf/sample-exercises.pdf \
	pdf/facilitator-notes.pdf \
	pdf/handouts/handout-*.pdf

slides: pdf/slides/slides-1-E.pdf pdf/slides/slides-2-V.pdf pdf/slides/slides-4-A.pdf \
		pdf/slides/slides-5-M.pdf pdf/slides/slides-6-G.pdf pdf/slides/slides-7-P.pdf

pdf/course-notes.pdf: tex/course-notes.sty tex/tbil-la.sty tex/course-notes.tex \
						tex/modules/*/activities.tex \
						tex/modules/*/activities.tex tex/modules/*/index.tex tex/modules/*/standards.tex
	cd tex; \
	pdflatex --output-directory=aux course-notes.tex; \
	pdflatex --output-directory=aux course-notes.tex; \
	mv aux/course-notes.pdf ../pdf

pdf/course-slides.pdf: tex/course-slides.sty tex/tbil-la.sty tex/course-slides.tex \
						tex/modules/*/activities.tex \
						tex/modules/*/activities.tex tex/modules/*/index.tex tex/modules/*/standards.tex
	cd tex; \
	pdflatex --output-directory=aux course-slides.tex; \
	pdflatex --output-directory=aux course-slides.tex; \
	mv aux/course-slides.pdf ../pdf

pdf/standards.pdf: tex/tbil-la.sty tex/standards.tex tex/modules/*/standards.tex
	cd tex; pdflatex --output-directory=aux standards.tex; \
	mv aux/standards.pdf ../pdf

pdf/exercise-library.pdf: tex/exercise-library.tex tex/modules/*/exercises/*.tex
	cd tex; pdflatex --output-directory=aux exercise-library.tex; \
	mv aux/exercise-library.pdf ../pdf

pdf/facilitator-notes.pdf: tex/facilitator-notes.tex
	cd tex; pdflatex --output-directory=aux facilitator-notes.tex; \
	mv aux/facilitator-notes.pdf ../pdf

#pdf/homework.pdf: tex/tbil-la.sty tex/homework.tex
#	cd tex; pdflatex --output-directory=aux homework.tex; \
#	mv aux/homework.pdf ../pdf

pdf/sample-exercises.pdf: tex/sample-exercises.tex
	cd tex; pdflatex --output-directory=aux sample-exercises.tex; \
	mv aux/sample-exercises.pdf ../pdf


#slides
pdf/slides/slides-1-E.pdf: tex/tbil-la.sty tex/course-slides.sty  \
							tex/modules/1-E/activities.tex \
							tex/modules/1-E/index.tex
	cd tex; \
	pdflatex --output-directory=aux slides/slides-1-E.tex; \
	pdflatex --output-directory=aux slides/slides-1-E.tex; \
	mv aux/slides-1-E.pdf ../pdf/slides

pdf/slides/slides-2-V.pdf: tex/tbil-la.sty tex/course-slides.sty  \
							tex/modules/2-V/activities.tex \
							tex/modules/2-V/index.tex
	cd tex; \
	pdflatex --output-directory=aux slides/slides-2-V.tex; \
	pdflatex --output-directory=aux slides/slides-2-V.tex; \
	mv aux/slides-2-V.pdf ../pdf/slides

pdf/slides/slides-4-A.pdf: tex/tbil-la.sty tex/course-slides.sty  \
							tex/modules/4-A/activities.tex \
							tex/modules/4-A/index.tex
	cd tex; \
	pdflatex --output-directory=aux slides/slides-4-A.tex; \
	pdflatex --output-directory=aux slides/slides-4-A.tex; \
	mv aux/slides-4-A.pdf ../pdf/slides

pdf/slides/slides-5-M.pdf: tex/tbil-la.sty tex/course-slides.sty  \
							tex/modules/5-M/activities.tex \
							tex/modules/5-M/index.tex
	cd tex; \
	pdflatex --output-directory=aux slides/slides-5-M.tex; \
	pdflatex --output-directory=aux slides/slides-5-M.tex; \
	mv aux/slides-5-M.pdf ../pdf/slides

pdf/slides/slides-6-G.pdf: tex/tbil-la.sty tex/course-slides.sty  \
							tex/modules/6-G/activities.tex \
							tex/modules/6-G/index.tex
	cd tex;\
	pdflatex --output-directory=aux slides/slides-6-G.tex; \
	pdflatex --output-directory=aux slides/slides-6-G.tex; \
	mv aux/slides-6-G.pdf ../pdf/slides

pdf/slides/slides-7-P.pdf: tex/tbil-la.sty tex/course-slides.sty  \
							tex/modules/7-P/sections/*.tex \
							tex/modules/7-P/index.tex
	cd tex; \
	pdflatex --output-directory=aux slides/slides-7-P.tex; \
	pdflatex --output-directory=aux slides/slides-7-P.tex; \
	mv aux/slides-7-P.pdf ../pdf/slides




#RATS
pdf/rats/rat-*.pdf: tex/modules/*/readiness/test.tex tex/rats/rat-*.tex
	cd tex; \
	for file in rats/*.tex; do \
		pdflatex --output-directory aux $$file; \
	done;\
	cd aux; \
	for file in rat*.pdf; do \
		mv $$file ../../pdf/rats/$$file; \
	done;

#Handouts
pdf/handouts/handout-*.pdf: tex/handouts/*/handout-*.tex \
							tex/handouts/course-notes-handouts.sty \
							tex/course-notes.sty \
							tex/modules/*/readiness/outcomes.tex \
							tex/modules/*/readiness/resources.tex \
							tex/modules/*/activities.tex
	cd tex; \
	for file in handouts/*/handout*.tex; do \
		pdflatex --output-directory aux $$file; \
	done;\
	cd aux; \
	for file in handout*.pdf; do \
		mv $$file ../../pdf/handouts/$$file; \
	done;
