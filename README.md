# How to Build a GPT-3 App with Nextjs, React, and GitHub Copilot

This is a sample project based on GPT-3, Nextjs, React, and GitHub Copilot.

 * [Project homepage](https://github.com/jjinux/mealmetrics-copilot)
 * Based on [this tutorial](https://github.blog/2023-07-25-how-to-build-a-gpt-3-app-with-nextjs-react-and-github-copilot/)
 * Forked from [this template](https://github.com/github/codespaces-nextjs)
 * Original tutorial [source code](https://github.com/LadyKerr/mealmetrics-copilot)

## Development

```bash
# Install the necessary dependencies:
npm install

# In one tab, run the backend API:
npm run devserver

# In another tab, run the frontend:
npm run dev

# View the frontend:
open http://localhost:3000
```

## Sample usage

Try the following recipe:

> 1 cup of all purpose flour, sifted 1 1/2 teaspoon baking powder 1/4 teaspoon salt 2 Tablespoon granulated sugar 1/2 Tablespoon unsalted butter, room temperature Approximately 1/3 cup water

You can also hit the backend directly using curl:

```bash
curl \
    -d '{"recipe": "1 cup of all purpose flour, sifted 1 1/2 teaspoon baking powder 1/4 teaspoon salt 2 Tablespoon granulated sugar 1/2 Tablespoon unsalted butter, room temperature Approximately 1/3 cup water"}' \
    -H "Content-Type: application/json" \
    -X \
    POST http://localhost:8080/openai/generateinfo
```
