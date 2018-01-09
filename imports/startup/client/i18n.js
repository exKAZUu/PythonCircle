/* eslint no-eval: "off" */

import { Meteor } from 'meteor/meteor';
import { TAPi18n } from 'meteor/tap:i18n';
import { T9n } from 'meteor/softwarerero:accounts-t9n';

function getUserLanguage() {
  let lang;
  if (navigator && navigator.userAgent) {
    const matchResult = navigator.userAgent.match(/android.*\W(\w\w)-(\w\w)\W/i);
    if (matchResult) {
      lang = matchResult[1];
    }
  }
  if (!lang && navigator) {
    if (navigator.language) {
      lang = navigator.language;
    } else if (navigator.browserLanguage) {
      lang = navigator.browserLanguage;
    } else if (navigator.systemLanguage) {
      lang = navigator.systemLanguage;
    } else if (navigator.userLanguage) {
      lang = navigator.userLanguage;
    }
    if (lang) {
      lang = lang.substr(0, 2);
    }
  }
  return lang;
}

function initialize() {
  const lang = TAPi18n.getLanguage();
  T9n.setLanguage(lang);
  return lang;
}

Meteor.startup(function () {
  let lang = getUserLanguage() || 'ja';
  TAPi18n.setLanguage(lang).done(initialize);
});
