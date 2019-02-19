# Inviteth


# PROJECT MOTIVATION

Let's start with a real life story. I wanted to give some ethers to my friend on this New Year's day. Giving money can look like the least original gift (however it's common practice on Chinese New Year's Day) but I think it does not work for crypto, because it's like giving a peace of future. My friend had no experience with crypto before. He is not a technical guy, he is more like a typical user, who wants to make minimal steps to get things done. That's why I thought how to make the whole process in the easiest way for him.

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


# PROJECT DESCRIPTION

Invitech is a very lightweight web application created with Vue.js. It doesn't have server side. It's not even a DApp (I mean it doesn't include any smart contracts).

It has 2 modes:



*   Giving (is accessible for everyone who have ehters and want to send it to person without account)
    *   After choosing amount and clicking "Get shareable link" button
        *   New shared account will be created
        *   Money will be sent to this account
        *   Giver will receive special shareable link (which should be sent to person without account (receiver))
*   Receiving (is accessible only with special shareable link)
    *   If you try to receive money in non-web3 browser or without such plugins as metamask you will be asked to install it
    *   If you have web3 enabled browser money from so called shared account will be automatically sent to your main eth account

Special shareable links have private key for shared account encoded in GET parameters. So these links will be quite long. You can shorten it using link shortener you trust (like bit.ly). Then it could be converted to QR codes or be printed on nice giving coins.

# SIMILAR PROJECTS



*   [Ether cards](https://ether.cards) (cool, but not free. Probably their architecture contains server or (TODO - research) )
*   


# POTENTIAL IMPROVEMENTS


## More security

Having a link which gives an access to money could seem insecure. So in future we could add an additional password mechanism. It also will not require server side for application. Because all information attached to link will be encrypted with the password created by giver. In that case giver will give a link and this secret password to receiver.


## UI to undo link creation

User friendly mechanism to pay ethers back to giver's account from shared account


## Another tokens sending

We can add mechanism to send tokens


## Email support

In future email notifications mechanism could be added. Of course it will require users to give their emails and some server or email sending service will be required.

