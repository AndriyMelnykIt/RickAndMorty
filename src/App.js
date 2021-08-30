import React, {useState, useEffect, Fragment} from 'react'
import axios from "axios";
import './style/main.css';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import Character from "./Component/Character/Character";
import Locations from './Page/Locations'
import Nav from "./Component/Navigation/Nav";

function App() {

    const [url] = useState("https://rickandmortyapi.com/api/character/")
    const [info, setInfo] = useState({});
    const [results, setResults] = useState([])
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)


    useEffect(() => {
        console.log('url: ', url);
        console.log('info: ', info);
        console.log('results: ', results);
        console.log('search: ', search);
    }, [url, info, results, search])


    useEffect(() => {
        axios.get(`${url}?page=${page}&name=${search} `)
            .then((result) => {
                setInfo(result.data.info)
                setResults(result.data.results)
            })
            .catch((error) => {
                setPage(1)
                console.log(error);
            })
    }, [search, page])

    const nextPage = (event) => {
        event.preventDefault()
        if (page <= info.pages) {
            setPage(page + 1)
        } else {
            setPage(1)
        }
    }

    const prevPage = (e) => {
        e.preventDefault()
        if (page > 1) {
            setPage(page - 1)
        } else {
            setPage(info.pages)
        }
    }


    return (
        <Fragment>
            <header>


                <button className="btn"
                    onClick={(e) => {
                        prevPage(e)
                    }}
                >-
                </button>
                <p>{page}/{info.pages}</p>
                <button className="btn"
                    onClick={(e) => {
                        nextPage(e)
                    }}
                >+
                </button>
                <p>Search:</p>

                <input style={{width:'250px'}} onChange={(e) => {
                setSearch(e.target.value)
            }}
                                     value={search}
                                     type="text"
                                     placeholder="Поле пошуку"
            />


            </header>
            <Router>
                <Nav/>
                <Switch>
                    <Route path="/locations" component={Locations}/>
                </Switch>
            </Router>


            <main>
                <section className="characters">
                    {results.map((result, index) => (
                        <Character key={index} result={result}/>
                    ))}
                </section>
            </main>

        </Fragment>


    );
}

export default App;
