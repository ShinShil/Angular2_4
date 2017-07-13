// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDRjXMGbMswlWBAE0wCCe1Aq1B_CZ92_QE',
    authDomain: 'yourkursovoi.firebaseapp.com',
    databaseURL: 'https://yourkursovoi.firebaseio.com',
    projectId: 'yourkursovoi',
    storageBucket: 'yourkursovoi.appspot.com',
    messagingSenderId: '625487142437'
  }
};
