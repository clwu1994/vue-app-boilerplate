// dataUrl转为blob
export const dataURL2blob = dataURL => {
  let binaryString = atob(dataURL.split(",")[1]);
  let arrayBuffer = new ArrayBuffer(binaryString.length);
  let intArray = new Uint8Array(arrayBuffer);
  let mime = dataURL.split(",")[0].match(/:(.*?);/)[1];
  for (let i = 0, j = binaryString.length; i < j; i++) {
    intArray[i] = binaryString.charCodeAt(i);
  }
  let data = [intArray];
  let result;
  try {
    result = new Blob(data, { type: mime });
  } catch (error) {
    window.BlobBuilder =
      window.BlobBuilder ||
      window.WebKitBlobBuilder ||
      window.MozBlobBuilder ||
      window.MSBlobBuilder;
    if (error.name === "TypeError" && window.BlobBuilder) {
      var builder = new BlobBuilder();
      builder.append(arrayBuffer);
      result = builder.getBlob(type);
    } else {
      throw new Error("没救了");
    }
  }
  return result;
};
// 下载图片
export const loadImage = (url, is_cors = true) => {
  return new Promise((resolve, reject) => {
    var img = new Image();
    if (is_cors) img.crossOrigin = "Anonymous";
    var objectURL = null;
    if (url.match(/^data:(.*);base64,/) && window.URL && URL.createObjectURL) {
      objectURL = URL.createObjectURL(dataURL2blob(url));
      url = objectURL;
    }
    img.onload = () => {
      objectURL && URL.revokeObjectURL(objectURL);
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error("That image was not found.:" + url.length));
    };
    img.src = url;
  });
};
