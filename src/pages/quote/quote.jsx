import React from "react";
import { NextSeo } from "next-seo";
const url = process.env.FRONTEND_BASE_URL;
const title = "Quote Page";

const Quote = () => {
 
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />

      <>
   
        
          <main className=" flex flex-wrap justify-between w-full bg-white">
          <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                  After you register you will get an email with an account
                  activation link, click on the link and then you can access
                  your profile from the profile icon in the navbar.
                </p>
            </main>

          
      </>
    </>
  );
};
export default Quote;
