import React from 'react'
import { useAppContext } from '../util/context'

const ModalButton = () => {
    const { openModal } = useAppContext();
    return (
        <div>
            <button onClick={openModal}> Show Modal</button>
        </div>
    )
}

export default ModalButton;
