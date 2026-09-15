# Sidh Kansal - Personal Portfolio Website

A clean, modern, and responsive developer portfolio website designed specifically for a Computer Science student, highlighting skills in **Python, C++, Java, and SQL**.

---

## 🌟 Key Features

- **Theme Toggle**: Dark mode by default with instant toggle to Light mode (persisted with `localStorage`).
- **Dynamic Typewriter**: Hero section with typing effect highlighting key roles.
- **Code Window Widget**: Aesthetic C++ developer profile snippet.
- **Interactive Project Filter**: Filter featured projects by **Python**, **C++**, **Java**, or **SQL**.
- **Responsive Navigation**: Sticky header with smooth scrolling, section highlighting, and mobile drawer.
- **Education Timeline**: Structured academic milestones and coursework tags.
- **Contact Form**: Interactive form with validation and direct social links (GitHub, LinkedIn, Email, LeetCode).
- **Zero Dependencies**: Pure HTML5, modern CSS3, and vanilla JavaScript. Runs out-of-the-box in any browser!

---

## 🚀 How to View Locally

### Method 1: Open Directly (Easiest)
Simply double-click the `index.html` file or run:
```bash
open index.html
```
This will open the portfolio immediately in your default browser (Safari, Chrome, etc.).

### Method 2: Local HTTP Server (Python)
If you prefer running a local development server:
```bash
cd /Users/sidhkansal/.gemini/antigravity/scratch/sidh-portfolio
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## ✏️ How to Customize

1. **Personal Information**:
   - Open `index.html` and search for `sidhkansal@example.com` or `University / College Name` to replace them with your actual college and email.
2. **Projects**:
   - In `index.html`, locate the `#projects` section. You can edit the project titles, bullet points, and add your actual GitHub repository links into `href="https://github.com/..."`.
3. **Resume**:
   - Put your resume PDF in this directory (e.g., named `resume.pdf`) and update the `href="#"` on the `#resume-btn` button to `href="resume.pdf" download`.
4. **Social Links**:
   - Update the GitHub, LinkedIn, and LeetCode links with your usernames.

---

## 🌐 How to Host on GitHub Pages (Free Live Website)

To share this portfolio with your teacher, classmates, and recruiters:

1. Create a free account at [GitHub.com](https://github.com) (if you haven't already).
2. Create a new repository named `sidhkansal.github.io` or `portfolio`.
3. In your terminal inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
4. On GitHub, go to **Settings** -> **Pages**, choose the `main` branch, and click **Save**.
5. Your portfolio will be live at `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`!
