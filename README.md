# PWS Jasmine Problem Set #1

At Pivotal, rather than predict a time when a feature will be completed, work is estimated using "points". [1]  This work is broken up into iterations of 1 week. By taking the average of the points each team completes in the last 3 iterations, Pivotal can calculate a metric called "velocity", which helps predict the number of points a team might complete in any given week.

In this problem set, you'll be calculating velocity from a set of iteration models.

Open the "specs.html" file in a browser to begin.

You can find Jasmine documentation [here](http://jasmine.github.io/2.0/introduction.html). 

You can push these files to PWS easily, with `cf push YOUR_APP_NAME -m 64M --random-route`.

You can sign up for a free trial PWS account at http://run.pivotal.io/

Hints:

* Get the iteration spec passing first, then attack the project spec.
* Remember, we only want to look at the last three iterations if there are more than 3!

[1] Why? [This article gives a good overview](http://blog.crisp.se/2014/04/23/perlundholm/time-vs-story-points-estimation).
