# React Sample Projects Guide

This repository contains sample React projects designed to help you learn and understand various React concepts and implementations. Each project folder includes working code examples that you can run and explore.

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

Verify your installation:

```bash
node --version
npm --version
git --version
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Choose a Sample Project

Navigate to the project folder you want to explore:

```bash
ls                          # List all available sample projects
cd project-folder-name      # Enter the specific project directory
```

### 3. Initialize the Project

Install the project dependencies:

```bash
npm install
```

### 4. Start the Development Server

```bash
npm start
```

or

```bash
npm run dev
```

The project will open in your browser at `http://localhost:3000` or `http://localhost:5173` (depending on the setup).

## 📁 Repository Structure

```
├── basic-components/           # Basic React components examples
├── hooks-examples/             # Custom hooks and built-in hooks usage
├── state-management/           # State management patterns
├── routing-example/            # React Router implementation
├── api-integration/            # API calls and data fetching
├── styling-examples/           # Different styling approaches
├── testing-samples/            # Testing strategies and examples
└── advanced-patterns/          # Advanced React patterns
```

## 🔧 Project-Specific Setup

Some sample projects may have additional setup requirements:

### For Projects with Environment Variables

1. Look for `.env.example` file in the project folder
2. Copy it to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Edit the `.env` file with your actual values

### For Projects with Backend Dependencies

1. Check if there's a `server/` folder or separate backend setup
2. Follow the backend setup instructions in the project's specific README
3. Start the backend server before running the React app

### For Projects with Database Requirements

1. Look for database setup instructions in the project folder
2. Install required database (MongoDB, PostgreSQL, etc.)
3. Run any provided seed scripts or migrations

## 📖 How to Use These Samples

### For Learning

1. **Read the Code**: Start by exploring the source code in `src/`
2. **Run the Project**: See the code in action by running the development server
3. **Experiment**: Try modifying the code to see how changes affect the output
4. **Check Comments**: Look for educational comments explaining key concepts

### For Reference

1. **Copy Components**: Use components as templates for your own projects
2. **Study Patterns**: Learn implementation patterns and best practices
3. **Compare Approaches**: See different ways to solve similar problems

## 🛠️ Common Commands

| Command         | Description                                 |
| --------------- | ------------------------------------------- |
| `npm install`   | Install project dependencies                |
| `npm start`     | Start development server (Create React App) |
| `npm run dev`   | Start development server (Vite)             |
| `npm run build` | Create production build                     |
| `npm test`      | Run tests                                   |
| `npm run lint`  | Check code for linting errors               |

## 🔍 Exploring Individual Projects

Each sample project folder contains:

- **README.md** - Project-specific instructions and explanations
- **package.json** - Dependencies and scripts
- **src/** - Source code with examples
- **.env.example** - Environment variables template (if needed)

### Recommended Learning Path

1. **basic-components** - Start here to understand React fundamentals
2. **hooks-examples** - Learn about React hooks
3. **state-management** - Understand state management patterns
4. **routing-example** - Learn client-side routing
5. **api-integration** - Work with external APIs
6. **styling-examples** - Explore different styling approaches
7. **advanced-patterns** - Dive into advanced React concepts

## 🐛 Troubleshooting

### Port Already in Use

```bash
# For port 3000
lsof -ti:3000 | xargs kill -9

# For port 5173
lsof -ti:5173 | xargs kill -9
```

### Dependency Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Permission Errors (macOS/Linux)

```bash
sudo chown -R $(whoami) ~/.npm
```

### Module Not Found

```bash
# Make sure you're in the corr
```
