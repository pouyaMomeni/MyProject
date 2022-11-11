import Full from "components/table/fullTable";
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

const Profile = () => {
    return (
        <>
            <Nav />
            <Full />
            <Footer />
        </>
    )
}

export default Profile