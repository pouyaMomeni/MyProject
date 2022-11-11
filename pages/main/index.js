import Summary from "components/table/summeryTable";
import Footer from "components/ui/footer"
import Nav from "components/ui/nav"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    }
}

const temp = () => {
    return (
        <>
            <Nav />
            <Summary />
            <Footer />
        </>
    )
}

export default temp