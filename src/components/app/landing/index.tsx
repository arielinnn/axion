import FAQ from "@/components/faq";
import styled from "styled-components";
import Products from "./products";
import Values from "./values";
import Features from "./features";
import Explore from "./explore";
import Partners from "./partners";
import Learn from "./learn";
import Hero from "./hero";
import Heading from "@/components/heading";

function Landing() {
  return (
    <HomeWrapper>
      {/* Hero Section */}
      <section className="container">
        <Hero />
      </section>
      {/* Products */}
      <section id="products" className="container">
        <Heading>Products</Heading>
        <Products />
      </section>
      {/* Values */}
      <section id="values" className="container">
        <Heading>Values</Heading>
        <Values />
      </section>
      {/* Features */}
      <section className="container">
        <Features />
      </section>
      <Explore />
      {/* Partners */}
      <section id="partners" className="container">
        <Heading>Partners</Heading>
        <Partners />
      </section>
      <Learn />
      {/* Support */}
      <section id="support" className="container">
        <Heading>Support</Heading>
        <FAQ />
      </section>
    </HomeWrapper>
  );
}

export default Landing;

const HomeWrapper = styled.div`
  position: relative;
  section {
    margin-bottom: 160px;
  }
  ${({ theme }) => theme.media.sm`
    section {
    margin-bottom: 120px;
    }
  `}
`;
