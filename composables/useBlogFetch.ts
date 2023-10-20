import { ofetch } from "ofetch";

const useBlogFetch = ofetch.create({
  async onRequest({ options }) {
    options.headers = {
      ...options.headers,
      "Content-Type": `application/json`,
    };
  },
});

export default async <T>(request: FetchRequest, options?: FetchOptions) => {
  const config = useRuntimeConfig();
  options = {
    ...options,
    baseURL: config.public.blogApiBaseUrl,
  };
  const response = await useBlogFetch.raw(request, options);
  return response as FetchResponse<T>;
};
