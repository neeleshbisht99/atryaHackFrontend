import React from "react";
import useStyles from './index.style'
import { DataGrid } from '@mui/x-data-grid';

// use ag-grid in future

const Datagrid = (props: any) => {
    const { rows, columns, onRowClick } = props
    const { classes } = useStyles()

    return (
        <div className={classes.gridContainer} style={{ position: 'relative', height: '100%', width: '100%' }}>
            <DataGrid rows={rows} columns={columns} onRowClick={onRowClick} />
        </div>
    );
};

export default Datagrid;