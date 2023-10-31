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

interface ResponseOnError {
  responseData: {
    translatedText: string;
  };
}

const languagesApi = createApi({
  reducerPath: 'languagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.mymemory.translated.net' }),
  tagTypes: ['Languages'],
  endpoints: (builder) => ({
    translateText: builder.mutation<ServerResponse | ResponseOnError, ILanguagesProps>({
      query: ({ from, to }) => ({
        url: '/get',
        params: {
          q: from.text,
          langpair: `${from.source}|${to.source}`,
        },
      }),

      transformResponse: (response: ServerResponse) => {
        if (response.responseStatus !== 200) {
          return { responseData: { translatedText: '' } };
        }

        return response;
      },

      invalidatesTags: ['Languages'],
    }),
  }),
});

export const { useTranslateTextMutation } = languagesApi;

export default languagesApi;
