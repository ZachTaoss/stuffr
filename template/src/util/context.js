import React, { useState, useEffect, useContext } from 'react'

const AppContext = React.createContext();

export const AppProvider = ( { children } ) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const openSideBar = () => {
        setSidebarOpen(true)
        console.log(sidebarOpen)

    }
    const closeSideBar = () => {
        setSidebarOpen(false)
        console.log(sidebarOpen)

    }
    const openModal = () => {
        setModalOpen(true)
        console.log(modalOpen)

    }
    const closeModal = () => {
        setModalOpen(false)

    }

    return(
        <AppContext.Provider value={{openSideBar,
        closeSideBar,
        openModal,
        closeModal,
        modalOpen,
        sidebarOpen
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    return useContext(AppContext);
}