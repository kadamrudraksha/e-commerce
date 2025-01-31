export function SearchBox({ onSearch }) {
    return (
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
      </div>
    )
  }
  
  