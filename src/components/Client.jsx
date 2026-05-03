import { 
  AmazonLogoIcon, 
  AndroidLogoIcon, 
  AppleLogoIcon, 
  DribbbleLogoIcon, 
  InstagramLogoIcon, 
  OpenAiLogoIcon, 
  PinterestLogoIcon,
  StripeLogoIcon,
  TelegramLogoIcon,
  WindowsLogoIcon
} from "@phosphor-icons/react";
import { motion } from "motion/react"; // Use "motion/react" if specifically using the newer package
import Container from "./Container";

const icons = [
  <AmazonLogoIcon size={32}  />,
  <AndroidLogoIcon size={32}  />,
  <AppleLogoIcon size={32}  />,
  <DribbbleLogoIcon size={32}  />,
  <InstagramLogoIcon size={32}  />,
  <PinterestLogoIcon size={32} />,
  <OpenAiLogoIcon size={32} />,
  <TelegramLogoIcon size={32} />,
  <StripeLogoIcon size={32} />,
  <WindowsLogoIcon size={32} />
];

const Client = () => {
  return (
    <Container className="border-b border-t py-8 overflow-hidden">
      <div className="flex items-center gap-12">
        <h2 className="uppercase font-accent whitespace-nowrap text-sm shrink-0">
          Our clients
        </h2>

        {/* The Marquee Wrapper */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Render icons twice for a seamless loop */}
            {[...icons, ...icons].map((icon, index) => (
              <div key={index} className="shrink-0 text-slate-600 hover:text-black transition-colors">
                {icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default Client;