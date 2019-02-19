function initSendingMode () {
    // TODO
    console.log('Init sending mode');
    showMode('#sendingContent');

    // TODO
    console.log(encryptWithPassword(getCheckParamDefaultValue(), 'test'));
}

function generateShareableLink (password, amount) {
    generateSharedAccount();
    appState.amount = $('#amount').val();
    sendMoneyToSharedAccount(appState.amount);
}

function generateSharedAccount () {
    console.log('Generating shared account');
    appState.sharedAccount = web3.eth.accounts.create();
    console.log('Shared account generated');
    console.log(appState.sharedAccount);
}

function sendMoneyToSharedAccount (amount) {
    // TODO
    console.log('Sending money to shared acount: ');
}