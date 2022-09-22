import React, { useState } from 'react'

function Login() {
    const [loginData, setLoginData] = useState( {
        username: "",
        password: "",
    } );
    function handleSubmit( e ) {
        console.log( loginData );
        e.preventDefault();
        const myData = loginData;
        fetch( "https://vizasolutions.co.ke/shell/php/login2.php", {
            method: "POST",
            headers: {
                'Content-Type': "Application/json",
            },
            body: JSON.stringify( myData )
            
        } )
            .then( res => {
                if ( !res.ok ) {
                    console.log("Post failed")
                }
                return res;
            })
            .then( res => res.json() )
        .then(res => console.log(res))
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