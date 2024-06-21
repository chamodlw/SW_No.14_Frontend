import * as React from 'react';



function Dhome01() { 
    const backgroundImageStyle = {
        backgroundImage: `url('./images/1.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',

    };

  return (
    <div style={{ position: 'relative', width: '100%', height: '50vh'}}  >
      <p style={{  margin: '20px', fontSize: '18px' }}>
   <h1 >"The laboratory system doctor, as the ultimate approver of lab reports, plays
     a pivotal role in ensuring the accuracy and reliability
     of diagnostic results, serving as a critical safeguard for patient care."</h1>
     <ul style={{ fontSize: '30px',display: 'inline-block', textAlign: 'left' }}>
      <li>View Reports</li>
      <li>Give Recommendations</li>
      <li>Approve Reports</li>
     </ul>
     </p>
     <br/>
</div>

       );
  }
  export default Dhome01;