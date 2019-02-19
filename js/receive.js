function initReceivingMode () {
    console.log('Init receiving mode');
    showMode('#receivingContent');
    getPassword();
    decryptPrivateKey();
}

function sendMoneyFromSharedAccount () {
    // TODO
    console.log('Will send money from account: ' + appState.privateKeyDecrypted);
}

function decryptPrivateKey () {
    appState.privateKeyEncrypted = getParamFromUrl('data');
    appState.privateKeyDecrypted = decryptWithPassword(appState.privateKeyEncrypted);
}

function getPassword () {
    appState.password = prompt(appState.msgs.enterPassword);
    if (checkParamOk(appState.password)) {
        console.log('Password is correct');
    } else {
        appState.msgs.enterPassword = 'Password is incorrect. Please try again.'
        getPassword();
    }
}

function checkParamOk (password) {
    let decrypted;
    try {
        const checkParamEncypted = getParamFromUrl('check');
        decrypted = decryptWithPassword(checkParamEncypted, password);
    } catch (e) {
        console.log(e);
        return false;
    }

    return getCheckParamDefaultValue() == decrypted;
}