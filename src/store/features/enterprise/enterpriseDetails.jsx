import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEnterprise, setSelectedEnterprise } from './enterpriseSlice'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';


export function EnterpriseDetails() {
    const selected = useSelector((state) => state.enterprise.selectedEnterprise)
    debugger;
    const dispatch = useDispatch()

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2} direction="column">
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center">
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" color="warning">Edit selected item</Button>
                        <Button variant="contained" color="error">Delete selected item</Button>
                    </Stack>
                </Box>
                <Stack spacing={2} direction="column">
                    <TextField
                        id="filled-read-only-input"
                        label="Id"
                        required={true}
                        value={selected.id}
                        InputProps={{
                            readOnly: false,
                        }}
                        variant="filled"
                    />
                    <TextField
                        id="filled-read-only-input"
                        label="Name"
                        required={true}
                        value={selected.name}
                        InputProps={{
                            readOnly: false,
                        }}
                        variant="filled"
                    />
                </Stack>
            </Stack>
        </Box>
    )
}
