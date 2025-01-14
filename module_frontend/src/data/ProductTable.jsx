import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import 'flowbite/dist/flowbite.css';
import { Link } from 'react-router-dom';

const ProductTable = () => {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(null); 

    const getProduct = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/product');
            const json = await response.json();
            console.log(json); // Cek struktur data

            // Periksa apakah json adalah array
            if (Array.isArray(json)) {
                setProduct(json); 
            } else {
                console.error("Data tidak sesuai: ", json);
                setError("Data tidak sesuai"); 
            }
        } catch (error) {
            console.log("Error fetching products: ", error);
            setError("Terjadi kesalahan saat mengambil data"); 
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className='overflow-x-auto'>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Table>
                <TableHead> 
                    <TableHeadCell>Product Name</TableHeadCell>
                    <TableHeadCell>Description</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>Action</TableHeadCell>
                </TableHead>
                <TableBody>
                    {Array.isArray(product) && product.length > 0 ? (
                        product.map((data) => (
                            <TableRow key={data.Product_id}>
                                <TableCell>{data.pro_name}</TableCell>
                                <TableCell>{data.description}</TableCell>
                                <TableCell>{data.price} IDR</TableCell>
                                <TableCell className='flex space-x-2'>
                                    <Link className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'>Edit</Link>
                                    <Link className='font-medium text-red-600 hover:underline dark:text-red-500'>Delete</Link>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan="4">No products available</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProductTable;