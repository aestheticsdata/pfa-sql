import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import useOnClickOutside from 'use-onclickoutside';

import StyledDropDown from './StyledDropDown';


// const DropDown = () => {
//
// }

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  };

  handleClickOutside = ev => {
    this.setState({
      isOpen: false,
    })
  };

  close = ev => {
    this.setState({
      isOpen: false,
    })
  };

  render() {
    const { isOpen } = this.state;

    return (
      <StyledDropDown>
        <div className="container">
          <div
            onClick={this.toggleDropdown}
          >
            <>
              {
                isOpen ?
                  <FontAwesomeIcon
                    className="icon"
                    icon={faAngleUp}
                  />
                  :
                  <FontAwesomeIcon
                    className="icon"
                    icon={faAngleDown}
                  />
              }
            </>
            {this.props.children[0]}
          </div>
          <div>
            {
              isOpen ?
                React.cloneElement(this.props.children[1], { handleclosefromchild: () => this.close()})
                :
                null
            }
          </div>
        </div>
      </StyledDropDown>
    )
  }
}

// export default onClickOutside(Dropdown);
export default Dropdown;
