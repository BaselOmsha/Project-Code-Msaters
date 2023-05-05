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

### Nori Alija

1.

---

### Basil Omsha (branches used: profile, signup(deleted)):


   1. Created a function to allow user to create an account and save it to the database. An express-validator function named "signup-validation" is created to validate:

      1. First and last name length
      2. Email is not in use and have a correct format "example@example.com"
      3. The password is at least 8 characters long with a combinationof uppercase, lowercse, number, and symbols
      4. The "Confirm Password" matches the password
      5. Day, month, year are not empty

      Additionally, a "ageValidation" named function is created to check that the user is at least 13 years of age or older. The function then is used in the express-validator (signup-validation.js"). Another function called paswdEncryption that utilizes bcrypt library is created to hash the password in the database.

   2. Signup frontend design with its CSS.
   3. Profile page that gets the user info from the session, edit function with its validation from similar to the signup.However the it also check if the email is found in the database but its id is the logged in user id it allows the update process, but of the ide in the database is different, it means the email is already in use by someone else and asks the user to pick a different email.
   4. Helped with the passport implementation for the login.
   5. Signup page accessibility: To improve accessibility for the signup page, semantic elements are used. All the web pages in this webapp use the same header, footer, and main styling, so div tags are needed to contain the form and other elements. The first div contains all the elements of the page, and to make it accessible, an aria-labelledby is assigned to it as follow:

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
   
   
   6. The update form and profile page accessibility: the update form is implemented similarly to the signup form. However, in the profile to make the page responsive, media query  is used targeting diffrent classes in the page to insure the page being responsive in different screen sizes. color schema is also picked to be accessible. Pages were tested with NVDA screen reader, siteimprove and wave browser extensions. 

---
