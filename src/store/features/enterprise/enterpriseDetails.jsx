import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setEditModeState, updateSelectedItemName, updateEnterprise, cancelEnterpriseUpdate, deleteEnterpriseSubmenu } from './enterpriseSlice'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export function EnterpriseDetails() {
    const enterprise = useSelector((state) => state.enterprise.selectedEnterprise);
    const inEditMode = useSelector((state) => state.enterprise.inEditMode);
    const dispatch = useDispatch();
    const canBeDeleted = enterprise.children.length != 0;

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
                        <Button disabled={inEditMode || canBeDeleted} onClick={() => dispatch(deleteEnterpriseSubmenu())} variant="contained" color="error">Delete selected item</Button>
                    </Stack>
                </Box>
                <Stack spacing={2} direction="column">
                    <TextField
                        id="id-no-edit"
                        label="id"
                        required={true}
                        value={enterprise.id}
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="filled"
                    />
                    <TextField
                        id="name-edit"
                        label="Name"
                        required={true}
                        value={enterprise.name}
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
