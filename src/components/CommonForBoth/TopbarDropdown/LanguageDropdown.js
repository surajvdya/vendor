import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

//i18n
import i18n from '../../../i18n';
import { withNamespaces } from 'react-i18next';



class LanguageDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      lng : "English",
    };
    this.toggle = this.toggle.bind(this);
    this.changeLanguageAction.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      menu: !prevState.menu
    }));
  }

  changeLanguageAction = (lng) => {
    
  //set the selected language to i18n
  i18n.changeLanguage(lng);

  if(lng === "sp")
      this.setState({lng : "Spanish" });
  else if(lng === "gr")
      this.setState({lng : "German" });
  else if(lng === "rs")
       this.setState({lng : "Russian"});
  else if(lng === "it")
       this.setState({lng : "Italian"});
  else if(lng === "eng")
       this.setState({lng : "English" });
 }

  render() {

    return (
      <React.Fragment>
                        <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-none d-sm-inline-block">
                            <DropdownToggle tag="button" className="btn header-item waves-effect">
                                <img className="" src={this.state.flag} alt="Header Language" height="16"/>{'  '}
                                <span className="align-middle">{this.state.lng}</span>
                            </DropdownToggle>

                            <DropdownMenu right>

                                <DropdownItem active={this.state.lng === "English" ? true : false } href="" onClick={() => this.changeLanguageAction('eng')} className="notify-item">
                                     <span className="align-middle">English</span>
                                </DropdownItem>

                                <DropdownItem href="" active={this.state.lng === "Spanish" ? true : false } onClick={() => this.changeLanguageAction('sp')} className="notify-item">
                                     <span className="align-middle">Spanish</span>
                                </DropdownItem>

                                <DropdownItem href="" active={this.state.lng === "German" ? true : false } onClick={() => this.changeLanguageAction('gr')} className=" notify-item">
                                   <span className="align-middle">German</span>
                                </DropdownItem>
                                
                                <DropdownItem href="" active={this.state.lng === "Italian" ? true : false } onClick={() => this.changeLanguageAction('it')} className=" notify-item">
                                   <span className="align-middle">Italian</span>
                                </DropdownItem>
                                
                                <DropdownItem href="" active={this.state.lng === "Russian" ? true : false } onClick={() => this.changeLanguageAction('rs')} className=" notify-item">
                                     <span className="align-middle">Russian</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
      </React.Fragment>
    );
  }
}

export default withNamespaces()(LanguageDropdown);
