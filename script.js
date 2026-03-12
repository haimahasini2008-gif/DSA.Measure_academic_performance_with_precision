// Function triggered when the user clicks the "Calculate Performance" button
function calculatePerformance() {
    // 1. Get the student name from the text input field
    const studentName = document.getElementById('studentName').value.trim();
    
    // Check if the student name is empty
    if (!studentName) {
        alert("Please enter a student name.");
        return; // Stop the function here
    }

    // 2. Get marks from the 5 subject input fields and parse them into numbers
    // The || 0 ensures that if the field is left empty, it counts as 0 marks
    const sub1 = parseInt(document.getElementById('subject1').value) || 0;
    const sub2 = parseInt(document.getElementById('subject2').value) || 0;
    const sub3 = parseInt(document.getElementById('subject3').value) || 0;
    const sub4 = parseInt(document.getElementById('subject4').value) || 0;
    const sub5 = parseInt(document.getElementById('subject5').value) || 0;

    // Check if any mark exceeds the maximum allowed (100)
    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert("Marks cannot exceed 100 per subject.");
        return;
    }

    // 3. Calculate the total marks and average marks
    const totalMarks = sub1 + sub2 + sub3 + sub4 + sub5;
    const averageMarks = totalMarks / 5; // Divided by 5 subjects

    // 4. Determine the Grade and Performance Tip using logical conditions
    let grade = "";
    let tip = "";

    // Grade Calculation Logic
    if (averageMarks >= 90) {
        grade = "A";
        tip = "Excellent work! Keep challenging yourself.";
    } else if (averageMarks >= 80) {
        grade = "B";
        tip = "Great job! With a little more practice, you can reach the top.";
    } else if (averageMarks >= 70) {
        grade = "C";
        tip = "Good effort! Try reviewing difficult topics daily.";
    } else if (averageMarks >= 60) {
        grade = "D";
        tip = "You can improve! Practice consistently and ask for help when needed.";
    } else {
        grade = "F";
        tip = "Don't give up! Focus on fundamentals and study step by step.";
    }

    // 5. Select a random motivational quote from a predefined array
    const quotes = [
        "Success is the sum of small efforts repeated daily.",
        "Your only limit is your determination.",
        "Dream big and work hard.",
        "Education is the most powerful weapon you can use to change the world."
    ];
    
    // Pick a random array index based on the number of available quotes
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // 6. Display the calculated data inside the output section
    const resultSection = document.getElementById('resultSection');
    
    // Use template literals (backticks ` ) to inject variables directly into the HTML
    resultSection.innerHTML = `
        <div class="result-item"><strong>Student Name:</strong> ${studentName}</div>
        <div class="result-item"><strong>Total Marks:</strong> ${totalMarks} / 500</div>
        <div class="result-item"><strong>Average Marks:</strong> ${averageMarks.toFixed(2)}</div>
        <div class="result-item"><strong>Grade:</strong> ${grade}</div>
        <div class="tip">💡 <strong>Performance Tip:</strong> ${tip}</div>
        <div class="quote">🌟 <em>"${randomQuote}"</em></div>
    `;

    // Make the result section visible by removing the 'hidden' CSS class
    resultSection.classList.remove('hidden');
}
