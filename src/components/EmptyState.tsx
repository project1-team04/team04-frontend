interface EmptyStateProps {
  message: string;
  actionText: string;
}

const EmptyState = ({ message, actionText }: EmptyStateProps) => {
  return (
    <div>
      <div>빈 상자</div>
      <div>{message}</div>
      <div>{actionText}</div>
    </div>
  );
};

export default EmptyState;
