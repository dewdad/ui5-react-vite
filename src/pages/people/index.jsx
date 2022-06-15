import {
    AnalyticalTable, BusyIndicator, Icon, TableSelectionBehavior, TableSelectionMode, Title,
    TitleLevel
} from '@ui5/webcomponents-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CenteredContent from '~/components/Layout/CenteredContent';
import { usePeople } from '~/hooks/services/demo-api';

export default function People() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const { data, error } = usePeople();
    /** @type {import('@ui5/webcomponents-react').AnalyticalTableColumnDefinition[]} */
    let tableFields = [];
    //console.log({ data, error });
    const isLoading = !data;

    function navToDetailsPage(e) {
        console.log(arguments);
        navigate(`${encodeURIComponent(e.detail.row.original.UserName)}`);
    }

    if (data) {
        tableFields = Object.keys(data[0]).filter(key => !(/By|At|Info/i).test(key)).map(key => ({ accessor: key, Header: key }));
        tableFields.push({
            responsivePopIn: false,
            accessor: 'actions',
            Header: '',
            width: 10,
            disableResizing: true,
            Cell: (instance) => {
                return (
                    <Icon name="navigation-right-arrow" />
                );
            }
        });
    }
    console.log({ tableFields });

    return (
        <CenteredContent>
            <div>
                {isLoading ? (
                    <BusyIndicator active />
                ) : (
                    <>
                        {/* <Title level={TitleLevel.H5}>{`Records (${data.numberOfElements} / ${data.totalElements})`}</Title> */}
                        <Title level={TitleLevel.H5}>People</Title>
                        <br />
                        <AnalyticalTable data={data} columns={tableFields} onRowClick={navToDetailsPage} withNavigationHighlight={true} withRowHighlight={true} filterable={true} selectionMode={TableSelectionMode.SingleSelect} selectionBehavior={TableSelectionBehavior.RowOnly} />
                        {/* <Pagination
                            numberOfElements={data.numberOfElements}
                            totalPages={data.totalPages}
                            selectedPage={data.number}
                            setPage={(params) => setPage(params)}
                        /> */}
                    </>
                )}
            </div>
        </CenteredContent>
    );
};
