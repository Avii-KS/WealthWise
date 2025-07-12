# 💸 WealthWise

**A Next-Gen Personal Finance Platform Powered by AI**  
_Built with Next.js, Supabase, Prisma, Tailwind, Inngest, ArcJet, and Shadcn UI_

---

## 🚀 Overview

The AI Finance Platform is a modern, full-stack web application that empowers users to take control of their finances with the help of advanced AI. It combines seamless account management, real-time transaction tracking, budgeting, and personalized financial insights—all wrapped in a beautiful, responsive UI.

This project demonstrates expertise in building scalable, production-ready applications using the latest technologies and best practices. It’s designed to impress both users and recruiters with its feature set, code quality, and user experience.

[🌐 Live Demo](https://wealth-wise-ten.vercel.app/) • [📂 GitHub Repo](https://github.com/Avii-KS/WealthWise)

---

## ✨ Key Features

- **AI Financial Assistant**  
  Chat with an intelligent assistant for budgeting, investment advice, spending analysis, and financial planning. The assistant provides actionable suggestions, voice input, and context-aware responses.

- **AI Insights & Recommendations**  
  Instantly receive AI-generated insights such as unusual spending patterns, savings opportunities, investment suggestions, and budget optimizations—helping users make smarter financial decisions.

- **AI-Driven Predictions**  
  Get forecasts for monthly expenses, savings goal progress, cash flow analysis, and budget risk assessments, all powered by AI.

- **Comprehensive Dashboard**  
  Visualize all accounts, budgets, and transactions in one place. Interactive charts and cards provide a clear overview of financial health.

- **Account & Transaction Management**  
  Add, edit, and view multiple accounts. Track all transactions with detailed tables and visualizations.

- **Receipt Scanning**  
  Quickly add transactions by scanning receipts, leveraging modern UI components.

- **Budgeting Tools**  
  Set, monitor, and optimize budgets for different categories. Receive alerts and suggestions to stay on track.

- **Modern Authentication**  
  Secure sign-up and sign-in flows, ready for integration with providers like Clerk.

- **Responsive, Accessible UI**  
  Built with Shadcn UI and Tailwind CSS for a delightful experience on any device.

- **Event-Driven Architecture**  
  Uses Inngest for background jobs and event handling, ensuring scalability and reliability.

---

## 🧠 AI Capabilities

- **Conversational AI Assistant:**

  - Personalized financial Q&A
  - Contextual suggestions (e.g., “How can I save more money?”)
  - Voice input support

- **Automated Insights:**

  - Detects spending anomalies
  - Identifies savings and investment opportunities
  - Budget optimization tips

- **Predictive Analytics:**
  - Expense forecasting
  - Savings goal tracking
  - Cash flow and risk analysis

---

## 📸 Screenshots

> Explore the platform visually:

**Home Dashboard**

<img src="Screenshots/Screenshot%202025-07-12%20184910.png" alt="Home Dashboard" width="800" />

**AI Assistant**

<img src="Screenshots/Screenshot%202025-07-12%20184935.png" alt="AI Assistant" width="800" />

**Insights Panel**

<img src="Screenshots/Screenshot%202025-07-12%20184953.png" alt="Insights Panel" width="800" />

**Budget Page**

<img src="Screenshots/Screenshot%202025-07-12%20200503.png" alt="Budget Page" width="800" />

**Transactions Page**

<img src="Screenshots/Screenshot%202025-07-12%20200545.png" alt="Transactions Page" width="800" />

---
---

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Shadcn UI
- **Backend:** Supabase, Prisma, Node.js
- **AI & Automation:** Custom AI logic, Inngest (event-driven jobs), ArcJet (security)
- **Authentication:** Clerk (ready for integration)
- **Email:** Resend API (for notifications)
- **Database:** PostgreSQL (via Supabase)
- **Other:** Modern component architecture, full TypeScript support

---

## ⚡ Why This Project Stands Out

- **Real-World Use Case:** Solves genuine financial pain points with AI.
- **Modern, Scalable Stack:** Built with the latest, production-grade tools.
- **AI-First Experience:** Not just analytics—true AI-driven guidance.
- **Beautiful, Accessible UI:** Professional design with attention to detail.
- **Recruiter-Ready:** Demonstrates full-stack skills, clean code, and thoughtful architecture.

---

## 🏁 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ai-finance-platform.git
   cd ai-finance-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the root directory with the following:

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

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

---

## 📂 Project Structure

- `app/` — Next.js app directory (routes, pages, API)
- `components/` — Reusable UI and AI components
- `actions/` — Server-side logic (accounts, budgets, transactions, email)
- `lib/` — Utility libraries and integrations (Prisma, Inngest, ArcJet)
- `prisma/` — Database schema and migrations
- `public/` — Static assets (images, logos)
- `Screenshots/` — App screenshots for demo and documentation

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📧 Contact

For questions or demo requests, please contact [your-email@example.com].
