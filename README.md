# React App: The Unofficial Rupedia

ยกHola mundo!

I'm a  huge fan of RuPaul's Drag Race so, when I was asked to develop a  React  App with any Api, I went straight to the [No Key No Shade API](https://drag-race-api.readme.io/docs) and started to work. ๐ 

The APP allows you to see and search every single queen that has been part of RuPaul's Drag Race until season 11. User can search for an specific queen, add as much queens as it wants to a favorite list โญ and, if a queen is clicked, user's gonna be able to read the most famous quote ๐ฌ the queen said during the show. 

Also for the dark mode lovers ๐ I added, as requested, a theme toggle that takes you from PinkLand to PurpleZone ๐

<img src="https://user-images.githubusercontent.com/81619759/129209019-f7ab7bd2-c999-478d-bde3-f1099eb012e8.png" alt="home view" width="400"/><img src="https://user-images.githubusercontent.com/81619759/129210918-22aea7b6-884d-4d95-9058-7fe76cccd1f7.png" alt="favorite darkmode" width="400"/> 

๐  [Rupedia website](https://rupedia.netlify.app/#/)

## Some Requirements ๐

- Create a react app
- API call must be made with Node
- Add a search bar
- Filter and arrange the list
- Add a favorite list
- Add a theme switch
- Add unitary test
- Must be indexable
- Responsive

## Extra features ๐

- Add a local storage that keeps API information and favorite list
- Add a scroll up button to navigate to the top of  the screen
- Gives an answer when search input does not exist 
- Gives an answer when page does not exist 
- Add an element for when there are no favorite queens

## Built with ๐จ
- Visual Code Studio: as code editor
- SASS
- React
- Node

## Development โจ๏ธ

As I do in all my projects I started doing a simple kanban board to organize all the tasks and also a manual wireframe๐๏ธ to have a general idea of  how I wanted the app to look like. As I'm no designer I helped myself with some online tools  like [color-hex](https://www.color-hex.com/) to define my palettes so this way I could focus on the code. 

After doing that, the coding was pretty smooth because I had some idea of how to approach everything. First of all I created my react-app and installed SASS because I find that SASS along with BEM methodology helps me to have a cleaner CSS code because of the nesting. 

With SASS up, it was component time. I tried my best to separate all my components in a way that they do one thing, they can be repurposed and also to be easy to understand๐๏ธ.

When developing my components I avoided to repeat code, for so I created some objects to render beyond the API, for example the menu items 

<img src="https://user-images.githubusercontent.com/81619759/129214176-eae6e81f-d705-4a3b-b963-3b1c13683b27.png" alt="code to render menu" width="600"/> 


### My favs ๐

There are a couple things I did in the development that I'm really proud of because I learned a lot doing them and I really think make the diference.

๐ผ**Go top button**๐ผ


This component is one of my personal library. As I was doing my portfolio and while scrolling in a WhatsApp conversation I noticed the arrow button that allows you to go down in the conversation and I thought that was brillian so I coded a "Go top" ๐ component that I now like to use in my apps when necessary. 

I think this functionality makes the diference for the user and is a little detail that makes the app looks polished. 

This funcion needs the useRef() hook, and some other extra functions, one to handle the position so the button is only visible at certain scrolling point, the handler for the button and at last a scroll listener. ๐ฑ๏ธ

๐**Theme toggle**๐

This is a first time. Until now, I've never done a theme switch so I was pretty excited about this.

My approach to it was to do a random element (I literally did  a `<p>DarkMode</p>`) to work with as functionality is initially more  important. For functionality I created to states, one for the mode and another for the `body` both of them with boolean values.

The handler for the button does 3 things: 
โ๏ธ Changes the mode state
โ๏ธ Changes the body state
โ๏ธ Calls a setBackground function

The setBackground function changes the body of the App according to the body state, this way, all the background of my app goes dark. Other styles aree managed via a simple const called "isDark" `
  const isDark = mode === false;` that is sended via props to other components,  that way if isDark, the classes change, whereas colours also change๐ `className={props.isDark ? "apiList__card--content-name" : "apiListD__card--content-name" }`
  
 When everything worked smoothly I coded the button.

<img src="https://user-images.githubusercontent.com/81619759/129216639-26545870-f242-4699-b572-3c58acb98723.gif" alt="gif that shows theme toggle" width="600"/> 

### My challenges ๐ฉ

As a junior there are a lot of things I do not know...yet๐ช! but I really love trying things. My main challenge was to try and do at least one unitary test, here's how that went.

๐ฉ๐ปโ๐ป Unitary test: Until now I've never done an unitary test. Yes, until now, because as I read the 
requirement list I said to myself  that I wanted, at  least to do one test, and after a lot of reasearch I was able to do one!๐ช I took me  a lot, but I'm proud and know that I will be able to learn more about it.

## Run my code ๐ง

Install dependencies
`npm install` 

Run it
`npm start`

## Codefactor 

[![CodeFactor](https://www.codefactor.io/repository/github/silviaespanagil/rupedia/badge?s=3ea7a798ad97a8f0d70e440c7bb4b819328ac092)](https://www.codefactor.io/repository/github/silviaespanagil/rupedia)
