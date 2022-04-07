# Frog Systems Code Exercise

## About the challenge

The aim was to use my skills to create a profile card design.

I decided to use ReactJS to build it along with sass for styling. I felt that this was best to do so without the use of a library like bootstrap to show that I can work with react, and showcase my css skills.
Although I was asked to design one card, because I was using dynamic data from JSON, I felt that it would be more realistic to design the card to be a reusable component. This meant that I could style the cards to ensure they would fit in their parent container and also to add media queries for mobile devices to ensure they fit properly if more were added.

## Frameworks / Libraries used

* reactJS
* fontawesome 6 (for icons)
* react-reveal (this allowed me to fade the text in after being toggled)
* sass (decided to use sass to show that I understand the structure of scss and that you can reuse code with variables etc..)

## Setup
To start the project I installed the react package with 'npx create-react-app frog-systems-exercise'.
After that I installed the other frameworks/libraries mentioned above using NPM.

## Components

### App.js

The app component renders the card components, the cards are created dynamically so the app component is a container for all cards.
The background is an SVG that can be altered to suit a dark/light theme toggle or for example, if the company colours changed, it would be easy to change the background colours also.
Media query added to wrap the cards for mobile viewing, they are flex so shrink a little before they wrap.

### Card.js

Each card is created from the map() function using the user.json file as its source for each object.
Within each card the upper container holds the profile image which has a border radius to make it circular (dummy images have a transparent background so it's not so obvious).
The lower container contains the name, job title, company displayed in the middle of the card.
The socials have a hover grow animation that changes the logo to each socials own company colour and linked to frog systems page for each social (if a user had different data in JSON they would be linked to their own profiles).
The cards have a gradient from bottom to top with a drop shadow to make them stand out.

### Collapse.js

This is the more info button. on hover it grows. Because it may not be obvious that it's a button I added a pointer for the cursor and a drop shadow so that it stands out more.

#### The button onclick changes

* Extends the size of the button to show a description as requested (I made it an about paragraph)
* Rotates the arrow 180 degrees with a smooth transition to match the height change transition.
* 'More Info' becomes 'Less info', and the opposite when clicked again
* The text fades down, using react-reveal library

The description, phone, and email data were pulled from the user.json file.
