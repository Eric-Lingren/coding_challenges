import React from 'react';
import Challenge01 from './challenges/challenge01'
import Challenge02 from './challenges/challenge02'
import Challenge03 from './challenges/challenge03'
import Challenge04 from './challenges/challenge04'
import Challenge05 from './challenges/challenge05'
import Challenge06 from './challenges/challenge06'

function ChallengeAggregator() {
    return (
        <div>
            <h3> On mobile, you must scroll left within the black boxes to see the code.  This is part of the Prismjs package I am using to display inline code. </h3>
            <Challenge01 />
            <Challenge02 />
            <Challenge03 />
            <Challenge04 />
            <Challenge05 />
            <Challenge06 />
        </div>
    )
}

export default ChallengeAggregator

