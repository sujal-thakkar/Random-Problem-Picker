let questions = [];
let completedQuestions = [];
let currentQuestion = null;
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

function getSlugFromUrl(url) {
    try {
        const parsedUrl = new URL(url);
        let slug = null;

        if (parsedUrl.hostname.includes("leetcode.com") || parsedUrl.hostname.includes("neetcode.io")) {
            const match = parsedUrl.pathname.match(/problems\/([^\/]+)\/?/);
            slug = match ? match[1] : null;
        }

        if (!slug) return null;

        // Normalize known mismatches between NeetCode and LeetCode
        const slugMap = {
            "string-encode-and-decode": "encode-and-decode-strings",
            "task-scheduling": "task-scheduler",
            "max-consecutive-ones-iii": "longest-substring-without-repeating-characters",
            "array-nesting": "product-of-array-except-self"
            // You can extend this as you encounter more mismatches
        };

        return slugMap[slug] || slug;
    } catch (e) {
        console.error("Invalid URL:", url);
        return null;
    }
}


// Tab switching functionality
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons and tab contents
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Show corresponding tab content
            const tabId = this.getAttribute('data-tab') + 'Tab';
            document.getElementById(tabId).classList.add('active');

            // If switching to the problem list tab, update the problem list
            if (tabId === 'problemListTab') {
                updateProblemList();
                populateTopicFilter();
            }
        });
    });
});

window.onload = function () {
    loadData();
    updateTheme();
    updateProgressBar();

    // Initialize tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

            this.classList.add('active');
            const tabId = this.getAttribute('data-tab') + 'Tab';
            document.getElementById(tabId).classList.add('active');

            if (tabId === 'problemListTab') {
                updateProblemList();
                populateTopicFilter();
            }
        });
    });

    // Initialize the problem list
    updateProblemList();
    populateTopicFilter();
};

function loadData() {
    const savedQuestions = localStorage.getItem("dsaQuestions");
    const savedCompletedQuestions = localStorage.getItem("dsaCompletedQuestions");
    if (savedQuestions) {
        questions = JSON.parse(savedQuestions);
    }
    if (savedCompletedQuestions) {
        completedQuestions = JSON.parse(savedCompletedQuestions);
    }
    updateCompletedList();
    updateProgressBar();
}

function saveData() {
    localStorage.setItem("dsaQuestions", JSON.stringify(questions));
    localStorage.setItem("dsaCompletedQuestions", JSON.stringify(completedQuestions));
}

function pickRandomQuestion() {
    const availableQuestions = questions.filter(
        (q) => !completedQuestions.some((cq) => cq.url === q.url)
    );
    if (availableQuestions.length === 0) {
        if (questions.length === 0) {
            document.getElementById("questionBox").innerHTML = `
                <p>No questions available. Add some problems first!</p>
            `;
        } else {
            document.getElementById("questionBox").innerHTML = `
                <p class="congo-para">Congratulations! You've completed all questions.</p>
                <div class="celebration">🎉🎊🎉</div>
            `;
        }
        return;
    }
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[randomIndex];
    document.getElementById("questionBox").innerHTML = `
        <h2>${currentQuestion.title}</h2>
        <p style="margin: 35px 0px;"><a href="${currentQuestion.url}" target="_blank">Open problem in LeetCode</a></p>
        <button onclick="markAsCompleted(currentQuestion)">Mark as Completed</button>
    `;
}

function markAsCompleted(question) {
    if (!question) return;
    if (!completedQuestions.some((q) => q.url === question.url)) {
        const completedQuestion = {
            ...question,
            completedDate: new Date().toISOString(),
        };
        completedQuestions.push(completedQuestion);
        saveData();
        updateCompletedList();
        updateProgressBar();
        document.getElementById("questionBox").innerHTML = `
            <p>Question marked as completed! 🎉</p>
            <button onclick="pickRandomQuestion()">Pick Another Question</button>
        `;
    }
}

function markAsIncomplete(url) {
    completedQuestions = completedQuestions.filter((q) => q.url !== url);
    saveData();
    updateCompletedList();
    updateProgressBar();
    updateProblemList(); // Update problem list to reflect changes
}

function updateCompletedList() {
    const completedList = document.getElementById("completedList");
    completedList.innerHTML = "";
    if (completedQuestions.length === 0) {
        completedList.innerHTML = "<li>No completed questions yet.</li>";
        return;
    }
    completedQuestions.sort((a, b) => {
        if (a.completedDate && b.completedDate) {
            return new Date(b.completedDate) - new Date(a.completedDate);
        }
        return 0;
    });
    for (const question of completedQuestions) {
        const listItem = document.createElement("li");
        listItem.className = "completed-item";
        listItem.innerHTML = `
            <span class="completed-title">${question.title}</span>
            <span class="topic-tag">${question.topic || "Other"}</span>
            <button onclick="markAsIncomplete('${question.url}')" 
                    class="remove-btn small-button danger">
                Remove
            </button>
        `;
        completedList.appendChild(listItem);
    }
}

function updateProgressBar() {
    const progressText = document.getElementById("progressText");
    const progressFill = document.getElementById("progressFill");
    const total = questions.length;
    const completed = completedQuestions.length;
    const percentage = total > 0 ? (completed / total) * 100 : 0;
    progressText.textContent = `${completed}/${total}`;
    progressFill.style.width = `${percentage}%`;
}

function searchQuestions() {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm === "") {
        searchResults.style.display = "none";
        return;
    }
    const filteredQuestions = questions.filter((q) =>
        q.title.toLowerCase().includes(searchTerm)
    );
    searchResults.innerHTML = "";
    if (filteredQuestions.length === 0) {
        searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
    } else {
        for (const question of filteredQuestions) {
            const isCompleted = completedQuestions.some((q) => q.url === question.url);
            const resultItem = document.createElement("div");
            resultItem.className = "search-result-item";
            const titleElement = document.createElement("div");
            titleElement.className = "search-result-title";
            titleElement.textContent = question.title;
            const buttonElement = document.createElement("button");
            buttonElement.className = `mark-done-btn ${isCompleted ? "completed" : ""}`;
            buttonElement.textContent = isCompleted ? "Mark Incomplete" : "Mark Complete";
            buttonElement.addEventListener("click", function () {
                if (isCompleted) {
                    markAsIncomplete(question.url);
                } else {
                    markAsCompleted(question);
                }
                searchResults.style.display = "none";
                searchInput.value = "";
            });
            resultItem.appendChild(titleElement);
            resultItem.appendChild(buttonElement);
            searchResults.appendChild(resultItem);
        }
    }
    searchResults.style.display = "block";
}

function addCustomProblem() {
    const problemUrl = document.getElementById("problemUrl").value.trim();
    const statusElement = document.getElementById("addProblemStatus");
    if (!problemUrl) {
        showStatus("Please enter a problem URL", "error");
        return;
    }
    if (!problemUrl.includes("leetcode.com/problems/") && !problemUrl.includes("neetcode.io/problems/")) {
        showStatus("Please enter a valid LeetCode or NeetCode problem URL", "error");
        return;
    }
    if (questions.some((q) => q.url === problemUrl)) {
        showStatus("This problem is already in your list", "error");
        return;
    }
    try {
        const problemSlug = getSlugFromUrl(problemUrl);
        if (!problemSlug) {
            throw new Error("Could not extract problem slug");
        }

        if (!problemSlug) {
            throw new Error("Could not extract problem slug");
        }
        title = problemSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        let topic = "Other";
        if (neetcodeTopics[problemSlug]) {
            topic = neetcodeTopics[problemSlug];
        }
        const newProblem = {
            title: title,
            url: problemUrl,
            topic: topic,
            addedDate: new Date().toISOString(),
        };
        questions.push(newProblem);
        saveData();
        updateProgressBar();
        updateProblemList();
        populateTopicFilter(); // Repopulate topic filter after adding a new problem
        document.getElementById("problemUrl").value = "";
        showStatus("Problem added successfully!", "success");
    } catch (error) {
        showStatus("Error processing URL. Please check the format.", "error");
        console.error(error);
    }
}

function showStatus(message, type) {
    const statusElement = document.getElementById("addProblemStatus");
    statusElement.textContent = message;
    statusElement.className = type;
    statusElement.style.display = "block";
    setTimeout(() => {
        statusElement.className = "";
        statusElement.style.display = "none";
        statusElement.textContent = "";
    }, 3000);
}

function resetProgress() {
    if (confirm("Are you sure you want to reset your progress? This will clear all completed questions.")) {
        completedQuestions = [];
        saveData();
        updateCompletedList();
        updateProgressBar();
        updateProblemList(); // Update problem list to reflect changes
        document.getElementById("questionBox").innerHTML = "<p>Progress has been reset. Click the button to get a random question.</p>";
    }
}

document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    updateThemeIcon();
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
});

function updateThemeIcon() {
    const themeIcon = document.getElementById("themeToggle").querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.className = "fas fa-sun";
    } else {
        themeIcon.className = "fas fa-moon";
    }
}

function updateTheme() {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
    updateThemeIcon();
}

function updateProblemList() {
    const problemListContainer = document.getElementById("problemListContainer");
    if (!problemListContainer) return;

    problemListContainer.innerHTML = "<h2>All Problems</h2>";

    if (questions.length === 0) {
        problemListContainer.innerHTML += "<p>No problems added yet.</p>";
        return;
    }

    // Sort questions by topic and then by title
    const sortedQuestions = [...questions].sort((a, b) => {
        if (a.topic !== b.topic) {
            return a.topic.localeCompare(b.topic);
        }
        return a.title.localeCompare(b.title);
    });

    const table = document.createElement("table");
    table.className = "problem-table";

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Title</th>
            <th>Topic</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    let currentTopic = "";

    for (const question of sortedQuestions) {
        const isCompleted = completedQuestions.some((q) => q.url === question.url);

        if (question.topic !== currentTopic) {
            currentTopic = question.topic;
            const topicRow = document.createElement("tr");
            topicRow.className = "topic-divider";
            topicRow.innerHTML = `<td colspan="4">${currentTopic}</td>`;
            tbody.appendChild(topicRow);
        }

        const tr = document.createElement("tr");
        tr.className = isCompleted ? "problem-completed" : "";
        tr.innerHTML = `
            <td><a href="${question.url}" target="_blank">${question.title}</a></td>
            <td>${question.topic}</td>
            <td>${isCompleted ? "✅ Completed" : "⏳ Pending"}</td>
            <td class="action-buttons">
                <button class="small-button edit" onclick="editProblem('${encodeURIComponent(
            JSON.stringify(question)
        )}')">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="small-button danger" onclick="deleteProblem('${question.url}')">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    problemListContainer.appendChild(table);

    // Re-populate the topic filter
    populateTopicFilter();
}

function deleteProblem(url) {
    if (confirm("Are you sure you want to delete this problem?")) {
        questions = questions.filter((q) => q.url !== url);
        completedQuestions = completedQuestions.filter((q) => q.url !== url);
        saveData();
        updateProblemList();
        updateProgressBar();
        updateCompletedList();
        populateTopicFilter(); // Repopulate topic filter after deleting a problem
        showStatus("Problem deleted successfully", "success");
    }
}

function editProblem(encodedProblem) {
    const problem = JSON.parse(decodeURIComponent(encodedProblem));
    const modal = document.getElementById("editModal");
    modal.style.display = "block";
    document.getElementById("editTitle").value = problem.title;
    document.getElementById("editUrl").value = problem.url;
    document.getElementById("editTopic").value = problem.topic;
    document.getElementById("originalUrl").value = problem.url;
}

function closeEditModal() {
    document.getElementById("editModal").style.display = "none";
}

function saveProblemEdit() {
    const title = document.getElementById("editTitle").value.trim();
    const url = document.getElementById("editUrl").value.trim();
    const topic = document.getElementById("editTopic").value.trim();
    const originalUrl = document.getElementById("originalUrl").value;

    if (!title || !url) {
        alert("Title and URL are required!");
        return;
    }

    if (url !== originalUrl && questions.some((q) => q.url === url)) {
        alert("This URL already exists in your problem list!");
        return;
    }

    const index = questions.findIndex((q) => q.url === originalUrl);
    if (index !== -1) {
        const updatedProblem = {
            ...questions[index],
            title: title,
            url: url,
            topic: topic,
        };
        questions[index] = updatedProblem;

        const completedIndex = completedQuestions.findIndex((q) => q.url === originalUrl);
        if (completedIndex !== -1) {
            completedQuestions[completedIndex] = {
                ...completedQuestions[completedIndex],
                title: title,
                url: url,
                topic: topic,
            };
        }

        saveData();
        updateProblemList();
        updateCompletedList();
        populateTopicFilter(); // Update topic filter after editing
        closeEditModal();
        showStatus("Problem updated successfully", "success");
    }
}

function populateTopicFilter() {
    const topicFilter = document.getElementById("topicFilter");
    if (!topicFilter) return;

    // Get unique topics from questions
    const topics = [...new Set(questions.map((q) => q.topic))].sort();

    // Clear existing options except the first one ("All Topics")
    while (topicFilter.options.length > 1) {
        topicFilter.remove(1);
    }

    // Add topic options
    topics.forEach((topic) => {
        const option = document.createElement("option");
        option.value = topic;
        option.textContent = topic;
        topicFilter.appendChild(option);
    });
}

function applyFilters() {
    const topicFilter = document.getElementById("topicFilter").value;
    const statusFilter = document.getElementById("statusFilter").value;
    const searchText = document.getElementById("tableSearchInput").value.toLowerCase();

    const tableRows = document.querySelectorAll(".problem-table tbody tr:not(.topic-divider)");
    const topicDividers = document.querySelectorAll(".problem-table tbody tr.topic-divider");

    // Reset display for all rows
    tableRows.forEach((row) => (row.style.display = "table-row"));
    topicDividers.forEach((divider) => (divider.style.display = "table-row"));

    // Apply filters
    tableRows.forEach((row) => {
        const rowTitle = row.querySelector("td:nth-child(1)").textContent.toLowerCase();
        const rowTopic = row.querySelector("td:nth-child(2)").textContent;
        const isCompleted = row.classList.contains("problem-completed");

        const matchesTopic = topicFilter === "all" || rowTopic === topicFilter;
        const matchesStatus = statusFilter === "all" ||
            (statusFilter === "completed" && isCompleted) ||
            (statusFilter === "pending" && !isCompleted);
        const matchesSearch = searchText === "" || rowTitle.includes(searchText);

        row.style.display = matchesTopic && matchesStatus && matchesSearch ? "table-row" : "none";
    });

    // Update topic dividers visibility
    updateTopicDividers();
}

function updateTopicDividers() {
    const topicDividers = document.querySelectorAll(".problem-table tbody tr.topic-divider");

    topicDividers.forEach((divider) => {
        let hasVisibleProblems = false;
        let nextElement = divider.nextElementSibling;

        while (nextElement && !nextElement.classList.contains("topic-divider")) {
            if (nextElement.style.display !== "none") {
                hasVisibleProblems = true;
                break;
            }
            nextElement = nextElement.nextElementSibling;
        }

        divider.style.display = hasVisibleProblems ? "table-row" : "none";
    });
}