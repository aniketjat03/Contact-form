# Contact Form App

This is a simple React-based contact form application that allows users to submit their contact information along with a message. The submitted data is then stored in a Google Sheets document using a Google Apps Script deployed as a web app.

## Features

- User-friendly interface for entering contact details and messages.
- Basic form validation for name, email, phone number, and message fields.
- Integrated with Google Sheets for storing and managing form data.
- Ability to submit the form and receive a success message.
- Clear button to reset the form fields.

## Technologies Used

- **React:** The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
- **Google Apps Script:** Used to handle form submissions and store data in a Google Sheets document.
- **HTML/CSS:** Used for structuring the layout and styling the components.
- **JavaScript:** Used for form validation and interaction.

## Getting Started

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

Ensure you have Node.js and npm installed on your machine.

## Usage

1. Enter your name, email, phone number, and message in the respective input fields.
2. Click on the Submit button to submit the form.
3. If the form submission is successful, you'll receive a success message.
4. To clear the form, click on the Clear button.

## Deployment

The application can be deployed to a hosting service like Netlify, Vercel, or Firebase for production use. Ensure you update the Google Apps Script URL in the `fetch` function to your deployed script URL.

Here is the deployed link : https://aniket-contact.vercel.app/

Spreadsheet link : https://docs.google.com/spreadsheets/d/1HYBi82q4BsifNWD6vZXfbqlPm-9UIOcVDUAzfkImDIk/edit#gid=0



