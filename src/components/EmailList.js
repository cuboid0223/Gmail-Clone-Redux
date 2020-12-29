import React from 'react'
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";
import Section from './Section';
import EmailRow from './EmailRow';

const EmailList = () => {
    return (
      <div className="emailList">
        <div className="emailList__settings">
          <div className="emailList__settingsLeft">
            <Checkbox />
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
              <RedoIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>

          <div className="emailList__settingsRight">
            <IconButton>
              <ChevronLeftIcon />
            </IconButton>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
            <IconButton>
              <KeyboardHideIcon />
            </IconButton>
            <IconButton>
              <SettingsIcon />
            </IconButton>
          </div>
        </div>
        <div className="emailList__sections">
          <Section title="Primary" Icon={InboxIcon} color="red" selected />
          <Section title="Social" Icon={PeopleIcon} color="#1a73e8" />
          <Section title="Promotions" Icon={LocalOfferIcon} color="green" />
        </div>
        <div className="emailList__list">
          <EmailRow title='Twwww' subject='i am subject' description='a description' time='10am'/>
        </div>
      </div>
    );
}

export default EmailList
