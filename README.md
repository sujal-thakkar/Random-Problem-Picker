# Random Problem Picker 

A simple yet powerful tool to randomly select DSA (Data Structures and Algorithms) problems from your curated list. Perfect for effective revision, interview preparation, and consistent practice.


## Features

- **Random Question Selection**: Get random DSA problems from your curated list
- **Progress Tracking**: Track which problems you've already completed
- **Topic Categorization**: Questions are organized by DSA topics (Sliding Window, Two Pointers, etc.)
- **Persistent Storage**: Your progress is saved locally between sessions
- **Minimalist UI**: Clean, distraction-free interface for focused learning
- **Mobile Responsive**: Practice on any device

## 📸 Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/4606e495-b7e0-42fc-9d3b-d029c2e3639c" alt="Home Screen" width="250"/>
  <img src="https://github.com/user-attachments/assets/334c0ef5-4f8e-43a5-9736-05416b85e6d3" alt="Question View" width="250"/>

  <img src="https://github.com/user-attachments/assets/cfba14cd-25f6-457d-9779-33971d0b1e1b" alt="Completed Questions" width="250"/>
</div>

## 🔧 Installation

Simply clone the repository to get started:

```bash
# Clone the repository
git clone https://github.com/sujal-thakkar/Random-Problem-Picker.git

# Navigate to the project directory
cd Random-Problem-Picker

# Open in your browser
open index.html
```

No build steps or dependencies required! The application runs entirely in the browser using vanilla HTML, CSS, and JavaScript.

## 💡 Usage

1. **Open the application** in your web browser
2. **Click "Give me a question"** to get a random DSA problem
3. **Solve the problem** by clicking the link to access the problem on LeetCode
4. **Mark as complete** when you've solved it successfully
5. **Track your progress** with the visual progress bar
6. **Reset progress** if you want to start over

## 📝 Customizing Problems

You can easily customize the list of problems by editing the `script.js` file. The questions are stored in an array at the top of the file:

```javascript
const questions = [
    {
        topic: "Sliding Window",
        title: "Longest Substring Without Repeating Characters",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    // Add your own problems here!
];
```

Simply add new problem objects to this array in the same format.

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Ideas for Contributions

- Add more predefined problems
- Implement filtering by topic
- Add difficulty levels for problems
- Create a dark mode theme
- Add time tracking for each problem

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with animations and responsive design
- **JavaScript** - Logic and interactivity
- **Local Storage API** - Persistent data storage

## 🔮 Future Enhancements

- User accounts and cloud synchronization
- Timer functionality for practice sessions
- Problem difficulty levels
- Topic-based filtering
- Spaced repetition algorithm
- Share progress on social media

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Problem links directed to [LeetCode](https://leetcode.com/)
- Built with ❤️ by [Sujal Thakkar](https://github.com/sujal-thakkar)

---

### Connect with Me

<div align="center">
  <a href="https://github.com/sujal-thakkar" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://x.com/Sujal5Thakkar" target="_blank">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter">
  </a>
  <a href="https://www.linkedin.com/in/sujal-thakkar-ab8432261" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://www.instagram.com/sujalxdev" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
  </a>
</div>
