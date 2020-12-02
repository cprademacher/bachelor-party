import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="ui card" id="portland">
                    <div className="ui slide masked reveal image">
                        <img src="https://www.wheretraveler.com/sites/default/files/1_portland.jpg" alt="Portland" className="visible content" />
                        <img src="https://res.cloudinary.com/fittco/image/upload/v1566938799/xopvvhzzbp554lotry5c.jpg" alt="Portland" className="hidden content"></img>
                    </div>
                <div className="content">
                    <a href="google.com" className="card-header">Portland, OR</a>
                    <div className="meta">
                    <span className="date">Food - Craft Beer - Nearby Hiking - Easty Transportation - All Drugs Legal</span>
                    </div>
                </div>
                <div className="extra content">
                    <button className="ui button">Learn More</button>
                </div>
                </div>

                <div className="ui card" id="seattle">
                    <div className="ui slide masked reveal image">
                        <img src="https://media.timeout.com/images/102520244/1372/772/image.jpg" alt="Seattle" className="visible content" />
                        <img src="https://cdn1.matadornetwork.com/blogs/1/2019/03/Falls-City-Washington-USA-at-Snoqualmie-Falls-1200x853.jpg" alt="Seattle" className="hidden content"></img>
                    </div>
                <div className="content">
                    <a href="google.com" className="card-header">Seattle, WA</a>
                    <div className="meta">
                    <span className="date">Outdoor Activities - Good Food - Wineries - Nearby Hiking - Legal Weed</span>
                    </div>
                </div>
                <div className="extra content">
                    <button className="ui button">Learn More</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Main;