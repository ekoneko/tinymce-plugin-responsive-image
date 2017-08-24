require('mocha/mocha');
require('mocha/mocha.css');
require('tinymce');
require('tinymce/plugins/image');
require('tinymce/themes/modern');
require('tinymce/skins/lightgray/skin.min.css');

interface Window {
    mocha: any;
    tinyMCE: any;
}

const mocha = window.mocha;
const tinyMCE = window.tinyMCE;

window.tinyMCE.init({
    selector: '#editor',
    theme: 'modern',
    skin: false,
    menubar: false,
    statusbar: false,
    plugins: ['image'],
    toolbar: 'undo redo | image',
    init_instance_callback: ed => {
        //
    },
})

mocha.setup('bdd');

mocha.run();
