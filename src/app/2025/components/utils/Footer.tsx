"use client";
export default function ToCFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="text-center text-gray-200 text-sm font-semibold">
          &copy; {currentYear} PyCon Hong Kong. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
