export default async function Hero() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 w-screen h-[calc(100vh-64px)]">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full">
        <div className="w-2xl aspect-square text-wrap flex flex-col items-center justify-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-6">PyCon HK 2025</h1>
          <p className="text-lg text-center mb-8">
            Join us for the leading Python conference in Hong Kong, where
            enthusiasts gather to share insights and foster collaboration.
          </p>
          <div className="grid grid-cols-12 gap-4">
            <p className="col-span-2">
              <span>Date:</span>
            </p>
            <p className="col-span-10 flex flex-col items-center">
              <span className="font-semibold">
                October 11, 2025 (Conference Day)
              </span>
              <span className="font-semibold">October 12, 2025 (Sprint)</span>
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <p className="col-span-2">
              <span>Venue:</span>
            </p>
            <p className="col-span-10 flex flex-col items-center">
              <span className="font-semibold">
                City University of Hong Kong, Kowloon Tong
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
