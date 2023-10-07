import { LoadMoreButton } from 'components/Button/Button.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadMoreButton type="button" onClick={onClick}>
      Load more
    </LoadMoreButton>
  );
};
