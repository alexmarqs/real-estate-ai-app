# Real Estate AI - House Description Generator 🏠 🤖

This project generates a description of an house using [OpenAI GPT-3 API](https://openai.com/api/) (`text-davinci-003`) and [Vercel Edge functions](https://vercel.com/features/edge-functions) with streaming. It constructs a prompt based on the form and user input, sends it to the GPT-3 API via a Vercel Edge function, then streams the response back to the application.

## Tech Stack 🛠

- [Next.js](https://nextjs.org/) (React framework)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS framework)
- [Vercel Edge functions](https://vercel.com/features/edge-functions) (serverless functions)
- [OpenAI GPT-3 API](https://openai.com/api/) (`text-davinci-003`)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [Heroicons](https://heroicons.com/) (SVG icons)
- [Headless UI](https://headlessui.dev/) (React components)
- [ESLint](https://eslint.org/) (linter)
- [Prettier](https://prettier.io/) (code formatter)
- [Draw.io](https://draw.io/) (for diagrams)
- [React Hot Toast](https://react-hot-toast.com/) (toasts)
- [Zod](https://zod.dev/) (schema validation)

## Architecture 🏗

![](./docs/diagram.drawio.svg)

## Technical Notes 📝

I'm using custom hooks for the generation / API call. However you could use a library like [react-query](https://react-query.tanstack.com/) (`mutateAsync`) to trigger the API call and take advantage of all the features it provides out of the box.

Regarding the form, I'm just using `useRef` to get the values (instead of `useState` for performance reasons and to avoid re-renders). However you could use a library like [react-hook-form](https://react-hook-form.com/) to handle the form state and validation or just use the native `HTMLFormElement` API.

## Running locally 🏃‍♂️

Make sure that you have a `.env` file with your OpenAI API key (`OPENAI_API_KEY`)

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Inspiration 🤩

[@Nutlope](https://github.com/Nutlope)
