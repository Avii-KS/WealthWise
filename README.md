# Wealthwise – AI Finance Platform

![Wealthwise Banner](public/banner.jpeg)

## 🚀 Modern AI-Powered Finance Platform

**Wealthwise** is a next-generation, full-stack finance platform built with Next.js, Prisma, Clerk, Tailwind, and advanced AI features. It helps you track, analyze, and optimize your finances with real-time insights, predictions, and intelligent recommendations.

---

## ✨ Features

- **AI-Powered Insights:** Get personalized financial advice and spending analysis
- **AI Assistant:** Chat with your own financial AI for budgeting, investment, and savings tips
- **AI Predictions:** Forecast expenses, savings, and cash flow with confidence scores
- **Modern UI/UX:** Glassmorphism, gradients, animations, and responsive design
- **Secure Auth:** Clerk authentication
- **Real-Time Dashboard:** Visualize accounts, budgets, and transactions
- **Receipt Scanning:** Scan and auto-categorize expenses with AI
- **Multi-Account Support:** Manage multiple accounts and budgets

---

## 🛠️ Getting Started

### 1. **Clone the Repository**

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. **Install Dependencies**

```bash
npm install --legacy-peer-deps
```

### 3. **Set Up Environment Variables**

Create a `.env` file in the root directory with:

```
DATABASE_URL=
DIRECT_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
GEMINI_API_KEY=
RESEND_API_KEY=
ARCJET_KEY=
```

### 4. **Run Database Migrations**

```bash
npx prisma migrate dev
```

### 5. **Start the Development Server**

```bash
npm run dev
```

---

## 🌐 Deploying to Netlify

1. **Push your code to GitHub/GitLab/Bitbucket**
2. **Sign up at [Netlify](https://www.netlify.com/)**
3. **Connect your repo and set build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Add all environment variables in Netlify dashboard**
5. **Install Netlify adapter:**
   ```bash
   npm install @netlify/next --legacy-peer-deps
   ```
   Update your `next.config.mjs`:
   ```js
   import { withNetlify } from "@netlify/next";
   export default withNetlify({});
   ```
6. **Deploy!**

---

## 🙏 Credits

- Built by Avinash
- Inspired by modern finance and AI platforms
- UI/UX: Tailwind, Shadcn UI, Lucide Icons
- AI: Google Gemini, custom logic

---

## 📄 License

MIT
