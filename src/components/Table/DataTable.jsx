import React from 'react';
import {
    AnalyticalTable,
} from '@ui5/webcomponents-react';
import { mapJsxChildren } from '~/components';

/*** Features Roadmap *****/
/** @TODO */

export function DataTable({
    ...props // forward all props for @type {Table}
}) {

    // assigns keys to each child in a flat array. see here https://reactjs.org/docs/react-api.html#reactchildrentoarray
    // @ts-ignore
    return <AnalyticalTable withNavigationHighlight {...props} />;
}
