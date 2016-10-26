# MEARN Websocket Example

## Requirements

* Npm 3.x
* Node 6.x
* Bower
* Gulp
* Nodemon

## Copyright and license

This software is registered under the MIT license. Copyright(c) 2015 - Ernest Conill

## Installation

* Clone this app then cd into the folder and run:

```sh
npm install
bower install
gulp
nodemon ./server/server.js
```

### NOTES

This is an app created to participate in Imersivo Coding Challenge. 
Has no other purpose, neither will accept contributions and it won't be maintained after the challenge.
However, feel free to use it if it serves as an exampler or prove of concept.

Be aware that it's my first work with Reactjs so I imagine that the code can be improved.
The whole project has not been properly refactored due to time constrains, but anyway it serves the 
purpose and it works as expected.

Its a web app that displays 2 buttons on mobile devices to sort 9 figures that appear on desktops.
It can sort them by color and by shape. The communication is done via websockets with socket.io.
On the shapes site the app counts the times a shape has been hovered and wrapts it all in a statistics 
page. The client part side uses React and the back end Nodejs, Expressjs and Mongodb.

The site runs at http://localhost:7777/ and there is a page that displays statistics at /statistics.

## notes on the approach

As being a proof of work my approach has been to keep things simple. So I've decided not to create a 
greater structure for a future bigger up neither to refactor or optimize the code at maximum.
Basically the main constrain in my case was the time so some implemetations has been straight forward,
like for example the statistics part that has no styling.

There is a couple of things I've done different than requested:
1 - I've choosen to draw the figures instead of loading images, I thought in the begining that was
maybe more interesting. But once I've arrived to the animated resorting as a plus I've realised that
I needed probably the images to be able to use the pluging of react-shuffle or similar. Anyway that 
was a plus and my constrain on time made it more important to carry on with the rest.
Beacause of the drawing approach the link attribute on the database has not been recorded.

2 - Again the time constraint made me take this shortcut, to do directly the project on MongoDB instead 
of starting on an xml file and then pluggin in the database. I've got experience on xml parsers, so no
problem here, but I just felt I could save to time and do directly the last version. I hope you won't 
mind my decision.
