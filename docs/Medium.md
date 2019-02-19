# How can I send crypto money to people without account
# How to give crypto money as a gift

# Ether as a gift

Let's start with a real life story. I wanted to give some ethers to my friend on this New Year's day. Giving money can look like the least original gift (however it's common practice on Chinese New Year's Day) Howerver I think it does not work for crypto, because it's like giving a peace of future. My friend had no experience with crypto before. He is not a technical guy, he is more like a typical user, who wants to make minimal steps to get things done. That's why I thought how to make the whole process in the easiest way for him.

So, what I've done (assuming I wanted to give X eths):

*   I have created new ethereum account (let's call it shared account)
*   I have transferred X ethers to this newly created account
*   I have created manual for him how to receive money
    *   Manual included
        *   Installing metamask or web3 browser
        *   New account creating
        *   Restoring access to previously created by me account
        *   Sending all the money from shared account to newly created personal account (Without this step I (giver) could still have access to his money)
*   I have uploaded manual to my google drive and sent shareable link to my friend (actually I shortened it and printed it on metallic eth coin (It costs about 2$) to make this gift more real and showy)

I have spent about an hour to create this manual. And what is the worst - my friend hasn't followed this steps (mostly because it requires some time and it's boring to follow the manual and something could go wrong)

To simplify everything in this process I have decided to create Inviteth (Invitation to ethereum) - tool which allows sending ethers to people without accounts.

# Inviteth

Inviteth is a very simple client side web application. Inviteth source can be found here TODO_LINK (feel free to contribute ;) ). Application is also hosted with github pages hosting at inviteth.io.

#### Using inviteth you can:

*   Generate a shareable inviteth link (encrypted with a password)
*   Receive money using shareable inviteth link and password

#### What is a shareable inviteth link?

It's just an url which contains encoded information which is required to have an access to money.
Having a shareable link you can automatically and securely receive money to your address.
Inviteth allows to create a password to encrypt information in a link. In that case people who want to receive money from the link can't do this without your password.



#### Why inviteth makes lives easier?

*   Beeing a giver you don't need to wait for address from receiver. And you don't need to describe how to receive money you sent.
*   Being a receiver you don't need manually transfer money from shared account, because Inviteth do it for you automatically.

# Potential improvements
Currently we have some ideas how to improve inviteth. Please leave you feedback about the idea and don't hesiteate to contact us if you know how we can improve this solution.

*   Other tokens support (currently you can Inviteth only with ethers on mainnet)
*   Email/Phone support
