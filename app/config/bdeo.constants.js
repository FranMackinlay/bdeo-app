angular
  .module('bdeoApp')
  .constant('PATHS', (() => {
    const BDEO_API = 'http://localhost:3000/api/v1'
    return {
      BDEO_API,
    }
  })())
