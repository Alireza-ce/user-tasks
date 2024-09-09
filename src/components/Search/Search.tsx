import {Input} from 'antd';
import {useSearch} from './useSearch.tsx';

const Search = ({onSearchChange}) => {
    const {search, onHandleSearch} = useSearch(onSearchChange);

    return (<Input placeholder="Task Title ..." value={search} onChange={onHandleSearch}/>)
}

export default Search;