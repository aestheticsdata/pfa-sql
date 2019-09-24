import { UPDATE_LANG } from './constants';

export const updateLang = (lang) => {
  return {
    type: UPDATE_LANG,
    lang,
  };
};
