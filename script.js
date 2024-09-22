// Motivational quotes array
const quotes = [
    "Don't waste your time; your mother and father are waiting to see your success.",
    "Stay focused, stay humble!",
    "Every step forward gets you closer to your goal!",
    "Believe in yourself, you are stronger than you think!",
    "The harder you work, the luckier you get.",
    "Keep going, your future self will thank you!",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Work hard in silence, let success make the noise!",
    "The only limit to your impact is your imagination and commitment.",
    "Doubt kills more dreams than failure ever will.",
    "Your struggle today is building the strength you need for tomorrow.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "When you feel like quitting, remember why you started.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Great things never come from comfort zones.",
    "Your future is created by what you do today, not tomorrow.",
    "You are stronger than you think.",
    "don't forget why u started.", 
    "prove them wrong",
    "The struggle you're in today is developing the strength you need for tomorrow.",
     "You are stronger than you think; your limits are only in your mind.",
 "Success is not for the chosen few; it is for those who choose to strive for it.",
 "Your greatest glory is not in never falling, but in rising every time you fall.",
 "Pain is temporary; quitting lasts forever.",
 "Do not wait to strike till the iron is hot, but make it hot by striking.",
 "The road to success is dotted with many tempting parking spaces.",
 "Fear is temporary; regret is forever.",
 "Great things never come from comfort zones.",
 "It’s not whether you get knocked down, it’s whetheryou getup.",
    "I have to be successful because i like epensive things", 
   "The pain you feel today is the strength you feel tomorrow.",
"Success is not for the lazy.",
"Don’t limit your challenges; challenge your limits.",
"If you want it, fight for it. Don’t give up.",
"Your only limit is you.",
"Success is what happens after you have survived all your mistakes.",
"Every accomplishment starts with the decision to try.",
"You don’t have to be great to start, but you have to start to be great.",
"Today’s accomplishments were yesterday’s impossibilities.",
"The secret of getting ahead is getting started.",
"You are the artist of your own life. Don’t hand the paintbrush to anyone else.",
"Push yourself, because no one else is going to do it for you.",
"Your dreams don’t have an expiration date. Take a deep breath and try again.",
"Failure is not the opposite of success; it’s part of success." ,
"Do something today that your future self will thank you for.",
"Don’t watch the clock; do what it does Keep going.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"Dream it. Wish it. Do it.",
"Great things never come from comfort zones.",
"Study not just for yourself, but for the dreams your parents have woven into every sacrifice they made for you.",
"Your parents have worked tirelessly to give you the opportunities they never had. Let your studies be the way you thank them.",
"When you study hard, you're not just building your future, you're honoring the love and effort your parents have put into your life.",
"Your mother’s late nights and your father’s early mornings are reflected in the books you hold. Study to make them proud.",
"Every chapter you study brings you closer to repaying the unspoken dreams your parents hold for you.",
"Think of the countless sacrifices your parents made for your education, and let that drive you to give your best.",
"The greatest gift you can give your parents is the success they dream for you. Your dedication to your studies is that gift.",
"Behind every page you turn is the silent prayer of your mother and the quiet encouragement of your father. Keep going, they believe in you.",
"When the journey gets tough, remember who believes in your potential more than anyone else—your parents.",
"Your parents' dreams walk with you into the classroom. Study hard, for their hopes are woven into every lesson you learn.",
];



let currentQuoteIndex = 0;

function showQuote() {
    const dailyQuote = document.getElementById('dailyQuote');
    dailyQuote.textContent = quotes[currentQuoteIndex];
}

function prevQuote() {
    const dailyQuote = document.getElementById('dailyQuote');
    dailyQuote.classList.add('hidden'); // Hide quote
    setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex === 0) ? quotes.length - 1 : currentQuoteIndex - 1;
        showQuote();
        dailyQuote.classList.remove('hidden'); // Show new quote
    }, 500);
}

function nextQuote() {
    const dailyQuote = document.getElementById('dailyQuote');
    dailyQuote.classList.add('hidden'); // Hide quote
    setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex === quotes.length - 1) ? 0 : currentQuoteIndex + 1;
        showQuote();
        dailyQuote.classList.remove('hidden'); // Show new quote
    }, 500);
}

// Initialize with the first quote
window.onload=showQuote;
const quoteElement = document.getElementById("dailyQuote");

function updateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
}

setInterval(updateQuote, 60000); // Change quote every 60 seconds
updateQuote(); // Initial call to set quote

// Goals functionality with localStorage
const goalList = document.getElementById("goalList");
const goalInput = document.getElementById("goalInput");
const addGoalBtn = document.getElementById("addGoalBtn");

let goals = JSON.parse(localStorage.getItem("goals")) || [];

// Function to display goals with alternating layout
function displayGoals() {
    goalList.innerHTML = ""; // Clear the list before updating
    goals.forEach((goal, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = goal;

        // Create a delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = () => {
            goals.splice(index, 1); // Remove the goal from the array
            updateGoals(); // Update the displayed goals and save to localStorage
        };

        listItem.appendChild(deleteBtn);
        
        // Add a class to alternate between left and right alignment
        if (index % 2 === 0) {
            listItem.classList.add("goal-left");
        } else {
            listItem.classList.add("goal-right");
        }
        
        goalList.appendChild(listItem);
    });
}


// Function to update and save goals
function updateGoals() {
    localStorage.setItem("goals", JSON.stringify(goals)); // Save to localStorage
    displayGoals(); // Refresh the display
}

// Add a new goal
addGoalBtn.addEventListener('click', () => {
    const newGoal = goalInput.value.trim();
    if (newGoal) {
        goals.push(newGoal); // Add new goal to array
        goalInput.value = ""; // Clear input field
        updateGoals(); // Save and display updated goals
    }
});

// Initial load
displayGoals();
// Focus Timer
let startTime;
let elapsedTime = 0;
let timerInterval;
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const restartBtn = document.getElementById('restartBtn');
const focusTime = document.getElementById('focusTime');

// Function to format time as HH:MM:SS
function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        focusTime.textContent = formatTime(elapsedTime);
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    restartBtn.disabled = false;
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    restartBtn.disabled = false;
}

// Function to restart the timer
function restartTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    focusTime.textContent = "00:00:00";
    startTimer();
    stopBtn.disabled = false;
    restartBtn.disabled = true; // Disable restart until timer is stopped
}

// Event listeners for the buttons
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
restartBtn.addEventListener('click', restartTimer);


function updateFocusTime() {
    const now = new Date();
    const elapsed = new Date(now - startTime);
    const hours = String(elapsed.getUTCHours()).padStart(2, '0');
    const minutes = String(elapsed.getUTCMinutes()).padStart(2, '0');
    const seconds = String(elapsed.getUTCSeconds()).padStart(2, '0');
    focusTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`; 
}
function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options);
    const time = now.toLocaleTimeString();

    document.getElementById("currentDate").textContent = date;
    document.getElementById("currentTime").textContent = time;
}

// Call the function to set initial date and time
updateDateTime();

// Update time every second
setInterval(updateDateTime, 1000);
