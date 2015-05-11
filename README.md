# jQuery No Config Carousel Plugin

Simple plugin which effects a carousel given an array of images defined in an element's data-images property.

## Features

Or in fact, anti-features. 

* Simple forward only carousel which changes every 5 seconds.
* No controls - there's no pause button, there's no play button, there's no _next_ or _previous_ image.
* No configuration - the speed is fixed, the transition is fixed. You can, however, define the images. 


## Install

Pull down the .js file, reference it in your html

## Usage

Once you've included the plugin, create your html structure similar to the following:

```html
<div id="hero">
    <div id="heroimages" data-images='["img/white.jpg", "img/yellow.jpg"]'></div>
    <div id="herocontent">Put your text in here</div>
</div>
```

You'll need some css to go with that. I suggest something like this:

```css
.heroimages {
    position: absolute;
    top:50px;
    bottom:0;
    z-index:-1;
    height:300px;
    overflow:hidden;
    width:100%;
}
.heroimages img {
    width: 100%;
    display: block;
}
```


and initialize as you would any jQuery plugin:

```javascript
$(function() {
    $('#hero').noConfigCarousel();
}
```

## Examples?

There's a basic example the the `example` folder.

## Credits

All images from [unsplash](http://unsplash.com)
