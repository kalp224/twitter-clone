import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import TagIcon from '@mui/icons-material/Tag';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
function Sidebar() {
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar__twitterIcon' />
            <SidebarOption active={true} Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={TagIcon} text="Explore" />
            <SidebarOption Icon={NotificationsIcon} text="Notification" />
            <SidebarOption Icon={MailIcon} text="Messages" />
            <SidebarOption Icon={PersonIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />
            <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar
