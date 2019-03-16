import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Post } from "./types/Post";

const apiBaseUrl = "http://moriyama.local:8080/v1";

class Api {
  listPosts(): Promise<Post[]> {
    return this.fetch({
      url: "/posts",
      params: { media: "slack", channelId: "C8AH7K99U" }
    }).then(({ data }) => {
      return data;
    });
  }

  fetch(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return axios({
      method: config.method || "get",
      baseURL: apiBaseUrl,
      url: config.url,
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      ...config
    }).catch(err => {
      throw err.response;
    });
  }
}

export default new Api();
