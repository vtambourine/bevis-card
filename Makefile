all: build

build:
	@npm install
	enb make

gh-pages: build
	cp pages/index/index.{html,css,js} .
	sed -i '' 's/\.\.\/\.\.\///g' index.css
