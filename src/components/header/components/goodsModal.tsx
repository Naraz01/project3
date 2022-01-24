import React from 'react';
import {Button, FormControl, FormGroup, TextField} from '@material-ui/core'
import {ModalBlock} from '../../../components/ModalBlock/index';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { GoodsApi } from '../../../services/api/goodsApi';
import { fetchGroupe, setAddGoods } from '../../../store/ducks/groupe/actionCreators';

interface GroupeModalProps {
    open: boolean;
    onClose: () => void;
}

export const GoodsModal: React.FC<GroupeModalProps> = ({open, onClose}): React.ReactElement => {
    const [currency, setCurrency] = React.useState(1);
    const [name, setName] = React.useState('');
    const [vendorCode, setVendorCode] = React.useState('');
    const [eanCode, setEanCode] = React.useState('');
    const [pricePurchases, setPricePurchases] = React.useState('');
    const [salePrice, setSalePrice] = React.useState('');
    const [goodsType, setGoodsType] = React.useState('');
    const [groupeId, setGroupeId] = React.useState('');
    const dispatch = useDispatch();

    const {groupe} = useSelector((state : RootState ) => {
        return {
            groupe: state.groupe.data
        }
    });
    const handleChange = (event:any) => {
      setCurrency(event.target.value);
      setGoodsType(event.target.value);
      setGroupeId(event.target.value)
    };

    const onAddGoods = async () => {
        try {
          const goods = {
            name,
            vendorCode,
            eanCode,
            pricePurchases,
            salePrice,
            goodsType: parseInt(goodsType),
            groupeId: parseInt(groupeId)
          };
          const data = await GoodsApi.setGoods(goods)
          dispatch(fetchGroupe())
          setName('');
          setVendorCode('');
          setEanCode('');
          setPricePurchases('');
          setSalePrice('');
          setGoodsType('');
          setGroupeId('');
          onClose()
          setCurrency(1)
        } catch(error) {
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
                    <Typography> Name </Typography>
                    <TextField
                        onChange={e => setName(e.target.value)}
                        value={name}
                        autoFocus
                        id="text"
                        InputLabelProps={{ shrink: true }}
                        variant="filled"
                        type="text"
                        fullWidth
                    />
                    <Typography> Vendor code </Typography>
                    <TextField
                        onChange={e => setVendorCode(e.target.value)}
                        value={vendorCode}
                        autoFocus
                        id="text"
                        InputLabelProps={{ shrink: true }}
                        variant="filled"
                        type="text"
                        fullWidth
                    />
                    <Typography> EAN-13 CODE </Typography>
                    <TextField
                        onChange={e => setEanCode(e.target.value)}
                        value={eanCode}
                        autoFocus
                        id="text"
                        InputLabelProps={{ shrink: true }}
                        variant="filled"
                        type="text"
                        fullWidth
                    />
                    <Typography> Price purchases </Typography>
                    <TextField
                        onChange={e => setPricePurchases(e.target.value)}
                        value={pricePurchases}
                        autoFocus
                        id="text"
                        InputLabelProps={{ shrink: true }}
                        variant="filled"
                        type="text"
                        fullWidth
                    />
                    <Typography> Sale proce </Typography>
                    <TextField
                        onChange={e => setSalePrice(e.target.value)}
                        value={salePrice}
                        autoFocus
                        id="text"
                        InputLabelProps={{ shrink: true }}
                        variant="filled"
                        type="text"
                        fullWidth
                    />
                    <Typography> Goods type </Typography>
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
                        {
                            groupe &&
                            groupe.map((option:any) => (
                                <option key={option.id} value={option.id}>
                                    {option.name}
                                </option>
                            ))
                        }
                        </TextField>
                        <Button onClick = {onAddGoods} variant="contained" color="primary" fullWidth>
                            Save
                        </Button>
                </FormGroup>
            </FormControl>
        </ModalBlock>                   
    )
};
