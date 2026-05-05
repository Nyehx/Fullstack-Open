const Searchbar = ({value, onChange}) => (
    <div>
        search for countries: <input value={value} onChange={onChange} />
    </div>
)

export default Searchbar