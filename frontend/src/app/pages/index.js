// pages/index.js
import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data, error } = await supabase
        .from('your_table_name')
        .select('*');
      if (error) {
        console.error(error);
      } else {
        setData(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Supabase</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.column_name}</li>
        ))}
      </ul>
    </div>
  );
}
   