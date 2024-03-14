// componente TodoTopBar
import { Filter, InputBar } from "../index"

export function TodoTopBar(props) {

    const { handleSubmit, text, setText, filter, setFilter } = props
    return (
        <div className='top-bar'>
            <InputBar handleSub={handleSubmit} text={text} set={setText} />
            <div className='filter-container'>
                <Filter id='all' name='show' filter={filter} click={setFilter} label='All' />
                <Filter id='completed' name='show' filter={filter} click={setFilter} label='Completed' />
                <Filter id='pending' name='show' filter={filter} click={setFilter} label='Pending' />
            </div>
        </div>
    )
}
