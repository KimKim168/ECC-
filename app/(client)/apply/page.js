import React from 'react';

const Page = () => {
  return (
      <div className="my-10 max-w-screen-2xl mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-[#34448c] text-center my-10 dark:text-white">
        Apply to Volunteer at ECC
      </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Help Us Make A Positive Social Impact
                </h1>
                <p className="text-gray-600 mb-4">
                Welcome to ECC (Education Centre for Community). Located 5.5km outside Siem Reap city, ECC school provides free education to around 150 students from the local village of Po. Our volunteers also support the local government elementary and high schools by providing English classes to students between the ages of 5 – 17 years old.
                </p>
                <p className="text-gray-600 mb-4">
                If you are looking to volunteer in one of these roles please feel free to contact us.
                </p>
                <ul className="list-disc list-inside mb-6 text-gray-600">
                  <li>Administration</li>
                  <li>English Teachers</li>
                  <li>Construction Projects</li>
                  <li>Social Media Marketing</li>
                  <li>Fundraising</li>
                </ul>
                <p className="text-gray-600 mb-6">If you are interested in volunteering, please complete the form below:</p>
            </div>
            <div>
                {/* 2-Column Grid Form */}
                <form action="#" method="post" className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name (required)</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth (required)</label>
                    <input type="date" id="dob" name="dob" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country of Residence (required)</label>
                    <input type="text" id="country" name="country" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div>
                    <label htmlFor="arrival" className="block text-sm font-medium text-gray-700">Arrival Date (required)</label>
                    <input type="date" id="arrival" name="arrival" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div>
                    <label htmlFor="departure" className="block text-sm font-medium text-gray-700">Departure Date (required)</label>
                    <input type="date" id="departure" name="departure" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email (required)</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">About You</label>
                    <textarea id="about" name="about" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                  </div>
                  <div className="col-span-2">
                    <button type="submit" className="w-full bg-[#34448c] hover:bg-[#394eae] text-white py-2 px-4 rounded-md  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      Submit
                    </button>
                  </div>
                </form>
            </div>
        </div>
      </div>
  );
};

export default Page;
