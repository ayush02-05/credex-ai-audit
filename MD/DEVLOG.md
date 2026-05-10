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
## Day 4 — 2026-05-10

**Hours worked:** 5-6 Hours

## What I did

- Worked on the frontend UI of the project.
- Created the tool selection form where users can:
  - Select a tool
  - Select a plan
  - Enter team size
  - Enter monthly cost
- Improved form handling and frontend structure in React.
- Worked on backend controller and API flow.
- Built and improved the Audit Engine logic.
- Added logic for:
  - Tool and plan checking
  - Team size validation
  - Price comparison
  - Alternative recommendations
  - Monthly and yearly savings
- Improved the audit reasoning so results feel more realistic instead of only comparing prices.
- Simplified a lot of backend code because some parts became too over-engineered.
- Improved API response structure for frontend rendering.
- Connected frontend and backend properly and tested the audit flow.
- Used AI tools like :contentReference[oaicite:0]{index=0} ChatGPT and :contentReference[oaicite:1]{index=1} Claude to brainstorm and improve the audit logic.
- Since I was not fully familiar with SaaS audit systems, I used AI discussions to better understand:
  - pricing comparison logic
  - savings calculations
  - recommendation logic
  - validation scenarios
  - practical audit reasoning
- Reworked and simplified many AI-generated ideas to better match my own understanding and coding style.

## Challenges Faced

- Some parts of the audit logic became too complex at first.
- It was difficult to balance good logic with simple readable code.
- Handling multiple audit conditions together took time.

## Learnings

- Learned more about backend structure and controller logic.
- Better understanding of how pricing audit systems can work.
- Learned how to separate business logic from controllers.
- Improved understanding of API responses and savings calculations.
- Learned that simpler and readable code is often better than overly advanced code.
- Learned how AI tools can help in brainstorming logic and architecture during development.

## Next Plan

- Improve the audit result UI.
- Add better result cards and summaries.
- Add audit history feature.
- Improve recommendation quality further.