module.exports = function component(plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'Use this to generate a component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Name of the component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.component.js',
        templateFile: './.plop/templates/component/Component.component.js',
      },
      {
        type: 'modify',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.component.js',
        pattern: /Component/g,
        template: '{{pascalCase componentName}}',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.spec.js',
        templateFile: './.plop/templates/component/Component.spec.js',
      },
      {
        type: 'modify',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.spec.js',
        pattern: /Component/g,
        template: '{{pascalCase componentName}}',
      },
      {
        type: 'modify',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.spec.js',
        pattern: /componentCamelCase/g,
        template: '{{camelCase componentName}}',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.styles.js',
        templateFile: './.plop/templates/component/Component.styles.js',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.stories.js',
        templateFile: './.plop/templates/component/Component.stories.js',
      },
      {
        type: 'modify',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.stories.js',
        pattern: /Component/g,
        template: '{{pascalCase componentName}}',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.json',
        templateFile: './.plop/templates/component/Component.json',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/README.md',
        templateFile: './.plop/templates/component/readme.md',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/CHANGELOG.md',
        templateFile: './.plop/templates/component/changelog.md',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase componentName}}/package.json',
        templateFile: './.plop/templates/component/pkg.json',
      },
    ],
  });
};
