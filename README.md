# Slobodianiuk.University.Grid.Animation

### How to launch a project?

Install npm package manager:
https://nodejs.org/en/download/

Download source code from this repo and open root folder in console or VSCode.
```
npm ci (or npm install if you got an error)
npm run dev
```

At this point you sould have the project running and you could see it by visiting a url provided in the console.

In my case this was: `http://127.0.0.1:5173/`

Yours could differ.

### Grid
- The grid of pixels is 16x16.
- Card header grid is 16x11 pixels.
- Animation consists of pixels of primary (black) and white colours.
- Every pixel is 10x10 px.
- Default colour of the pixel is black, so you could specify only white pixels in your frames and the rest would be just black.

### Timing
- When you hover over the card the animation starts proceeding to the next frame.
- Every 42 miliseconds a new frame is chosen and displayed.

### Frames
- Maximum amount of frames is 120 which is roughly 5 seconds.
- You could have less than 120 frames making your animation shorter.
- You could have more than 12o frames, but in this case only first 120 frames will be displayed.
- After last frame is reached frame number is reset to zero making animation go forever in a loop.

### Project card
- In default state the header is displayed alongside with the project name and author.
- In hovered state animation starts from 0 frame and runs up to 120 frame.
