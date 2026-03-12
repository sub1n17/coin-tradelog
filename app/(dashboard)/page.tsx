'use client';

import { SectionCards } from '@/components/section-cards';
import { useCoinPrice } from '@/hooks/useCoinPrice';

export default function HomePage() {
    const { data, isLoading } = useCoinPrice();

    if (isLoading || !data) return <div>로딩 중...</div>;
    return (
        <>
            <SectionCards data={data}></SectionCards>
        </>
    );
}
