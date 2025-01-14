import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import 'flowbite/dist/flowbite.css';
import { Link } from 'react-router-dom';

const GamesTable = () => {
    const [games, setGames] = useState([]);
    const [error, setError] = useState(null); 

    const getGames = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/games');
            const json = await response.json();
            console.log(json); // Cek struktur data

            // Periksa apakah json.data ada dan merupakan array
            if (json.data && Array.isArray(json.data)) {
                setGames(json.data); 
            } else {
                console.error("Data tidak sesuai: ", json);
                setError("Data tidak sesuai"); 
            }
        } catch (error) {
            console.log("Error fetching games: ", error);
            setError("Terjadi kesalahan saat mengambil data"); 
        }
    };

    useEffect(() => {
        getGames();
    }, []);

    return (
        <div className='overflow-x-auto'>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <Table>
                <TableHead> 
                        <TableHeadCell>Games Name</TableHeadCell>
                        <TableHeadCell>Min memory size</TableHeadCell>
                        <TableHeadCell>Max no players</TableHeadCell>
                        <TableHeadCell>Details</TableHeadCell>
                        <TableHeadCell>Drive Type</TableHeadCell>
                        <TableHeadCell>Size</TableHeadCell>
                        <TableHeadCell>Details</TableHeadCell>
                        <TableHeadCell>Action</TableHeadCell>
                </TableHead>
                <TableBody>
                    {Array.isArray(games) && games.length > 0 ? (
                        games.map((data) => (
                            <TableRow key={data.Games_id}>
                                <TableCell>{data.games_name}</TableCell>
                                <TableCell>{data.min_memory_size} GB</TableCell>
                                <TableCell>{data.max_no_players}</TableCell>
                                <TableCell>{data.details}</TableCell>
                                <TableCell>{data.consoles.drive_type}</TableCell>
                                <TableCell>{data.consoles.size} GB</TableCell>
                                <TableCell>{data.consoles.details}</TableCell>
                                <TableCell className='flex space-x-2'>
                                    <Link className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'>Edit</Link>
                                    <Link className='font-medium text-red-600 hover:underline dark:text-red-500'>Delete</Link>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan="1">No games available</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default GamesTable;