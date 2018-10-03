## GENERAL ASSEMBLY Project 4: FloatLife - For OneWheelers Everywhere! - Individual project
### [Click here to view FloatLife](https://floatlife.herokuapp.com/login)

### Technology Used During Build
* React Frontend Framework (JavaScript)
* SCSS / CSS
* Github
* Node.js
* HTML 5
* Bulma: v0.7.1
* Moment: v2.22.2
* Satellizer: v0.15.5
* MongoDB
* Bcrypt: v3.0.0
* Bluebird: v3.5.1
* Body-parser: v1.18.3
* Jsonwebtoken: v8.3.0
* Mongoose: v5.2.8
* Morgan: v1.9.0
* Request-promise: v4.2.2
* Sketch App
* Heroku App

### Views
#### Login Page
![Login Page](https://i.imgur.com/Zlrlemx.png)
#### Journeys Index Page / Home
![Index Page](https://i.imgur.com/adNfeHr.png)
#### Journey Show Page
![Journey Show Page](https://i.imgur.com/YPrbQho.png)
#### Find Friends
![Find Friends Page](https://i.imgur.com/Ii9nAXE.png)
#### User Profile Page
![User Profile Page](https://i.imgur.com/dUdPpsk.png)
#### Events Show Page
![Events Show Page](https://i.imgur.com/Dun0I9U.png)

### Process

#### Original Idea / Sketches & Wireframes
In this project we had been tasked to build a fully restful app using React Framework for the front end of the web application. I decided to build a social platform application for Onewheel Riders & eBoarders alike. This would allow users to follow other users, see what journeys they are going on and also attend ride along events. Please see wireframes bellow.

##### Login
<div style="display: flex"><img height="500px" width="30%" alt="Login Wireframe" src="https://i.imgur.com/yDt9kzM.png" />

##### Register
<div style="display: flex"><img height="500px" width="30%" alt="Register Wireframe" src="https://i.imgur.com/d4HzyyY.png" />

##### Journeys Index
<div style="display: flex"><img height="500px" width="30%" alt="Index Wireframe" src="https://i.imgur.com/mOf7i0e.png" />

##### Journey Show
<div style="display: flex"><img height="500px" width="30%" alt="Journey Show Wireframe" src="https://i.imgur.com/MauBc0C.png" />

##### Event Show
<div style="display: flex"><img height="500px" width="30%" alt="Event Show Wireframe" src="https://i.imgur.com/QttvHXF.png" />

##### User Profile
<div style="display: flex"><img height="500px" width="30%" alt="User Profile Wireframe" src="https://i.imgur.com/Ax0te8J.png" />

#### Blockers & Bugs
My biggest blocker was getting an id to add to an array, then to get those journeys associated with that users ID showing up only on the following users index's that were following the user who had added the new journeys.
I was able to overcome this and work around this issue by working with programs such as Insomnia which would help me to see more clearly what was happening on the back end.

#### Wins
Getting the following feature was by biggest win during the project as it was also my biggest uphill battle. Getting this working was a real win in my eyes and have learnt a lot about social media platforms as well as how their inner workings are.

#### Favourite Piece of Code
The piece of code that I am most proud of was giving the users the ability to follow one another on the platform. For me, this made it feel like a real social media platform and was the start of giving interaction between one user and another.
![Following Users Code](https://i.imgur.com/PvKN0qE.png)

### Future Features
#### Tracking
One aspect I would of love to got into this web application would have been a tracking option, that would drop a pin every 10 seconds on a map while you were riding, creating the rider a trackable journey that they could then upload to their followers indexes. I would approach this by using an API to take the users current location every ten seconds in a lat and a long array, then using an API such as Nominatim to help me plot those arrays onto a map. Unfortunately I ran out of time during the build and was unable to add this feature.

#### Attending Events
I had also planned to add an attending function, much like the follow function, but for events being planned by other users that you wished to attend. This would have worked similarly also to the tracking, where once a user clicks attending, their user ID would be added into an array called attending, then allowing other users to click on this attending list to see which other users are attending.
