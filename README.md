# LeapDev-User-Account

By Dov Royal

A simple react app where a user can change his/her account details. This app was made for the LeapDev technical test.

You can visit this project on:
https://leapdev-my-account.herokuapp.com/

Alternatively, you can download the code via the instructions below:

1. Download the code or clone this repository and open it in your favourite IDE (e.g. VSCode)
2. Open terminal in the downloaded folder/cloned repository and run:
   npm i
   npm start
3. This should run the code and open it in a new browser window.
4. If a browser window doesn't open automaticaly, navigate to:
   http://localhost:3000/
5. Port 3000 might be different on you computer and the correct port should be displayed after running npm start.

Error States
The required input fields are:
First name, last name, Email, phone number, postcode, state, hourly rate and date of birth
If the user starts editing these fields and clicks off them withoput entering anything, a warning will
be displayed saying "Please enter your..." in red.

The email field has to be an email and must include an @ and be a complete email address otherwise a warning
will be displayed.

The phone number field must be 10 digits long and must be a number, otherwise a warning will be displayed.

The postcode field must be 4 digits long and be a number, otherwise a warning will be displayed.

The state is required and must be filled out, otherwise a warning will be displayed. Since the state is a
drop down menu and it is always pre-filled, a warning wont be displayed.

Company name and ABN are not required fields so no warning will be displayed.

Hourly rate must be a number otherwise a warning will be displayed.

Date of birth must be a date otherwise a warning will be displayed. Since this field is a date field,
the user cannot enter anything but a date, so a warning will only be displayed if it is empty.
