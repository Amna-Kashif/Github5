            // STRING METHODS

// 1
// Take user input for first name and last name using prompt
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");

// // Merge the first and last name to form fullName
// let fullName = firstName + " " + lastName;

// // Greet the user using their full name
// console.log("Hello, " + fullName + "! Welcome.");



// 2
// Take user input for favorite mobile phone model using prompt
// let favoritePhone = prompt("Enter your favorite mobile phone model:");

// // Find the length of the input string
// let inputLength = favoritePhone.length;

// // Display the length of the input in the browser
// document.write("Your favorite mobile phone model is: " + favoritePhone + "<br>");
// document.write("Length of input: " + inputLength);



// 3
// Initialize the word
// let word = "Pakistani";

// // Find the index of the letter 'n' using indexOf method
// let indexOfN = word.indexOf("n");

// // Display the result in the browser
// document.write("The index of 'n' in the word 'Pakistani' is: " + indexOfN);



// 4

// Initialize the word
// let phrase = "Hello World";

// // Find the last index of the letter 'l' using lastIndexOf method
// let lastIndexOfL = phrase.lastIndexOf("l");

// // Display the result in the browser
// document.write("The last index of 'l' in the phrase 'Hello World' is: " + lastIndexOfL);


// 5
// Initialize the word
// let word = "Pakistani";

// // Find the character at the 3rd index (4th character, as index starts from 0)
// let charAtThirdIndex = word.charAt(3);

// // Display the result in the browser
// document.write("The character at the 3rd index in the word 'Pakistani' is: " + charAtThirdIndex);


// 6
// Take user input for first name and last name using prompt
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");

// // Merge the first and last name using the concat() method
// let fullName = firstName.concat(" ", lastName);

// // Greet the user using their full name
// document.write("Hello, " + fullName + "! Welcome.");



// 7
// Initialize the word
// let city = "Hyderabad";

// document.write(`city: ${city} <br>`);

// // Replace "Hyder" with "Islam"
// let newCity = city.replace("Hyder", "Islam");

// // Display the result in the browser
// document.write("The new city name is: " + newCity);


// 8
// Initialize the message string
// var message = "Ali and Sami are best friends. They play cricket and football together.";

// // Replace all occurrences of "and" with "&"
// var updatedMessage = message.replace(/and/g, "&");

// // Display the result in the browser
// document.write("Updated message: " + updatedMessage);


// 9
// Initialize the string "472"
// let strValue = "472";

// // Convert the string to a number
// let numValue = Number(strValue);

// // Display the values and their types in the browser
// document.write("Value: " + strValue + "<br>");
// document.write("Type: " + typeof strValue + "<br><br>");

// document.write("Value: " + numValue + "<br>");
// document.write("Type: " + typeof numValue + "<br>");


// 10
// Take user input using prompt
// let userInput = prompt("Enter some text:");

// // Convert the input to capital letters
// let upperCaseInput = userInput.toUpperCase();

// // Display the result in the browser
// document.write("Your input in capital letters: " + upperCaseInput);


// 11
// Take user input using prompt
// let userInput = prompt("Enter some text:");

// // Function to convert a string to title case
// function toTitleCase(str) {
//     return str.toLowerCase().split(' ').map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
// }

// // Convert the input to title case
// let titleCaseInput = toTitleCase(userInput);

// // Display the result in the browser
// document.write("Your input in title case: " + titleCaseInput);


// 12
// Initialize the variable num
// var num = 35.36;

// // Convert num to string
// var numStr = num.toString();

// // Remove the dot by replacing it with an empty string
// var result = numStr.replace(".", "");

// // Display the result in the browser
// document.write("The result is: " + result);


// 13

// Function to validate username
// function isValidUsername(username) {
//     // Regular expression to check for special symbols
//     const specialSymbols = /[@.!]/;
//     return !specialSymbols.test(username); // Return true if no special symbols are found
// }

// // Take user input for username using prompt
// let username = prompt("Enter your username:");

// // Validate the username
// while (!isValidUsername(username)) {
//     username = prompt("Invalid username! Please enter a valid username (no special symbols: @, ., !):");
// }

// // Display the valid username
// document.write("Your username is: " + username);


// 14

// Initialize the array
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// // Take user input for the item to search
// var userInput = prompt("Enter the item you want to search for:");

// // Convert user input to lower case for case insensitive comparison
// var lowerCaseInput = userInput.toLowerCase();

// // Check if the item is in the array
// var isFound = A.some(function(item) {
//     return item.toLowerCase() === lowerCaseInput; // Convert each item to lower case for comparison
// });

// // Inform the user about the search result
// if (isFound) {
//     document.write(userInput + " is found in the list.");
// } else {
//     document.write(userInput + " is not found in the list.");
// }


// 15

// Function to validate the password
// function isValidPassword(password) {
//     // Check if the password is at least 6 characters long
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return false;
//     }

//     // Check if the password contains both alphabets and numbers
//     var containsAlphabets = /[a-zA-Z]/.test(password);
//     var containsNumbers = /[0-9]/.test(password);
    
//     if (!containsAlphabets || !containsNumbers) {
//         alert("Password must contain both alphabets and numbers.");
//         return false;
//     }

//     // Check if the password starts with an alphabet (not a number)
//     if (/^[0-9]/.test(password)) {
//         alert("Password must not start with a number.");
//         return false;
//     }

//     // If all checks pass, the password is valid
//     return true;
// }

// // Take user input for the password
// let password = prompt("Enter your password:");

// // Keep prompting the user until they provide a valid password
// while (!isValidPassword(password)) {
//     password = prompt("Please enter a valid password:");
// }

// // Display a success message when a valid password is entered
// document.write("Your password is valid.");


// 16

// Initialize the string
// var university = "University of Karachi";

// // Convert the string to an array using the split method
// var universityArray = university.split(" ");

// // Display the elements of the array in the browser
// document.write("The elements of the array are:<br>");
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }



// 17
// Take user input using prompt
// var userInput = prompt("Please enter something:");

// // Check if the input is not empty
// if (userInput) {
//     // Get the last character of the input
//     var lastCharacter = userInput[userInput.length - 1];

//     // Display the last character in the browser
//     document.write("The last character of your input is: " + lastCharacter);
// } else {
//     // Handle the case when input is empty
//     document.write("No input provided.");
// }


// 18
// Initialize the string
// var str = "The quick brown fox jumps over the lazy dog";

// // Convert the string to lower case to make the search case-insensitive
// var lowerCaseStr = str.toLowerCase();

// // Split the string into words using space as a delimiter
// var wordsArray = lowerCaseStr.split(" ");

// // Initialize a counter for the occurrences of "the"
// var count = 0;

// // Loop through the words array and count occurrences of "the"
// for (var i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i] === "the") {
//         count++;
//     }
// }

// // Display the count of occurrences in the browser
// document.write("The word 'the' occurs " + count + " times in the given string.");





            // MATH METHODS

// 1
// Take user input and convert it to a number
// var userInput = parseFloat(prompt("Enter a positive integer:"));

// // Check if the input is a valid number and positive
// if (!isNaN(userInput) && userInput > 0) {
//     // Display the original number
//     document.write("Number: " + userInput + "<br>");

//     // Display the rounded value
//     document.write("Round off value: " + Math.round(userInput) + "<br>");

//     // Display the floor value
//     document.write("Floor value: " + Math.floor(userInput) + "<br>");

//     // Display the ceiling value
//     document.write("Ceil value: " + Math.ceil(userInput) + "<br>");
// } else {
//     // If the input is invalid or not positive
//     document.write("Please enter a valid positive number.");
// }


// 2

// Take user input and convert it to a number
// var userInput = parseFloat(prompt("Enter a negative floating-point number:"));

// // Check if the input is a valid number and negative
// if (!isNaN(userInput) && userInput < 0) {
//     // Display the original number
//     document.write("Number: " + userInput + "<br>");

//     // Display the rounded value
//     document.write("Round off value: " + Math.round(userInput) + "<br>");

//     // Display the floor value
//     document.write("Floor value: " + Math.floor(userInput) + "<br>");

//     // Display the ceiling value
//     document.write("Ceil value: " + Math.ceil(userInput) + "<br>");
// } else {
//     // If the input is invalid or not negative
//     document.write("Please enter a valid negative floating-point number.");
// }


// 3

// Take user input and convert it to a number
// var userInput = parseFloat(prompt("Enter any number (positive or negative):"));

// // Check if the input is a valid number
// if (!isNaN(userInput)) {
//     // Calculate the absolute value using Math.abs()
//     var absoluteValue = Math.abs(userInput);

//     // Display the absolute value
//     document.write("The absolute value of " + userInput + " is " + absoluteValue);
// } else {
//     // If the input is invalid
//     document.write("Please enter a valid number.");
// }


// 4

// Simulate a dice roll
// var diceValue = Math.floor(Math.random() * 6) + 1;

// // Display the value of the dice in the browser
// document.write("You rolled a " + diceValue);


// 5

// Simulate a coin toss
// var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";

// // Display the result of the coin toss in the browser
// document.write("The result of the coin toss is: " + coinToss);


// 6

// Generate a random number between 1 and 100
// var randomNumber = Math.floor(Math.random() * 100) + 1;

// // Display the random number in the browser
// document.write("Random number between 1 and 100: " + randomNumber);


// 7

// Ask the user for their weight
// var userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

// // Extract the numeric part from the input using parseFloat
// var weight = parseFloat(userInput);

// // Check if the weight is a valid number
// if (!isNaN(weight)) {
//     // Display the parsed weight
//     document.write("Your weight is: " + weight + " kilograms.");
// } else {
//     // If the input is invalid
//     document.write("Please enter a valid weight.");
// }



// 8

// Generate a random secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Ask the user to guess the number
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"), 10);

// // Check if the user's guess matches the secret number
// if (userGuess === secretNumber) {
//     document.write("Congratulations! You guessed the secret number: " + secretNumber);
// } else {
//     document.write("Sorry, the secret number was: " + secretNumber);
// }
