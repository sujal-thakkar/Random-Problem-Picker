// Customize your question list here
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

function pickRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const q = questions[randomIndex];

    const box = document.getElementById('questionBox');
    box.innerHTML = `
    <h3><a href="${q.link}" target="_blank">${q.title}</a></h3>
  `;
}