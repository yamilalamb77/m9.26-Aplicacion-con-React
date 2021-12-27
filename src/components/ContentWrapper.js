import React from "react";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Topbar from "./TopBar";

function ContentWrapper() {
    return (
        <>
            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/*	<!-- Main Content --> */}
                <div id="content">
                    <Topbar />


                    <ContentRowTop />
                </div>

                {/* <!-- End of MainContent --> */}

                <Footer />
            </div>
            {/* <!-- End of Content Wrapper --> */}
        </>
    )
}

export default ContentWrapper