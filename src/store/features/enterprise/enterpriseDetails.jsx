import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setEditModeState, updateSelectedItemName, updateEnterprise, cancelEnterpriseUpdate } from './enterpriseSlice'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export function EnterpriseDetails() {
    const id = useSelector((state) => state.enterprise.selectedEnterprise.id);
    const name = useSelector((state) => state.enterprise.selectedEnterprise.name);
    const inEditMode = useSelector((state) => state.enterprise.editMode);
    const dispatch = useDispatch();

    const handleInputChangeName = (event) => {
        dispatch(updateSelectedItemName(event.target.value));
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2} direction="column">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center">
                    <Stack spacing={2} direction="row">
                        <Button disabled={inEditMode} onClick={() => dispatch(setEditModeState(true))} variant="contained" color="primary">Edit selected item</Button>
                        <Button disabled={inEditMode} variant="contained" color="error">Delete selected item</Button>
                    </Stack>
                </Box>
                <Stack spacing={2} direction="column">
                    <TextField
                        id="filled-read-only-input"
                        label="Id"
                        required={true}
                        value={id}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                    <TextField
                        id="filled-read-only-inputd"
                        label="Name"
                        required={true}
                        value={name}
                        InputProps={{
                            readOnly: !inEditMode,
                        }}
                        autoFocus
                        onChange={handleInputChangeName}
                        variant={inEditMode ? "standard" : "filled"}
                    />
                    {
                        inEditMode ?                     
                        <Box visibility={!inEditMode}
                        display="flex"
                        justifyContent="center"
                        alignItems="center">
                        <Stack spacing={2} direction="row">
                            <Button onClick={() => dispatch(updateEnterprise())} variant="contained" color="success">Apply changes</Button>
                            <Button onClick={() => dispatch(cancelEnterpriseUpdate())} variant="contained" color="secondary">Cancel</Button>
                        </Stack>
                    </Box> : null
                    }
                </Stack>
            </Stack>
        </Box>
    )
}
