import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlans";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"
import TwoColSingleFeatureWithStats2 from "components/features/TwoColSingleFeatureWithStats2";


export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <TwoColSingleFeatureWithStats2 />
      <Features />
      <Pricing />
      <MainFeature 
        subheading="Reliable"
        heading="Highly Redundant Servers With Backup"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
      />
      <MainFeature 
        subheading="Secure"
        heading="State of the Art Computer Security"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      />
      <Testimonial />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
}
