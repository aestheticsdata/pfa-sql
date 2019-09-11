// See https://github.com/GertjanReynaert/react-intl-translations-manager
const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: '.messages',
  translationsDirectory: 'src/i18n/translations/',
  languages: ['en', 'fr']
});