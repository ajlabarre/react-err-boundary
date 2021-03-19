# react-error-boundry

## A straight-forward leight weight error boundary for React components

This easy to implement error boundary component isolates errors to the component that throws them so your entire react app doesn't crash on error.

## Features

- A simple component which catches errors thrown in child component tree, logs the error and displays a fallback UI
- The Error Boundary catches errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

## Installation

Installation is as simple as running the following command in your project's root directory

```sh
npm i --save react-error-boundary
```

## Usage

Usage is very straight-forward! Simply wrap your component in the Error Boundary component to create an error boundary

```
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

## License

MIT

**Free Software, Hell Yeah!**
