import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <section className="seciton search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your fav cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searcgCocktail}
          />
        </div>
      </form>
      <h2>search form component</h2>
    </section>
  );
};

export default SearchForm;
