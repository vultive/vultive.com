import Client from "@/common/client.js";

const prefix = "posts/";

export default {
  async posts(data, success) {
    await Client.get(prefix, data, success);
  },
  async postById(id, success) {
    await Client.get(prefix + id, {}, success);
  },
};