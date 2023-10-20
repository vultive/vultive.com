class Client {
  static async get(url, data = {}, success) {
    return await useBlogFetch(url, {
      method: "GET",
      params: data,
    }).then((res) => {
      if (success) success(res);
    });
  }
}

export default Client;
