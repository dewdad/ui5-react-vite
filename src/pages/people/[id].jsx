import { useApiByRoute } from '~/hooks/services/demo-api';
export default function id() {
    const params = useParams();
    const { data, error } = useApiByRoute();
    return (
        <pre>{JSON.stringify(data)}</pre>
    )
}
