import { defineMessages } from 'react-intl';

const scope = 'app.components.About';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Site hébergé chez OVH SAS',
  },
  ovhAddress: {
    id: `${scope}.ovhAddress`,
    defaultMessage: 'Siège social : 2 rue Kellermann - 59100 Roubaix - France',
  },
  ovhAPE: {
    id: `${scope}.ovhAPE`,
    defaultMessage: 'Code APE 2620Z',
  },
  ovhTVA: {
    id: `${scope}.ovhTVA`,
    defaultMessage: 'N° TVA : FR 22 424 761 419',
  },
});
