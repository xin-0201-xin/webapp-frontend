import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";
import benefitOneImg from "../public/img/trainerOne.jpeg";
import benefitTwoImg from "../public/img/trainerTwo.jpeg";

const benefitOne = {
  title: "What does our course cover?",
  // desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "A plan that's custom-made for you",
      desc: "The personal trainer will design a program to suit your needs such as bodybuilding, fat loss, and shaping",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "One-on-one personal training",
      desc: "The personal trainer will teach you and spot you patiently",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "A healthy diet plan based on your needs",
      desc: "The personal trainer will design a healthy diet plan to help you achieve your goal",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Prices for the training",
  // desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "65$ per session",
      desc: "",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "600$ for 10 sessions",
      desc: "(60$ per session)",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "1100$ for 20 sessions",
      desc: "(55$ per session)",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
