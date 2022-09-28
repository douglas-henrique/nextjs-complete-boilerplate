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
      path: '../src/pages/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/page.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.style.ts',
      templateFile: 'templates/pageStyle.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/pages/{{pascalCase name}}/__tests__/index.spec.tsx',
      templateFile: 'templates/pageTest.tsx.hbs',
    },
  ],
}