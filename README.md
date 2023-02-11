# Music Searcher

Search music by artis, album, song, and more!

# Live demo
Please visit [the live demo](https://alex-campu.github.io/music-searcher-live/)

## Discogs

This music searcher is consuming discogs API, https://www.discogs.com/developers/

## Stack
- React as UI library
- Redux for state management
- Typescript as typed development language
- [Vite](https://vitejs.dev/) for building and development server 

### Linter
This project is following [Standard.js](https://standardjs.com/)

### Local setup:

`
npm install
`
- Set up env variables:
```
cp .env.example .env
```
Add discogs user token to your .env:
- Go to https://www.discogs.com/settings/developers
- Click "Generate new token"

```
npm run dev
```

[![Build Status](https://dev.azure.com/alexcampu/Agile%20az%20400/_apis/build/status/alex-campu.music-searcher?branchName=main)](https://dev.azure.com/alexcampu/Agile%20az%20400/_build/latest?definitionId=7&branchName=main)
