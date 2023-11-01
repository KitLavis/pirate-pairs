# Pirate Pairs

Pirate Pairs is a fun and simple pirate themed matching pairs memory game, designed to be a quick uncomplicated boredom-buster, to briefly take the user's mind away from whatever it is that they're doing.

![Am I Responsive](docs/images/am-i-responsive.webp)

## Planning

### Project Aims

The first phase of planning for the project was centred around the pin-pointing who the target audience is, the aims of the project, and how these aims will be met:

- Who is the project for?
  - The project is for anybody sat in front of a computer, maybe at work or university.
- The aims of the project:
  - To provide a simple boredom-busting game.
  - To take peoples' minds away from their current task, to allow them to work on the issue subconsciously.
- How will the aims be met?
  - Blocks of text will be kept to a minimum.
  - JavaScript will be used in a way that makes the game as simple and intuitive as possible.

### Design

The keyword kept in mind during the design of the user interface was simplicity, therefore the site itself is kept as tidy and as uncluttered as possible.

Although the project is designed to be played on the device's standard configuration (mobile and tablet devices in portrait, larger devices such as laptops and desktops in landscape), this simplicity allows the game to be played in both monitor configurations on the vast majority of the most common devices without much layout change, and without the need to scroll.

#### Wireframing

![Wireframe of introduction screen](docs/images/intro-screen.webp)
![Wireframe of game screen](docs/images/game-screen.webp)
![Wireframe of iesults screen](docs/images/results-screen.webp)

### Background and Colour Scheme

The over-arching colour scheme is also a matter of simplicity. Due to the varying shades of beige, cream, and brown of the background image, black was chosen as the main colour for text as it provides excellent contrast, great for ease of reading.

The background itself was chosen as the "aged-paper" asthetic gives the game a treasure map feel which is synoymous with pirates.

![Colour scheme generate by coolors.co](docs/images/pirate-pairs-colour-scheme.webp)

### Fonts/Typography

The main font used for everything bar the how-to section is the 'Pirata One' font from [Google Fonts](https://fonts.google.com).

As the how-to section contains dense text, the 'Gill-sans' sans-serif font-family was used for ease of reading.

## Features

### Existing Features

- Introduction screen

![Introduction screen](docs/images/intro-screen-screenshot.webp)

As previously mentioned, the site is designed to be as simple as the theme will allow, so as not to overcrowd the site, and over-stimulate the user. A simple black 'line-drawing' style pirate skull icon was chosen to add imagery to the page and to emphasise the theme, without being too overbaring. The screen is headed by the name of the game in the 'Pirata One' font, which stays as a consistent feature throughout.

  - Username input

![Username input](docs/images/username-input-screenshot.webp)

The username input allows the user to input a name of their choosing to use while playing the game. This is optional, as not everybody will want to do so. The play button, styled to match the general theme, is a clickable button which moves the user on to the game screen.

  - Controls and how-to popup

![Control section](docs/images/controls-screenshot.webp)
![How to popup](docs/images/how-to-screenshot.webp)

The control section is also as simple as possible. The two font awesome icons can be clicked in order to reveal the description of how to play the game and to turn the game sounds on and off respectively. As can be seen in the second screenshot, once clicked the speaker icon changes to a speaker with soundwaves, instantly recognisable as meaning 'sound on'. These features also remain consistent throughout.

- Game screen

![Game Screen](docs/images/game-screen-screenshot.webp)

  - Playing cards

![Gameboard](docs/images/gameboard-screenshot.webp)

Once the user has decided on a username and clicks the play button, the text input and button are hidden and the gameboard is generated in their place. The gameboard itself is a grid of cards, in three rows and four columns, or four rows and three columns if on a mobile device. These cards are face down, and flip once clicked, revealing one of the six possible images. The position of these cards is randomised, so each time the game is played the locations are different. Once two cards have been flipped, if they match the cards are removed from the grid and the pair counter (see below) is updated. If they do not match then the cards are flipped back over and the game carries on. To add to the user experience, a 'page-turn' sound is heard when no match is found and the cards flip back over, and a 'coin purse' sound is heard when a match is found.

The style of the back-face of the cards is a pattern made to look like a classic deck of playing cards, to tie in with the pirate theme. The six front-face icons were chosen for the same reason.

![Pirate icon](assets/images/pirate.webp)
![Coin icon](assets/images/coin.webp)
![helm icon](assets/images/helm.webp)
![Map icon](assets/images/map.webp)
![Skull icon](assets/images/skull.webp)
![Treasure icon](assets/images/treasure.webp)

  - Pair counter

![Pair counter without username](docs/images/your-pairs-screenshot.webp)
![Pair counter with username](docs/images/username-example-screenshot.webp)

The pair counter, situated between the cards and the control section, shows the user how many correct pairs they have found. If the user decided not to enter a username on the introduction pairs, the counter will show 'Your Pairs' plus however many pairs they have found. If, as can be seen in the example shown in the second screenshot, the user decides to enter a name, it will show as '*Username*'s Pairs'.

- Results screen

![Results screen](docs/images/results-screen-screenshot.webp)

Once the user has found all possible pairs, the cards and counter are removed to give way for the results screen.

  - Congratulations message

![Congratulations message](docs/images/congratulations-screenshot.webp)

The congratulations message, paired with a 'victorious-trumpet' sound, lets the user know that they have completed the game.

  - Play again button

![Play again button](docs/images/play-again-screenshot.webp)

The user then has the option to play again by clicking the play again button. This takes the user back to the game screen with regenrated cards in a random order, and the pair counter reset to zero. The username inputted at the start of the game remains the same. To change this, the user must refresh the browser.

### Features for the Future

- Two-player mode

In future a two-player mode could be added, to allow friends/colleagues to play together. The player-one and player-two would take it in turns to try to find a match. Once all the matches are found, the player with the highest number of pairs wins. 24 cards consisting of 12 different icons would be generated for this mode.

- Card-flip animation

A slick card-flip animation could be added in the future to improve user experience.

- Background music with seperate control

In this initial iteration of the project background/theme music was left out due to a lack of suitable music being found. This and a dedicated background music on/off switch could be added in the future.

#### Ease of Future Development

A number of steps were taken in order to allow for further development:
- HTML:
  - Semantic markup is used where applicable.
  - ID and class attributes are clear and relate to the elements' usage.
  - Clear comments describe each aspect of the code.
- CSS:
  - The stylesheet begins with more general rules at the top, then increase with specificity further down.
  - Comments are used to clearly label what the code does and/or affects.
- JavaScript:
  - Informative yet concise comments are used to describe each function.
  - The function names themselves are also clear and describe what the function does.

## Tools and Technologies

- HTML was used for the majority of site content.
- CSS was used for styling, design, and layout.
- Javascript was used to add functionality and interactiveness to the site.
- Git was used for version control.
  - GitHub was used to store the code.
  - GitHub pages waqs used for deployment.
- Codeanywhere was the IDE for the project.
- Balsamiq was used to create the wireframes.
- [Favicon.io](https://favicon.io) was used to generate the favicon.
- [Am I Responsive](https://ui.dev/amiresponsive) was used to generate the main image at the beginning of this document.

## Testing

### Validation

- The HTML was validated with the W3C validator, the result of which can be found [here](https://validator.w3.org/nu/?doc=https%3A%2F%2Fkitlavis.github.io%2Fpirate-pairs%2F).
- The CSS was validated with the W3C CSS validator, the result of which can be found [here](http://jigsaw.w3.org/css-validator/validator?lang=en&profile=css3svg&uri=https%3A%2F%2Fkitlavis.github.io%2Fpirate-pairs%2F&usermedium=all&vextwarning=&warning=1).
- The JavaScript was validated using the JSHint validator. The warning of the unused variable is due to the event listener referencing the function being in the HTML element rather than the JavaScript.
![JSHint Screenshot](docs/images/jshint.webp)
- Finally, a lighthouse test from Google's Developer Tools was carried out.
![Lighthouse Result](docs/images/lighthouse.webp)

### Manual Testing

The project was deployed early and sent to multiple potential users in order to carrry out manual testing. Any design faults or issues found were then solved throughout the building of the project. Examples of these are:
- The pair counter not updating as more matches were found.
- The how-to popup not closing when the help button was clicked.
- The same card being able to be clicked twice and being logged as a pair.
- If the user clicks a third card too quickly before the checkForMatch function is complete, the third card remains face up and is unplayable.

## Deployment

The project was deployed via GitHub Pages. To do this, the following process was followed:

- While in the GitHub repository, click the settings icon in the nav bar.
- Select the Main Branch from the source section drop-down menu and click save.
- Once succesfully deployed, the deployment can be accessed from the Deployment Section in the right-hand column of the code page of the GitHub repository.

A mentioned above, the project was deployed at a relatively early stage in order to carry out manual testing, and to make sure the site works as designed.

## Credits

### Content

| Source | Authour | Content |
| ------ | ------ | ------ |
| [Youtube](https://www.youtube.com/watch?v=tjyDOHzKN0w&t=306s&ab_channel=CodewithAniaKub%C3%B3w) | Ania Kubów | Inspired the generateCards, flipCard, and checkForMatch functions |
| [Youtube](https://www.youtube.com/watch?v=xWdkt6KSirw&t=439s&ab_channel=JavaScriptAcademy) | JavaScript Academy |  Inspired the restart function |
| [GitHub](https://github.com/davidcalikes/Marvelous-Matching) | David Calikes |  Inspired the muteAudio and toggleAudio functions |

### Media

| Source | Content |
| ------ | ------ |
| [Freepik](https://www.freepik.com/free-photo/wooden-floor-background_4100933.htm#query=treasure%20map&position=3&from_view=keyword&track=ais) | Background image |
| [Icons8](https://icons8.com/icons) | Icons for the favicon, the playing cards, and the skull on the intro-screen |
| [Freesounds](https://freesound.org/) | All audio |
| [Coolors](https://coolors.co/) | Colour scheme image |
| [Google Fonts](https://fonts.google.com/) | 'Pirata One' font |
| [Pattern Monster](https://pattern.monster/) | Pattern for the back face of the playing cards |