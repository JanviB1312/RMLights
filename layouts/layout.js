import DesktopHeader from './desktop-header'
import Footer from './footer'
import MobileHeader from './mobile-header'

export default function Layout({ children, className }) {
    return (
        <>
            <div className="industify_fn_wrapper_all" data-nav-skin={className}>

                {/* <!-- Wrapper --> */}
                <div className="industify_fn_wrapper">

                    {/* <!-- Header --> */}
                    <DesktopHeader />
                    {/* <!-- /Header --> */}

                    {/* <!-- Mobile Menu --> */}
                    <MobileHeader />
                    {/* <!-- /Mobile Menu --> */}

                    {/* <!-- Preloader --> */}
                    {/* <Preloader /> */}
                    {/* <!-- /Preloader --> */}

                    {children}

                    {/* Site Footer Start */}
                    <Footer />
                    {/* Site Footer End */}

                </div>
            </div>
        </>
    )
}
