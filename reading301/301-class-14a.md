# Day 14b of 301

## Reading Notes

### [What is OAuth](https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html)

1. **What is OAuth?** "OAuth is an open-standard authorization protocol or framework that describes how unrelated servers and services can safely allow authenticated access to their assets without actually sharing the initial, related, single logon credential. In authentication parlance, this is known as secure, third-party, user-agent, delegated authorization.

2. **Give an example of what using OAuth would look like.** hitting a login page and being offered the option to "continue with Google/GitHub/email"

3. **How does OAuth work? What are the steps that it takes to authenticate the user?**

   1. The first website connects to the second website on behalf of the user, using OAuth, providing the user’s verified identity.
   2. The second site generates a one-time token and a one-time secret unique to the transaction and parties involved.
   3. The first site gives this token and secret to the initiating user’s client software.
   4. The client’s software presents the request token and secret to their authorization provider (which may or may not be the second site).
   5. If not already authenticated to the authorization provider, the client may be asked to authenticate. After authentication, the client is asked to approve the authorization transaction to the second website.
   6. The user approves (or their software silently approves) a particular transaction type at the first website.
   7. The user is given an approved access token (notice it’s no longer a request token).
   8. The user gives the approved access token to the first website.
   9. The first website gives the access token to the second website as proof of authentication on behalf of the user.
   10. The second website lets the first website access their site on behalf of the user.
   11. The user sees a successfully completed transaction occurring.

4. **What is OpenID?** "OpenID is about authentication: as a commenter on StackOverflow [pithily put it](https://stackoverflow.com/questions/4230821/if-openid-is-dead-what-is-out-there-to-take-its-place/4230970#4230970): 'OpenID is for humans logging into machines, OAuth is for machines logging into machines on behalf of humans.' "

_quotations taken from [What is OAuth](https://www.csoonline.com/article/3216404/what-is-oauth-how-the-open-authorization-framework-works.html)_

### [Authorization and Authentication flows](https://auth0.com/docs/flows)

1. **What is the difference between authorization and authentication?**

   - Authentication verifies that you are _authentically_ who you claim to be
   - Autorization verifies that you are _authorized_/permitted to enter the area you are attempting to enter

2. **What is Authorization Code Flow?**

   - it exchanges an Authorization Code for a token

3. **What is Authorization Code Flow with Proof Key for Code Exchange (PKCE)?**

   - it provides additional security for single page and native apps

4. **What is Implicit Flow with Form Post?**

   - an alternative to authorization code flow for apps that can't store client secrets securely

5. **What is Client Credentials Flow?**

   - authenticates an app, rather than a user

6. **What is Device Authorization Flow?**

   - sends user to a link on a computer or smartphone, rather than on the device itself,

7. **What is Resource Owner Password Flow?**
   - users provide credentials; only for highly trusted apps, as credentials are stored on backend for future use.

_quotations taken from [Authorization and Authentication flows](https://auth0.com/docs/flows)_

#### Additional Resources

[Auth0 for single page apps](https://auth0.com/docs/libraries/auth0-react)

## Things I want to know more about

back to [home page](README.md)
