import React, { useState } from "react";

const Wizard = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        age: "",
        address: "",
        skills: "",
        experties: "",
    });

    // Function to handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Move to next step
    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    // Move to previous step
    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    // Submit final form data
    const handleSubmit = (e) => {
        e.preventDefault();
        for (const key in formData) { // Check if all fields are filled
            if (!formData[key].trim()) {
                return alert(`Please fill in the ${key} field.`);
            }
        }
        alert("Form submitted successfully!");
    };

    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center min-h-screen">
            <div className="w-[22rem] bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl p-6 flex flex-col items-center border border-white/20">
                <h2 className="text-white text-xl font-semibold mb-6">Wizard Form</h2>

                {/* Step 1 */}
                {step === 1 && (
                    <div className="w-full mb-4">
                        <label className="text-gray-300 font-medium block mb-2">Email:</label>
                        <input
                            value={formData.email}
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <label className="text-gray-300 font-medium block mb-2 mt-4">Password:</label>
                        <input
                            value={formData.password}
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <div className="flex gap-2 mt-6">
                            <button className="w-full bg-gray-500 text-white py-3 rounded-lg" disabled>
                                Previous
                            </button>
                            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                    <div className="w-full mb-4">
                        <label className="text-gray-300 font-medium block mb-2">Age:</label>
                        <input
                            value={formData.age}
                            type="number"
                            name="age"
                            placeholder="Enter your age"
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <label className="text-gray-300 font-medium block mb-2 mt-4">Address:</label>
                        <input
                            value={formData.address}
                            type="text"
                            name="address"
                            placeholder="Enter address"
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <div className="flex gap-2 mt-6">
                            <button className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600" onClick={prevStep}>
                                Previous
                            </button>
                            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600" onClick={nextStep}>
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                    <div className="w-full mb-4">
                        <label className="text-gray-300 font-medium block mb-2">Skills:</label>
                        <input
                            value={formData.skills}
                            type="text"
                            name="skills"
                            placeholder="Enter your skills"
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <label className="text-gray-300 font-medium block mb-2 mt-4">Expertise:</label>
                        <input
                            value={formData.experties}
                            type="text"
                            name="experties"
                            placeholder="Enter expertise"
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-700 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <div className="flex gap-2 mt-6">
                            <button className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600" onClick={prevStep}>
                                Previous
                            </button>
                            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wizard;
