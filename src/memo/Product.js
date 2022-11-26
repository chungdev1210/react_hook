import React, {useState} from 'react'

export default function Product() {

    const [name, setName] = useState();
    const [price, setPrice] = useState();

    const handleChangeValue = (e) => {
        if(e.target.name === 'name') {
            setName(e.target.value)
        }

        if(e.target.name === 'price') {
            setPrice(e.target.value)
        }

    }

    console.log(name, price)
  return (
    <div style={{margin: '3%'}}>
        <form>
            <p><input type='text' name='name' onChange={handleChangeValue} placeholder='Tên sản phẩm...'/></p>
            <p><input type='text' name='price' onChange={handleChangeValue} placeholder='Giá sản phẩm...'/></p>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
