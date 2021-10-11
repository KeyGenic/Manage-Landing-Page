import React from 'react';
import './testimonials.styles.scss';
import {Splide,SplideSlide} from '@splidejs/react-splide'
import './splide.min.css'
import Ali from '../../Assets/avatar-ali.png'
import Anisha from '../../Assets/avatar-anisha.png'
import Richard from '../../Assets/avatar-richard.png'
import Shani from '../../Assets/avatar-shanai.png'
import { GetStarted } from '../cta-btn/cta-btn.components';

export const Testimonials = () => {
    return(
        <div className = "testimonials-section">
            <h1>What they've said</h1>
        <Splide
        options = {{
            arrows: false
        }}
        >
            <SplideSlide>
            <img src={Ali} />
                        <h6>Ali Bravo</h6>
                        <p>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
            </SplideSlide>
            <SplideSlide>
            <img src={Anisha} alt="pf" />
                        <h6>Anisha Li</h6>
                        <p>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
            </SplideSlide>
            <SplideSlide>
            <img src={Richard} alt="pf" />
                        <h6> Richard Watts </h6>
                        <p>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!” </p>
            </SplideSlide>
            <SplideSlide>
                        <img src= {Shani} alt="pf" />
                        <h6> Shanai Gough</h6>
                        <p>“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
            </SplideSlide>
        </Splide>
        <GetStarted />
        </div>
    )
}