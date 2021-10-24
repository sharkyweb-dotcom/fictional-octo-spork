def n(user,word):
    with open('C:\Users\win7\Documents\website_catan\fictional-octo-spork\register\account.js','a') as account:
        account.write('new Account("'+user.lower()+'","'+word.lower()+'")')
n('Daemon','Poiuyt')