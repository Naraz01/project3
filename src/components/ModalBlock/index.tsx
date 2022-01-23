import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent  from '@material-ui/core/DialogContent';
import DialogContentText  from '@material-ui/core/DialogContentText';
import DialogTitle  from '@material-ui/core/DialogTitle';
import IconButton  from '@material-ui/core/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

interface ModalBlockProps {
    children: React.ReactNode,
    title?: string,
    visible?: boolean,
    onClose: () => void,
}


export const ModalBlock: React.FC<ModalBlockProps> = ({
    title, 
    onClose,
    visible = false,
    children
} : ModalBlockProps ) : React.ReactElement | null => {
    if (!visible) {
        return null
    }
    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby="form">
            <DialogTitle id="form-dialog-title">
                <IconButton onClick={onClose} color="secondary" aria-label="close">
                    <CloseIcon style={{fontSize:26}} color="secondary" />
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
};
