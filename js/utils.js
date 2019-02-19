function getParamFromUrl (name) {
    console.log(`Getting param ${name} from url`);
    const urlParams = new URLSearchParams(window.location.search);
    const result = urlParams.get(name);
    console.log(`Got ${name} = ${result}`);

    return result;
}

function showMode(conentId) {
    // TODO
    $('.modeContentBox').hide();
    $(conentId).show();
}