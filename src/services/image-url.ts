import placeholder from "../assets/placeholder.png";

const getCroppedImageUrl = (url: string) => {
  if (!url) return placeholder;

  const target = "media/";

  const index = url.indexOf("media/") + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
