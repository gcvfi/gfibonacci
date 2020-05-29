import React, { Component, useRef, useState, useEffect }  from 'react';

function Sequence(props){

      const i1 = useRef(), i2 = useRef(), t1 = useRef(); 
      const [in1, setIn1] = useState("0");
      const [in2, setIn2] = useState("1");
      const [err1, setErr1] = useState("");
      const [err2, setErr2] = useState("");

      const to_big_number = 1000000000000000;

      const resetSeq = (e) => {
         e && e.preventDefault();
         setIn1("0");
         setIn2("1");
      }

      const checkNumeric = (i)=>{
            let val = 0;
            let pass = true;
            let err = "";
            i = i.trim();
            i = i.replace(/^\+\s*/, "");
            i =	i.replace(/\.0*$/, "");
            val = parseInt(i);

            if(/-/.test(i)){
                err = "Enter a non negative number";
                pass = false;
                return [pass, val, err];
            }

            if(/[^0-9]/.test(i)){
                err = "Should be a valid integer number for sequence";
                pass = false;
                return [pass, val, err];
            }

            if(val > to_big_number){
                err = `Enter a number less than ${to_big_number} to compute sequence`;
                pass = false;
                return [pass, val, err];
            }

            return [pass, val, err];
      }

      const dofib = (val1, val2)=>{
            let s = [val1, val2];
            let i = 0;
            let n = 0;
            for(i = 2; i < 79; i++){
               n = s[i - 1] + s[i - 2];
               if(n > to_big_number * 4) break;
               s[i] = n;
            }
            t1.current.value = s.join(", ");;
      }


      const validateAndFib = ()=>{
          let val1 = 0;
          let val2 = 0;
          let pass1 = true;
          let pass2 = true;
          let err = "";
          [pass1, val1, err] = checkNumeric(in1);
          setErr1(err);

          [pass2, val2, err] = checkNumeric(in2);
          setErr2(err);

          if(in1.trim()=="" || in2.trim()==""){
              t1.current.value = "";
              return;
          }

          if(!pass1 || !pass2){
              t1.current.value = "";
              return;
          }

          if(val1 <= val2){
              dofib(val1,  val2)
              return;
          }

          err = "Enter a number greater than first number in the sequence";
          setErr2(err);
          t1.current.value = "";

      }

      useEffect(()=>{
        validateAndFib()
      },[in1, in2]); 


      return <>
                 <p>
                    <label className="col-sm-3" >First number in the sequence</label> 
                    <input className="col-sm-2" id="inputbox1" ref={i1} onChange={()=>{setIn1(i1.current.value)}} value={in1} />
                    <span className="col-sm-6" >{err1}</span>
                 </p>
                 <p>
                    <label className="col-sm-3" >Second number in the sequence</label>
                    <input className="col-sm-2" id="inputbox2" ref={i2} onChange={()=>{setIn2(i2.current.value)}} value={in2} />
                    <span className="col-sm-6" >{err2}</span>
      	      	 </p>
                 <p><button onClick={resetSeq} >Reset Sequence</button></p>
                 <p>
                    <label>Output</label>
                    <br />
                    <textarea id="output1" className="col-sm-8" ref={t1} rows="12" ></textarea>
                 </p>
       </>
    
}

export default Sequence;

