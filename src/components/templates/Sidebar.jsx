import { useState, useEffect } from 'react';
import {Sidebar,Menu, MenuItem, SubMenu} from 'react-pro-sidebar'

import '../../styles/sidebar.css'


import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


export default function SidebarComponent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar toggle

    
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        
        <div  >
        <Sidebar  collapsed={!isSidebarOpen} style={{height: "100vh", color:"#d4dade"}} backgroundColor='rgba(0, 0, 73, 0.84)' breakPoint='sm' >
        <Menu  >
            <MenuItem
                icon={<MenuOutlinedIcon />}
                onClick= {toggleSidebar}
                t
                style={{ textAlign: "center" }}
                className="custom-hover"
                
            >
                {" "}
                <h2 >Admin</h2>
            </MenuItem>
            <SubMenu icon={<DashboardOutlinedIcon />} label="Dashboards" className="custom-hover">
                <MenuItem icon={<DashboardOutlinedIcon />}> Dashboard v1 </MenuItem>
                <MenuItem icon={<DashboardOutlinedIcon />}> Dashboard v2 </MenuItem>
                <MenuItem icon={<DashboardOutlinedIcon />}> Dashboard v3 </MenuItem>
            </SubMenu>
            <MenuItem icon={<HomeOutlinedIcon />} className='custom-hover'>Home</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />} className='custom-hover'>Team</MenuItem>
            <MenuItem icon={<ContactsOutlinedIcon />} className='bg'>Contacts</MenuItem>
            <MenuItem icon={<ReceiptOutlinedIcon />} className='bg'>Profile</MenuItem>
            <MenuItem icon={<HelpOutlineOutlinedIcon />} className='bg'>FAQ</MenuItem>
            <MenuItem icon={<CalendarTodayOutlinedIcon />} className='bg'>Calendar</MenuItem>
        </Menu>
        </Sidebar>
        </div>
        
    )

}