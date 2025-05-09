const questions = [
    // Arrays & Hashing:-
    {
        title: "Contains Duplicate",
        link: "https://leetcode.com/problems/contains-duplicate/"
    },
    {
        title: "Valid Anagram",
        link: "https://leetcode.com/problems/valid-anagram/"
    },
    {
        title: "Two Sum",
        link: "https://leetcode.com/problems/two-sum/"
    },
    {
        title: "Group Anagrams",
        link: "https://leetcode.com/problems/group-anagrams/"
    },
    {
        title: "Top K Frequent Elements",
        link: "https://leetcode.com/problems/top-k-frequent-elements/"
    },
    {
        title: "Encode and Decode Strings",
        link: "https://neetcode.io/problems/string-encode-and-decode/"
    },
    {
        title: "Product of Array Except Self",
        link: "https://leetcode.com/problems/product-of-array-except-self/"
    },
    {
        title: "Valid Sudoku",
        link: "https://leetcode.com/problems/valid-sudoku/"
    },
    {
        title: "Longest Consecutive Sequence",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/"
    },
    // Two Pointers:-
    {
        title: "Valid Palindrome",
        link: "https://leetcode.com/problems/valid-palindrome/"
    },
    {
        title: "Two Sum II Input Array Is Sorted",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
    },
    {
        title: "3Sum",
        link: "https://leetcode.com/problems/3sum/"
    },
    {
        title: "Container With Most Water",
        link: "https://leetcode.com/problems/container-with-most-water/"
    },
    {
        title: "Trapping Rain Water",
        link: "https://leetcode.com/problems/trapping-rain-water/"
    },
    // Sliding Window:-
    {
        title: "Best Time to Buy And Sell Stock",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
    },
    {
        title: "Longest Substring Without Repeating Characters",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    {
        title: "Longest Repeating Character Replacement",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/"
    },
    {
        title: "Permutation In String",
        link: "https://leetcode.com/problems/permutation-in-string/"
    },
    {
        title: "Minimum Window Substring",
        link: "https://leetcode.com/problems/minimum-window-substring/"
    },
    {
        title: "Sliding Window Maximum",
        link: "https://leetcode.com/problems/sliding-window-maximum/"
    },
    // Stack:-
    {
        title: "Valid Parentheses",
        link: "https://leetcode.com/problems/valid-parentheses/"
    },
    {
        title: "Min Stack",
        link: "https://leetcode.com/problems/min-stack/"
    },
    {
        title: "Evaluate Reverse Polish Notation",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
    },
    {
        title: "Generate Parentheses",
        link: "https://leetcode.com/problems/generate-parentheses/"
    },
    {
        title: "Daily Temperatures",
        link: "https://leetcode.com/problems/daily-temperatures/"
    },
    {
        title: "Car Fleet",
        link: "https://leetcode.com/problems/car-fleet/"
    },
    {
        title: "Largest Rectangle In Histogram",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/"
    },
    // Binary Search:-
    /* {
        title: "Binary Search",
        link: "https://leetcode.com/problems/binary-search/"
    },
    {
        title: "Search a 2D Matrix",
        link: "https://leetcode.com/problems/search-a-2d-matrix/"
    },
    {
        title: "Koko Eating Bananas",
        link: "https://leetcode.com/problems/koko-eating-bananas/"
    },
    {
        title: "Find Minimum In Rotated Sorted Array",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
    },
    {
        title: "Search In Rotated Sorted Array",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
    },
    {
        title: "Time Based Key Value Store",
        link: "https://leetcode.com/problems/time-based-key-value-store/"
    },
    {
        title: "Median of Two Sorted Arrays",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
    }, */
];

// Store current question between sessions
let completedQuestions = JSON.parse(localStorage.getItem('completedQuestions')) || [];
let currentQuestion = JSON.parse(localStorage.getItem('currentQuestion')) || null;

function saveLocalData() {
    localStorage.setItem('completedQuestions', JSON.stringify(completedQuestions));
    localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
}

function pickRandomQuestion() {
    const uncompletedQuestions = questions.filter(q => !completedQuestions.includes(q.title));
    
    if (uncompletedQuestions.length === 0) {
        showCompletionMessage();
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * uncompletedQuestions.length);
    currentQuestion = uncompletedQuestions[randomIndex];
    
    displayCurrentQuestion();
    saveLocalData();
}

function displayCurrentQuestion() {
    if (!currentQuestion) {
        document.getElementById('questionBox').innerHTML = `
            <p>Click the button to get a random DSA question.</p>
        `;
        return;
    }
    
    document.getElementById('questionBox').innerHTML = `
        <h3><a href="${currentQuestion.link}" target="_blank">${currentQuestion.title}</a></h3>
        <label>
            <input type="checkbox" ${completedQuestions.includes(currentQuestion.title) ? 'checked' : ''} 
                onchange="toggleDone('${currentQuestion.title}', this.checked)">
            Mark as done
        </label>
    `;
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
    
    if (isChecked && completedQuestions.length === questions.length) {
        showCompletionMessage();
    } else if (isChecked && currentQuestion && currentQuestion.title === title) {
        pickRandomQuestion();
    }
}

function showCompletionMessage() {
    document.getElementById('questionBox').innerHTML = `
        <div class="celebration">🎉 All questions completed! 🎉</div>
        <p>Great job! You've completed all available questions.</p>
    `;
    currentQuestion = null;
    saveLocalData();
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
        hideSearchResults();
    }
}

function searchQuestions() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput) {
        hideSearchResults();
        return;
    }
    
    const filteredQuestions = questions.filter(q => 
        q.title.toLowerCase().includes(searchInput)
    );
    
    if (filteredQuestions.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No matching questions found.</div>';
        searchResults.style.display = 'block';
        return;
    }
    
    let resultsHTML = '';
    
    filteredQuestions.forEach(question => {
        const isCompleted = completedQuestions.includes(question.title);
        resultsHTML += `
            <div class="search-result-item">
                <input type="checkbox" ${isCompleted ? 'checked' : ''} 
                    onchange="toggleDone('${question.title}', this.checked)" style="margin-right: 8px;">
                <a href="${question.link}" target="_blank" class="search-result-title ${isCompleted ? 'completed' : ''}">${question.title}</a>
                <button class="mark-done-btn ${isCompleted ? 'completed' : ''}" 
                    onclick="setAsCurrentQuestion('${question.title}')">
                    ${isCompleted ? 'Unmark' : 'Set as Current'}
                </button>
            </div>
        `;
    });
    
    searchResults.innerHTML = resultsHTML;
    searchResults.style.display = 'block';
}

function hideSearchResults() {
    document.getElementById('searchResults').style.display = 'none';
}

function setAsCurrentQuestion(title) {
    const question = questions.find(q => q.title === title);
    if (question) {
        currentQuestion = question;
        displayCurrentQuestion();
        saveLocalData();
        hideSearchResults();
        document.getElementById('searchInput').value = '';
    }
}

// Initialize on page load
renderCompleted();
updateProgress();
displayCurrentQuestion();

// Hide search results when clicking outside
document.addEventListener('click', function(event) {
    const searchResults = document.getElementById('searchResults');
    const searchInput = document.getElementById('searchInput');
    
    if (event.target !== searchResults && 
        event.target !== searchInput && 
        !searchResults.contains(event.target)) {
        hideSearchResults();
    }
});