# AI Code Reviewer (MERN + Google Gemini)

## 🚀 Project Overview
AI Code Reviewer is a MERN web application that allows developers to write and submit code for analysis. The app integrates **Google Gemini** to provide AI-driven code reviews based on industry best practices, performance optimizations, and security checks.

## ✨ Features
- **AI-Powered Code Review**: Sends code snippets to Google Gemini for analysis.
- **Constructive Feedback**: Provides insights on code quality, best practices, and optimization.
- **Security & Performance Checks**: Detects vulnerabilities and suggests improvements.
- **Scalability Recommendations**: Ensures modular and maintainable code structures.
- **Modern UI**: Intuitive interface built with React.js.

## 🏗️ Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI Integration**: Google Gemini API
- **Libraries Used**:
  - `prismjs` (Syntax highlighting)
  - `react-simple-code-editor` (Code editor component)
  - `react-markdown` (Render Markdown content)
  - `rehype-highlight` (Syntax highlighting for Markdown)

## 🔧 Installation
### 1️⃣ Clone the Repository
```bash
 git clone https://github.com/your-username/AI-Reviewer.git
 cd AI-Reviewer
```

### 2️⃣ Install Dependencies
#### **Frontend**
```bash
 cd frontend
 npm install
```
#### **Backend**
```bash
 cd backend
 npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the `backend/` folder and add:
```env
PORT=5000
GEMINI_API_KEY=your_google_gemini_api_key
```

### 4️⃣ Run the Application
#### **Start Backend**
```bash
 cd backend
 npm start
```
#### **Start Frontend**
```bash
 cd frontend
 npm run dev
```

## 🌐 Deployment
### **Frontend Deployment (Vercel)**
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/), import the repository, and deploy the `frontend/` folder.
3. Set environment variables in **Vercel > Project Settings**.

### **Backend Deployment (Render/Railway)**
1. Push `backend/` to a separate GitHub repository.
2. Deploy on [Render](https://render.com/) or [Railway](https://railway.app/).
3. Add environment variables.
4. Update API URL in `frontend/.env`:
   ```env
   REACT_APP_BACKEND_URL=https://your-backend-url.com
   ```
5. Redeploy frontend to apply changes.

## 🤖 How AI Review Works
- Users submit code snippets via the web app.
- The backend sends the code to **Google Gemini API**.
- Gemini reviews the code based on:
  - Code Quality
  - Best Practices
  - Performance Optimization
  - Security Risks
  - Scalability
- The AI returns structured feedback with improvement suggestions.

## 📜 Example AI Response
### **Submitted Code:**
```js
function fetchData() {
  let data = fetch('/api/data').then(res => res.json());
  return data;
}
```
### **AI Review:**
#### Issues:
1. `fetch()` is asynchronous, but the function doesn’t handle promises correctly.
2. Missing error handling for failed API calls.

#### Recommended Fix:
```js
async function fetchData() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch data:", err);
    return null;
  }
}
```
### **Improvements:**
✔️ Uses `async/await` for proper async handling.  
✔️ Adds error handling for failed requests.  
✔️ Returns `null` instead of breaking execution.  

## 📌 Future Enhancements
- User authentication & personalized code history.
- Multi-language code review (Python, Java, etc.).
- Code improvement suggestions with auto-refactoring.
- VS Code extension for AI-assisted reviews.

## 🤝 Contribution
Want to improve this project? Contributions are welcome!
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Open a pull request.

## 📜 License
This project is licensed under the **MIT License**.

---
💡 **Let's build better code together!** 🚀

