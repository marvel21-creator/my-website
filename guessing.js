let currentBalance = document.getElementById("currentBalance");
        let result = document.getElementById("res");
        let depositBtn = document.getElementById("depositBtn");
        let attempts = 0;
        let balance = 0;
        let guess;
        let guessBtn = document.getElementById("guessBtn");
        
      /* ensure that the user's current balance persists even after refreshing the page, 
      you can use localStorage to store and retrieve the balance. 
      This way, the balance will remain consistent across page reloads. */

        if (localStorage.getItem("balance")) {
            balance = parseInt(localStorage.getItem("balance"));
            currentBalance.textContent = `Current Balance: ${balance} birr`;
            guessBtn.disabled = balance < 10; // Disable button if balance is less than 10
        }


        //depositBtn function with validation
        depositBtn.onclick = function() {
            let deposit = parseInt(document.getElementById("depositInput").value);
            if (isNaN(deposit) || deposit < 10) {
                result.textContent = "Please deposit a minimum of 10 birr.";
            } else {
               
                balance += deposit;
                localStorage.setItem("balance", balance); // Save updated balance to localStorage
                currentBalance.textContent = `current balance(ያለዎት ሂሳብ): ${balance}`;
                guessBtn.disabled = false;
                result.textContent = "";
                //reset game here 
                resetGame();
            }
        }
        
        function won() {
            result.textContent = "you won(አሸንፈዋል)✅! +10 birr";
        }
        
        function lost() {
            result.textContent = "You Lost(ተሸንፈዋል) ❌! -10 birr";
        }
        
        setTimeout(resetGame, 4000);
        
        function resetGame() {
            guess = Math.floor(Math.random() * 100 + 1);
            console.log(guess);
            result.textContent = "";
        }
        
        //guessBtn function with validation
        guessBtn.onclick = function() {
            let input = parseInt(document.getElementById("input").value);
            console.log(input);
            if (isNaN(input) || input < 1 || input > 100) {
                result.textContent = "please enter between 1 and 100";
            } else {
                result.textContent = " ";
                attempts++;
        
                if (input === guess) {
                    result.textContent = "you won(አሸንፈዋል) +10 birr";
                    balance += 10;
                    localStorage.setItem("balance", balance); // Update balance in localStorage
                    currentBalance.textContent = `current balance: ${balance}`;
                    won();
                    setTimeout(resetGame, 3000);
                } else if (input > guess) {
                    result.textContent = `Too High, remaining attempts ${6 - attempts}`;
                } else if (input < guess) {
                    result.textContent = `Too Low, remaining attempts ${6 - attempts}`;
                }
        
                if (attempts === 6) {
                    if (input !== guess) {
                        balance -= 10;
                        localStorage.setItem("balance", balance); // Update balance in localStorage
                        currentBalance.textContent = `current balance: ${balance}`;
                        lost();
                       
                        if (balance < 10) {
                            result.textContent = "Your balance is now insufficient to continue playing. Please deposit more to play again.";
                            depositBtn.disabled = true; // Disable the deposit button
                        } else {
                           // Reset the game for a new round
                           setTimeout(resetGame, 3000); 
                        }
                    }
                }
            }
        }