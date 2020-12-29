import { Button, IconButton } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import DuoIcon from "@material-ui/icons/Duo";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
        startIcon={<AddIcon fontSize="large" />}
      >
        Compose
      </Button>

      <SidebarOption
        title="Inbox"
        Icon={InboxIcon}
        number={54}
        selected={true}
      />
      <SidebarOption title="Starred" Icon={StarIcon} number={54} />
      <SidebarOption title="snoozed" Icon={AccessTimeIcon} number={54} />
      <SidebarOption title="Important" Icon={LabelImportantIcon} number={54} />
      <SidebarOption title="Sent" Icon={NearMeIcon} number={54} />
      <SidebarOption title="Drafts" Icon={NoteIcon} number={54} />
      <SidebarOption title="More" Icon={ExpandMoreIcon} number={54} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
