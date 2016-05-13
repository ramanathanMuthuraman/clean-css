# clean-css
Analysis of node build tools to remove unused CSS, tools used are
* [uncss] (https://github.com/giakki/uncss)
* [purifycss] (https://github.com/purifycss/purifycss)

These days, almost all projects include CSS frameworks which does speed up the development cycle, but the downside is we include what is not required. The tools specified above are used to cut down them. This reduces complexity the web page load time.

## Installation

Download the repo and navigate to the root folder and install the dependencies

```
npm install

```

## Usage

Run the below grunt task to run the application in the local server

```
gulp

```

## Demo
Click [here] (http://rawgit.com/ramanathanMuthuraman/clean-css/master/index.html?css=uncleaned-css), to view the page with uncleaned CSS 

Click [here] (http://rawgit.com/ramanathanMuthuraman/clean-css/master/index.html?css=uncss-cleaned-css), to view page linked with cleaned CSS from uncss module

Click [here] (http://rawgit.com/ramanathanMuthuraman/clean-css/master/index.html?css=purifycss-cleaned-css), to view page linked with cleaned CSS from purify-css module

## Observations

So why two tools? To put in simple words

* uncss : Discards classes that are not used in **HTML** from the stylesheet
* purifycss : Discards classes that are not used in **HTML** and **JS** from the stylesheet

Uncleaned CSS Size (KB) | PurifyCSS Cleaned CSS Size (KB) | Uncss Cleaned CSS Size (KB) 
------------ | ------------- | --------------
357 | 192 | 22

**Purifycss might not provide a compact CSS file as uncss but does a better job by being more comprehensive**

## License

MIT
