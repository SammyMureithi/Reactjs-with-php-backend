import React, { useEffect, useState } from 'react'

function Trial() {
    const [unConfirmedExpenses, setUnConfirmedExpenses] = useState( [] );
    useEffect( () => {
        fetch( "https://vizasolutions.co.ke/shell/php/unconfirmedExpenses.php" )
            .then( res => {
                if ( !res.ok ) {
                    console.log( "Error in Fetching" );
                }
                return res
            } )
            .then( res => res.json() )
            .then( data => setUnConfirmedExpenses( data ) )
            .catch( error => console.log( error ) );
    }, [] )
    const res = unConfirmedExpenses.length>0? unConfirmedExpenses.map( element => {
        return (
            <div id="uncornfirmedExpensesCard" key={element.id}>
                <h2>Amount:: {element.amount}</h2>
                <p>Desciption: {element.description}</p>
                <h2>Processed By:: {element.processed_by}</h2>
                <h2>Date:: {element.processed_date}</h2>
            </div>
        )
    }):<h1>Loading....</h1>
  return (
      <div>
          <h1>Unconfirmed Expenses</h1>
          {res}
    </div>
  )
}

export default Trial