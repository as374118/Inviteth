window.onload = function () {
    console.log('Document was loaded.');
    init();
};

function init () {
    appState.mode = getParamFromUrl('mode');
    switch (appState.mode) {
        case 'home':
        case '':
        case null:
            initHomeMode();
            break;
        case 'sending':
            initSendingMode();
            break;
        case 'receiving':
            initReceivingMode();
            break;
        default:
            initUnknownMode();
            break;
    }
}

function initUnknownMode() {
    // TODO
    console.log('Init unknown mode');
    console.log(`Mode is unknown ${appState.mode}`);
}