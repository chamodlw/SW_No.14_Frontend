// Reportpreview.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ReportUI from '../../Labasisstence/LabasisstenceComponent/ReportUI';

function Invoicepreview() {
  const { id } = useParams();

  return (
    <div>
      <ReportUI id ={id}/>
    </div>
  );
}

export default Invoicepreview;
