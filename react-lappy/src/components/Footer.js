import React from "react"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="copyright">
                    <h3>lappy.gp</h3>
                    <p>© 2021 lappy.gp LTD</p>
                </div>
                <div className="legal">
                    <h4>Legal</h4>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="resources">
                    <h4>Resources</h4>
                    <ul>
                        <li>Forum</li>
                        <li>Discord</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className="page-links">
                    <h4>Page Links</h4>
                    <ul>
                        <li>Features</li>
                        <li>Testimonials</li>
                        <li>News</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
