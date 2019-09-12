import React, { Component, Children } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import onClickOutside from "react-onclickoutside";


class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      title: this.props.title,
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
    console.log('handleCloseFromChild');
    this.setState({
      isOpen: false,
    })
  };

  render() {
    const { listItems } = this.props;
    const { isOpen, title } = this.state;

    return (
      <>
        <div className="container">
          {/*<div*/}
          {/*  className="header"*/}
          {/*  onClick={this.toggleDropdown}*/}
          {/*>*/}
          {/*  <div className="title">*/}
          {/*    {title}*/}
          {/*  </div>*/}
          {/*  {*/}
          {/*    isOpen ?*/}
          {/*      <FontAwesomeIcon icon={faAngleUp}/>*/}
          {/*      :*/}
          {/*      <FontAwesomeIcon icon={faAngleDown}/>*/}
          {/*  }*/}
          {/*</div>*/}
          <div
            onClick={this.toggleDropdown}
          >
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
