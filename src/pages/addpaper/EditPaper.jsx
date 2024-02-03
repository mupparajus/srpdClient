
import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditPaper=()=>{
debugger;
    const[paper,setPaper]=useState(null);

    
    const { id } = useParams();

const paperUrl=`http://localhost:8080/downloadFile/${id}`
    useEffect(()=>{
        debugger;
viewPaper();
    },[])

    const viewPaper=async()=>{
        debugger;
        try{
            console.log("paperUrl "+paperUrl);
const res=await axios.get(`http://localhost:8080/downloadFile/${id}`,{responseType: 'blob'});
console.log("data is "+res.data);
console.log("pdfBlob is "+pdfBlob);
const pdfBlob=res.data;
const blobUrl = URL.createObjectURL(pdfBlob);
//console.log("data is "+res.data);
// Create a temporary link element and trigger the download
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'downloaded-file.pdf'; // You can customize the downloaded file name
      document.body.appendChild(link);
      link.click();

      // Clean up the temporary link
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
//setPaper(res.data);
        }catch(error ){
console.log("Error in view paper"+error)
        }

    }

    return(
        <>
        <div>
            <h1>Edit Paper</h1>
            {paper}
        </div>
        </>

    );
}
export default EditPaper;