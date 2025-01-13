import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';

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
                setGames(json.data); // Ubah dari json.results ke json.data
            } else {
                console.error("Data tidak sesuai: ", json);
                setError("Data tidak sesuai"); // Set error jika data tidak sesuai
            }
        } catch (error) {
            console.log("Error fetching games: ", error);
            setError("Terjadi kesalahan saat mengambil data"); // Set error jika terjadi kesalahan
        }
    };

    useEffect(() => {
        getGames();
    }, []);

    return (
        <div>
            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Tampilkan pesan error jika ada */}
            <Table>
                <TableHead> 
                        <TableHeadCell>Games Name</TableHeadCell>
                        <TableHeadCell>Min memory size</TableHeadCell>
                        <TableHeadCell>Max no players</TableHeadCell>
                        <TableHeadCell>Details</TableHeadCell>
                        <TableHeadCell>Console FK</TableHeadCell>
                </TableHead>
                <TableBody>
                    {Array.isArray(games) && games.length > 0 ? (
                        games.map((data) => (
                            <TableRow key={data.Games_id}>
                                <TableCell>{data.games_name}</TableCell>
                                <TableCell>{data.min_memory_size}</TableCell>
                                <TableCell>{data.max_no_players}</TableCell>
                                <TableCell>{data.details}</TableCell>
                                <TableCell>{data.console_fk}</TableCell>

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