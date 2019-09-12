import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import onClickOutside from "react-onclickoutside";


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
      <>
        <div className="container">
          <div
            onClick={this.toggleDropdown}
          >
            <>
              {
                isOpen ?
                  <FontAwesomeIcon icon={faAngleUp} />
                  :
                  <FontAwesomeIcon icon={faAngleDown}/>
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
      </>
    )
  }
}

export default onClickOutside(Dropdown);
