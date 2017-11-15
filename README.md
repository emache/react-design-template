# React-Sketch design template

This is based on the [styleguide example](http://github.com/airbnb/react-sketchapp), from React-Sketchapp
and exanded to become a general design system template.

## How to use

Install the dependencies
```
npm install
```

Run with live reloading in Sketch
```
npm run render
```

Or, to install as a Sketch plugin:
```
npm run build
npm run link-plugin
```
Then, open Sketch and navigate to `Plugins → react-sketchapp: Styleguide`

 
* SVG render is currently not supported in Sketch, thus causing limitations for rendering icons and the likes

* Using beta 2 as beta 5 doesn't seem to render Text items the same way.

* Issues with styled components and Sketch rendering for selective borders.
