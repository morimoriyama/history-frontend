export const getSearchObj = (searchStr: string): { [key: string]: any } => {
  if (!searchStr) return {};
  const obj: { [key: string]: string } = {};
  searchStr
    .substr(1)
    .split("&")
    .forEach(el => {
      const key = el.split("=")[0];
      const value = el.split("=")[1];
      obj[key] = value;
    });
  if (obj.utm_referrer) {
    obj.utm_referrer_param = decodeURIComponent(obj.utm_referrer).split("?")[1];
    obj.utm_referrer = decodeURIComponent(obj.utm_referrer).split("?")[0];
  }
  return obj;
};
