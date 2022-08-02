---
title: Google clone
date: '2021-10-26'
tags: ['project', 'dev', 'next js']
draft: false
summary: 'A clone of a Google website that is built with Next.js, Tailwind, Google Search API, Hero Icons and hosted on Vercel. The purpose was to practice and test external API fetching and styling the results.'
author: 'default'
images: ['/static/img/projects/google-project-thumbnail.png']
---

## Description

This web app is a clone of Google search engine built with `Next.js`, `Tailwind`, `Google Search API`, `Hero Icons` and hosted on `Vercel`.

[Github repo link](https://github.com/sokirill/google)

[Project link](https://google-nextjs-kirill.vercel.app/)

## How I worked on this project

I created this project to expand on the data fetching skills and learn a bit more on possibilities of Next.js especially in combination with utility design framework such as Tailwind.

## How to navigate this project

- `search.js` - using getServerProps to fetch the google API. There is a useDummyData switcher that takes `Response.js` in the main folder and populates the results with static data to avoid exhausting API limit if the value is `true`.
- Environmental variables - it was the first time I tried to implement `.env.local` so that the API keys are not exposed publicly and used `${process.env.API_KEY}`.
- `SearchResults.js` - takes the results of the API response and renders them via `map()` method as well as passes various props such as title, link and snippets of results with Tailwind styling.
- Hero Icons library - is used to visualize various options in the `HeaderOptions.js`

## Why it is built this way

- State management is not used with this project as its a simple app mainly to test out API fetch, render and styling.
- Tailwind CSS is a great library for styling. The utility classes make it super easy to rapidly style any components and make the app look usable.
- `Next.js` and `Vercel` made it easy to generate and host this application but for the next project I will use more layers of complexity including databases.

## What else would I do

- Finish video, image search sections so that the app is more robust.
- Add end-to-end tests with Cypress
- Setup CI/CD and ESLint on every pull request
