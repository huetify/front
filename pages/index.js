import Header from "../components/Header";
import Body from "../components/Body";
import Block from "../components/Block";
import SectionTitle from "../components/SectionTitle";
import Section from "../components/Section";
import App from "../components/App";

export default function Home() {
  return (
      <App>
          <Section className="section--2">
              <SectionTitle name="Toto's bridge" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
          </Section>
          <Section className="section--2">
              <SectionTitle name="Toto's bridge" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
              <Block className="block--test" />
          </Section>
      </App>
  )
}

// export async function getServerSideProps(context) {
//     const data = {
//         hotProducts: getHotProducts(1, 12),
//     }
//     return {
//         props: data
//     }
// }