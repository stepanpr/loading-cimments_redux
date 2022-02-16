import { createApi, buildCreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/* RTK Query */

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) => ({
        getComments: build.query({
            // query: () =>  `/comments`,
            // query: () =>  ({
            //     url: `/comments`
            // }),
            query: () => `/comments`
        })
    })
});

export const { useGetCommentsQuery } = commentsApi