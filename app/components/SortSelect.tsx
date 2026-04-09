"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function SortSelect() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Читаем текущую сортировку из URL (по умолчанию price_desc)
    const currentSort = searchParams.get('sort') || 'price_desc';

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = e.target.value;
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', newSort);
        params.set('page', '1'); // <-- ДОБАВЬ ЭТУ СТРОЧКУ! При новой сортировке сбрасываем на 1 страницу
        // Меняем URL без перезагрузки страницы
        router.push(`?${params.toString()}`);
    };

    return (
        <div className="select-wrapper">
            <select value={currentSort} onChange={handleChange}>
                <option value="price_desc">Price: High to Low</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="newest">Newest Arrivals</option>
                <option value="popular">Most Popular</option>
            </select>
            <span className="material-symbols-outlined icon">unfold_more</span>
        </div>
    );
}