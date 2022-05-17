import { ListProps } from '../../interfaces';
import { ListWrapper } from './styles';

const List = ({ children, onScroll }: ListProps) => (
  <ListWrapper onScroll={onScroll}>{children}</ListWrapper>
);

export default List;
