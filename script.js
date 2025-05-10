let questions = [];
let completedQuestions = [];
let currentQuestion = null;

// NeetCode topics mapping - slug to topic name
const neetcodeTopics = {
    "two-sum": "Arrays & Hashing",
    "valid-anagram": "Arrays & Hashing",
    "contains-duplicate": "Arrays & Hashing",
    "group-anagrams": "Arrays & Hashing",
    "top-k-frequent-elements": "Arrays & Hashing",
    "product-of-array-except-self": "Arrays & Hashing",
    "valid-sudoku": "Arrays & Hashing",
    "longest-consecutive-sequence": "Arrays & Hashing",
    "encode-and-decode-strings": "Arrays & Hashing",
    "valid-palindrome": "Two Pointers",
    "two-sum-ii-input-array-is-sorted": "Two Pointers",
    "3sum": "Two Pointers",
    "container-with-most-water": "Two Pointers",
    "trapping-rain-water": "Two Pointers",
    "best-time-to-buy-and-sell-stock": "Sliding Window",
    "longest-substring-without-repeating-characters": "Sliding Window",
    "longest-repeating-character-replacement": "Sliding Window",
    "permutation-in-string": "Sliding Window",
    "minimum-window-substring": "Sliding Window",
    "sliding-window-maximum": "Sliding Window",
    "valid-parentheses": "Stack",
    "min-stack": "Stack",
    "evaluate-reverse-polish-notation": "Stack",
    "generate-parentheses": "Stack",
    "daily-temperatures": "Stack",
    "car-fleet": "Stack",
    "largest-rectangle-in-histogram": "Stack",
    "binary-search": "Binary Search",
    "search-a-2d-matrix": "Binary Search",
    "koko-eating-bananas": "Binary Search",
    "find-minimum-in-rotated-sorted-array": "Binary Search",
    "search-in-rotated-sorted-array": "Binary Search",
    "time-based-key-value-store": "Binary Search",
    "median-of-two-sorted-arrays": "Binary Search",
    "reverse-linked-list": "Linked List",
    "merge-two-sorted-lists": "Linked List",
    "reorder-list": "Linked List",
    "remove-nth-node-from-end-of-list": "Linked List",
    "copy-list-with-random-pointer": "Linked List",
    "add-two-numbers": "Linked List",
    "linked-list-cycle": "Linked List",
    "find-the-duplicate-number": "Linked List",
    "lru-cache": "Linked List",
    "merge-k-sorted-lists": "Linked List",
    "reverse-nodes-in-k-group": "Linked List",
    "invert-binary-tree": "Trees",
    "maximum-depth-of-binary-tree": "Trees",
    "diameter-of-binary-tree": "Trees",
    "balanced-binary-tree": "Trees",
    "same-tree": "Trees",
    "subtree-of-another-tree": "Trees",
    "lowest-common-ancestor-of-a-binary-search-tree": "Trees",
    "binary-tree-level-order-traversal": "Trees",
    "binary-tree-right-side-view": "Trees",
    "count-good-nodes-in-binary-tree": "Trees",
    "validate-binary-search-tree": "Trees",
    "kth-smallest-element-in-a-bst": "Trees",
    "construct-binary-tree-from-preorder-and-inorder-traversal": "Trees",
    "binary-tree-maximum-path-sum": "Trees",
    "serialize-and-deserialize-binary-tree": "Trees",
    "implement-trie-prefix-tree": "Tries",
    "design-add-and-search-words-data-structure": "Tries",
    "word-search-ii": "Tries",
    "find-median-from-data-stream": "Heap / Priority Queue",
    "last-stone-weight": "Heap / Priority Queue",
    "k-closest-points-to-origin": "Heap / Priority Queue",
    "kth-largest-element-in-an-array": "Heap / Priority Queue",
    "task-scheduler": "Heap / Priority Queue",
    "design-twitter": "Heap / Priority Queue",
    "subsets": "Backtracking",
    "combination-sum": "Backtracking",
    "permutations": "Backtracking",
    "subsets-ii": "Backtracking",
    "combination-sum-ii": "Backtracking",
    "word-search": "Backtracking",
    "palindrome-partitioning": "Backtracking",
    "letter-combinations-of-a-phone-number": "Backtracking",
    "n-queens": "Backtracking",
    "number-of-islands": "Graphs",
    "clone-graph": "Graphs",
    "max-area-of-island": "Graphs",
    "pacific-atlantic-water-flow": "Graphs",
    "surrounded-regions": "Graphs",
    "rotting-oranges": "Graphs",
    "walls-and-gates": "Graphs",
    "course-schedule": "Graphs",
    "course-schedule-ii": "Graphs",
    "redundant-connection": "Graphs",
    "number-of-connected-components-in-an-undirected-graph": "Graphs",
    "graph-valid-tree": "Graphs",
    "word-ladder": "Graphs",
    "reconstruct-itinerary": "Advanced Graphs",
    "min-cost-to-connect-all-points": "Advanced Graphs",
    "network-delay-time": "Advanced Graphs",
    "swim-in-rising-water": "Advanced Graphs",
    "alien-dictionary": "Advanced Graphs",
    "cheapest-flights-within-k-stops": "Advanced Graphs",
    "climbing-stairs": "1D Dynamic Programming",
    "min-cost-climbing-stairs": "1D Dynamic Programming",
    "house-robber": "1D Dynamic Programming",
    "house-robber-ii": "1D Dynamic Programming",
    "longest-palindromic-substring": "1D Dynamic Programming",
    "palindromic-substrings": "1D Dynamic Programming",
    "decode-ways": "1D Dynamic Programming",
    "coin-change": "1D Dynamic Programming",
    "maximum-product-subarray": "1D Dynamic Programming",
    "word-break": "1D Dynamic Programming",
    "longest-increasing-subsequence": "1D Dynamic Programming",
    "partition-equal-subset-sum": "1D Dynamic Programming",
    "unique-paths": "2D Dynamic Programming",
    "longest-common-subsequence": "2D Dynamic Programming",
    "best-time-to-buy-and-sell-stock-with-cooldown": "2D Dynamic Programming",
    "coin-change-ii": "2D Dynamic Programming",
    "target-sum": "2D Dynamic Programming",
    "interleaving-string": "2D Dynamic Programming",
    "longest-increasing-path-in-a-matrix": "2D Dynamic Programming",
    "distinct-subsequences": "2D Dynamic Programming",
    "edit-distance": "2D Dynamic Programming",
    "burst-balloons": "2D Dynamic Programming",
    "regular-expression-matching": "2D Dynamic Programming",
    "maximum-subarray": "Greedy",
    "jump-game": "Greedy",
    "jump-game-ii": "Greedy",
    "gas-station": "Greedy",
    "hand-of-straights": "Greedy",
    "merge-triplets-to-form-target-triplet": "Greedy",
    "partition-labels": "Greedy",
    "valid-parenthesis-string": "Greedy",
    "insert-interval": "Intervals",
    "merge-intervals": "Intervals",
    "non-overlapping-intervals": "Intervals",
    "meeting-rooms": "Intervals",
    "meeting-rooms-ii": "Intervals",
    "minimum-interval-to-include-each-query": "Intervals",
    "rotate-image": "Math & Geometry",
    "spiral-matrix": "Math & Geometry",
    "set-matrix-zeroes": "Math & Geometry",
    "happy-number": "Math & Geometry",
    "plus-one": "Math & Geometry",
    "pow-x-n": "Math & Geometry",
    "multiply-strings": "Math & Geometry",
    "detect-squares": "Math & Geometry",
    "single-number": "Bit Manipulation",
};

// Load data from localStorage on page load
window.onload = function () {
    loadData();
    updateTheme();
    updateProgressBar();
};

// Load saved data from localStorage
function loadData() {
    const savedQuestions = localStorage.getItem('dsaQuestions');
    const savedCompletedQuestions = localStorage.getItem('dsaCompletedQuestions');

    if (savedQuestions) {
        questions = JSON.parse(savedQuestions);
    }

    if (savedCompletedQuestions) {
        completedQuestions = JSON.parse(savedCompletedQuestions);
    }

    updateCompletedList();
    updateProgressBar();
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('dsaQuestions', JSON.stringify(questions));
    localStorage.setItem('dsaCompletedQuestions', JSON.stringify(completedQuestions));
}

// Pick a random question from the list
function pickRandomQuestion() {
    // Filter out completed questions
    const availableQuestions = questions.filter(q =>
        !completedQuestions.some(cq => cq.url === q.url)
    );

    if (availableQuestions.length === 0) {
        if (questions.length === 0) {
            document.getElementById('questionBox').innerHTML = `
                        <p>No questions available. Add some problems first!</p>
                    `;
        } else {
            document.getElementById('questionBox').innerHTML = `
                        <p class="congo-para">Congratulations! You've completed all questions.</p>
                        <div class="celebration">🎉🎊🎉</div>
                    `;
        }
        return;
    }

    // Pick a random question from available ones
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[randomIndex];

    // Display the question (without revealing the topic)
    document.getElementById('questionBox').innerHTML = `
                <h2>${currentQuestion.title}</h2>
                <p><a href="${currentQuestion.url}" target="_blank">Open problem in LeetCode</a></p>
                <button onclick="markAsCompleted(currentQuestion)">Mark as Completed</button>
            `;
}

// Mark a question as completed
function markAsCompleted(question) {
    if (!question) return;

    if (!completedQuestions.some(q => q.url === question.url)) {
        completedQuestions.push(question);
        saveData();
        updateCompletedList();
        updateProgressBar();

        // Show success message in question box
        document.getElementById('questionBox').innerHTML = `
                    <p>Question marked as completed! 🎉</p>
                    <button onclick="pickRandomQuestion()">Pick Another Question</button>
                `;
    }
}

// Mark a question as incomplete (remove from completed list)
function markAsIncomplete(url) {
    completedQuestions = completedQuestions.filter(q => q.url !== url);
    saveData();
    updateCompletedList();
    updateProgressBar();
}

// Update the completed questions list
function updateCompletedList() {
    const completedList = document.getElementById('completedList');
    completedList.innerHTML = '';

    if (completedQuestions.length === 0) {
        completedList.innerHTML = '<li>No completed questions yet.</li>';
        return;
    }

    // Sort completed questions by completion date (if available)
    completedQuestions.sort((a, b) => {
        if (a.completedDate && b.completedDate) {
            return new Date(b.completedDate) - new Date(a.completedDate);
        }
        return 0;
    });

    // Add each completed question to the list with its topic
    for (const question of completedQuestions) {
        const listItem = document.createElement('li');
        listItem.className = 'completed-item';

        // Include the topic tag only in the completed list
        listItem.innerHTML = `
                    <span class="completed-title">${question.title}</span>
                    <span class="topic-tag">${question.topic || 'Other'}</span>
                    <button onclick="markAsIncomplete('${question.url}')" 
                            style="margin-left: 10px; background-color: var(--danger-color); padding: 2px 8px; font-size: 12px;">
                        Remove
                    </button>
                `;
        completedList.appendChild(listItem);
    }
}

// Update progress bar
function updateProgressBar() {
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');

    const total = questions.length;
    const completed = completedQuestions.length;
    const percentage = total > 0 ? (completed / total) * 100 : 0;

    progressText.textContent = `${completed}/${total}`;
    progressFill.style.width = `${percentage}%`;
}

// Search questions
function searchQuestions() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        searchResults.style.display = 'none';
        return;
    }

    // Filter questions based on search term
    const filteredQuestions = questions.filter(q =>
        q.title.toLowerCase().includes(searchTerm)
    );

    // Display search results
    searchResults.innerHTML = '';

    if (filteredQuestions.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
    } else {
        for (const question of filteredQuestions) {
            const isCompleted = completedQuestions.some(q => q.url === question.url);

            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';

            // Create the title element
            const titleElement = document.createElement('div');
            titleElement.className = 'search-result-title';
            titleElement.textContent = question.title;

            // Create the button element
            const buttonElement = document.createElement('button');
            buttonElement.className = `mark-done-btn ${isCompleted ? 'completed' : ''}`;
            buttonElement.textContent = isCompleted ? 'Mark Incomplete' : 'Mark Complete';

            // Add event listener to the button
            buttonElement.addEventListener('click', function () {
                if (isCompleted) {
                    markAsIncomplete(question.url);
                } else {
                    markAsCompleted(question);
                }
                // Close search results after action
                searchResults.style.display = 'none';
                searchInput.value = '';
            });

            // Append elements to the result item
            resultItem.appendChild(titleElement);
            resultItem.appendChild(buttonElement);
            searchResults.appendChild(resultItem);
        }
    }

    searchResults.style.display = 'block';
}

// Add a custom problem
function addCustomProblem() {
    const problemUrl = document.getElementById('problemUrl').value.trim();
    const statusElement = document.getElementById('addProblemStatus');

    if (!problemUrl) {
        showStatus('Please enter a LeetCode problem URL', 'error');
        return;
    }

    // Validate LeetCode URL
    if (!problemUrl.includes('leetcode.com/problems/')) {
        showStatus('Please enter a valid LeetCode problem URL', 'error');
        return;
    }

    // Check for duplicates
    if (questions.some(q => q.url === problemUrl)) {
        showStatus('This problem is already in your list', 'error');
        return;
    }

    // Extract problem slug from URL
    // Format: https://leetcode.com/problems/two-sum/
    try {
        const urlParts = problemUrl.split('/');
        const problemIndex = urlParts.indexOf('problems');

        if (problemIndex === -1 || problemIndex + 1 >= urlParts.length) {
            throw new Error('Invalid URL format');
        }

        const problemSlug = urlParts[problemIndex + 1];

        if (!problemSlug) {
            throw new Error('Could not extract problem slug');
        }

        // Generate a title from the slug
        let title = problemSlug.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');

        // Determine topic from NeetCode mapping
        let topic = 'Other';
        if (neetcodeTopics[problemSlug]) {
            topic = neetcodeTopics[problemSlug];
        }

        // Add the problem to the list
        const newProblem = {
            title: title,
            url: problemUrl,
            topic: topic,
            addedDate: new Date().toISOString()
        };

        questions.push(newProblem);
        saveData();
        updateProgressBar();

        // Clear input and show success message
        document.getElementById('problemUrl').value = '';
        showStatus('Problem added successfully!', 'success');
    } catch (error) {
        showStatus('Error processing URL. Please check the format.', 'error');
        console.error(error);
    }
}

// Show status message
function showStatus(message, type) {
    const statusElement = document.getElementById('addProblemStatus');
    statusElement.textContent = message;
    statusElement.className = type;

    // Clear status after 3 seconds
    setTimeout(() => {
        statusElement.className = '';
        statusElement.textContent = '';
    }, 3000);
}

// Reset progress (clear completed questions)
function resetProgress() {
    if (confirm('Are you sure you want to reset your progress? This will clear all completed questions.')) {
        completedQuestions = [];
        saveData();
        updateCompletedList();
        updateProgressBar();
        document.getElementById('questionBox').innerHTML = '<p>Progress has been reset. Click the button to get a random question.</p>';
    }
}

// Theme toggle functionality
document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    updateThemeIcon();

    // Save theme preference
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});

// Update theme icon based on current mode
function updateThemeIcon() {
    const themeIcon = document.getElementById('themeToggle').querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Check and apply saved theme preference
function updateTheme() {
    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    updateThemeIcon();
}