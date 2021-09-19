import React from 'react'
import { getModeratedByTextComponent } from '../config'

const Credits = (props) => {
    const ModeratedByTextComponent = getModeratedByTextComponent();
    return (
        <div className="credits">
            <span className="small">
                Gemacht von L. Puhl, J. Arnds and L. Iuzzolino ― <ModeratedByTextComponent />
            </span>
        </div>
    )
}

export default Credits
