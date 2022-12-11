import React from 'react'
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';

function RecursiveFunction(obj) {
    const items = obj.items;

    for (let index = 0; index < items.length; index++) {
        const element = items[index];

        if (element.childs && element.childs.length === 0) {
            return (
                <TreeItem nodeId={element.id} label={element.name}></TreeItem>
            );
        }

        return (
            <TreeItem nodeId={element.id} label={element.name}>
                <RecursiveFunction items={element.childs}></RecursiveFunction>
            </TreeItem>
        );
        
    }
}

export function EnterpriseItem() {

    const e = [{
        name: "Something",
        id: "1",
        childs: [{
            name: "anotherthing",
            id: "2",
            childs: [{
                id: "3",
                name: "thirdthing",
                childs: []
            }]
        }]
    }];

    return (
        <TreeView
            aria-label="file system navigator"
            sx={{ height: "60vh", flexGrow: 1, overflowY: 'auto', marginTop: '7px' }}>
            <RecursiveFunction items={e}></RecursiveFunction>
        </TreeView>
    )
}
