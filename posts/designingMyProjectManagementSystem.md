---
title: "How I Designed a Student-Friendly Project Management System That Actually Works"
date: "2025-07-23"
description: "Most student projects fail not because of bad ideas—but because there's no structure to hold those ideas together. Here's how I built a custom project management system that helped my team successfully deliver complex projects like CircadiaLux, combining Discord, GitHub, and proven workflows."
cover: /designingMyProjectManagementSystem/cover.jpg
---

**Most student projects fail not because of bad ideas—but because there's no structure to hold those ideas together. I wanted to change that.**

While working on complex student projects involving machine learning, IoT, and web development, I realized how quickly things can become disorganized codebases got messy, communication scattered, and collaboration slowed down. I didn't want to rely on random trial-and-error approaches or follow some rigid company template. I wanted a system that actually fit how student teams work.

So I started building one from scratch.

This post is about the system I designed and used to manage my own team projects, like [**CircadiaLux**](https://blog.kavindalj.me/blog/CircadiaLux). It covers how I structured communication, code, commits, and collaboration so our team could focus on building, not fixing chaos.

---

## Why I Built My Own System

I didn't build this system to look professional. I built it because I saw how easily good projects can fall apart when there's no foundation. I wanted a simple, consistent way to keep everyone aligned especially when we were working on multiple parts of a project, like ML models, React apps, and IoT firmware, all at the same time.

There wasn't a ready-made method for this, so I created one. It was built through actual project work and shaped by what helped us move faster without losing control.

---

## The Tools I Chose

I didn't use tools just because they were popular—I picked each one because it solved a real problem I faced with my teams.

- **Discord**: Our main space for communication, organized by topic
- **Git & GitHub**: For version control, pull requests, and code collaboration
- **GitHub Projects**: To visually manage tasks using a Kanban-style board
- **GitHub Bot for Discord**: Real-time GitHub updates inside our chat space
- **Figma**: To work on UI/UX collaboratively
- **Conventional Commits**: To keep commit history clean and readable
- **Branch Protection Rules**: To prevent mistakes and ensure code reviews before merging

---

## Communication with Discord

To keep discussions focused and easy to follow, I set up dedicated channels for each key part of the project:

- `#general` – For team-wide updates and check-ins
- `#frontend` – React and UI development
- `#iot` – Firmware, sensors, circuits
- `#ml` – Model building and evaluation
- `#ui-ux` – Figma feedback and design discussions
- `#documentation` – Reports, blogs, and presentations

This helped avoid clutter and kept every topic in its place.

### GitHub + Discord Integration

To make things even smoother, I connected GitHub with Discord using a GitHub bot. This integration sent updates to a dedicated channel whenever someone pushed commits, opened pull requests, or created issues.

It looked something like this:

- **New Pull Request**: `feat(iot): sensor integration logic`
- **New Commit** on `feature/ml-sleep-model`: Added evaluation pipeline

This helped the whole team stay in sync without constantly checking GitHub.

---

## Folder Structure – Planned from the Start

Before writing any code, I planned how the entire project folder would be organized. Each component—whether frontend, ML, or IoT—had its own space and structure.

A simplified version looked like this:

```
project-root/
├── frontend/
│   ├── components/
│   ├── pages/
│   └── utils/
├── iot/
│   ├── firmware/
│   └── schematics/
├── ml/
│   ├── preprocessing/
│   ├── training/
│   └── prediction/
├── docs/
└── .github/
```

This made it easy for team members to jump into a part of the project without getting lost.

---

## Git Workflow – Consistent and Clean

We followed a clear branching strategy to avoid confusion:

- `main` – Stable, production-ready branch
- `dev` – Integration branch for in-progress features
- `feature/xyz` – New features
- `fix/xyz` – Quick fixes
- `docs/xyz` – Documentation updates

**No one pushed directly to `main`.** All changes went through pull requests, which had to be reviewed before merging.

To make development smoother, I also **changed the default branch in GitHub from `main` to `dev`**. This meant that when team members cloned the repository or opened pull requests, they would automatically work with the development branch instead of the production branch. This simple change reduced confusion and made it less likely for someone to accidentally work on the wrong branch.

---

## Commit Style – Using Conventional Commits

To keep the commit history meaningful and easy to read, I used the [**Conventional Commits**](https://www.conventionalcommits.org/) format. For example:

- `feat(frontend): add user login page`
- `fix(iot): correct lux sensor range`
- `docs(readme): update setup instructions`

This helped with tracking progress, reviewing changes, and even generating changelogs when needed.

---

## Code Quality – Branch Protection & Reviews

To make sure the main branches stayed stable:

- I enabled GitHub's branch protection rules (like requiring reviews and disallowing force-pushes)
- All pull requests had to be reviewed before merging
- We used consistent naming conventions (like camelCase) across all parts of the project

This wasn't about being strict—it was about being safe and efficient.

---

## Task Management with GitHub Projects

I used GitHub Projects to visually organize tasks with a board that had:

- **Backlog**
- **To Do**
- **In Progress**
- **Review/Testing**
- **Done**

Each task was linked to a GitHub Issue with a clear description, checklist, and assignment. This gave the whole team a clear view of progress and priorities.

---

## A Real Example: CircadiaLux

One project that fully used this system was [**CircadiaLux**](https://github.com/kavindalj/CircadiaLux), an intelligent lighting system that adjusts light conditions in hospitals using ML and IoT.

Our team worked on:

- **React frontend** for caregivers and admins
- **Supabase backend** for storing patient and lighting data
- **ML model** to predict optimal lighting conditions
- **IoT system** using ESP32 and sensors to adjust lights in real-time

Even though the project had many moving parts, the system helped us stay coordinated and focused. We avoided last-minute panics and built something we were proud of.

---

## Lessons Learned: What Actually Worked

After using this system across multiple projects, here's what I learned:

### ✅ What Worked Well:
- **Clear communication channels** eliminated confusion about where to ask questions
- **Branch protection rules** saved us from breaking the main branch multiple times
- **Conventional commits** made it easy to understand what changed and why
- **GitHub Projects** gave everyone visibility into what was happening

### 🔄 What I'd Improve:
- **Earlier documentation** – I should have documented decisions as we made them
- **Better issue templates** – standardized formats would have made tracking easier
- **Regular retrospectives** – taking time to reflect on what's working and what isn't

---

## The Impact: Why Structure Matters

You don't need a job title or company team to build like a pro.

Creating this system helped me bring structure to student projects and made collaboration smoother and more enjoyable. It also made our projects more complete, maintainable, and impactful.

More importantly, it taught me that **good processes aren't restrictions—they're enablers**. When you don't have to think about where files go or how to communicate updates, you can focus on solving the actual problems.

---

## Getting Started: Build Your Own System

If you're working on a tech project with a team—even as a student—here's how you can start:

1. **Pick your communication platform** and organize it by project areas
2. **Set up basic Git workflows** with branch protection and reviews
3. **Plan your folder structure** before writing code
4. **Use consistent commit messages** from day one
5. **Track progress visually** with whatever tool works for your team

The tools matter less than the consistency. Start simple and evolve as you learn.

---

Feel free to check out the projects I've worked on [on GitHub](https://github.com/kavindalj), or reach out if you want to share how you handle team collaboration. I'd love to hear what works for you too.

---

### 🔗 Related Posts

If you found this project management system interesting, you might also enjoy reading about:

- **[CircadiaLux: Revolutionizing Healthcare Lighting with ML, IoT, and Human-Centered Design](https://blog.kavindalj.me/blog/CircadiaLux)** - The actual project where I used this management system
- **[Building a Reliable Backup System for My Multi-Device Setup](https://blog.kavindalj.me/blog/buildingAReliableBackupSystem)** - How I approach data management and organization across projects
- **[My Privacy-First Workflow: Passwords, SSH, 2FA & Secure Browsing](https://blog.kavindalj.me/blog/myPrivacyFirstWorkflow)** - Security practices that complement good project management
- **[My Self-Hosting Journey](https://blog.kavindalj.me/blog/mySelfHostingJourney)** - Building infrastructure and managing services, another aspect of technical project management

---
