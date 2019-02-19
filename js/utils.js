let appState = {
    mode: 'home', // enum: ['home', 'sending', 'receiving']
    privateKey: '',
    // amount: 0,
    msgs: {
        enterPassword: 'Please enter a password'
    }
};

function getParamFromUrl (name) {
    console.log(`Getting param ${name} from url`);
    const urlParams = new URLSearchParams(window.location.search);
    const result = urlParams.get(name);
    console.log(`Param ${name} = ${result}`);

    return result;
}

function showMode (contentId) {
    // TODO
    $('.modeContentBox').hide();
    $(contentId).show();
}

function encryptWithPassword (content, password) {
    return CryptoJS.Rabbit.encrypt(content, password).toString();
}

function decryptWithPassword (encyptedContent, password) {
    return CryptoJS.Rabbit.decrypt(encyptedContent, password).toString(CryptoJS.enc.Utf8);
}

function getCheckParamDefaultValue () {
    return 'ajs213dsdsdsdds3212342';
}

function isWeb3Enabled () {
    return (typeof web3 !== 'undefined');
}

function showNetworkName () {
    return web3.version.getNetwork((err, netId) => {
        vm.networkId = netId;
        switch (netId) {
            case "1":
                return NotificationService.success("You are connected to the Main Ethereum network.");
            case "4":
                return NotificationService.success("You are connected to the Rinkeby test network.");
            case "42":
                return NotificationService.success("You are connected to the Kovan test network.");
            default:
                return NotificationService.success("You are connected to the unknown network.");
        }
    });
}