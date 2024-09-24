// for example purpose, we will use the baseApi to create a new api slice for authentication

import baseApi from "../../api/baseApi";
import { tags } from "../../tags";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // login a user
    login: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tags.USER],
    }),

    // register a user
    register: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tags.USER],
    }),

    // get user profile
    getProfile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: [tags.USER],
    }),

    // verify email
    verifyEmail: builder.query({
      query: ({ token }) => {
        const params = new URLSearchParams();
        params.append("token", token);

        return {
          url: "/users/verify-email",
          method: "GET",
          params,
        };
      },

      providesTags: [tags.USER],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetProfileQuery,
  useVerifyEmailQuery,
} = authApi;
