import React from "react";

const Header = ({ category, title }) => (
  <div className="p-3 mb-4">
    {!!category && <p className="text-lg text-gray-600">{category}</p>}
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;
