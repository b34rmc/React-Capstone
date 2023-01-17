import "../styles/Filter.scss";

const Filter = (props) => {
  return (
    <div className="filter">
      <form>
        <label htmlFor="options">Filter: </label>
        <select
          name="options"
          id="options"
          onChange={(e) => props.setCategory(e.target.value)}
        >
          <option value="">All Products</option>
          {props.filters.map((filter) => {
            return (
              <option key={filter.id} value={filter}>
                {filter}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};
export default Filter;
