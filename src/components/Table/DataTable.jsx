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
    tableFields
}) {
    return <Table columns={React.Children.toArray(tableFields.map(column => (
        <TableColumn minWidth={600} popinText="{column}">
            <Label>{column}</Label>
        </TableColumn>
    )))}>
        {React.Children.toArray(data.map(row => (
            <TableRow>{React.Children.toArray(tableFields.map(fieldName => (
                <TableCell>
                    <Label>{String(row[fieldName])}</Label>
                </TableCell>
            )))}
            </TableRow>
        )))}
    </Table >;
}
