interface LoadMoreButtonProps {
  onLoadMore: () => void;
  hasMore: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onLoadMore,
  hasMore,
}) => {
  if (!hasMore) return null;

  return (
    <div className="load-more">
      <button onClick={onLoadMore}>Load more 👇</button>
    </div>
  );
};

export default LoadMoreButton;
