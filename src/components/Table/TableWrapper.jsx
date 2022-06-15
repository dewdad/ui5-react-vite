import React from 'react';
import {
    Label,
    Table,
    TableCell,
    TableColumn,
    TableRow,
} from '@ui5/webcomponents-react';
import { mapJsxChildren } from '~/components/util';

/*** Features Roadmap *****/
/** @TODO Provide tableFields as [{key: string, label: string, formatter: () => JSX}] | String[] */
/** @TODO fuzzy search (free text), sorting, filtering */
/** @TODO export to CSV */
/** @TODO Item navigation */
/** @TODO CRUD */

export function TableWrapper({
    data,
    tableFields,
    ...props // forward all props for @type {Table}
}) {

    // assigns keys to each child in a flat array. see here https://reactjs.org/docs/react-api.html#reactchildrentoarray

    return <Table {...props} columns={mapJsxChildren(tableFields, fieldName => (
        <TableColumn minWidth={600} popinText="{column}">
            <Label>{fieldName}</Label>
        </TableColumn>
    ))}>
        {React.Children.toArray(data.map(row => (
            <TableRow type='Active'>{mapJsxChildren(tableFields, fieldName => (
                <TableCell>
                    <Label>{String(row[fieldName])}</Label>
                </TableCell>
            ))}
            </TableRow>
        )))}
    </Table >;
}
