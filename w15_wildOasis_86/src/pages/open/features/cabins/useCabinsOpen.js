import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../../../services/apiCabins';

export const useCabins = () => {
  const { data: cabins, error, isLoading } = useQuery({
    queryKey: ['cabins_open_86'],
    queryFn: getCabins,
  });
  return { cabins, error, isLoading };
};
