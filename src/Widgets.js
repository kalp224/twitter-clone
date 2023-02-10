import React from "react";
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';
function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1622674686814601217"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="sundarpichai"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://twitter.com/KalpPrajapati13"}
                    options={{ text: "#reactjs is awesome", via: "KalpPrajapati13" }}
                />
            </div>
        </div>
    );
}

export default Widgets;