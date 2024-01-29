// For create context 
import { useState } from 'react';

import TaxContext from './taxContext';


const TaxState: React.FC = (props: React.PropsWithChildren<{}>) => {
    const [tax, setTax] = useState(0);

    const contextValue = {
        tax,
        setTax
    };
    return (
        <TaxContext.Provider value={ contextValue }>
            {props.children}
        </TaxContext.Provider>
    )
};

export default TaxState; 