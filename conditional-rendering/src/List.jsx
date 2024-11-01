import PropType from 'prop-types';


function List(props){
    // const fruits = [{id: 1, name: "apple", calories: 95}, 
    //                 {id: 2, name: "banana", calories: 45},
    //                 {id: 3, name: "pineapple", calories: 105},
    //                 {id: 4, name: "cherry", calories: 159}, 
    //                 {id: 5, name: "dates", calories: 277}, 
    //                 {id: 6, name: "elderberry", calories: 73}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL ORDER
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL ORDER
    // fruits.sort((a, b) => a.calories - b.calories); // ASCENDING ORDER
    // fruits.sort((a, b) => b.calories - a.calories); // DESCENDING ORDER

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const fruits = props.item;
    const category = props.category;

    const listItems = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>);

    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ul className="list-item">{listItems}</ul>
        </>
    );
}

List.propTypes = {
    item: PropType.arrayof(PropType.shape({ id: PropType.number, 
                                            name: PropType.string, 
                                            calories: PropType.number
                                        })),
    category: PropType.string
}

List.defaultProps = {
    item: [],
    category: "Category"
}
export default List;