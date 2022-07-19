import React,{useState,useEffect} from "react";

const Beers = () => {

    const [beers, setBeers] = useState();

    useEffect(()=>{
        fetch('https://api.punkapi.com/v2/beers')
        .then(r => r.json())
        .then(result => setBeers(result))
        .then(result => console.log(result))
    }, [])
    console.log(beers)
    return (
        <>
            <tr><td><h1>BEERS</h1></td></tr>
            {beers && beers.map((beer) => (
                
                    <tr key={beer.name}>
                        <td scope="row">{beer.id}</td>
                        <td>{beer.name}</td>
                        <td>{beer.description}</td>
                        <td><img src={beer.image_url} height="200px" alt={beer.index}/></td>
                    </tr>
                
            ))}
        </>
        
    );
}
export default Beers

