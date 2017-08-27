interface Window {
    tinyMCE: any;
}

function convertCallbackToPromise(handle): Promise<any> {
    return new Promise((resolve) => {
        handle = resolve;
    })
}

async function imgWaitUntilLoaded(img: HTMLImageElement): Promise<HTMLImageElement> {
    if (img.complete) {
        return img;
    }
    await Promise.race([
        convertCallbackToPromise(img.onload),
        convertCallbackToPromise(img.onabort),
        convertCallbackToPromise(img.onerror),
    ])
    return img;
}

async function transImgWidthToPrecent(
    img: HTMLImageElement,
    getDocWidth: () => number,
): Promise<void> {
    await imgWaitUntilLoaded(img);

    if (!img.complete) {
        return;
    }

    // Img width attribute possibly is empty, number string or percent string.
    // It will transform number string to percent, otherwise do nothing.
    const width = img.getAttribute('width');

    if (width && width.indexOf('%') === -1) {
        const scalePrecent = Math.floor(+width / getDocWidth() * 100);
        img.setAttribute('width', `${scalePrecent}%`);
        img.removeAttribute('height');
    }
}

window.tinyMCE.PluginManager.add('responsiveImage', function(editor) {
    editor.on('init', () => {
        this.resolveAll();
    });

    editor.on('NodeChange', (e) => {
        if (e.element.tagName === 'IMG') {
            const img: HTMLImageElement = e.element;
            transImgWidthToPrecent(img, () => editor.getBody().clientWidth);
        }
    });

    this.resolveAll = () => {
        const imgs = editor.getBody().getElementsByTagName('img');
        for (let i = 0; i < imgs.length; i++) {
            transImgWidthToPrecent(imgs[i], () => editor.getBody().clientWidth);
        }
    }
});
