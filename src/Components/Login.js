import React, { useState } from 'react'

function Login() {
    const [loginData, setLoginData] = useState( {
        username: "Oya",
        password:1,
    } );
    function handleSubmit( e ) {
        console.log(JSON.stringify(loginData))
        e.preventDefault();
        const myAddProducts = {
            product_name: "Mouse",
            buying_price: 200,
            selling_price: 400,
            stock: 30,
            product_type:"Tech"
        }
        const myLoginData = {
            loginData
        }
        var formData = new FormData();
        formData.append( 'product_name', "Laptop" );
        formData.append( "buying_price", "200" );
        formData.append( 'selling_price', "400" );
        formData.append( "stock", "20");
        formData.append( "product_type", "Tech" );
        fetch( "https://vizasolutions.co.ke/shell/php/add_products.php", {
            method: "POST",
            headers: {
              
            },
            body: formData,
        } )
            .then( r => r.json() )
            .then( r => console.log( r ) )
            .catch( error => console.log( error ) );
  }
    function handleInputChange( e ) {
        setLoginData( prevState => {
            return {...prevState,[e.target.name]:e.target.value}
        })
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label htmlFor='username'>Username</label>
              <input type={"text"} name="username" value={loginData.username} onChange={handleInputChange} />
              <label htmlFor='password'>Username</label>
              <input type={"password"} name="password" value={loginData.password} onChange={handleInputChange} />
              <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default Login