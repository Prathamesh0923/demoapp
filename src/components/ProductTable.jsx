import Row from "./ProductRow"
import Title from "./ProductTitle"

const Table = (props) => {
    const products = [
        { name: "Apple", price: "11", instock: true, category: "fruit" },
        { name: "Banana", price: "122", instock: true, category: "fruit" },
        { name: "watermelon", price: "19", instock: false, category: "fruit" },
        { name: "cherry", price: "18", instock: false, category: "fruit" },
        { name: "bringal", price: "17", instock: true, category: "vegetable" },
        { name: "potato", price: "12", instock: false, category: "vegetable" },
    ]
    let lastCategory = ""
    let row = products.filter(el => el.name.toLowerCase().includes(props.s.toLowerCase()))
        .map((le, i) => {
            if (lastCategory !== le.category){
                lastCategory=le.category
                return <><Title c={le.category} /> <Row name={le.name} price={le.price} key={i} /></>
            } 
                
        return <Row name={le.name} price={le.price} key={i} />
        })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                    </tr>

                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        </>
    )
}
export default Table