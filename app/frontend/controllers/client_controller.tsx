import { Controller } from "@hotwired/stimulus"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Hello } from '../components/Hello';

export default class extends Controller {
  connect() {
    ReactDOM.createRoot(this.element).render(<Hello name="Rails" />);
  }
}
