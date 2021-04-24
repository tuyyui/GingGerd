
import React, {useState, useEffect} from "react"
import fire from "../config/Fire"


function Create ()  {
    var newdata = {
        body: "Recipe",
        // createdAt: fire.firestore.Timestamp.fromDate(new Date('December 10, 1815')),
        user: "Thomas"
    }
    function setNewData () 
    {
        const res = fire.firestore().collection('screams').doc('o2332').set(newdata)
    }
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const ref = fire.firestore().collection("screams")

    function getData(){
        setLoading(true)
        ref.onSnapshot((querySnapshot) =>{
            const items = []
            querySnapshot.forEach((doc)=> {
                items.push(doc.data())
            })
            setData(items)
            setLoading(false)
        })
    }
    useEffect(() => {
        getData();
    }, [])
    if (loading){
        return <h1>Loading...</h1>
    }
        return (
            <div>
                <h1>Data</h1>
                {data.map((datas)=> (
                    <>
                    <p>{datas.body}</p>
                   
                    <h2>{datas.userHandle}</h2>
                    <button onClick = {setNewData}>Add Data</button>
                    </>
                ))}
            </div>
        )
    
}

export default Create
