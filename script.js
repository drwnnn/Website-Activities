// ============================================
// DARWIN MARA - WEEK 2 ACTIVITIES
// ============================================

// Activity 1
const showOutputBtn = document.getElementById('showOutputBtn');
if (showOutputBtn) {
    showOutputBtn.addEventListener('click', () => {
        alert('Hello Darwin! Welcome to JavaScript!');
        document.getElementById('output').innerHTML = '<strong>First JavaScript program running!</strong>';
    });
}

// Activity 2
const showVariablesBtn = document.getElementById('showVariablesBtn');
if (showVariablesBtn) {
    showVariablesBtn.addEventListener('click', () => {
        const name = "Darwin";
        const age = 20;
        const isStudent = true;
        const course = "BCSC 2-C";
        
        document.getElementById('variablesOutput').innerHTML = 
            `Name: ${name} | Age: ${age} | Student: ${isStudent} | Course: ${course}`;
    });
}

// Activity 3
const calculateNumbersBtn = document.getElementById('calculateNumbersBtn');
if (calculateNumbersBtn) {
    calculateNumbersBtn.addEventListener('click', () => {
        const num1 = 25;
        const num2 = 7;
        
        const sum = num1 + num2;
        const difference = num1 - num2;
        const product = num1 * num2;
        const quotient = (num1 / num2).toFixed(2);
        
        document.getElementById('calculatorOutput').innerHTML = `
            <strong>Numbers: ${num1} and ${num2}</strong><br>
            ➕ Sum: ${sum}<br>
            ➖ Difference: ${difference}<br>
            ✖️ Product: ${product}<br>
            ➗ Quotient: ${quotient}
        `;
    });
}

// Activity 4
const userInputBtn = document.getElementById('userInputBtn');
if (userInputBtn) {
    userInputBtn.addEventListener('click', () => {
        const name = prompt('What is your name?');
        const hobby = prompt('What is your hobby?');
        
        if (name && hobby) {
            alert(`Hi ${name}! ${hobby} sounds fun!`);
        } else {
            alert('Please share your info!');
        }
    });
}

// Activity 5
const checkAgeBtn = document.getElementById('checkAgeBtn');
if (checkAgeBtn) {
    checkAgeBtn.addEventListener('click', () => {
        const age = document.getElementById('ageInput').value;
        const result = document.getElementById('ageResult');
        
        if (age >= 18) {
            result.innerHTML = '✅ You can vote!';
            result.style.color = '#4ecdc4';
        } else if (age > 0) {
            result.innerHTML = '❌ Too young to vote';
            result.style.color = '#ff6b6b';
        } else {
            result.innerHTML = 'Please enter valid age';
            result.style.color = '#ffe66d';
        }
    });
}

// Activity 6
const loopBtn = document.getElementById('loopBtn');
if (loopBtn) {
    loopBtn.addEventListener('click', () => {
        let numbers = '';
        let evens = '';
        let odds = '';
        
        for (let i = 1; i <= 10; i++) {
            numbers += i + ' ';
            if (i % 2 === 0) evens += i + ' ';
            else odds += i + ' ';
        }
        
        document.getElementById('loopOutput').innerHTML = 
            `<strong>Numbers 1-10:</strong> ${numbers}<br>
             <strong>Even numbers:</strong> ${evens}<br>
             <strong>Odd numbers:</strong> ${odds}`;
    });
}

// Activity 7
const clickMeBtn = document.getElementById('clickMeBtn');
if (clickMeBtn) {
    clickMeBtn.addEventListener('click', () => {
        alert('🎉 Button clicked successfully!');
    });
}

// ============================================
// DARWIN MARA - WEEK 3 ACTIVITIES
// ============================================

// Activity 8
const colorBtn = document.getElementById('colorBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
let isDarkMode = false;

if (colorBtn) {
    colorBtn.addEventListener('click', () => {
        document.body.style.background = '#a8e6cf';
        document.body.style.color = '#1a2639';
        if (darkModeBtn) darkModeBtn.textContent = 'Dark Mode';
        isDarkMode = false;
    });
}

if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        if (!isDarkMode) {
            document.body.style.background = '#1a1a2e';
            document.body.style.color = '#e0e1dd';
            darkModeBtn.textContent = 'Light Mode';
            isDarkMode = true;
        } else {
            document.body.style.background = '#1e2a3a';
            document.body.style.color = '#ecf0f1';
            darkModeBtn.textContent = 'Dark Mode';
            isDarkMode = false;
        }
    });
}

// Activity 9
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');
let darwinItemCount = 2;

if (addItemBtn) {
    addItemBtn.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = 'Darwin\'s item ' + darwinItemCount;
        itemList.appendChild(newItem);
        darwinItemCount++;
    });
}

// Activity 10
const removeParaBtn = document.getElementById('removeParaBtn');
const removableItems = document.getElementsByClassName('removable-item');

if (removeParaBtn) {
    removeParaBtn.addEventListener('click', () => {
        if (removableItems.length > 0) {
            removableItems[removableItems.length - 1].remove();
        } else {
            alert('No more paragraphs!');
        }
    });
}

// Activity 11
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

if (textInput) {
    textInput.addEventListener('input', () => {
        charCount.textContent = textInput.value.length;
    });
}

// Activity 12
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculateBtn');
const resultSpan = document.getElementById('result');

if (calculateBtn) {
    calculateBtn.addEventListener('click', () => {
        const sum = (parseFloat(num1Input.value) || 0) + (parseFloat(num2Input.value) || 0);
        resultSpan.textContent = sum;
    });
}

// Activity 13
const changeImageBtn = document.getElementById('changeImageBtn');
const myImage = document.getElementById('myImage');
let imageIndex = 1;

if (changeImageBtn) {
    changeImageBtn.addEventListener('click', () => {
        if (imageIndex === 1) {
            myImage.src = 'secondpic.jpg';
            myImage.alt = 'Image 2';
            imageIndex = 2;
        } else {
            myImage.src = 'firstpic.jpg';
            myImage.alt = 'Image 1';
            imageIndex = 1;
        }
    });
}

// Activity 14
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Setup delete buttons for existing items
const setupDeleteButton = (btn, item) => {
    btn.addEventListener('click', () => {
        item.remove();
    });
};

if (todoList) {
    const deleteBtns = document.querySelectorAll('.delete-small');
    const listItems = todoList.children;

    for (let i = 0; i < deleteBtns.length; i++) {
        setupDeleteButton(deleteBtns[i], listItems[i]);
    }
}

if (addTodoBtn) {
    addTodoBtn.addEventListener('click', () => {
        const task = todoInput.value.trim();
        
        if (task === '') {
            alert('Please enter a task!');
            return;
        }
        
        const newItem = document.createElement('li');
        newItem.textContent = task + ' ';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✕';
        deleteBtn.className = 'delete-small';
        
        setupDeleteButton(deleteBtn, newItem);
        newItem.appendChild(deleteBtn);
        todoList.appendChild(newItem);
        
        todoInput.value = '';
    });
}

if (todoInput) {
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodoBtn.click();
        }
    });
}

// ============================================
// DARWIN MARA - WEEK 4 GRADE CALCULATOR
// ============================================

// Get Week 4 elements
const quizInput = document.getElementById('quizScore');
const examInput = document.getElementById('examScore');
const mcoInput = document.getElementById('mcoScore');
const calculateGradeBtn = document.getElementById('calculateGradeBtn');
const resetGradeBtn = document.getElementById('resetGradeBtn');
const finalGradeSpan = document.getElementById('finalGrade');
const gradeEquivalentSpan = document.getElementById('gradeEquivalent');

// Calculate grade function
const calculateGrade = () => {
    // Get values and convert to numbers
    const quiz = parseFloat(quizInput.value) || 0;
    const exam = parseFloat(examInput.value) || 0;
    const mco = parseFloat(mcoInput.value) || 0;
    
    // Validate inputs
    if (quiz < 0 || quiz > 100 || exam < 0 || exam > 100 || mco < 0 || mco > 100) {
        alert('Please enter values between 0 and 100 only!');
        return;
    }
    
    // Calculate weighted grade: Quiz(20%) + Exam(30%) + MCO(50%)
    const finalGrade = (quiz * 0.20) + (exam * 0.30) + (mco * 0.50);
    
    // Determine grade equivalent
    let gradeEquivalent = '';
    if (finalGrade >= 90) {
        gradeEquivalent = 'A';
    } else if (finalGrade >= 80) {
        gradeEquivalent = 'B';
    } else if (finalGrade >= 70) {
        gradeEquivalent = 'C';
    } else if (finalGrade >= 60) {
        gradeEquivalent = 'D';
    } else {
        gradeEquivalent = 'F';
    }
    
    // Display results
    finalGradeSpan.textContent = finalGrade.toFixed(2);
    gradeEquivalentSpan.textContent = gradeEquivalent;
    
    // Color code based on grade
    if (gradeEquivalent === 'A') {
        gradeEquivalentSpan.style.color = '#4ecdc4';
    } else if (gradeEquivalent === 'B') {
        gradeEquivalentSpan.style.color = '#3498db';
    } else if (gradeEquivalent === 'C') {
        gradeEquivalentSpan.style.color = '#f1c40f';
    } else if (gradeEquivalent === 'D') {
        gradeEquivalentSpan.style.color = '#e67e22';
    } else {
        gradeEquivalentSpan.style.color = '#e74c3c';
    }
};

// Reset function
const resetCalculator = () => {
    if (quizInput) quizInput.value = '';
    if (examInput) examInput.value = '';
    if (mcoInput) mcoInput.value = '';
    if (finalGradeSpan) finalGradeSpan.textContent = '--';
    if (gradeEquivalentSpan) {
        gradeEquivalentSpan.textContent = '--';
        gradeEquivalentSpan.style.color = '#ecf0f1';
    }
};

// Add event listeners for Week 4
if (calculateGradeBtn) {
    calculateGradeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        calculateGrade();
    });
}

if (resetGradeBtn) {
    resetGradeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resetCalculator();
    });
}

// Input validation to prevent values outside 0-100
const validateGradeInput = (input) => {
    if (input) {
        input.addEventListener('input', () => {
            let value = parseInt(input.value);
            if (value > 100) {
                input.value = 100;
            } else if (value < 0 && input.value !== '') {
                input.value = 0;
            }
        });
    }
};

// Apply validation to all grade inputs
validateGradeInput(quizInput);
validateGradeInput(examInput);
validateGradeInput(mcoInput);

// Set default example values
if (quizInput) quizInput.value = 86;
if (examInput) examInput.value = 81;
if (mcoInput) mcoInput.value = 89;