import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useCoinPrice() {
    return useQuery({
        queryKey: ['coinPrice'],
        queryFn: () => {
            return axios
                .get('https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-XRP')
                .then((res) => res.data);
        },
    });
}
