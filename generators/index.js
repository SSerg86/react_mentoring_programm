module.exports = (plop) => {
  const componentRootPath = (entity) => `../src/${entity}s/{{ name }}`;
  const stylesPath = (entity) =>
    `${componentRootPath(entity)}/{{ name }}.module.css`;
  const componentPath = (entity) => `${componentRootPath(entity)}/{{ name }}.tsx`;
  const typesPath = (entity) => `${componentRootPath(entity)}/{{ name }}.types.ts`;

  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: componentPath('component'),
        templateFile: 'templates/components/component.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: stylesPath('component'),
        templateFile: 'templates/components/styles.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: typesPath('component'),
        templateFile: 'templates/components/types.hbs',
        abortOnFail: true,
      },
    ],
  });
};
