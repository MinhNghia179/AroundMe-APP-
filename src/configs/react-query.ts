import apiClient from '@app/services/ApiClient';
import { DefaultOptions, QueryClient, QueryKey } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

const defaultFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [endpoint, params, options] = queryKey as Array<
    string | Record<string, unknown>
  >;
  const res = await apiClient.get(endpoint as string, {
    params,
    ...(options as AxiosRequestConfig),
  });
  return res.data;
};

const defaultOptions: DefaultOptions = {
  queries: {
    queryFn: defaultFn,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions });
