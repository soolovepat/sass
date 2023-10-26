import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );
  return (
    <List
      className="TodoList"
      width={512}
      height={512}
      rowCount={57}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
