import loadcomponents from '@/tools/loadcomponents';

export default [
  {
    path: 'start',
    name: 'Start',
    component: loadcomponents.load('Start', 'views', '/doc'),
  },
  {
    path: 'install',
    name: 'Install',
    component: loadcomponents.load('Install', 'views', '/doc'),
  },
];
