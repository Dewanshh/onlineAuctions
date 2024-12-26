import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import api from '../../utils/apiUtils';
import { useNavigate } from 'react-router-dom';

function ProductForm() {
  const navigate = useNavigate();
  const [sellers, setSellers] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    sellerName: '',
    city: '',
    minimumBid: '',
    bidStartDate: '',
    productType: '',
    productImage: null,
    productDescription: '',
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input changes (for image upload)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result.split(',')[1];
      setFormData((prevData) => ({
        ...prevData,
        [name]: base64Image,
      }));
    };
    reader.readAsDataURL(file);
  };

  // Fetch sellers from the API
  const fetchSellers = async () => {
    try {
      const sellers = await api.get('/sellers/all').then((res) => res.data);
      if (sellers) setSellers(sellers);
    } catch (error) {
      console.error('Error fetching sellers:', error);
    }
  };

  // Run fetch sellers on component mount
  useEffect(() => {
    fetchSellers();
  }, []);

  // Validate the form
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.title) {
      formErrors.title = 'Product Title is required';
      isValid = false;
    }

    if (!formData.sellerName) {
      formErrors.sellerName = 'Seller Name is required';
      isValid = false;
    }

    if (!formData.city) {
      formErrors.city = 'City is required';
      isValid = false;
    }

    if (!formData.minimumBid || isNaN(formData.minimumBid) || formData.minimumBid <= 0) {
      formErrors.minimumBid = 'Minimum Bid must be a valid number greater than 0';
      isValid = false;
    }

    if (!formData.bidStartDate) {
      formErrors.bidStartDate = 'Bid Start Date is required';
      isValid = false;
    }

    if (!formData.productType) {
      formErrors.productType = 'Product Type is required';
      isValid = false;
    }

    if (!formData.productImage) {
      formErrors.productImage = 'Product Image is required';
      isValid = false;
    }

    if (!formData.productDescription) {
      formErrors.productDescription = 'Product Description is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await api.post('/products/create', {
        title: formData.title,
        sellerName: formData.sellerName,
        city: formData.city,
        minimumBid: formData.minimumBid,
        bidStartDate: formData.bidStartDate,
        productType: formData.productType,
        productImage: formData.productImage,
        productDescription: formData.productDescription,
      });
      navigate('/adminDashboard');
    } catch (error) {
      console.log('Error submitting product form:', error);
    }
  };

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen py-8 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Product Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Product Title */}
              <div className="flex flex-col">
                <label htmlFor="title" className="text-gray-700">Product Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.title && <span className="text-red-500 text-sm">{errors.title}</span>}
              </div>

              {/* Seller Name */}
              <div className="flex flex-col">
                <label htmlFor="sellerName" className="text-gray-700">Seller Name</label>
                <select
                  id="sellerName"
                  name="sellerName"
                  value={formData.sellerName}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>Select a Seller</option>
                  {sellers.map((seller) => (
                    <option key={seller.id} value={seller.name}>
                      {seller.name}
                    </option>
                  ))}
                </select>
                {errors.sellerName && <span className="text-red-500 text-sm">{errors.sellerName}</span>}
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label htmlFor="city" className="text-gray-700">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
              </div>

              {/* Minimum Bid */}
              <div className="flex flex-col">
                <label htmlFor="minimumBid" className="text-gray-700">Minimum Bid</label>
                <input
                  id="minimumBid"
                  name="minimumBid"
                  type="text"
                  value={formData.minimumBid}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.minimumBid && <span className="text-red-500 text-sm">{errors.minimumBid}</span>}
              </div>

              {/* Bid Start Date */}
              <div className="flex flex-col">
                <label htmlFor="bidStartDate" className="text-gray-700">Bid Start Date</label>
                <input
                  id="bidStartDate"
                  name="bidStartDate"
                  type="datetime-local"
                  value={formData.bidStartDate}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.bidStartDate && <span className="text-red-500 text-sm">{errors.bidStartDate}</span>}
              </div>

              {/* Product Type */}
              <div className="flex flex-col">
                <label htmlFor="productType" className="text-gray-700">Product Type</label>
                <input
                  id="productType"
                  name="productType"
                  type="text"
                  value={formData.productType}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.productType && <span className="text-red-500 text-sm">{errors.productType}</span>}
              </div>
            </div>

            {/* Product Image */}
            <div className="flex flex-col mt-6">
              <label htmlFor="productImage" className="text-gray-700">Product Image</label>
              <input
                id="productImage"
                name="productImage"
                type="file"
                onChange={handleFileChange}
                className="p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept="image/*"
              />
              {formData.productImage && (
                <div className="mt-4">
                  <img
                    src={`data:image/jpeg;base64,${formData.productImage}`}
                    alt="Product Preview"
                    className="h-32 w-32 object-cover rounded-lg"
                  />
                </div>
              )}
              {errors.productImage && <span className="text-red-500 text-sm">{errors.productImage}</span>}
            </div>

            {/* Product Description */}
            <div className="flex flex-col mt-6">
              <label htmlFor="productDescription" className="text-gray-700">Product Description</label>
              <textarea
                id="productDescription"
                name="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {errors.productDescription && <span className="text-red-500 text-sm">{errors.productDescription}</span>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ProductForm;
