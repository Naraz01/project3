import React from "react";
import Button from '@mui/material/Button';
import { GroupeModal } from "./components/groupeModal";
import { GoodsModal } from "./components/goodsModal";

export const Header: React.FC = ():React.ReactElement => {
    const [visibleModal, setVisibleModal] = React.useState<'groupe' | 'goods'>();

    const handleClickOpenGroupe = (): void => {
        setVisibleModal('groupe')
    }

    const handleClickOpenGoods = (): void => {
        setVisibleModal('goods')
    }

    const handleCloseModal = (): void => {
        setVisibleModal(undefined)
    }
    return (
        <header className="header">
            <Button variant="contained" onClick = { handleClickOpenGroupe } color="primary">Create a groupe</Button>  
            <Button variant="contained" onClick = { handleClickOpenGoods } color="primary">Create a goods</Button>
            <GroupeModal open = { visibleModal === "groupe" } onClose={ handleCloseModal } />
            <GoodsModal open = { visibleModal === "goods" } onClose={ handleCloseModal } />
        </header>
    )
};
