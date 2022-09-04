import dynamic from "next/dynamic";
import Highlight from "../components/Highlight";

import SanityImage from "../components/SanityImage";

const Code = dynamic(() => import("../components/Code"));

const portableTextComponents = {
  types: {
    image: ({ value }) => <SanityImage {...value} />,
    code: ({ value }) => <Code code={value.code} />,
  },
  marks: {
    highlight: ({ text }) => <Highlight text={text} />,
  },
};

export { portableTextComponents };
