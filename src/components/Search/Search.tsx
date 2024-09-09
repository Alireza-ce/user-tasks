import {Input} from 'antd';
import {useSearch} from './useSearch.tsx';

type SearchProps = {
    onSearchChange: (e) => void
}

const Search = ({onSearchChange}: SearchProps) => {
    const {search, onHandleSearch} = useSearch(onSearchChange);

    return (<Input style={{maxWidth: 200}} placeholder="Task Title ..." value={search} onChange={onHandleSearch} />)
}

export default Search;