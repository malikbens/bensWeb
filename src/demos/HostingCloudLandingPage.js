import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage";
import Features from "components/features/ThreeColSimple";
import Pricing from "components/pricing/ThreePlans";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import TwoColSingleFeatureWithStats2 from "components/features/TwoColSingleFeatureWithStats2";
import ContactUs from "components/cta/GetStarted"


export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features />
      <TwoColSingleFeatureWithStats2 />
      <Pricing />
      <Testimonial />
      <ContactUs />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
}
