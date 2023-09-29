import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

export default defineNuxtPlugin((nuxtApp) => {
  UIkit.use(Icons);
  nuxtApp.provide("uikit", UIkit);
});