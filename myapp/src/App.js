// import { } from 'react'
import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import Image from "./Image";
function App() {
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords.latitude);
      console.log(pos.coords.longitude);

    })

  }, [])
  let form = new FormData();
  const onFileChnage = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      form.append('file', e.target.files[0]);

    }
    console.log(form);
  }
  const ref = useRef();
  const reset = () => {
    ref.current.value = "";
  };

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');

  // const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age, weight);

    // our object to pass
    // const data = {
    //   name, age, weight
    // }
    setName('');
    setAge('');
    setWeight('');
  }

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', width: '50%' }}>
        <div className="container" style={{ justifyContent: "center" }}>

          <br></br>
          <form autoComplete="off" className='form-group'
            onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' className='form-control' required
              placeholder='Enter your name' onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <br></br>
            <label>Age</label>
            <input type='text' className='form-control' required
              placeholder='Enter your age' onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            <br></br>
            <label>Weight</label>
            <input type='text' className='form-control' required
              placeholder='Enter expected_weight'
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
            <br></br>
            <label>Image</label>
            <br></br>
            <input type="file" name="file_upload" onChange={onFileChnage} ref={ref} />
            <br></br>
            <div style={{ display: "flex", justifyContent: 'flex-end' }}>
              <button onClick={reset} type='submit' className='btn btn-primary'>Submit</button>
            </div>
          </form>
          {/*  */}
        </div>

      </div>
    </>


  );
}

export default App;