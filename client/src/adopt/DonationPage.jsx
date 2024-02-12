const DonationPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-300">
      <div className="max-w-lg mx-auto p-6 bg-blue-300 rounded-lg shadow-lg mt-20">
        <h1 className="text-3xl lg:text-4xl text-red-600 font-bold mb-4">
          I would like to donate!
        </h1>
        <p className="text-black font-bold mb-4">
          Through your donation we can continue our animal protection work and
          give the rescued animals hope for a beautiful new life.
        </p>
        <p className="text-gray-700 mb-4">
          You can donate online via Paypal or via our donation account:
        </p>
        <p className="text-gray-700 mb-4">
          Raiffeisenbank Vienna,{' '}
          <span className="font-bold">IBAN: AT29 3200 0000 1127 4065</span>,
          BIC: RLNWATWW.
        </p>
        <form className="bg-blue-300">
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              How much would you like to donate?
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="10"
                name="amount"
                value="10"
                className="mr-2"
              />
              <label htmlFor="10">10 €</label>
              <input
                type="radio"
                id="30"
                name="amount"
                value="30"
                className="mx-2"
              />
              <label htmlFor="30">30 €</label>
              <input
                type="radio"
                id="50"
                name="amount"
                value="50"
                className="mx-2"
              />
              <label htmlFor="50">50 €</label>
              <input
                type="radio"
                id="free"
                name="amount"
                value="free"
                className="mx-2"
              />
              <label htmlFor="free">Free amount</label>
              <input
                type="text"
                id="custom-amount"
                name="custom-amount"
                placeholder="€"
                className="border border-gray-300 rounded-md px-2 py-1 ml-2 w-16"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              Please tell us the purpose of your donation
            </label>
            <textarea
              id="purpose"
              name="purpose"
              rows="4"
              className="border border-gray-300 rounded-md px-2 py-1 w-full"
            ></textarea>
          </div>
          <div className="mb-6 flex justify-between items-center">
            <div>
              <label className="block text-gray-700 mb-2">Payment method</label>
              <div>
                <input
                  type="radio"
                  id="paypal"
                  name="payment"
                  value="paypal"
                  className="mr-2"
                />
                <label htmlFor="paypal">Paypal</label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-red-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonationPage;
