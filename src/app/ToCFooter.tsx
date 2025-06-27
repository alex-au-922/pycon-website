"use client";
export default function ToCFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm text-gray-400">©{currentYear} PyCon Hong Kong</p>
    </footer>
  );
}
