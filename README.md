# Sprintwise

Sprintwise transforms a feature idea into a product brief, user stories, engineering tasks, and a prioritized sprint plan. It uses dependency-free Node.js, an explainable rule-based planner, and persistent JSON storage.

## Run
Use Node.js 18 or newer. Run `npm start` and open `http://localhost:3000`. Replit can use the same command. The app listens on `PORT` and needs a writable workspace for saved plans.

## Workflow
Enter a feature idea, audience, reach, urgency, sprint length, and capacity. Generate a plan to see the PRD, priority explanation, user stories, dependency-linked tasks, sprint allocation, and risk notes. Plans save automatically. History retrieves saved plans. Admin shows usage metrics and supports deletion. Export downloads Markdown.

## Logic and data
No LLM or external service is required. Keyword rules identify capabilities and risks. A weighted score combines impact (40%), reach (25%), urgency (20%), and risk (15%). Tasks get estimates and prerequisite links, then are packed into sprints up to the configured capacity. Records live in `data/plans.json`. This is a classroom demo; production needs managed storage and authentication.

Six Git commits document the scaffold, planner/API, interface, persistence, admin, and deployment/documentation stages. See `DOCUMENTATION.pdf`.

## Submission status
The local project and six-commit history are ready. The app has not been published to Replit or GitHub, and no hosted demo video has been recorded. The PDF includes Replit launch steps and a short recording outline.

