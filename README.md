# The Fae Forest

For my final project at General Assembly I wanted to create something fun that was quite different to everything else I've made so far. 

The Fae Forest is a trivia game, connected to an api that draws in trivia questions for the user to answer. For each question answered, the user collects a crystal and moves through levels to defeat the fae that insult you as you go. 

The game can be found [here](https://fae-game.surge.sh/).

## About

This game was created using react. I chose react as this was the platform we learned most recently at GA and one I felt the least confortable with. Creating this app allowed me to practice and learn a lot more about react's features. 

##  Planning & Problem Solving
- The first step involved planning out the pathway of the game. I knew early on what I wanted the aesthetics to look like, although I eventually simplified this a little. The iniital concepts involved several extra games that I would still like to explore as bonus rounds. 

The initial wireframe was very simple, helping to visualise how the user would move through nested routes to make it more like a game. 
![Screen Shot 2023-02-09 at 8 40 48 pm](https://user-images.githubusercontent.com/117622538/217777217-ed653d80-548d-427e-a59c-23a09cc54ca9.png)

Aesthetically and functionally the game ended up being quite close to how I originally planned, though slightly simplier. I will continue to add features and work on this project in the future. 
![Screen Shot 2023-02-09 at 8 46 25 pm](https://user-images.githubusercontent.com/117622538/217777270-35337069-a558-4c9f-9925-4de008f9a163.png)
![Screen Shot 2023-02-09 at 8 46 32 pm](https://user-images.githubusercontent.com/117622538/217777294-313b03e9-d9d5-4543-b807-e761991bd3e7.png)

I encountered quite a few problems during this project including:
- setting up the routing - this was eventually solved after more research into react. 
- the api used included some data that was formatted poorly with additional characters (such as #%^ etc). As a work around, I included a verification step for each call of the api to ensure that only correct questions and answers were passed through to the front end.
- I had quite a lot of issues holding states across pages, this is something I haven't completely got the hang of yet and will continue to study in the coming weeks and will likely rewrite the impacted code.

## Cool tech
I greatly enjoyed exploring a few different CSS animations in this project including serveral different crystal throwing actions on the last page. It was a bit of a struggle for me not to use too much colour but enjoyed pushing myself with the limited palatte. 

## Bugs to fix
- the count on the bonus level
- the enter menu reloading after finishing the game
- adding additional insults (the insult generator doesnt have enough elements to keep it fresh). 

## Lessons learnt
Lots of lessons learnt regarding react and many more to come. I found the differences between javascript and creating code in regex quite frustrating at times and found I had to go the long way round to get things done which meant a lot of repeatative code. In the coming weeks, this is another element I will study further to better streamline the code I have. 

## Future features
- sound effects
- easy, medium, hard mode
- additional games
- penalties for getting answers incorrect. 
