
const Filters = ({ target, getTarget, getSort }) => {
  return (
    <div className="filters">
      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
          id="search"
          value={target}
          onChange={(e) => getTarget(e.target.value)}
        />
      </div>

      <div className="sort">
        <select onChange={e => getSort(e.target.value)} defaultValue="">
          <option value="">Sort by</option>
          <option value="assending">Price: Low → High</option>
          <option value="dessending">Price: High → Low</option>
          <option value="new">Newest</option>
        </select>
      </div>
    </div>
  )
}

export default Filters;
