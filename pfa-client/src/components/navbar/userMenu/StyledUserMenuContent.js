import styled from 'styled-components';
import StyledContent from '../../common/dropdown/StyledContent';
import colors from '../../../colors';

const StyledUserMenuContent = styled(StyledContent)`
  top: 30px;
  right: 0;
  width: 240px;
  background-color: ${colors.grey2};
  padding: 5px;
  
  .dropdownitems {
    padding: 5px;
    &:hover {
      background-color: ${colors.grey0};
      color: ${colors.blueNavy};
    }
  }
`;

export default StyledUserMenuContent;
