import { useState, useEffect } from 'react';
import { axios } from 'axios';
//import { supabase } from '../db/clientSupabasee';

let api_url = `https://etbxivzwzvhxmqxxvrwa.supabase.co/rest/v1/card2_86?select=*`;
// let api_url = `http://localhost:5000/api/card_86`;

const SupaPostBlog_86 = () => {
  const [name, setName] = useState('Hsingtai Chung');
  const [id, setId] = useState(123456789);
  const [blogs, setBlogs] = useState([]);
  const fetchBlogsFromSupabase = async () => {
    try {
      // const response = await fetch(api_url);
      // const data = await response.json();
      //let { data, error } = await supabase.from('card_86').select('*');

      const response = await axios.get(api_url,
        {
          id:11,
          title:'Juanx-209410686', 
          descrip:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          category: 'travel', 
          img:'/images/photo-9.jpg', 
          remote_url:'https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-9.jpg',
        },
        {
        headers: {
          apikey: 'SUPABASE_CLIENT_ANON_KEY',
          Authorization: 'Bearer SUPABASE_CLIENT_ANON_KEY',
          Content: 'application/json',
          Prefer: 'return=minimal',
        },
      });
      console.log('blogs data', data);

      //setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogsFromSupabase();
  }, []);
  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2> Get Blogs Using Supabase bash </h2>
        <h3>
          {name}, {id}
        </h3>
      </div>
      <div className='blogs-center'>
        {blogs.map((item) => {
          const { id, img, remote_url, title, category, descrip } = item;
          return (
            <article key={id} className='blog'>
              <img src={img} alt='Coffee photo' className='img blog-img' />
              <div className='blog-content'>
                <span>
                  {' '}
                  {category} <i className='fa-solid fa-mug-saucer'></i>
                </span>
                <h3>{title}</h3> <p>{descrip}</p> <a href='#'>read more</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default SupaPostBlog_86;
