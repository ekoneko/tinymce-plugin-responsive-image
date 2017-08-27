require('mocha/mocha');
require('mocha/mocha.css');
require('tinymce');
require('tinymce/plugins/image');
require('tinymce/themes/modern');
require('tinymce/skins/lightgray/skin.min.css');

const chai = require('chai');
const expect = chai.expect;

require('../src')

interface Window {
    describe: any;
    mocha: any;
    tinyMCE: any;
}

const mocha = window.mocha;
const tinyMCE = window.tinyMCE;

window.tinyMCE.init({
    selector: '#editor',
    width: 1000,
    theme: 'modern',
    skin: false,
    menubar: false,
    statusbar: false,
    plugins: ['image', 'responsiveImage'],
    toolbar: 'undo redo | image',
    init_instance_callback: ed => {
            const img: HTMLImageElement = ed.getBody().getElementsByTagName('img')[0];
            img.onload = () => {
                window.describe('img responsive', () => {
                    expect(img.getAttribute('width')).to.equal('60%');
                });
                mocha.run();
            }
    },
})

mocha.setup('bdd');
