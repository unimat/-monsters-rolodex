// import { ChangeEventHandler } from 'react';
// import { ChangeEvent, ChangeEventHandler } from 'react';
import { ChangeEvent } from 'react';

import './search-box.styles.css';

/*interface ISearchBoxProps {
  className: string;
  placeholder?: string;
}

interface ISearchBoxProps {
  onChangeHandler: ( a: string) => void;
}
*/

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // onChangeHandler: ( a: string) => void;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  // func: ChangeEventHandler;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
