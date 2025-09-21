import { IKImage } from "imagekitio-react";

const Image = ({ path, alt, className, w, h }) => {
  // Check if path is an external URL (starts with http/https)
  const isExternalUrl = path?.startsWith("http");

  if (isExternalUrl) {
    // For external URLs, use regular img tag
    return (
      <img
        src={path}
        alt={alt}
        className={className}
        loading="lazy"
        style={{
          width: w ? `${w}px` : undefined,
          height: h ? `${h}px` : undefined,
        }}
      />
    );
  }

  // For local paths, use ImageKit
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      path={path}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      alt={alt}
      loading="lazy"
      className={className}
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default Image;
