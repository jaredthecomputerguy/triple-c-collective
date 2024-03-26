"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PostButtonsProps {
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export const PostButtons = ({
  totalPages,
  hasNextPage,
  hasPrevPage,
}: PostButtonsProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = searchParams?.get("page") ?? 1;

  const handleNextPage = () => {
    if (currentPage === totalPages) return;
    router.push(`/blogs?page=${+currentPage + 1}`);
  };

  const handlePrevPage = () => {
    if (currentPage === 1) return;
    router.push(`/blogs?page=${+currentPage - 1}`);
  };

  return (
    <div className="flex items-center justify-between gap-2">
      {hasPrevPage && (
        <button
          className="rounded bg-primary-purple px-6 py-2 font-semibold text-white outline-none transition-all hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple disabled:pointer-events-none disabled:bg-primary-purple/50"
          disabled={!hasPrevPage}
          onClick={handlePrevPage}
        >
          Load newer posts
        </button>
      )}
      {hasNextPage && (
        <button
          className="rounded bg-primary-purple px-6 py-2 font-semibold text-white outline-none transition-all hover:bg-primary-purple/80 focus:bg-primary-purple/80 focus:outline-primary-purple  disabled:pointer-events-none disabled:bg-primary-purple/50"
          disabled={!hasNextPage}
          onClick={handleNextPage}
        >
          Load older posts
        </button>
      )}
    </div>
  );
};
