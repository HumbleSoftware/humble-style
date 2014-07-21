Humble Style
========

A humble bootstrap theme.

# Development

This is a LESS project using a gulp-based build for development and bower for package management.

Pre-requisites:
1. Install node.js
2. Install bower `npm install -g bower`
3. Install npm packages `npm install` in repo root
4. Install bower packages `bower install` in repo root
5. Start gulp `./node_modules/.bin/gulp`

The default gulp task starts a development server, runs an initial build, and starts a watch task to continuously compile changes.  Once gulp is running, navigate to [http://localhost:8080](http://localhost:8080).

# Layout

* `index.html` the main index and driver.  This should includes examples of any styles we implement in the same flavor as the Bootstrap examples.
* `/build` local development build managed by gulp and ignored in git.
* `/src` LESS source lives here.  Eventually, we'll want assets and maybe JS.
* `/src/main.less` The main less entry point.  Right now the project generates a single output file, and all LESS includes are placed here.  If we have optional CSS modules in the future, we'll have more than one entry point.
* `/vendor` bower packages, included in LESS path.
* `/vendor/bootstrap` the bootstrap dependency.
