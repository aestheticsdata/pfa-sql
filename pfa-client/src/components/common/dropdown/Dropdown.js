import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';


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

  render() {
    const { listItems } = this.props;
    const { isOpen, title } = this.state;

    return (
      <>
        <div className="container">
          <div
            className="header"
            onClick={this.toggleDropdown}
          >
            <div className="title">
              {title}
            </div>
            {
              isOpen ?
                <FontAwesomeIcon icon={faAngleUp}/>
                :
                <FontAwesomeIcon icon={faAngleDown}/>
            }
          </div>
          <div className="content">
            {
              isOpen ?
                <>
                  {
                    listItems.map((item) => (
                      <li
                        className="list-item"
                        key={item.id}
                      >
                        {item.name}
                      </li>
                    ))
                  }
                </>
                :
                null
            }
          </div>
        </div>
      </>
    )
  }
}

export default Dropdown;
