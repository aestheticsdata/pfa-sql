import { injectIntl } from 'react-intl';

import StyledNotFoundComponent from './StyledNotFoundComponent';
import messages from './messages';

const NotFoundComponent = (props) => (
  <StyledNotFoundComponent>
    <div className="notfound404">
      <div className="title">404</div>
      <div className="text">{props.intl.formatMessage({ ...messages.text })}</div>
    </div>
    <div className="bank" />
  </StyledNotFoundComponent>
);

export default injectIntl(NotFoundComponent);

