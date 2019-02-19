function initReceivingMode () {
    // TODO
    console.log('Init receiving mode');
    showMode('#receivingContent');
    getPassword();
}

function getPassword () {
    const checkParamEncypted = getParamFromUrl('check');
    appState.password = prompt('Please enter a password');
    if (decryptWithPassword(checkParamEncypted, appState.password) == getCheckParamDefaultValue()) {
        console.log('Password is correct');
    } else {
        getPassword();
    }
    const privateKeyEncrypted = getParamFromUrl('data');
}