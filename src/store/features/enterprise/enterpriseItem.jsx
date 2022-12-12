import React from 'react'
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const e = [{
    name: "Tryg - 70112020",
    id: "yaijdwquw-wdomdd",
    childs: [{
        name: "0 - Englesk",
        id: "qowfmpqwkd-wpkqdmoiqwmd",
        childs: [{
            id: "koqwfm-omdqopmd",
            name: "1 - Ny kunde",
            childs: []
        }, {
            id: "kwdm-kwmd",
            name: "2 - Sunhed",
            childs: [{
                id: "owpqwww-lsllsko",
                name: "1 - Gør brug",
                childs: []
            }]
        }]
    }],
}, {
    name: "Danske bank - 72304050",
    id: "6",
    childs: [{
        name: "1 - Pension",
        id: "7",
        childs: [{
            id: "8",
            name: "1 - Førtidspension",
            childs: []
        }, {
            id: "9",
            name: "2 - Opsparing",
            childs: [{
                id: "10",
                name: "1 - Formue",
                childs: []
            }]
        }]
    }]
}];

export function EnterpriseItem() {

    const clicked = (item, event) => {
        event.stopPropagation()
        console.log(item)
    };

    const renderTree = (node) => (
        <TreeItem key={node.id} nodeId={node.id} label={node.name} onMouseUp={(e) => clicked(node, e)}>
          {Array.isArray(node.childs)
            ? node.childs.map((item) => renderTree(item))
            : null}
        </TreeItem>
      );

    return (
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: "60vh", flexGrow: 1, overflow: 'auto',  marginTop: '7px',}}>
            { e.map((node) => { return renderTree(node)})}
        </TreeView>
    )
}
