import React from 'react'
import "./Sidebar.css"
import SidebarOptions from './SidebarOptions'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicOutlinedIcon from '@material-ui/icons/LibraryMusicOutlined';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {

    const [{ playlists }, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOptions Icon={HomeOutlinedIcon} title="Home"/>
            <SidebarOptions Icon={SearchOutlinedIcon} title="Search"/>
            <SidebarOptions Icon={LibraryMusicOutlinedIcon} title="Library"/>

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => (
                <SidebarOptions title={playlist.name} />
            ))}

        </div>
    )
}

export default Sidebar
