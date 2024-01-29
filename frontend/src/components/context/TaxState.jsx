// For create context 
import { useState } from 'react';

import TaxContext from './taxContext';


const TaxState = (props) => {
    const [tax, setTax] = useState(0);
    return (
        <TaxContext.Provider value={tax}>
            {props.children}
        </TaxContext.Provider>
    )
}

export default TaxState; 