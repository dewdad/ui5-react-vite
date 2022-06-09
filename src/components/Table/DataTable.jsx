import React from 'react';
import {
    Label,
    Table,
    TableCell,
    TableColumn,
    TableRow,
} from '@ui5/webcomponents-react';

/*** Features Roadmap *****/
/** @TODO Provide tableFields as [{key: string, label: string, formatter: () => JSX}] | String[] */
/** @TODO fuzzy search (free text), sorting, filtering */
/** @TODO export to CSV */
/** @TODO Item navigation */
/** @TODO CRUD */

export function DataTable({
    data,
    tableFields,
    ...props // forward all props for @type {Table}
}) {

    // assigns keys to each child in a flat array. see here https://reactjs.org/docs/react-api.html#reactchildrentoarray
    const mapJsxChildren = (arr, mapper) => React.Children.toArray(arr.map(mapper));

    return <Table {...props} columns={mapJsxChildren(tableFields, fieldName => (
        <TableColumn minWidth={600} popinText="{column}">
            <Label>{fieldName}</Label>
        </TableColumn>
    ))}>
        {React.Children.toArray(data.map(row => (
            <TableRow>{mapJsxChildren(tableFields,fieldName => (
                <TableCell>
                    <Label>{String(row[fieldName])}</Label>
                </TableCell>
            ))}
            </TableRow>
        )))}
    </Table >;
}
