import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const addProduct = async () => {

    if(!name || !price || !category || !company){
        setError(true);
        return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:4500/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`

      },
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <div>
      <h1>Add Product</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Name"
      ></input>
      {error && <span className="invalid-input">Enter valid Name</span>}
      <input
        className="inputBox"
        type="text"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        placeholder="Enter Price"
      ></input>
      {error && <span className="invalid-input">Enter valid Price</span>}
      <input
        className="inputBox"
        type="text"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        placeholder="Enter Category"
      ></input>
      {error && <span className="invalid-input">Enter valid Category</span>}
      <input
        className="inputBox"
        type="text"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
        placeholder="Enter Company"
      ></input>
      {error && <span className="invalid-input">Enter valid Company</span>}
      <button className="inputBox btn" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
