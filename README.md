# [Formula One - Success After V10](https://adrianhavengabennett.github.io/f1-data-dashboard/)

### Welcome to my F1 data dashboard!

Calling all F1 fans! 
This dashboard was put together for The Code Institute as my second milestone project (Interactive FrontEnd Development Milestone Project), which focuses on interactivity with Javascript and jQuery, as well as HTML5, CSS, and Bootstrap 4. Enjoy!

# UX

## User Stories
- As a user of this data dashboard, I would like to see how the different Formula One teams have got on since the departure of the V10 engines.
- As a user of this data dashboard, it would be convenient to have a clear and easily digestable overview of each team's share in overall wins, pole positions, and fastest laps, as well as for any given season.
- As a user of this data dashboard, I would like to be able to select a particular season in order to see how the different teams have scored season by season.
- As a user of this data dashboard, I would like to see a reset button in order to quickly reset the infomation, knowing everything has indeed reset and I haven't left something filtered.
- As a user of this data dashboard, I would like an overview of all the different race locations so that I could perhaps plan a visit to one of the circuits.
- As a user of this data dashboard, I would like to know which driver won a particular season, and also when it was a mathematical certainty.
- As a user of this data dashboard, I would like an overview of who achieved the fastest average speed in qualifying, and in the race, for the entire season.
- As a user of this data dashboard, I would like to know which drivers achieved the most trifectas (pole position + fastest lap + win) throughout a particular season.

## Wireframe
I used https://www.uxpin.com/ to help me with my wireframe.

### Desktop & ipad Pro
![Desktop & ipad Pro](https://adrianhavengabennett.github.io/f1-data-dashboard/images/wireframe/Desktop_ipad(pro)wireframe_1.JPG)
![Desktop & ipad Pro](https://adrianhavengabennett.github.io/f1-data-dashboard/images/wireframe/Desktop_ipad(pro)wireframe_2.JPG)

### Mobile
![Mobile & ipad](https://adrianhavengabennett.github.io/f1-data-dashboard/images/wireframe/Mobile_ipad_wireframe_1.JPG) 
![Mobile & ipad](https://adrianhavengabennett.github.io/f1-data-dashboard/images/wireframe/Mobile_ipad_wireframe_2.JPG)
![Mobile & ipad](https://adrianhavengabennett.github.io/f1-data-dashboard/images/wireframe/Mobile_ipad_wireframe_3.JPG)


## Features

### - Existing features
- A map, showing all the race locations since 2006, with each location clickable to reveal some tooltip infomation.
- Easily distinguishable buttons to jump from season to season and back to the initial home page.
- A reset button on the bar charts to ensure you're always able to return to the initial information.
- Clicking "Formula One" in page heading will reload the entire dashboard.
- The layout of the dashboard will change depending on whether you're viewing all seasons' information or specific season information.
- The race locations, within the map, are clickable and reveal tooltip information.
- The charts are responsive with one another through the help of Crossfilter.
- The dashboard is developed with responsive design in mind and will change depending on screen size.
- On mobiles and iPads (not iPad Pro), the navigation bar can be toggled on and off.
- Clicking the question marks reveal a tooltip and change to an exit icon, which, when clicked, removes the tooltip and changes back to a question mark.

### - Features left to implement

There are currently no features left to implement as the project is completed to the expectation of what it was designed for (student project).

## Technologies Used

Technologies used in this project:

## HTML5:
- https://en.wikipedia.org/wiki/HTML

## CSS3:
- https://en.wikipedia.org/wiki/Cascading_Style_Sheets

## Bootstrap 4:
- https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)

## Javascript:
- https://en.wikipedia.org/wiki/JavaScript

## jQuery
- https://en.wikipedia.org/wiki/JQuery

## d3.js
- https://en.wikipedia.org/wiki/D3.js

## dc.js
- https://dc-js.github.io/dc.js/

## crossfilter
- https://square.github.io/crossfilter/

## queue
- http://bl.ocks.org/mapsam/6090056

## Testing

### User Testing
The following test cases have been performed to test funtionality:
- Using the buttons to navigate through the seasons | Expected behaviour = the different data loads and the layout changes | Pass
- Clicking "Formula One" in page heading | Expected behaviour = page will reload | Pass
- Changing viewport to landscape and/or changing the screen resolution | Expected behaviour = content fills the landscape view and charts respond according to responsive design | Pass
- Clicking question marks | Expected behaviour = reveal a tooltip and change to an exit icon, which, when clicked, removes the tooltip and changes back to a question mark | Pass
- Hovering over the buttons | Expected behaviour = buttons tilt slightly and change color | Pass
- Clicking sections of charts connected via Crossfilter | Expected behaviour = charts filter together accordingly | Pass
- Clicking any specific season button | Expected behaviour = flags change to respective driver champion and country trophy sealed at | Pass
- HTML validated via https://validator.w3.org/ - Pass
- CSS validated via https://jigsaw.w3.org/css-validator/ - Pass

## Deployment
For this project, I have used Github Pages to deploy and host the application.

Below are the steps I have taken to achieve this:

1. Navigate to "settings";
2. Scroll down to "GitHub Pages" section (see image below);
3. Selected "master branch" and deployed.

![Deployment](https://adrianhavengabennett.github.io/f1-data-dashboard/images/deployment/Github_pages_deployment.JPG)

### Github Pages Link
- https://adrianhavengabennett.github.io/f1-data-dashboard/ 

## Credits
Special thanks goes out to https://stackoverflow.com/users/676195/gordon for clarifying dc.js/event listener issue.
Credit to https://stackoverflow.com/users/195594/ken-redler for explaining how delay() works with css properties.

All flag icons courtesy of https://github.com/lipis/flag-icon-css

I used the book "Javascript & JQuery - Interactive Front-End Web Development" by Jon Duckett as a go-to reference if what I was looking for wasn't clear in the modules, 
on StackOverflow, and/or other websites.

I drew inspiration from my love of the sport.

Copyright 2019 - Adrian Havenga-Bennett
