import React from 'react';
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


export function EnterpriseList() {
    const elements = useSelector((state) => state.enterprise.enterprises);
    const inEditMode = useSelector((state) => state.enterprise.editMode);
    const selectedEnterprise = useSelector((state) => state.enterprise.selectedEnterprise);
    const dispatch = useDispatch();

    const clicked = (item, event) => {
        event.stopPropagation();
        dispatch(setSelectedEnterprise(item));
    };

    const renderTree = (node) => (
        <TreeItem key={node.id} nodeId={node.id} label={node.name} onMouseUp={(e) => clicked(node, e)}>
          {Array.isArray(node.childs)
            ? node.childs.map((item) => renderTree(item))
            : null}
        </TreeItem>
    );

    const addNewEnterprise = () => {
        let newItem = {
            id: uuidv4(),
            name: "*NEW ENTERPRISE",
            childs: []
        };
        dispatch(addEnterprise(newItem));
    };

    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center">
                <Stack spacing={2} direction="row">
                    <Button disabled={inEditMode} variant="contained" onClick={addNewEnterprise} color="primary">Add new Enterprise</Button>
                    <Button disabled={inEditMode} variant="contained" color="info">Add as a child to selected</Button>
                </Stack>
            </Box>
            <TreeView 
                disableSelection
                selected={selectedEnterprise.id}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                style={{ height: "60vh", overflowX: 'hidden', marginTop: '7px', margin: '5px' }}>
                {elements.map((node) => { return renderTree(node) })}
            </TreeView>
        </div>
    )
}
