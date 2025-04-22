



function App({ title, data = [] }) {
    return data.length ? <>
        <h1>{title}</h1>
        <table style={{ border: '1px solid black' }} >
            <tbody >
                {data.map((el, index) =>
                    <tr key={index}  >
                        <th>{el.category}</th>
                        {el.animals.map((el, index) => <td key={index} style={{ color: el.color }} >{el.name}</td>)}
                    </tr>)}
            </tbody>

        </table>
    </> : null
}
export default App
