import baseApi from "../../api/baseApi";

const doctorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all doctors
    getDoctors: builder.query({
      query: (specialty) => {
        const params = new URLSearchParams();

        if (specialty) {
          params.append("specialty", specialty);
        }

        return {
          url: "/doctors",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useGetDoctorsQuery } = doctorApi;
