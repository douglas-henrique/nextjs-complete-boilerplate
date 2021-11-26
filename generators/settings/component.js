module.exports = {
  description: 'Creates a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the component?',
    },
  ],
  actions: [
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/index.tsx.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
      templateFile: 'templates/style.ts.hbs',
    },
    {
      type: 'add',
      path: '../src/components/{{pascalCase name}}/__tests__/index.spec.tsx',
      templateFile: 'templates/test.tsx.hbs',
    },
  ],
}