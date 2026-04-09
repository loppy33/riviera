"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Получаем текущую страницу из URL (если нет, то 1)
  const currentPage = Number(searchParams.get('page')) || 1;

  // Если страница всего одна (или 0), пагинацию не показываем
  if (totalPages <= 1) return null;

  // Функция для смены страницы с сохранением остальных параметров (например, сортировки)
  const handleNavigate = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="pagination">
      
      {/* Кнопка "Назад" */}
      <button 
        className="pagination__btn pagination__btn--outline"
        disabled={currentPage <= 1}
        onClick={() => handleNavigate(currentPage - 1)}
        style={{ opacity: currentPage <= 1 ? 0.5 : 1, cursor: currentPage <= 1 ? 'not-allowed' : 'pointer' }}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      {/* Генерация номеров страниц */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`pagination__btn pagination__btn--number ${currentPage === page ? 'pagination__btn--active' : ''}`}
          onClick={() => handleNavigate(page)}
        >
          {page}
        </button>
      ))}

      {/* Кнопка "Вперед" */}
      <button 
        className="pagination__btn pagination__btn--outline"
        disabled={currentPage >= totalPages}
        onClick={() => handleNavigate(currentPage + 1)}
        style={{ opacity: currentPage >= totalPages ? 0.5 : 1, cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer' }}
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

    </div>
  );
}