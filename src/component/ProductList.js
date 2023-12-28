import React,{ useEffect } from "react";
import {Link} from 'react-router-dom'



const ProductList=()=>{
    const [products, setProducts] = React.useState([]);


    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts=async()=>{
        let result=await fetch("http://localhost:4500/products",{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result=await result.json();
        setProducts(result);
    }
    const deleteProduct=async (id)=>{
        console.warn("delete item:",id);
        let result=await fetch(`http://localhost:4500/product/${id}`,{
            method:"DELETE",
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result=await result.json();
        if(result){
            getProducts();
            alert('Record deleted');
        }
    };
    const searchHandle=async(event)=>{
        //console.warn(event.target.value);
        let key=event.target.value;
        if(key){
            let result=await fetch(`http://localhost:4500/search/${key}`,{
                headers:{
                    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            });
        result=await result.json();
        if(result){
            setProducts(result)
        }
    }
    else{
        getProducts();
    }
        }


    return (
        <div className="product-list">
            <h3>Product List</h3>
            <input type="text" className="search" 
            placeholder="Enter product to Search" onChange={searchHandle}></input>
            <ul>
                <li>Sr. No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            { products.length>0? products.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li><button className="btn-del" onClick={()=>deleteProduct(item._id)}>Delete</button></li>
                 <Link to={"/update/"+item._id}>Update</Link>
            </ul>):<h1>No result found</h1>}
        </div>
    )
}

export default ProductList;