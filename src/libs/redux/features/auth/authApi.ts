// for example purpose, we will use the baseApi to create a new api slice for authentication

import baseApi from "../../api/baseApi";
import { tags } from "../../tags";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // login a user
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tags.USER],
    }),

    // register a user
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
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

    // update user profile
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [tags.USER],
    }),

    // change user password
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/change-password",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [tags.USER],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
} = authApi;
