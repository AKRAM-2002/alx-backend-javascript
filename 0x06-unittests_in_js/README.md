# NodeJS Unit Testing Project

This project focuses on implementing unit tests in JavaScript using various testing libraries and frameworks including Mocha, Chai, and Sinon. It covers fundamental testing concepts and practices in a Node.js environment.

## Project Overview

This project demonstrates the implementation of different testing methodologies including:
- Basic unit testing with Mocha and Node's assert library
- Using Chai assertion library for BDD style testing
- Working with spies and stubs using Sinon
- Implementing hooks for test setup and teardown
- Handling async tests
- Integration testing with Express

## Tasks

### 0. Basic Test with Mocha and Node Assertion Library
- Create a function `calculateNumber` that rounds and adds two numbers
- Write test cases using Node's assert library
- Set up npm test script for running tests

### 1. Combining Descriptions
- Enhance `calculateNumber` function to handle different operations (SUM, SUBTRACT, DIVIDE)
- Implement comprehensive test cases using describe blocks
- Handle edge cases including division by zero

### 2. Basic Test Using Chai
- Convert existing tests to use Chai assertion library
- Implement behavior-driven development (BDD) style testing
- Maintain same functionality with improved test readability

### 3. Spies
- Implement test spies using Sinon
- Create utility functions for payment calculations
- Verify function calls and arguments using spies

### 4. Stubs
- Use stubs to simulate API calls
- Implement test doubles for expensive operations
- Verify console output using spies

### 5. Hooks
- Implement before and after hooks
- Use hooks for test setup and cleanup
- Maintain test isolation

### 6. Async Tests
- Handle asynchronous operations in tests
- Use done callback for async testing
- Test Promise-based functions

### 7. Skip Tests
- Learn to skip tests appropriately
- Handle failing tests without removing them
- Maintain test suite integrity

### 8. Basic Integration Testing
- Set up Express server for testing
- Implement basic API endpoints
- Write integration tests for API routes

### 9. Regex Integration Testing
- Add parameter validation to routes
- Test different URL patterns
- Handle invalid inputs appropriately

### 10. Deep Equality & Post Integration Testing
- Test complex object responses
- Implement POST endpoint testing
- Use deep equality comparisons

## Setup

```bash
# Install dependencies
npm install

# Run tests
npm test