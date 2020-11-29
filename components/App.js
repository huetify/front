import Header from "./Header";
import Body from "./Body";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Block from "./Block";

export default function App({ children }) {
    return (
        <>
            <Header />
            <Body>
                { children }
            </Body>
        </>
    )
}