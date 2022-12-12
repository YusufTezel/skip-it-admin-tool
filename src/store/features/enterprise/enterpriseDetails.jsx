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


export function EnterpriseDetails() {
    const selected = useSelector((state) => state.enterprise.selectedEnterprise)
    const dispatch = useDispatch()

    const localState = {

    };

    return (
        <div>
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
                    <Stack spacing={2} direction="row">
                        <div>{selected?.name}</div>
                    </Stack>
                </Stack>
            </Box>
        </div>
    )
}
