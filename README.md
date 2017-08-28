# tinymce-plugin-responsive-image

A tinyMCE plugin for transforming &lt;img> width from px to percent.

Insert an image to tinyMCE and resize the img's size. It will save and support img's width attribute as percent format.

## install

```
npm install tinymce-plugin-responsive-image
```

## usage

### import

You can import the plugin easily as `commonjs` / `es6` modules. (with `tsc`, `webpack`, etc)

```
import 'tinymce-plugin-responsive-image'
require('tinymce-plugin-responsive-image')
```

Also, you can use some tools like `gulp` or `grunt` to copy `lib/index.js` to anywhere you can visit by browser.

Of course, you can `Ctrl + C` `Ctrl +V` by yourself.

### setup

````js
window.tinyMCE.init({
    plugins: ['responsiveImage', /* and other plugins */]
});
````
