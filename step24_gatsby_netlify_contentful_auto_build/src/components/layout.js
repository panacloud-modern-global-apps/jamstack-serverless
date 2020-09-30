import React from "react"
import Footer from "./footer";
import Header from './header'

const Layout = ({children}) => {
    return (
        <div>
            <Header siteTitle="Gatsby Blogs By Zeeshan Updated" />
            <div
                style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>
                    {children}
                </main>
                <Footer/>
            </div>
            
        </div>
    );
}
export default Layout;
