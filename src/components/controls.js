import React, {useState} from 'react'

import { ReactComponent as Play} from '../assets/svg/play.svg'
import { ReactComponent as Reset} from '../assets/svg/reset.svg'

const Controls =  () => {
    const [isActive, setActiveState] = useState(false)

    return(
        <div className='timer-controls'>
            <button className='btn btn--control' id="start_stop">
                <Play />
            </button>
            <button className='btn btn--control' id="reset">
                <Reset />
            </button>
        </div>

    )
}

export default Controls