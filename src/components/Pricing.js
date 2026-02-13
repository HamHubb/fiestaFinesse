import './Pricing.css'
import { Link } from 'react-router-dom';

export default function Pricing(){
    return(
        <div className="pricing-section">
            <h1 className="pricing-title">PRICING</h1>
            <div className="year-packages">2026 PACKAGES</div>
            
            <div className="pricing-container">
                
                {/* Left Column - Intimate Weddings */}
                <div className="pricing-card">
                    <h2 className="plan-type">Intimate Weddings</h2>
                    <div className="price-amount">$1,300</div>
                    <ul className="features-list">
                        <li>Point of contact for vendors 8 weeks before the event</li>
                        <li className="has-sub-items">
                            Three Virtual/In-Person Meetings:
                            <ul className="sub-bullets">
                                <li>Initial Consultation</li>
                                <li>Venue Walk-Through</li>
                                <li>Virtual Check-in Meeting</li>
                            </ul>
                        </li>
                        <li>1-hour ceremony rehearsal</li>
                        <li className="has-sub-items">
                            Creation of a customized floor plan and day-of timeline to be distributed to necessary vendors
                        </li>
                        <li>Review vendor contracts, confirm logistics, and manage on the day</li>
                        <li className="has-sub-items">
                            Up to 8 consecutive hours of day-of support from a lead coordinator and assistant
                            <ul className="sub-bullets">
                                <li>Event set-up (placing guest book, table numbers, signage, centerpieces, and other small decor/personal items)</li>
                                <li>Help the wedding party with final touches</li>
                                <li>Access to coordinator's emergency kit</li>
                                <li>Keep track of timeline and maintain the flow of events</li>
                                <li>Distribution of final vendor payments and tips</li>
                                <li>Pack up any personal or rented items, gifts, etc. at the end of the event</li>
                            </ul>
                        </li>
                    </ul>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLScVXi0EHD7UVQv8ZtUAjXd9smuBp3SHsZHsYX7ttsIgDvgYPA/viewform">
                              <button className="cta-button">
                                INQUIRE NOW
                              </button>
                    </Link>
                </div>
                
                {/* Right Column - Traditional Weddings */}
                <div className="pricing-card">
                    <h2 className="plan-type">Traditional Weddings</h2>
                    <div className="price-amount">$1,600</div>
                    <ul className="features-list">
                        <li>Point of contact for vendors 8 weeks before the event</li>
                        <li className="has-sub-items">
                            Three Virtual/In-Person Meetings:
                            <ul className="sub-bullets">
                                <li>Initial Consultation</li>
                                <li>Venue Walk-Through</li>
                                <li>Virtual Check-in Meeting</li>
                            </ul>
                        </li>
                        <li>1-hour ceremony rehearsal</li>
                        <li className="has-sub-items">
                            Creation of a customized floor plan and day-of timeline to be distributed to necessary vendors
                        </li>
                        <li>Review vendor contracts, confirm logistics, and manage on the day</li>
                        <li className="has-sub-items">
                            Up to 10 consecutive hours of day-of support from a lead coordinator and assistant
                            <ul className="sub-bullets">
                                <li>Event set-up (placing guest book, table numbers, signage, centerpieces, and other small decor/personal items)</li>
                                <li>Help the wedding party with final touches</li>
                                <li>Access to coordinator's emergency kit</li>
                                <li>Keep track of timeline and maintain the flow of events</li>
                                <li>Distribution of final vendor payments and tips</li>
                                <li>Pack up any personal or rented items, gifts, etc. at the end of the event</li>
                            </ul>
                        </li>
                    </ul>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLScVXi0EHD7UVQv8ZtUAjXd9smuBp3SHsZHsYX7ttsIgDvgYPA/viewform">
                              <button className="cta-button">
                                INQUIRE NOW
                              </button>
                    </Link>
                </div>
                
            </div>
            
            <div className="contact-info">
                <h3>READY TO START PLANNING?</h3>
                <p>Contact us for custom packages and additional services</p>
            </div>
            <section className="footer">
        <h2 className="footer-title">Fiestas By Emily</h2>
        <h3>Service Areas: San Fernando Valley, Los Angeles, Burbank, Glendale, Pasadena, Whittier, Fullerton, Long Beach, Simi Valley, Orange County, Santa Clarita, Antelope Valley, Downey, Palmdale, West Hills</h3>
        <p>Feel free to book a consultation!</p>
      <div className="footer-copyright">HAM Designs</div>
      </section>
        </div>
    );
}