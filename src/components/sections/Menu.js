import React from 'react'

function Menu() {
  let data = [
    {
      'name': 'Greek Salad',
      'img' : 'greek-salad.jpg',
      'description':'Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.',
      'price': '$12.99'
    },
    {
      'name': 'Bruschetta',
      'img' : 'bruschetta.jpg',
      'description':'Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.',
      'price': '$16.99'
    },
    {
      'name': 'Lemon Dessert',
      'img' : 'lemon-dessert.jpg',
      'description':'Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.',
      'price': '$8.50'
    },
  ]
  return (
    <section className='menu-section'>
      <h2>This Week Specials!</h2>
      <a className="btn btn-secondary" href="">
        Online Menu
      </a>
      <div className="menu-container">
        {
          data.map( item =>(
        <article className='menu-item'>
          <div className="menu-img">

          <img src={`./assets/img/food/${item.img}`} alt="" />
          </div>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>
            {item.description}
          </p>
        </article>

          ))
        }
      </div>
    </section>
  );
}

export default Menu