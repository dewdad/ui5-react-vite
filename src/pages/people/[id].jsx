import { useApiByRoute } from '~/hooks/services/own-api';
export default function id() {
    const { data, error } = useApiByRoute();
    return (
        <pre>{JSON.stringify(data)}</pre>
    )
}
