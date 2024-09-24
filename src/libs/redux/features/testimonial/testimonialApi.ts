import baseApi from "../../api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all testimonials
    getTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTestimonialsQuery } = testimonialApi;
