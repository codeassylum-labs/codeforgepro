import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
  footer?: string;
}

const Card: React.FC<Props> = ({ title, children, footer }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div>{children}</div>
    {footer && <div className="mt-4 text-sm text-gray-500">{footer}</div>}
  </div>
);

export default Card;
