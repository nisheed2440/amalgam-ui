import ExecutionEnvironment from 'exenv';
import vendors from './vendors';

if (ExecutionEnvironment.canUseDOM) {
  vendors().then(modules => {
    const moduleNames = Object.keys(modules);
    for (let i = 0; i < moduleNames.length; i += 1) {
      const moduleName = moduleNames[i];
      window[moduleName] = modules[moduleName];
    }
  });
}
