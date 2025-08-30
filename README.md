# React Fetch API Custom Hook - Sample Project

This repository contains a sample React project demonstrating how to create and use custom hooks for API data fetching. Learn how to build reusable, efficient data fetching solutions with React hooks.

## 🎯 What You'll Learn

- Creating custom React hooks for API calls
- Handling loading states, errors, and data in React
- Implementing reusable data fetching patterns
- Best practices for API integration in React applications
- Error handling and user feedback strategies

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (version 8.0 or higher) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

Verify your installation:

```bash
node --version
npm --version
git --version
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/fersonull/fetch_api_custom_hook.git
cd fetch_api_custom_hook
```

### 2. Install Dependencies

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### 3. Start the Development Server

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

The application will automatically open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── hooks/
│   ├── useFetch.js          # Main custom hook for API fetching
│   ├── useApi.js            # Enhanced API hook with methods
│   └── index.js             # Hook exports
├── components/
│   ├── DataDisplay.js       # Component showing hook usage
│   ├── UserList.js          # Example with user data
│   ├── PostList.js          # Example with posts data
│   └── LoadingSpinner.js    # Reusable loading component
├── services/
│   ├── api.js               # API configuration and base URLs
│   └── endpoints.js         # API endpoint definitions
├── utils/
│   └── helpers.js           # Utility functions
├── App.js                   # Main application component
└── index.js                 # Application entry point
```

## 🔧 Available Scripts

| Command            | Description              |
| ------------------ | ------------------------ |
| `npm start`        | Start development server |
| `npm run build`    | Create production build  |
| `npm test`         | Run test suite           |
| `npm run lint`     | Check code for issues    |
| `npm run lint:fix` | Auto-fix linting issues  |

## 🎮 How to Use This Sample

### 1. Explore the Custom Hook

Start by examining the main custom hook in `src/hooks/useFetch.js`:

```javascript
// Basic usage example
const { data, loading, error } = useFetch("https://api.example.com/users");
```

### 2. Run the Examples

The sample includes several working examples:

- **Basic Data Fetching** - Simple GET requests
- **Error Handling** - How to handle API errors gracefully
- **Loading States** - Managing loading indicators
- **Conditional Fetching** - Fetch data based on conditions
- **Refetch Functionality** - Manually trigger data refresh

### 3. Experiment with the Code

Try modifying:

- API endpoints in `src/services/endpoints.js`
- Hook parameters and options
- Error handling strategies
- Loading state presentations

## 🌐 API Endpoints Used

This sample project uses public APIs for demonstration:

- **JSONPlaceholder** - `https://jsonplaceholder.typicode.com/`
  - Users: `/users`
  - Posts: `/posts`
  - Comments: `/comments`

No authentication required - perfect for testing and learning!

## 💡 Key Concepts Demonstrated

### Custom Hook Features

- **Automatic loading states** - Tracks request lifecycle
- **Error handling** - Catches and manages API errors
- **Data caching** - Prevents unnecessary re-requests
- **Cleanup** - Prevents memory leaks with AbortController
- **Flexible configuration** - Customizable options and headers

### Hook Usage Patterns

```javascript
// Basic fetch
const { data, loading, error } = useFetch("/api/users");

// With options
const { data, loading, error, refetch } = useFetch("/api/posts", {
  headers: { Authorization: "Bearer token" },
  dependency: [userId], // Refetch when userId changes
});

// Conditional fetching
const { data, loading, error } = useFetch(shouldFetch ? "/api/data" : null);
```

## 🔄 Understanding the Hook Implementation

### Core Features Explained

1. **State Management** - Uses `useState` for data, loading, and error states
2. **Side Effects** - Uses `useEffect` for API calls and cleanup
3. **Abort Controller** - Cancels requests when component unmounts
4. **Dependency Array** - Controls when to refetch data
5. **Error Boundaries** - Proper error handling and user feedback

### Best Practices Included

- Preventing race conditions
- Memory leak prevention
- Proper error handling
- Loading state management
- Reusable and modular design

## 🛠️ Customizing the Hook

You can extend the custom hook by:

1. **Adding caching mechanisms**
2. **Implementing retry logic**
3. **Adding request interceptors**
4. **Supporting different HTTP methods**
5. **Adding debouncing for search scenarios**

## 🐛 Troubleshooting

### Common Issues

**Hook Rules Violation:**

- Ensure hooks are only called at the top level of React components
- Don't call hooks inside loops, conditions, or nested functions

**CORS Errors:**

- Use the provided JSONPlaceholder API endpoints
- Check browser console for specific CORS error messages

**Network Errors:**

- Verify internet connection
- Check if API endpoints are accessible
- Review browser network tab for failed requests

**Module Not Found:**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## 📚 Learning Path

1. **Start Here** - Run the project and see it in action
2. **Examine useFetch.js** - Understand the hook implementation
3. **Study Examples** - Look at different usage patterns in components
4. **Modify & Experiment** - Try changing API endpoints and options
5. **Build Your Own** - Create additional custom hooks
6. **Error Scenarios** - Test with invalid URLs to see error handling

## 🔗 Useful Resources

- [React Hooks Documentation](https://react.dev/reference/react)
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [React Custom Hooks Guide](https://react.dev/learn/reusing-logic-with-custom-hooks)

## 🤝 Contributing

Found a bug or want to improve the sample? Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/improvement`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Need Help?

If you encounter issues:

1. Check the browser console for error messages
2. Review the troubleshooting section above
3. Compare your code with the working examples
4. Create an issue in this repository with:
   - Steps to reproduce the problem
   - Error messages (if any)
   - Your environment details (OS, Node version, browser)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy learning!** 🎉

> This sample is designed for educational purposes. Feel free to experiment, break things, and learn from the code. The best way to understand custom hooks is to build and modify them yourself!

## 🔖 Quick Commands Reference

```bash
# Clone and setup
git clone https://github.com/fersonull/fetch_api_custom_hook.git
cd fetch_api_custom_hook
npm install
npm start

# Development workflow
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tes
```
