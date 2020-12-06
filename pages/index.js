import Header from "../components/Header";
import Body from "../components/Body";
import Block from "../components/Block";
import SectionTitle from "../components/SectionTitle";
import Section from "../components/Section";
import App from "../components/App";
import Cookies from "cookies";
import getRawBody from "raw-body";
import axios from "axios";
import {goToLogin, isAuth} from "../internal/auth";
import DashBlock from "../components/DashBlock";
import Btn from "../components/Btn";

export default function Home() {
  return (
      <App>
          <DashBlock />
          <Section className="section--2">
              <Btn type="success" className="block--default btn--flex">Search new product</Btn>
              <Btn type="success" className="block--default btn--flex">Search new bridge</Btn>
          </Section>
          <Section>
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

export async function getServerSideProps({req, res}) {
    let props = {
        props: {
        }
    }

    if(!isAuth(req, res)) {
        return goToLogin()
    }

    return props;
}