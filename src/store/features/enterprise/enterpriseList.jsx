import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEnterprise } from './enterpriseSlice'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { EnterpriseItem } from './enterpriseItem'

export function EnterpriseList() {

    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center">
                <Stack spacing={2} direction="row">
                    <Button variant="contained">Add to root</Button>
                    <Button variant="contained">Add to selected</Button>
                </Stack>
            </Box>
            <EnterpriseItem></EnterpriseItem>
        </div>
    )
}
