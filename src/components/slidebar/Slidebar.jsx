import React from 'react';
import "./Slidebar.css";
import {Link, useHistory} from "react-router-dom";

export default function Slidebar({setLoginUser}) {

    const history = useHistory();

    return (
        <div className="slidebar">
            <div className="sliderbarWrapper">
                <div className="sliderBarMenu">
                    <h3 className="sliderBarTitle">Group 8</h3>
                    <ul className="slidebarList">
                       <Link to="/">
                            <li className="slidebarList_item active"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAcpJREFUaEPtmeFRwzAMhV8ngA2ACWCEdgPYADaADdgANqAblA1gBJgA2KAbwL1efFdydixZEm0P+7clv0+y8+JkhgMfswPXjw6w6w5GduASwMMAeAfgOQI2CmAO4GUkeAHg1RsiAuBiEH88ErsGQIg3TwhvgJL4pNkdwhOAFee2IcTUYAfYCcKYhxeAVHwS7AbhBcDK8+BqBg80O2EaHgBPAK4bVSwB3DTGbsKsABbxSbcJwgLAqhPAY7ALBFGPVgBP8Ul0E0QLQM5l1ZUrBKjdWgtQMyoriNroNADR4hO8CkIKoDUqayfERicB+GvxKreWALS4rLUDKb7q1jUAD6Oywkwa3RTAPoivunUJIMKorJ3IGl0OgHfZlXW1oPir8d06B/AB4DRIgDXtJ4Cz7SQ5AE46sa4UFP81Lm4OgPv/EcBRkIjWtBRPbb++bNQeo9uLfbeu3Bgn0iaaNAjoAMpOiIormtQ7oCz9MF1UXNGk/9aBWlGkD4Nank1dRZOUHajl7AC1V4nSkfOqnFeevoVKnepnYNc+sLcdkNwT3gV/aLzyqA8xr5r3AM4Lm5/v67eC36leedQAbW80wVG1/Rq8vD19B7DX0JbhB8hyWTFxAPjiAAAAAElFTkSuQmCC"/>Home</li>
                       </Link>
                       <Link to="/documents">
                            <li className="slidebarList_item"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAgtJREFUaEPtmP0xBEEQxd9FgAjIABEgAkKQARkgAyHIABEgAi4DIkAE1FNzVbtzszPd89Hjqnb+Uadmdt6vv7Z7F9jwtdhw/ZgBensw1wNnAC4AHADYNoB4BnADgH9HKweA4u8NRIeuOPEhcgBohaNOAC8Ajod35wD8dBLPa78A7GwyALWPjG7lAbr+GsCbsx6Tn79zQtEcgNWDYkOL/79ShqQpwFrSBcRqi4IpwFrZCwCwqjwpvGAKwIrByhFbfBF+zgAKC2jeA11CyBfol1oNABOUELFVPYlrAlA4SyVLqVkZrQ1A4bQyQZaOYt/9HvU1wjBOVqEWAEJtom0zgCaJRSZVbjL1wAeAB5cDbOTendg9N80xBzgg7SogTAC+AVwCuBMKOwdwC2BLsL85ACsNLZtqIXytbClYrVihYqspwKMLCYEhJ7ekXmzNABg2jG2t5UOeYK5MhVMzgNjgovVIbNBpBnA4GBm1gv39HDlfJx7SDCBnvo6BTr1vmgGUWl16fgbo2Uqw0o2+xYbiNtWNpuq0NBRy9ok+LaYA/v3H3RQALUcI9josd5L+JcfawzOrL3uiz+sSgFJB1c7n5EC1y2s8aAaoYcWSZ4Q8wG7SIjFXuotakNBhjoCnJVZRnq0OwJ6e86uVF6oD0ICE4IzKOq8ZuJXG/9veBCBHSJczRfRdFHuXzgC9vfAL071xMetIJXAAAAAASUVORK5CYII="/>Document</li>
                       </Link>
                       <Link to="/recruitment">
                            <li className="slidebarList_item"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAdhJREFUaEPtWIFNxDAMvJ8ANgA2gA0YASYAJgAmACYAJgAmACYBJoARYALQiVQqVfq5a5KvXsTSS9XXdnw+x4m7wJrLYs3jRwMwN4ONgcZAZgZaCWUmMNv8XzKwCeAIwAEAPlM+ATwBeAjP2ZlVHbgMMOi7XuDDdQjkJIBRY8jScwAch+CVBQ9XBUIFwFJ5X5L5GBM7qygnFcAlgAsl9T2dKwC0qyoqgBcAu2YkrwD2TBtbXQXwbXv+NVD9U3e4hmQrKUWcq3hU/9UBfADYUqMOem9m2VVl4AbAqQngFsCZYVMVwHZoo0Y8YBslc6pUBcAgnFY6pYVWB6CCSAU/taN1TP5pDE6X6BzwPGBt8160Ef78ClcH7hX2/2UyOwC1psf0GoB+ZpwS4gywH3r72LWC5cMfZ4Nnk6pqm5i1fg2ArdQRttBz41pdBQADdw6jGEBubAJJSXEAU07fsSCVU7koAJbNYypl5vvUlFYUAKcvt+ZTeLgneL1Q26vUYGJKzuybCnr4PsWC6y86cNyHzya2M8GAn12YoGISY2DK+KgGVHzMjAHIPepTYKTaTjnp3jcAaqZ6etUZmBDTfCZFszEHjAZgjqz312wMNAYyM9BKKDOB2eZrz8APj01IMV9D/LwAAAAASUVORK5CYII="/>Recruitment</li>
                       </Link>
                       <Link to="/salary">
                            <li className="slidebarList_item"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAy5JREFUaEPtmY1tFDEQhV8qIFQAVBCoAKgAqICkAqACoAKgAkgFJBUkVBCoINABqSDoQ+vI57PXM7PmTocy0ukUxR77zZtf3552XPZ2/P66BbBtBkcy8FDSM0l835++c3zfJf2UdC7pmyT+XixLAXDRV5KeT5f2XAgwJ5I+TcA8e2/WRgHsS3or6XXo1PVNHyW9l/Tbqy8CAGt/lgSIkcLljyZWzHq9AD4MtHrrkrDxxorACgBrY3Wsvwn5MoHoupQVwNcNXj4ZCBC41KxYAEApmWYbQoaaTRQ9ALgM1o9Iqfs6okTSi7nAngOA318uyDajABAHD1opdg4APvjSabUrSeyj2lKkcjmUxOexUyfLm67UAkCFxfoeoRARL73MgU+Tjr0CC1TvFWkB8AYu2QLLWyUCAgO9swLA+rBgERqzJ5aFxRqsec+xj/Ww0GWAbvLCofjp5PNpS+qTAIUuXIqYgKXcvSIsPCq72JoLQRONmlVKHWcNRk6LYghA1nqEFgP3vpEaALIHfb1VSh1Y+Y51s3NdaYTqSIn7QL1VSlqxLO7B92ggDEGcN8uAt2JWs0OBnrjAKHyo7pFakFSuMF5zIS8AXIZA9oyIsIOrRhgaDgDLAIKehWxjFW+2+2cM5BdOLQRs/DBUZW/B5KwuAxx+YDWjcV2qBcRL7mpeFjDKSoIZkUaNGP4uA8jdYoMn5kxpdGkhm2Ow1nZ4AJgKmZfWcuAgZeLbZJrU63Bx4qPsVr0Dk6mVgGFPo0U6BEREWm1HTdevWoO5rXaaCzLc8NJhFVc7HRloiB0O6Un0Vc810HCJyEhJlmEfboXf50KDSFxgee+rnnuk5GAOIRYi5X6t4EjyZJscOHM2HlEdVf/rZ5VkhUi578WB9f+LH7bSQZF4sF6yte54ipdZPT0XSptTcfK+E0VBcHmGot4TjftHvk24U9dtcqtYGcj3UP5xqWh2arFCtiHFli96Q1yoVIJLUbhGvVpjdfR1Xaa8SISBXAf5GV+FFc8jFTrobWCSz9qToTV4lgLIz6GLpdLyAVg5FDGMpJ9Z6Uw9M3QTz0gAVqMNXXcLYKg5A8p2noE/anafMb+MeA0AAAAASUVORK5CYII="/>Salary</li>
                       </Link>
                       <div className="button" onClick={() => history.push("/login")}>Log Out</div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
