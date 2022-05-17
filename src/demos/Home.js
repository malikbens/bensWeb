import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage";
import Features from "components/features/ThreeColSimple";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage";
import Footer from "components/footers/MiniCenteredFooter";
import ContactUs from "components/cta/GetStartedLight"


export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features />
      <ContactUs />
      <Testimonial />
      <Footer />
    </AnimationRevealPage>
  );
}
