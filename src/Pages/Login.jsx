import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="not">
    <center>
    <div className='card'>
     <center> <img src="https://www.bing.com/th?id=OADD2.7971484995389_16I9NVPDQXIPR6FLMS&pid=21.2&c=16&roil=0.2041&roit=0.2274&roir=0.7915&roib=0.7743&w=472&h=247&rs=2&qlt=100" alt="" height={"150px"} width={"150px"}/><br /><br /></center>
      <div className="any">
        <form action="">
      <input type="text" placeholder='enter your name'  style={{ width: '275px', height: '30px' }} /><br /><br />
      <input type="password"placeholder='enter password' style={{ width: '275px', height: '30px' }}  />
      </form><br />
     <Link to='/dashboard'> <button className='btn btn-primary'>Login</button></Link>
      </div>
    </div></center>
    </div>
  )
}

export default Login