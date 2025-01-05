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
function Hookprac(){
  const [isbold,undda]=useState(false);
  const [isitalic,ayinda]=useState(false);
  const boldlopettu=()=>{ undda(!isbold);};
  const itlaicchudu=()=>{ayinda(!isitalic);};
  return(
    <>
    <h1 style={{fontWeight: isbold? 'bold':'normal',fontStyle: isitalic? 'italic':'normal'}}>
      This is the practice session of hooks
    </h1>
    <button onClick={boldlopettu}>BOLD</button>
    <button onClick={itlaicchudu}>ITALIC</button>
    </>
  );
}
function Geeta(){
  const [isgita,undi]=useState(false);
  const gitunda=()=>{undi(!isgita);};
  return(
    <>
    <h1 style={{color:isgita? 'red' : 'green'}}> UnderlIne Hook Practice</h1>
    <button onClick={gitunda}>Daku Maharaj</button>
    </>
  );
}
export {Bulb,Hookprac,Geeta};

