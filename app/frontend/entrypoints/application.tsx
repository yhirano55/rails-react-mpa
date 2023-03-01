import React from 'react'
import { createRoot } from 'react-dom/client'
import { Hello } from '../components/Hello';

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<Hello name="Rails" />);
});
