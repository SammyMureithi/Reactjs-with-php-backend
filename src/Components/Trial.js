import React, { useEffect, useState } from 'react'

function Trial() {
    const [unConfirmedExpenses, setUnConfirmedExpenses] = useState( null );
    useEffect( () => {
        fetch( "https://vizasolutions.co.ke/shell/php/unconfirmedExpenses.php" )
            .then( res => {
                if ( !res.ok ) {
                    console.log( "Error in Fetching" );
                }
                return res
            } )
            .then( res => res.json() )
            .then( data => console.log( data ) )
            .catch( error => console.log( error ) );
    },[])
  return (
    <div>Trial</div>
  )
}

export default Trial