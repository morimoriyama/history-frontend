export type Post = {
  postId: string;
  type: string; // text, png, mp4, jpg など、拡張子を入れる
  userName?: string;
  userIcon?: string;
  text?: string;
  attachedSourceUrls: string[];
  postedAt?: Date;
  media?: string; // e.g. "slack"
  sourceUrl?: string; // e.g. "https://aidemy.slack.com/archives/C02HH1NL9/p1552718218082500"
};
