"use client";
import React, { useEffect, useState } from "react";
import {
   FacebookShareButton,
   FacebookIcon,
   LineShareButton,
   LineIcon,
   RedditShareButton,
   RedditIcon,
   TelegramShareButton,
   TelegramIcon,
   TwitterShareButton,
   TwitterIcon,
   WhatsappShareButton,
   WhatsappIcon,
   LinkedinShareButton,
   LinkedinIcon,
   FacebookMessengerShareButton,
   FacebookMessengerIcon,
   EmailShareButton,
   EmailIcon,
} from "next-share";

interface ShareButtonsProps {
   title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title }) => {
   const [url, setUrl] = useState(``);
   useEffect(() => {
      const url_ = new URL(window.location.href);
      setUrl(`${url_.protocol}//${url_.hostname}`);
   }, []);

   return (
      <div className="flex flex-wrap gap-2 justify-center">
         <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={32} round />
         </FacebookShareButton>

         <LineShareButton url={url} title={title}>
            <LineIcon size={32} round />
         </LineShareButton>

         <RedditShareButton url={url} title={title}>
            <RedditIcon size={32} round />
         </RedditShareButton>

         <TelegramShareButton url={url} title={title}>
            <TelegramIcon size={32} round />
         </TelegramShareButton>

         <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={32} round />
         </TwitterShareButton>

         <WhatsappShareButton url={url} title={title} separator=":: ">
            <WhatsappIcon size={32} round />
         </WhatsappShareButton>

         <LinkedinShareButton url={url}>
            <LinkedinIcon size={32} round />
         </LinkedinShareButton>

         <FacebookMessengerShareButton url={url} appId="YOUR_FACEBOOK_APP_ID">
            <FacebookMessengerIcon size={32} round />
         </FacebookMessengerShareButton>

         <EmailShareButton
            url={url}
            subject={title}
            body="Check out my quiz results!"
         >
            <EmailIcon size={32} round />
         </EmailShareButton>
      </div>
   );
};

export default ShareButtons;
