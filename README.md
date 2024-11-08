# my-website
# Mica Gambling Game

Mica Gambling is a simple guessing game where users deposit a certain amount and guess a number between 1 and 100. The game allows users to earn or lose money based on their guesses, and it features a persistent balance that is saved even after the page is refreshed.

## Features
- Users can deposit a minimum of 10 birr.
- The user has 6 attempts to guess the correct number between 1 and 100.
- Winning earns the player 10 birr, and losing deducts 10 birr.
- The current balance is stored in the browser's localStorage, so it persists even after the page is refreshed.
- If the balance is less than 10 birr, the user will be unable to continue playing until they deposit more funds.

## Technologies Used
- HTML
- CSS
- JavaScript (localStorage for persisting data)

## How to Play
1. Deposit at least 10 birr.
2. Enter a number between 1 and 100 in the input field.
3. Click the "Guess" button to check if your guess is correct.
4. If your guess is too high or too low, feedback will be given.
5. After 6 attempts, if you haven't guessed the correct number, you lose 10 birr.
6. If your balance is below 10 birr, you can no longer play unless you deposit more.

## Getting Started

To run the Mica Gambling game locally:

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/mica-gambling.git

