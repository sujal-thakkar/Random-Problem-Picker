const questions = [
    {
        topic: "Sliding Window",
        title: "Longest Substring Without Repeating Characters",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    {
        topic: "Two Pointers",
        title: "3Sum",
        link: "https://leetcode.com/problems/3sum/"
    },
    {
        topic: "Hashing",
        title: "Two Sum",
        link: "https://leetcode.com/problems/two-sum/"
    },
    {
        topic: "Binary Search",
        title: "Find Minimum in Rotated Sorted Array",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
    }
];

let completedQuestions = JSON.parse(localStorage.getItem('completedQuestions')) || [];
let currentQuestion = null;

function saveLocalData() {
    localStorage.setItem('completedQuestions', JSON.stringify(completedQuestions));
}

function pickRandomQuestion() {
    // Get only questions that haven't been completed
    const uncompletedQuestions = questions.filter(q => !completedQuestions.includes(q.title));

    if (uncompletedQuestions.length === 0) {
        showCompletionMessage();
        return;
    }

    // Pick a random uncompleted question
    const randomIndex = Math.floor(Math.random() * uncompletedQuestions.length);
    currentQuestion = uncompletedQuestions[randomIndex];

    document.getElementById('questionBox').innerHTML = `
    <h3><a href="${currentQuestion.link}" target="_blank">${currentQuestion.title}</a></h3>
    <label>
      <input type="checkbox" onchange="toggleDone('${currentQuestion.title}', this.checked)">
      Mark as done
    </label>
  `;

    updateProgress();
}

function toggleDone(title, isChecked) {
    if (isChecked) {
        if (!completedQuestions.includes(title)) {
            completedQuestions.push(title);
        }
    } else {
        completedQuestions = completedQuestions.filter(t => t !== title);
    }
    saveLocalData();
    renderCompleted();
    updateProgress();

    // Check if this was the last question
    if (isChecked && completedQuestions.length === questions.length) {
        showCompletionMessage();
    } else if (isChecked) {
        // Auto-pick another question
        pickRandomQuestion();
    }
}

function showCompletionMessage() {
    document.getElementById('questionBox').innerHTML = `
    <div class="celebration">🎉 All questions completed! 🎉</div>
    <p>Great job! You've completed all available questions.</p>
  `;
}

function renderCompleted() {
    const list = document.getElementById('completedList');
    list.innerHTML = '';

    if (completedQuestions.length === 0) {
        list.innerHTML = '<p>No completed questions yet.</p>';
        return;
    }

    completedQuestions.forEach(title => {
        const question = questions.find(q => q.title === title);
        if (question) {
            const li = document.createElement('li');
            li.className = 'completed-item';
            li.innerHTML = `
        <input type="checkbox" checked onchange="toggleDone('${title}', this.checked)" style="margin-right: 8px;">
        <a href="${question.link}" target="_blank" class="completed">${title}</a>
      `;
            list.appendChild(li);
        }
    });
}

function updateProgress() {
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
    const percentage = questions.length > 0 ? (completedQuestions.length / questions.length) * 100 : 0;

    progressText.textContent = `${completedQuestions.length} / ${questions.length}`;
    progressFill.style.width = `${percentage}%`;
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
        completedQuestions = [];
        currentQuestion = null;
        saveLocalData();
        renderCompleted();
        updateProgress();
        document.getElementById('questionBox').innerHTML = '<p>Click the button to get a random DSA question.</p>';
    }
}

// Initial render
renderCompleted();
updateProgress();

// Check if all questions are completed on page load
if (completedQuestions.length === questions.length) {
    showCompletionMessage();
}