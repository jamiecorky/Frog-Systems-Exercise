Frog Systems Code Exercise

About the challenge
The aim was to use my skills to create a profile card design.
I decided to use ReactJS to build it along with sass for styling which I felt was best to do without the use of a library to showcase my skills.

Frameworks / Libraries used.
ReactJS
fontawesome (for icons)
react-reveal (this allowed me to fade the text in after being toggled)
sass (decided to use sass to show that I understand the structure of scss and that you can reuse code with variables etc..)

Components Overview
App.js
The app component renders the card components, the cards are created dynamically so the app component is a container for all cards.
The background is an SVG that can be altered to suit a dark/light theme toggle or if the company colours changed it would be easy to change also.
Media query added to wrap the cards for mobile viewing, they are flex so shrink a little before they wrap.

Card.js
Each card is created from the map() function using the user.json file as its source for each object.
Within each card the upper container holds the profile image which has a border radius to make it circular (dummy images are backgroundless so you cant see so well).
The lower container contains the name, job title, company displayed in the middle of the card.
The socials have a hover grow animation that changes the logo to the company colour and linked to frog systems page for each social.
The cards have a gradient from bottom to top with a drop shadow to make them stand out 

Collapse.js
This is the more info button. on hover it grows. Because it may not be obvious that it's a button I added a pointer for the cursor and a drop shadow so that it stands out more.
The button onclick changes the does this:
- Extends the size of the button to show a description as requested (I made it an about paragraph).
- Rotates the arrow 180 degrees with a smooth transition to match the height change transition.
- 'More Info' becomes 'Less info', and the opposite when clicked again.
- The text fades down, using react-reveal library.

