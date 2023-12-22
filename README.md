# Base project react-ts + vite

Boilerplate to start fast react application.

## This project include

- React Typescript
- Vite (fast dev-mode refresh)
- Redux toolkit
- Tailwind
- React router dom
- Aos animation support library
- Authentication (base, adapt it to your context)

## Installation

```
npm i
```

## Running (devmode)

```
npm run dev
```

## Generation

```
npm run build
```

## General pattern

App.tsx contains the main routing system, every pages are on pages/ folder exported by linked index.tsx (same for components, layouts on layouts/).
This project include sample for redux reducers, redux thunks, axios provider and interceptors (for context as auth).
The types are under types/ and
React strictmode is disabled by default, enjoy your react app 🚀

## Working on

- Loading bar on route switch.
- PWA support.

## Authors

- [Ivan Liberato](https://github.com/Void061)
