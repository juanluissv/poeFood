import React,  {useState } from 'react'

const NewsLetter = () => {

  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };



  return (
    <section className="bg-white w-100 overflow-hidden newsflow1">
    <div className="contact-section-container container-fluid px-5 py-5">
      <div className="contact-form-container rounded-5 overflow-hidden p-5">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="mt-3">
              <h2 className="contact-title display-4 fw-bold">
                Send us your cat food requests!
              </h2>
              <p className="contact-subtitle mt-3">
                Feel free to submit your specific requests for cat food!
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="contact-form-group mb-5">
                  <label className="form-label d-block mb-2"></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter name"
                    className="contact-form-input form-control border-0 border-bottom bg-transparent px-0 py-2"
                  />
                </div>

                <div className="contact-form-group mb-5">
                  <label className="form-label d-block mb-2"></label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows="4"
                    className="contact-form-input form-control border-0 border-bottom bg-transparent px-0 py-2"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="contact-submit-button btn text-white fw-bold rounded-pill">
                  SEND NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default NewsLetter
