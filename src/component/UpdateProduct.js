import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params=useParams();
  const navigate=useNavigate();

  useEffect(()=>{
    getProductDetails();
  });

  const getProductDetails= async()=>{
    console.warn(params);
    let result= await fetch(`http://localhost:4500/product/${params.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
    });
    result=await result.json();
    setName(result.name);
    setPrice(String(result.price));
    setCategory(result.category);
    setCompany(result.company)
  }
  const updateProduct = async () => {
    let result=await fetch(`http://localhost:4500/product/${params.id}`,{
        method:"Put",
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':"application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`

        }
    })
    result=await result.json();
    console.warn(result);
    navigate("/")
//console.warn(name, price,category,company)
  }
  return (
    <div>
      <h1>Update Product</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Name"
      ></input>
      <input
        className="inputBox"
        type="text"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        placeholder="Enter Price"
      ></input>
      <input
        className="inputBox"
        type="text"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        placeholder="Enter Category"
      ></input>
      <input
        className="inputBox"
        type="text"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
        placeholder="Enter Company"
      ></input>
      <button className="inputBox btn" onClick={updateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
