import React , { useState} from 'react';
function Bulb(){
  const [ison,setchey]= useState(false);
  const togglelight=()=>{ setchey(!ison);};

  return(
    <>
    <h1>
      Bulb LIght is {ison? "on ayyindi":'Ledu'}
    </h1>
    <button onClick={togglelight}> lights on</button>
    </>
  );
}
export default Bulb;
