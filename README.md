<!---
To switch between views in VScode, press Ctrl+Shift+V in the editor.
-->

# Project-Code-Masters

## Description 📝

In this project we are building a social media platform using NodeJS and MongoDB. The website is meant for developers to connect, share their ideas, and see current open positions in the industry. In the main page a user can login, signup, or continue as a guest to browse the posts. When a user registers and once loggeed in they can create posts and edit their profile info. In addition, the website will be built follwoing Web Content Accessibility Guidlines (WCAG) particually WCAG 2.1 and aiming to achieve a success criteria of AA. That will ensure the webiste content is precieveble, oprable, and understandable. More info about accessibility can be found at [W3C](https://www.w3.org/WAI/fundamentals/).

---

## Priority functionalities❗ (completed are marked with☑️):

1. [x] Login
2. [x] Sign up (Hashed passwored and validation)
3. [x] Edit profile info
4. [x] Write posts
5. [x] See all posts
6. [x] Edit and delete posts
7. [x] Delete porfile

---

## Optional functionalities (if enough time is left)⌛ (completed are marked with☑️):

1. [ ] Upload profile picture
2. [ ] Upload post picture
3. [ ] See real time registered users numbers in a s side banner
4. [ ] Add freinds

---

## Issues

1. Any user that is logged in can delete and edit the posts
2. When deleting a post, shows a confirmation message but it does not matter where you click it always deletes it
3. When creating new account, the user is not shown a confirmation message same with deleting and updating the profile(more time is needed)
4. One part of the navigation bar is not accessible (Javascript needed)
5. Change password not implemented in the edit profile (more time is needed)

---

## Models used:

1. User
2. Post

---

## Libraries 📔📔📗

1. bcrypt: a library to help you hash passwords. More info [bcrypt](https://www.npmjs.com/package/bcrypt).
2. express-validator: express-validator is a set of express.js middlewares that wraps the extensive collection of validators and sanitizers offered by validator.js. It allows you to combine them in many ways so that you can validate and sanitize your express requests, and offers tools to determine if the request is valid or not, which data was matched according to your validators, and so on. More info [express-validator](https://express-validator.github.io/docs).
3. get-age: get-age calculates the age in years for a given birth date.[calculate-age](https://www.npmjs.com/package/get-age).
4. passport: Passport is middleware for Node.js that makes it easy to implement authentication and authorization.https://www.passportjs.org/docs/.
5. express-flash: Flash is an extension of connect-flash with the ability to define a flash message and render it without redirecting the request. https://www.npmjs.com/package/express-flash

---

## Resposabilities per developer

### Janica Närhi

---

## Nori Alija (branches used: readPost, version0.2)

### Functions created:

**Function to read the posts from Mongodb**

> This function retrieves all the posts from the database, sorts them in descending order based on their date field, and then renders the authenticatedUser view with the list of posts and the current user's firstname.

**Function to create posts and saves it to Mongodb**

> This function retrieves the content of the new post and the current user's first name from the request parameters, creates a new Post object with the data, and then saves it to the database.

**Function to edit post content and save the modifications to Mongodb**

> This function retrieves the \_id of the post to be edited from the request parameters, uses it to find the post in the database, and then renders the editPage view with the post's content and \_id.

**Function to update the modified content.**

> This function retrieves the \_id of the post to be updated and the updated content from the request parameters, and then updates the post in the database with the new content.

**Function to delete post (deletePostById, deletePost)**

> deletePost function retrieves the \_id of the post to be deleted from the request parameters, calls the deletePostById function to delete the post from the database, and then redirects the user to the AuthPage.

> deletePostById function takes the \_id of the post to be deleted as a parameter, and uses it to find and delete the post from the database.

### Accessibility of the user interface

From the accessibility point of view:

1. I made sure that colour contrasts are sufficient.

2. In the main content I used accessible font.

3. Font-sizes are set large enough.

4. Made sure that the user interface doesn’t brake when zoomed to 200%.

5. I used descriptive names in the URL and navigation.

## Accessibility of the code

From the accessibility point of view:

1. I made sure that the HTML code was semantic

2. In some of the form elements I added "for" and "id" to associate different elements

```html
<article class="addPost">
  <form method="POST" action="/create-post">
    <label for="content">Create a new post:</label>
    <textarea id="content" name="content"></textarea>
    <button type="submit">Add Post</button>
  </form>
</article>
```

3. For the elements that were identified to not be important for the screen readers, I used aria hidden=True

```html
<i class="fa fa-edit" aria-hidden="true"></i>
```

4. For the non-semantic code, I added “role=”button” so that screen reader identifies those as buttons

```html
<a href="/guest/edit/{{_id}}" class="delete-edit" role="button"
  >Edit <i class="fa fa-edit" aria-hidden="true"></i
></a>
```

5. I made sure that my pages includes h1 element

### Accessibility evaluation

For testing the outcomes I used:

1. Keyboard navigation testing: Tested pages only with keyboard

2. Siteimprove evaluation tool (addon for Chrome): Evaluated WCGA 2.1 AA level accessibility criteria

3. NVDA screen reader: Checked the page content through via keyboard and screen reader

Some small issues came up while testing and those were fixed. For eg. heading order, font-size, colour contrast.


![Accessibilyt2 (Phone)](https://user-images.githubusercontent.com/89585906/236539507-e4272161-0be9-4ecc-af23-64eba573f3b0.png)

---


### Basil Omsha (branches used: profile, edit/delete-profiles, signup(deleted), master):

1.  Created a function to allow user to create an account and save it to the database. An express-validator function named "signup-validation" is created to validate:

    1. First and last name length
    2. Email is not in use and have a correct format "example@example.com"
    3. The password is at least 8 characters long with a combinationof uppercase, lowercse, number, and symbols
    4. The "Confirm Password" matches the password
    5. Day, month, year are not empty

    Additionally, a "ageValidation" named function is created to check that the user is at least 13 years of age or older. The function then is used in the express-validator (signup-validation.js"). Another function called paswdEncryption that utilizes bcrypt library is created to hash the password in the database.

2.  Signup frontend design with its CSS.
3.  Profile page that gets the user info from the session, edit function with its validation from similar to the signup.However the it also check if the email is found in the database but its id is the logged in user id it allows the update process, but of the ide in the database is different, it means the email is already in use by someone else and asks the user to pick a different email.
4.  Helped with the passport implementation for the login.
5.  Signup page accessibility: To improve accessibility for the signup page, semantic elements are used. All the web pages in this webapp use the same header, footer, and main styling, so div tags are needed to contain the form and other elements. The first div contains all the elements of the page, and to make it accessible, an aria-labelledby is assigned to it as follow:

    ```html
    <div class="signup-form-main-area" aria-labelledby="signup-heading">
      <div class="signup-title">
        <h1 id="signup-heading">Registration form</h1>
      </div>
    </div>
    ```

    Similarly, an overall list is created to provide users with better accessibility, which contains the form instructions and is surrounded by a div tag with a role and aria-labelledby. The h2 tag of the list is given an aria-describedby to associate it with a hidden span to tell keyboard users how to traverse through the list.

    ```html
    <div
      class="signup-instructions-list"
      role="list"
      aria-labelledby="list-heading"
    >
      <h2 id="list-heading" aria-describedby="instruct">Form Instructions</h2>
      <span id="instruct" hidden
        >Use the down arrow key to traverse the list items
      </span>
      <ul>
        <li>All fields are required unless marked with (optional).</li>
      </ul>
    </div>
    ```

    The `tabindex="0"` is not needed for the `<h1>` nor for the `<ul>` tags as they are not interactive elements and can be accessed with different keys (H) while using screen readers. The actual form is also surrounded in the same way as the previous elements, and each form element is associated with a label that states what input element it is for. Additionally, a span tag is added that contains an error message that gets triggered when a validation error occurs. Each span is assigned a unique id that associates with the `aria-describedby` in each element.

    ```handlebars
    <label class="signup-field-lables" for="firstname">First Name</label>
    <input
      class="signup-field-inputs"
      type="text"
      id="firstname"
      name="firstname"
      value="{{values.firstname}}"
      placeholder="John"
      aria-describedby="fname-error"
      required
    />
    <span class="sign-err" id="fname-error">{{errors.firstname}}</span>
    ```

    To make the inputs with better focus, the `:focus` CSS was added, and an accessible color palette generator website was used to pick colors with good contrast. The WAVE browser extension was used to check for accessibility errors. It showed six contrast errors caused by some CSS, which were fixed by changing the color from “red” to #c44601. Four alerts were also present, informing for missing labels, which were added accordingly to solve the issue.

    ![Picture2](https://user-images.githubusercontent.com/90252817/235223128-127f4fa4-2561-4b15-8842-1cc610792c07.png)

    During the development, NVDA was periodically used to test if the screen reader gets all the necessary information in the right order while navigating with the keyboard.

    After further testing it was noticed when the page is zoomed to 200% and over, or the device screen is changed in the inspect, form elements become hidden and inaccessible. The issue was solved simply by using a combination of “max-width”, “min-width" and “flex-direction” column. The testing video [the test](https://kaltura.hamk.fi/media/t/0_a9vosmoa)

    The documentation source used for this implementation:

    1. https://www.w3.org/WAI/tutorials/forms/
    2. https://venngage.com/tools/accessible-color-palette-generator

6.  The update form and profile page accessibility: the update form is implemented similarly to the signup form. However, in the profile to make the page responsive, media query is used targeting diffrent classes in the page to insure the page being responsive in different screen sizes. color schema is also picked to be accessible. Pages were tested with NVDA screen reader, siteimprove and wave browser extensions.

---
