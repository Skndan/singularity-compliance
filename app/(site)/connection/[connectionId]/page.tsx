"use client";

import { useEffect, useState } from "react"; 
import Guacamole from 'guacamole-common-js';
import password from "@/components/login/password";
import { parseCookies } from "nookies";

const ConnectionPage = ({ params }: { params: { connectionId: string } }) => {
  
  const [guacamoleUrl, setGuacamoleUrl] = useState('');
  const { 'nextauth.token': token } = parseCookies();

  console.log(token);
  return (
    <div> 
        <iframe 
          src={`http://3.111.39.236/rdp/#/client/MQBjAHBvc3RncmVzcWw?token=${token}`}
          style={{ width: '100%', height: '600px', border: 'none' }}
          title="RDP Viewer"
        /> 
    </div>
  );
};
 

 
export default ConnectionPage;