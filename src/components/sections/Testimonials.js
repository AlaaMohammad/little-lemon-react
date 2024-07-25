import React from 'react'

function Testimonials() {
    let testimonials = [
      {
        'name': "John Doe",
        'text': "The atmosphere was delightful and the dishes were a culinary masterpiece. Easily the best dining experience I've had in years!",
      },
      {
        'name': "Sophia Martinez",
        'text': "From the moment we stepped in, the staff made us feel like royalty. The flavors in every dish were unique and memorable. Can't wait to return!",
      },
      {
        'name': "Liam O'Brien",
        'text': "I've traveled around the world and eaten at many places, but this restaurant truly stands out. The combination of flavors is unparalleled and the presentation was impeccable.",
      },
      {
        'name': "Aisha Patel",
        'text': "Everything from the ambiance to the dessert was spot on. If you're looking for an unforgettable dining experience, this is the place to be!",
      },
    ];
  return (
    <section className="testimonials-section ">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
      {testimonials.map((testimonial) => (
        <div className="testimonial-card">
          <img src="" alt="" />
          <p>{testimonial.name}</p>
          <p>
          {testimonial.text}
          </p>
        </div>
      ))}
      </div>
    </section>
  );
}

export default Testimonials