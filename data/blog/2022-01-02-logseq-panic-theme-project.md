---
title: Logseq Panic Theme
date: '2021-01-02'
tags: ['project', 'dev', 'css']
draft: true
summary: 'A dark theme for Logseq, inspired by Panics palette and Bear notes panic mode theme.'
author: 'default'
images: ['/static/img/projects/logseq-project-thumbnail.png']
---

## Description

This theme uses basic `CSS`, `Mulish` font family hosted by Google and hosted on `JSdelivr`.

[Github repo link](https://github.com/sokirill/logseq-panic-theme)

## How I worked on this project

I created this theme to adjust the cosmetics of Logseq to my liking and I always loved panic mode theme in Bear notes app. to expand on the data fetching skills and learn a bit more on possibilities of Next.js especially in combination with utility design framework such as Tailwind.

## How to navigate this project

- `custom.css` - where most of the .
- Environmental variables - it was the first time I tried to implement `.env.local` so that the API keys are not exposed publicly and used `${process.env.API_KEY}`.
- `SearchResults.js` - takes the results of the API response and renders them via `map()` method as well as passes various props such as title, link and snippets of results with Tailwind styling.
- Hero Icons library - is used to visualize various options in the `HeaderOptions.js`

## Why it is built this way

- State management is not used with this project as its a simple app mainly to test out API fetch, render and styling.

## What else would I do

- The theme is work in progress and people are already submitting feature requests
- Increase the legibility
- Setup CI/CD and ESLint on every pull request
- [x] Add a dark mode
