import React, { useState } from 'react';
import './App.css';
function Home() {
    const [Checked,setChecked]=useState();

 const Array=["high","cruel","nappy","sable","mine","vagabond","sassy","steer","argument","unaccountable","tie","middle"]
  return (
    <div className='back'>
<ul>
    {Array.map(item=>{
        return(
            <li>{item}
             <input type="checkbox" value={item} onChange={(e)=>setChecked(e.target.value)}/>
            </li>
        )
    })}
</ul>
<div className='check'>
   <mark> {Checked}</mark>
    </div>
    </div>
  )
}

export default Home;