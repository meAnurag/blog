import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import client from "../sanityClient";

const SanityImage = ({ asset, alt }) => {
  const imageProps = useNextSanityImage(client, asset);

  if (!imageProps) return null;

  return <Image alt={alt} {...imageProps} />;
};

SanityImage.defaultProps = {
  alt: "",
};

export default SanityImage;
