'use client';

import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';

interface CoinData {
    market: string;
    trade_price: number;
    signed_change_rate: number;
    high_price: number;
    low_price: number;
    acc_trade_volume_24h: number;
}

export function SectionCards({ data }: { data: CoinData[] }) {
    return (
        <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
            {data?.map((coin) => (
                <Card className="@container/card" key={coin.market}>
                    <CardHeader>
                        <CardDescription>{coin.market}</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                            ₩{coin.trade_price.toLocaleString()}
                        </CardTitle>
                        <CardAction>
                            <Badge
                                variant="outline"
                                className={
                                    coin.signed_change_rate > 0 ? 'text-red-500' : 'text-blue-500'
                                }
                            >
                                {coin.signed_change_rate > 0 ? (
                                    <TrendingUpIcon />
                                ) : (
                                    <TrendingDownIcon />
                                )}
                                {(coin.signed_change_rate * 100).toFixed(2)} %
                            </Badge>
                        </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <div className="flex gap-2 font-medium">
                            고가 ₩{coin.high_price.toLocaleString()}
                        </div>
                        <div className="flex gap-2 font-medium">
                            저가 ₩{coin.low_price.toLocaleString()}
                        </div>
                        <div className="text-muted-foreground">
                            24h 거래량 {coin.acc_trade_volume_24h.toLocaleString()}
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
