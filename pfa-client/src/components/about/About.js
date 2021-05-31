import StyledAbout from './StyledAbout';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const About = () => {
  return (
    <StyledAbout>
      <div className="title">
        <FormattedMessage {...messages.title} />
      </div>
      <div className="ovh-address">
        <FormattedMessage {...messages.ovhAddress} />
      </div>
      <div className="ovh-ape">
        <FormattedMessage {...messages.ovhAPE} />
      </div>
      <div className="ovh-tva">
        <FormattedMessage {...messages.ovhTVA} />
      </div>
    </StyledAbout>
  );
};

export default About;
