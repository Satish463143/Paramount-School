import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Small helper if you need conditional credentials
const withAuthHeader = (headers) => {
  const token =
    localStorage.getItem("_at")
  if (token) headers.set("Authorization", `Bearer ${token}`)
  return headers                       // IMPORTANT: return headers
}

export const TeamApi = createApi({
  reducerPath: "TeamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/team",
    prepareHeaders: (headers) => withAuthHeader(headers),
  }),
  tagTypes: ["Team"],
  keepUnusedDataFor: 600,          // Increased to 10 minutes for better caching
  refetchOnFocus: false,           // avoid surprise refetches while typing
  refetchOnReconnect: true,        // handy if the user was offline
  endpoints: (builder) => ({
    listAll: builder.query({
        query: ({ page = 1, limit = 10, search = '' } = {}) => {
          const params = new URLSearchParams();
          if (page) params.append('page', page);
          if (limit) params.append('limit', limit);
          if (search) params.append('search', search);
          return `/?${params.toString()}`;
        },
        keepUnusedDataFor: 300, // home team change rarely — cache longer (5 minutes)
        // Provide tags for better cache management - use LIST id for consistency
        providesTags: (result) => 
          result?.result
            ? [
                ...result.result.map(({ _id }) => ({ type: 'Team', id: _id })),
                { type: 'Team', id: 'LIST' },
              ]
            : [{ type: 'Team', id: 'LIST' }],
        // Transform response to ensure consistent structure
        transformResponse: (response) => response,
      
    }),

    showById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, _err, id) => [{ type: "Team", id }],
    }),

    create: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
      // Invalidate both list queries to refresh the UI
      invalidatesTags: [{ type: "Team", id: "LIST" }],
    }),

    update: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/${id}`,
        method: "PUT",
        body: payload,
      }),
      // Invalidate the specific team and both list queries
      invalidatesTags: (_res, _err, { id }) => [
        { type: "Team", id },
        { type: "Team", id: "LIST" },
      ],
    }),

    delete: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      // Invalidate the specific team and both list queries
      invalidatesTags: (_res, _err, id) => [
        { type: "Team", id },
        { type: "Team", id: "LIST" },
      ],
    })
  }),
})

export const {
  useListAllQuery,
  useShowByIdQuery,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation,
  useLazyListAllQuery,     // on-demand fetching
} = TeamApi