import React from 'react';
import Challenge01 from './challenges/challenge01'
import Challenge02 from './challenges/challenge02'
import Challenge03 from './challenges/challenge03'
import Challenge04 from './challenges/challenge04'

function ChallengeAggregator() {
    return (
        <div>
            <Challenge01 />
            <Challenge02 />
            <Challenge03 />
            <Challenge04 />
        </div>
    )
}

export default ChallengeAggregator

