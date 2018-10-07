// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
import { IConfig } from './iconfig';

export const environment = {
  production: false
};

export const CONFIG: IConfig = {
  "firebaseConfig" : {
  apiKey: "AIzaSyCOopkldz9fvKxS5mWIGHw7RPVIkO4rLRM",
  authDomain: "my-angular-demo-b4d53.firebaseapp.com",
  databaseURL: "https://my-angular-demo-b4d53.firebaseio.com",
  storageBucket: "my-angular-demo-b4d53.appspot.com",
  messagingSenderId: "822762485216"
  }
};