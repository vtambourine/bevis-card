ENB = node_modules/.bin/enb

all: build

build:
	$(ENB) make

gh-pages:
	cp pages/index/index.{html,css,js} .
	sed -i '' 's/\.\.\/\.\.\///g' index.css