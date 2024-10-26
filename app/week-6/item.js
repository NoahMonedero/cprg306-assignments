export default function Item({itemObj,id}){

    let {name,quantity,category} = itemObj;

    return(
        <div className="flex-1 flex-col justify-center align-middle bg-yellow-700 p-10 rounded-lg shadow-inner shadow-yellow-900" key={id}>
            <div>
                <p className="font-extrabold uppercase text-center">{name}</p>
            </div>
            <div>                    
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
            </div>
        </div>
    );
}