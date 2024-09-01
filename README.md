# Zimmerman Design System

Zimmerman Design System is a design system library that provides reusable UI components and styles shared across projects in the Zimmerman organization.

## Table of Contents

1. [Installation](#installation)
2. [Peer Depenedencies](#peer-dependencies)
3. [usage](#usage)
4. [storybook](#storybook)

## Installation

To install the Zimmerman Design System, run the following command:
`yarn add zimmerman-design-system`

## Peer dependencies

Ensure you have the following peer dependencies installed in your project:

```json
{
  "@emotion/react": "^11.13.3",
  "@emotion/styled": "^11.13.0",
  "@mui/material": "^5.16.7",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

You can install all peer dependencies with:
`npm install @emotion/react@^11.13.3 @emotion/styled@^11.13.0 @mui/material@^5.16.7 react@^18.3.1 react-dom@^18.3.1`

## Usage

To use the components from the Zimmerman Design System in your project, first import the components you need:

```jsx
import { Button } from "zimmerman-design-system";

function App() {
  return <Button variant="primary">Click Me!</Button>;
}
```

Make sure to wrap your application with any necessary providers that the design system requires.

## Storybook

You can view all components in the design system and their props on Storybook:

[View Storybook](https://66cd1b47dde91377fdb2a1d8-ngwbgzilhz.chromatic.com/?path=/docs/example-button--docs)
