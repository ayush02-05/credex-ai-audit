# DEVLOG

## Day 1 — 2026-05-07

**Hours worked:** 3 Hours

**What I did:**

- Carefully read the assignment and tried to understand what exactly needs to be built.
- Looked at some existing tools like Vendr and HubSpot Website Grader to understand how audit-based products work.
- Decided the tech stack for the project:
  - React + Vite for frontend
  - Node.js + Express for backend
  - MongoDB Atlas for database
- Started researching pricing for different AI tools like ChatGPT, Claude, Cursor, Gemini, and GitHub Copilot.
- Created the basic project setup and pushed the initial code to GitHub.

**What I learned:**

- This assignment is more about building a complete product experience than just coding features.
- Good audit logic and clear explanations are very important.
- Even small things like saving form data after refresh improve the user experience a lot.

**Blockers / what I'm stuck on:**

- Still figuring out the best way to structure the audit logic.
- Need to think more about how the AI-generated summary should work.

**Plan for tomorrow:**

- Start building the frontend form.
- Add dynamic fields for multiple AI tools.
- Implement localStorage so the form data stays saved after page refresh.

## Day 2 — 2026-05-08

**Hours worked:**
2 Hours

**What I did:**

- Created the main audit form UI using React and Tailwind CSS
- Built dynamic AI tool selection functionality
- Added plan selection based on selected AI tool
- Implemented input fields for monthly spend, seats, team size, and use case
- Added support for Cursor, GitHub Copilot, Claude, ChatGPT, Gemini, OpenAI API, Anthropic API, and Windsurf/v0
- Implemented LocalStorage persistence to save form state across reloads
- Designed a responsive dashboard-style interface

**Plan for tomorrow:**

- Start building the audit engine logic
- Add pricing comparison and optimization suggestions
- Create audit result cards and report UI
- Begin integrating recommendation system for cheaper plans/tools



## Day 3 — 2026-05-10

**Hours worked:**  
3 Hours

**What I did:**

- Started building the core AI audit engine logic for the project
- Worked on backend with Express server
- Created API flow for sending selected tool data from frontend to backend
- Built the initial audit processing logic to analyze:
  - Current plan suitability
  - Potential savings
  - Alternative tool recommendations
- Created a structured pricing/model system for:
  - AI tools
  - Their plans
  - Monthly pricing
  - Savings calculations
  - Alternative recommendations
- Added logic for calculating monthly and yearly savings dynamically


**What I learned:**

- Building audit logic is more complex than simple price comparison.
- Recommendations need proper reasoning and conditions behind them.
- Backend structure becomes very important when pricing data and rules start growing.
- Edge cases matter a lot in recommendation systems.

**Blockers / what I'm stuck on:**

- Still refining the logic for when the system should recommend alternatives vs keeping the current plan.
- Need to improve how use cases affect recommendation quality.
- Thinking about how to make recommendations feel more realistic and finance-oriented.

**Plan for tomorrow:**

- Improve understanding of how audit systems make financial recommendations
- Will Explore edge cases where:
  - Current plan may already be the best fit
  - No cheaper alternative exists
  - Downgrading could reduce required features
- Improve audit reasoning and recommendation accuracy
- Build the audit results UI/cards
- Add AI-generated audit summaries
- Connect backend audit response with frontend result dashboard
- Handle more edge cases in pricing comparison and savings calculation