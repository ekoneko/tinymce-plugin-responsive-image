# tinymce-plugin-responsive-image

A tinyMCE plugin for transforming &lt;img> width from px to percent.

Insert an image to tinyMCE and resize the img's size. It will save and support img's width attribute as percent format.

## install

```
npm install tinymce-plugin-responsive-image
```

## usage

````js
window.tinyMCE.init({
    plugins: ['responsiveImage', /* and other plugins */]
});
````
