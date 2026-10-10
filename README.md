# TABERU (食べる) - to eat


>_a small static website for exploring japanese cuisine (im sorry i couldnt think of anythg else D: )._


## what ts is

taberu (to eat) is a static site for browsing a few japanese dishes and generating a simple recipe for them.

you just pick a dish, get a full and simple recipe with ingredients and steps generated in a few seconds. you can even filter by category :D

## how ts was built

i used vanilla HTML, CSS and JavaScript, OpenRouter API for ai recipe generation (BYOK model), and GitHub pages for hosting the website !!

## running ts locally 

u dont need to insall anything just open `index.html` in your browser or even use a local server:

```bash
npx serve .
```

and then open localhost on port 3000 and youre ready to go

## api key setup

well to use the recipe feature YOU NEED AN API KEY, that too from OPENROUTER specifically

as taberu depends [OpenRouter](https://openrouter.ai), you can just grab a free key and put it in the modal when it ask for it after youve selected a dish to see recipe for, and it is stored in your browser's localStorage only.

uh to forget the key (i.e if you exhaust your credits :D): simply run `localStorage.removeItem('taberu_api_key')` or since it only stores one thing you can just nuke it all :D thru `localStorage.clear()`.


## assets (how can i even forget)

this was my first time trying to make a logo than drawing stuff so i found it quite interesting and yes ik its shit but i tried to add my own touch to it D:

<img width="600" height="300" alt="Frame 1" src="https://github.com/user-attachments/assets/6f339711-fb69-4675-b4c2-549006ca3103" />





