export const Filter = ({ setNewFilter }) => {

    const handleChangeFilterValue = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <form>
            <div>
                <label htmlFor="filter">Filter by: </label>
                <input id="filter" onChange={ handleChangeFilterValue }/>
            </div>
        </form>
    );
}