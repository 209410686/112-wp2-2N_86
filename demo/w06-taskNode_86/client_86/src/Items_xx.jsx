import axios from 'axios';
import SingleItem_xx from './SingleItem_xx';

import { useQuery } from '@tanstack/react-query';
//import customFetch_02 from './utils_02';

const Items_xx = ({ items }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => axios.get('http://localhost:5000/api/tasks'),
  });
  console.log('rdata', data);

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>;
  }

  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem_xx key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_xx;
