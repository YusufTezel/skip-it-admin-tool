import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addEnterprise, setSelectedEnterprise, addSubmenu } from './enterpriseSlice'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export function EnterpriseList() {
    const elements = useSelector((state) => state.enterprise.enterprises.children);
    const inEditMode = useSelector((state) => state.enterprise.editMode);
    const selectedEnterprise = useSelector((state) => state.enterprise.selectedEnterprise);
    const dispatch = useDispatch();

    const clicked = (item, idArray, event) => {
        event.stopPropagation();
        console.log(idArray)
        dispatch(setSelectedEnterprise(item));
    };

    const renderTree = (node, idArray) => (
        <TreeItem key={node.id} nodeId={node.id} label={node.name} onMouseUp={(e) => clicked(node, [...idArray, node.id], e)}>
          {Array.isArray(node.childs)
            ? node.children.map((item) => renderTree(item, [...idArray, node.id]))
            : null}
        </TreeItem>
    );

    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center">
                <Stack spacing={2} direction="row">
                    <Button disabled={inEditMode} variant="contained" onClick={() => dispatch(addEnterprise())} color="primary">Add new Enterprise</Button>
                    <Button disabled={inEditMode} variant="contained" onClick={() => dispatch(addSubmenu())} color="info">Add as a child to selected</Button>
                </Stack>
            </Box>
            <TreeView 
                disableSelection
                selected={selectedEnterprise.id}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                style={{ height: "60vh", overflowX: 'hidden', marginTop: '7px', margin: '5px' }}>
                {elements.map((node) => { return renderTree(node, []) })}
            </TreeView>
        </div>
    )
}
