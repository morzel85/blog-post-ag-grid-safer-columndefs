import React from 'react';
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

import Star from './Star';
import brightestStars from './brightestStars'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const fieldName = (name: keyof Star) => name;

const columnDefs: ColDef[] = [
    {
        headerName: 'Rank',
        field: fieldName('rank'),
        width: 80
    },
    {
        headerName: 'Visual magnitude (mV)',
        field: fieldName('magnitude'),
        width: 170
    },
    {
        headerName: 'Proper name',
        field: fieldName('name'),
        width: 180
    },
    {
        headerName: 'Bayer designation',
        field: fieldName('designation'),
        width: 150
    },
    {
        headerName: 'Distance (ly)',
        field: fieldName('distance'),
        width: 120
    },
    {
        headerName: 'Spectral class',
        field: fieldName('spectral'),
        width: 130
    }
];

const StarsGrid: React.FC = () => {
    return (
        <div className='ag-theme-balham'>
            <AgGridReact
                defaultColDef={{
                    sortable: true
                }}
                columnDefs={columnDefs}
                rowData={brightestStars}
            />
        </div>
    );
}

export default StarsGrid;