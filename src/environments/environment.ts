// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
  apiKey: "AIzaSyANz6OuSouFngxhChPmgbZbPAHqpAl_-K8",
    authDomain: "producto-11a3a.firebaseapp.com",
    databaseURL: "https://producto-11a3a.firebaseio.com",
    projectId: "producto-11a3a",
    storageBucket: "producto-11a3a.appspot.com",
    messagingSenderId: "879514773521"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
