# How to Build a GPT-3 App with Nextjs, React, and GitHub Copilot

I'm following along with
[this tutorial](https://github.blog/2023-07-25-how-to-build-a-gpt-3-app-with-nextjs-react-and-github-copilot/) which
starts with
[this template](https://github.com/github/codespaces-nextjs).

## Development

To run this application:

```
npm install
npm run devserver
```

## Sample POST

```bash
curl \
    -d '{"recipe": "1 cup of all purpose flour, sifted 1 1/2 teaspoon baking powder 1/4 teaspoon salt 2 Tablespoon granulated sugar 1/2 Tablespoon unsalted butter, room temperature Approximately 1/3 cup water"}' \
    -H "Content-Type: application/json" \
    -X \
    POST http://localhost:8080/openai/generateinfo
```
