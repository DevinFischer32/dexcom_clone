const header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <h1 className="bg-green-400 mr-2">Dexcom</h1>
        <nav className="flex">
          <p>Products</p>
          <p>Learn</p>
          <p>Community</p>
          <p>Support</p>
          <p className="bg-green-400">Get Started</p>
        </nav>
      </div>
      <div>
        <input type="text" placeholder="Search" />
        <button>Icon</button>
      </div>
    </div>
  );
};

export default header;
