import React, { Component } from 'react';

import Section from './Section.jsx';

class Copy extends Component {
    render() {
        return (
            <div className="copy">
                <Section heading="The Pool of Tears">
                    <p className="measure">
                        {
                            '‘Curiouser and curiouser!’ cried Alice (she was so much surprised, \
                            that for the moment she quite forgot how to speak good English); \
                            ‘now I’m opening out like the largest telescope that ever was! Good-bye, \
                            feet!’ (for when she looked down at her feet, they seemed to be almost \
                            out of sight, they were getting so far off). ‘Oh, my poor little feet, \
                            I wonder who will put on your shoes and stockings for you now, dears? \
                            I’m sure I shan’t be able! I shall be a great deal too far off to trouble \
                            myself about you: you must manage the best way you can;—but I must be kind \
                            to them,’ thought Alice, ‘or perhaps they won’t walk the way I want to go! \
                            Let me see: I’ll give them a new pair of boots every Christmas.’'
                        }
                    </p>
                </Section>
            </div>
        );
    }
}

export default Copy;
