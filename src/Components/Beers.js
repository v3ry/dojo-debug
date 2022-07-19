const Beers = () => {

    const [beers, setBeers] = useState();

    useEffect(()=>{
        fetch('https://api.punkapi.com/v2/beers')
        .then(r => r.json())
        .then(result => setBeers(result.data))
    }, [])

    return (
        <h1>BEERS</h1>
        <div>
            {beer && beer.map((beer) => (
                <tr key={beer.name}>
                <th scope="row">{beer.index}</th>
                <td>{beer.name}</td>
                <td>{beer.description}</td>
                <td><img src={beer.image_url} height="200px" alt={beer.index}/></td>
              </tr>
            ))}
        <div/>
        
    );
}

