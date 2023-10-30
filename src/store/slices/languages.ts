import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse } from '@/models/api';

interface ILanguagesProps {
  from: {
    text: string;
    source: string;
  };
  to: {
    source: string;
  };
}

const languagesApi = createApi({
  reducerPath: 'languagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mymemory.translated.net' }),
  endpoints: (builder) => ({
    translateText: builder.query<ServerResponse, ILanguagesProps>({
      query: ({ from, to }) => ({
        url: '/get',
        params: {
          q: from.text,
          langpair: `${from.source}|${to.source}`,
        },
      }),
    }),
  }),
});

export const { useLazyTranslateTextQuery } = languagesApi;

export default languagesApi;
