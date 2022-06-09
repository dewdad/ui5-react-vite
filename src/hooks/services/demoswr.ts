import useSWR from 'swr';

async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init)
    return res.json()
}

interface DataPaylaod<T> {
    [key: string]: T;
}

interface DataResponse<T> {
    data: T;
    isLoading: boolean;
    isError: any;
}

function useRequest<T>(url: string, key: string): DataResponse<T> {
    const { data: payload, error } = useSWR<DataPaylaod<T>>(url, fetcher);
    const data = payload ? payload[key] : undefined;
    return {
        data,
        isLoading: !data && !error,
        isError: error,
    };
}

export default useRequest;