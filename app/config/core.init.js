window.APP = {
  ADD_MODULE(moduleName, dependencies) {
    angular.module(moduleName, dependencies || []);
    angular.module(moduleName).requires.push(moduleName);
  }
};
