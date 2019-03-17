import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Post } from "./types/Post";

const apiBaseUrl = "https://temporal-parser-234720.appspot.com/v1";
// const apiBaseUrl = "http://moriyama.local:8080/v1";

class Api {
  auth({
    code
  }: {
    code: string;
  }): Promise<{
    ok: boolean;
    access_token: string;
    scope: string;
    user_id: string;
    team_name: string;
    team_id: string;
  }> {
    return this.fetch({
      method: "post",
      url: "/oauth2/access",
      params: { media: "slack" },
      data: {
        clientId: "2595056677.576579488432",
        code
      }
    }).then(({ data }) => {
      return data;
    });
  }

  listPosts(): Promise<Post[]> {
    return this.fetch({
      url: "/posts",
      params: { media: "slack", channelId: "C02HH1NL9" }
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
      ...config,
      params: {
        accessToken: localStorage.getItem("slackAccessToken"),
        ...config.params
      }
    }).catch(err => {
      throw err.response;
    });
  }
}

export default new Api();
