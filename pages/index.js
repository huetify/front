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

export default function Home() {
  return (
      <App>
          <DashBlock />
          <Block>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </Block>
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