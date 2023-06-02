
export default function Profilesettings() {
  return (
<>
<>
<section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
  <h1 className="text-xl font-bold text-black capitalize dark:text-white">
    Account settings
  </h1>
  <form>
    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
      <div>
        <label className="text-black dark:text-gray-200" htmlFor="username">
          Username :
        </label>
        <input
          id="username"
          type="text"
          className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label className="text-black dark:text-gray-200" htmlFor="emailAddress">
          Email Address :
        </label>
        <input
          id="emailAddress"
          type="email"
          className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label className="text-black dark:text-gray-200" htmlFor="password">
          Password :
        </label>
        <input
          id="password"
          type="password"
          className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        />
      </div>
      <div>
        <label className="text-black dark:text-gray-200" htmlFor="passwordConfirmation">
          Password Confirmation :
        </label>
        <input
          id="passwordConfirmation"
          type="password"
          className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
        />
      </div>

      <div>
        <label className="text-black dark:text-gray-200" htmlFor="passwordConfirmation">
          City :
        </label>
        <select className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
          <option>Amman</option>
          <option>Zarqa</option>
          <option>Irbid</option>
          <option>Aqaba</option>
        </select>
      </div>


      
      <div>
        <label className="block text-sm font-medium text-black">Image</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-black"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span className="">Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1 text-black">or drag and drop</p>
            </div>
            <p className="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-end mt-6">
    <button className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600" style={{ backgroundColor: "#54B435" }}>
    Update
  </button>
  
  
    </div>
  </form>
</section>


 
</>

</>

  )
}