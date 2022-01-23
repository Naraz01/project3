import React from 'react';
import {Button, FormControl, FormGroup, TextField} from '@material-ui/core'
import {ModalBlock} from '../../../components/ModalBlock/index';
import Typography from '@mui/material/Typography';
import { GroupeApi } from '../../../services/api/GroupeApi';
import { useDispatch } from 'react-redux';
import { setAddGroupe, setAddGroupeLoadingState } from '../../../store/ducks/groupe/actionCreators';
import { AddLoadingState } from '../../../store/ducks/groupe/contracts/state';

interface GroupeModalProps {
    open: boolean;
    onClose: () => void;
}

export const GroupeModal: React.FC<GroupeModalProps> = ({open, onClose}): React.ReactElement => {
    const [text, setText] = React.useState('');
    const dispatch = useDispatch();

    const onAddGroupe = async () => {
        try {
            const groupe = {
            name: text,
            goods: [],
            }
            setText('')
            const data = await GroupeApi.setGroupe(groupe)
            dispatch(setAddGroupe(data))
            onClose()
        } catch(error) {
            dispatch(setAddGroupeLoadingState(AddLoadingState.ERROR))
            console.log(error)
      }
    }
    return (
        <ModalBlock visible = {open} 
            title="Create a groupe" 
            onClose={onClose} 
        >
            <FormControl component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <Typography> Groupe name </Typography>
                    <TextField
                      onChange={e => setText(e.target.value)}
                      value={text}
                      autoFocus
                      id="text"
                      InputLabelProps={{ shrink: true }}
                      variant="filled"
                      type="text"
                      fullWidth
                    />
                    { /*
                    <Typography> Parrents Groupe </Typography>
                     <TextField
                        id="standard-select-currency-native"
                        select
                        value={currency}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        variant="standard"
                        fullWidth
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </TextField> */ }
                        <Button onClick = {onAddGroupe} variant="contained" color="primary" fullWidth>
                            Save
                        </Button>
                </FormGroup>
            </FormControl>
        </ModalBlock>                   
    )
};
