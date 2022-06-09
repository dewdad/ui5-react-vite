import { DataTable } from '~/components/Table/DataTable';
import {
    BusyIndicator,
    Label,
    Table,
    TableCell,
    TableColumn,
    TableRow,
    Title,
    TitleLevel,
} from '@ui5/webcomponents-react';
import useSWR from 'swr'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pagination } from '~/components/Pagination/Pagination';
import routes from '~react-pages';
import CenteredContent from '~/components/Layout/CenteredContent';
import { usePeople } from '~/hooks/services/demo-api';

const People = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const { data, error } = usePeople();
    //console.log({ data, error });
    const isLoading = !data;
    const navToDetailsPage = e => navigate(`${e.detail.item.dataset.id}`);

    if (data) {
        var tableFields = Object.keys(data[0]).filter(key => !(/By|At/i).test(key))
    }
    console.log({ tableFields });

    // const navToTodoEditPage = (e) => {
    //     navigate(getRoute(ROUTES.TODO_EDIT, { id: e.detail.item.dataset.id }));
    // };

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
                            <DataTable data={data} tableFields={tableFields} onRowClick={navToDetailsPage}/>
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

export default People;
