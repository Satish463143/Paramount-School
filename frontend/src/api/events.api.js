import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Small helper if you need conditional credentials
const withAuthHeader = (headers) => {
  const token =
    localStorage.getItem("_at")
  if (token) headers.set("Authorization", `Bearer ${token}`)
  return headers                       // IMPORTANT: return headers
}
export const EventsApi = createApi({
  reducerPath: "EventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/events",
    prepareHeaders: (headers) => withAuthHeader(headers),
  }),
  tagTypes: ["Events"],
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
        keepUnusedDataFor: 300, // home testimonal change rarely — cache longer (5 minutes)
        // Provide tags for better cache management - use LIST id for consistency
        providesTags: (result) => 
          result?.result
            ? [
                ...result.result.map(({ _id }) => ({ type: 'Events', id: _id })),
                { type: 'Events', id: 'LIST' },
              ]
            : [{ type: 'Events', id: 'LIST' }],
        // Transform response to ensure consistent structure
        transformResponse: (response) => response,
      
    }),

    showById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, _err, id) => [{ type: "Events", id }],
    }),

    create: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
      // Invalidate both list queries to refresh the UI
      invalidatesTags: [{ type: "Events", id: "LIST" }],
    }),

    update: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/${id}`,
        method: "PUT",
        body: payload,
      }),
      // Invalidate the specific testimonal and both list queries
      invalidatesTags: (_res, _err, { id }) => [
        { type: "Events", id },
        { type: "Events", id: "LIST" },
      ],
    }),

    delete: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      // Invalidate the specific testimonal and both list queries
      invalidatesTags: (_res, _err, id) => [
        { type: "Events", id },
        { type: "Events", id: "LIST" },
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
} = EventsApi