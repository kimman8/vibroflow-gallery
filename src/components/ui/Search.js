import React, { useState } from "react";
import Radio from "./Radio";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="search">
      <form>
        {/* <Radio /> */}
        <input
          type="text"
          className="form-control"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search units"
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
