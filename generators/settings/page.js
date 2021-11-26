module.exports = {
  description: 'Create a new page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the route of the page?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/pages/{{kebabCase name}}.tsx',
      templateFile: 'templates/page.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/styles/pages/{{pascalCase name}}.module.scss',
      templateFile: 'templates/pageStyle.ts.hbs',
    },
  ],
}