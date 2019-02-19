function getParamFromUrl (name) {
    console.log(`Getting param ${name} from url`);
    const urlParams = new URLSearchParams(window.location.search);
    const result = urlParams.get(name);
    console.log(`Got ${name} = ${result}`);

    return result;
}

function showMode(contentId) {
    // TODO
    $('.modeContentBox').hide();
    $(contentId).show();
}

function encryptWithPassword(content, password) {
    return CryptoJS.Rabbit.encrypt(content, password).toString();
}

function decryptWithPassword(encyptedContent, password) {
    return CryptoJS.Rabbit.decrypt(encyptedContent, password).toString(CryptoJS.enc.Utf8);
}
