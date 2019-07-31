// 获取hostname
export const getHostname = () => window.location.hostname || "";

// 解析url
export const parseQuery = url => {
  let queryObj = {};
  let reg = /[?&]([^=&#]+)=([^&#]*)/g;
  let querys = url.match(reg);
  if (querys) {
    for (let i in querys) {
      let query = querys[i].split("=");
      let key = query[0].substr(1);
      let value = query[1];
      queryObj[key]
        ? (queryObj[key] = [].concat(queryObj[key], value))
        : (queryObj[key] = value);
    }
  }
  return queryObj;
};
