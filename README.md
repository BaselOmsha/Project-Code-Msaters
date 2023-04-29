# Project-Code-Masters

## Description 📝
In this project we are building a social media platform using NodeJS and MongoDB. The website is meant for developers to connect, share their ideas, and see current open positions in the industry. In the main page a user can login, signup, or continue as a guest to browse the posts. When a user registers and once loggeed in they can create posts and edit their profile info. In addition, the website will be built follwoing Web Content Accessibility Guidlines (WCAG) particually WCAG 2.1 and aiming to achieve a success criteria of AA. That will ensure the webiste content is precieveble, oprable, and understandable. More info about accessibility can be found at [W3C](https://www.w3.org/WAI/fundamentals/).

## Priority functionalities❗ (completed are marked with✔️):
1. [ ] Login
2. [X] Sign up (Hashed passwored and validation)
3. [ ] Edit profile info
4. [ ] Write posts
5. [ ] See all posts
6. [ ] Edit and delete posts
7. [ ] Delete porfile

## Optional functionalities (if enough time is left)⌛:
1. Upload profile picture
2. Upload post picture
3. See real time registered users numbers in a s side banner
4. Add freinds

## Models used:
1. User
2. Post (planing phase)

## Libraries📔📔📗
1. bcrypt: a library to help you hash passwords. More info [bcrypt](https://www.npmjs.com/package/bcrypt).
2. express-validator: express-validator is a set of express.js middlewares that wraps the extensive collection of validators and sanitizers offered by validator.js. It allows you to combine them in many ways so that you can validate and sanitize your express requests, and offers tools to determine if the request is valid or not, which data was matched according to your validators, and so on. More info [express-validator](https://express-validator.github.io/docs).
3. get-age: get-age calculates the age in years for a given birth date.[calculate-age](https://www.npmjs.com/package/get-age).

## Resposabilities per developer
### Janica Närhi
### Nori Alija
### Basil Omsha: 
1. Signup page: 
    1. Created a function to allow user to create an account and save it to the database. An express-validator function named "signup-validation" is created to validate:
          1. First and last name length
          2. Email is not in use and have a correct format "example@example.com"
          3. The password is at least 8 characters long with a combinationof uppercase, lowercse, number, and symbols
          4. The "Confirm Password" matches the password 
          5. Day, month, year are not empty  
          
          Additionally, a "ageValidation" named function is created to check that the user is at least 13 years of age or older. The function then is used in the express-validator (signup-validation.js". Another function called paswdEncryption that utilizes bcrypt library is created to hash the password in the database.
    
    2. Signup frontend design with its CSS. 
    3. Signup page accessibility: To improve accessibility for the signup page, semantic elements are used. All the web pages in this webapp use the same header, footer, and main styling, so div tags are needed to contain the form and other elements. The first div contains all the elements of the page, and to make it accessible, an aria-labelledby is assigned to it as follow: 

              `<div class="signup-form-main-area" aria-labelledby="signup-heading">
                <div class="signup-title">
                  <h1 id="signup-heading">Registration form</h1>`
                  
          Similarly, an overall list is created to provide users with better accessibility, which contains the form instructions and is surrounded by a div tag with a role and aria-labelledby. The h2 tag of the list is given an aria-describedby to associate it with a hidden span to tell keyboard users how to traverse through the list. 

                      `<div class="signup-instructions-list" role="list" aria-labelledby="list-heading">
                            <h2 id="list-heading" aria-describedby="instruct">Form Instructions</h2>
                            <span id="instruct" hidden>Use the down arrow key to traverse the list items </span>
                            <ul>
                              <li>All fields are required unless marked with (optional).</li>`
                              
          The `tabindex="0"` is not needed for the `<h1>` nor for the `<ul>` tags as they are not interactive elements and can be accessed with different keys (H) while using screen readers. The actual form is also surrounded in the same way as the previous elements, and each form element is associated with a label that states what input element it is for. Additionally, a span tag is added that contains an error message that gets triggered when a validation error occurs. Each span is assigned a unique id that associates with the `aria-describedby` in each element.
          
                                    `<label class="signup-field-lables" for="firstname">First Name</label>
				                            <input class="signup-field-inputs" type="text" id="firstname" name="firstname"
					                            value="{{values.firstname}}" placeholder="John" aria-describedby="fname-error" required>
				                             <span class="sign-err" id="fname-error">{{ errors.firstname }}</span>`
                                     
          To make the inputs with better focus, the `:focus` CSS was added, and an accessible color palette generator website was used to pick colors with good contrast. The WAVE browser extension was used to check for accessibility errors. It showed six contrast errors caused by some CSS, which were fixed by changing the color from “red” to #c44601. Four alerts were also present, informing for missing labels, which were added accordingly to solve the issue. 
          
          ![Picture2](https://user-images.githubusercontent.com/90252817/235223128-127f4fa4-2561-4b15-8842-1cc610792c07.png)
          
          During the development, NVDA was periodically used to test if the screen reader gets all the necessary information in the right order while navigating with the keyboard. 
	  
		After further testing it was noticed when the page is zoomed to 200% and over, or the device screen is changed in the inspect, form elements become hidden and inaccessible. The issue was solved simply by using a combination of “max-width”, “min-width" and “flex-direction” column. The testing video [the test](https://kaltura.hamk.fi/media/t/0_a9vosmoa) 

		  The documentation source used for this implementation: 
		  1. https://www.w3.org/WAI/tutorials/forms/
		  2. https://venngage.com/tools/accessible-color-palette-generator



 
