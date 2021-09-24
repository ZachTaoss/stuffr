import React from 'react'
import { useAppContext } from '../util/context'
import {FaBars} from 'react-icons/fa'

const SidebarBtn = () => {
    const { openSideBar } = useAppContext();
    return (
        <button className="sidebar-toggle" onClick={openSideBar}>
            <FaBars />
        </button>
    )
}

export default SidebarBtn
