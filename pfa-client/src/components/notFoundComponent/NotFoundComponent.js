import { useIntl } from 'react-intl';

import StyledNotFoundComponent from './StyledNotFoundComponent';
import messages from './messages';

const NotFoundComponent = () => {
  const intl = useIntl();

  return (
    <StyledNotFoundComponent>
      <div className="notfound404">
        <div className="title">404</div>
        <div className="text">{intl.formatMessage({ ...messages.text })}</div>
      </div>
      <div className="bank" />
    </StyledNotFoundComponent>
  )
};

export default NotFoundComponent;

