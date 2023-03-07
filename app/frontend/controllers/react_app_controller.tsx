import { Controller } from "@hotwired/stimulus"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { CurrentPage } from '../pages/CurrentPage';

export default class extends Controller {
  static values = {
    initialData: Object,
  };

  connect() {
    const { actionName, controllerPath, csrfParam, csrfToken } = this.element.dataset;
    this.root = ReactDOM.createRoot(this.element);
    this.root.render(
      <CurrentPage
        actionName={actionName}
        controllerPath={controllerPath}
        csrfParam={csrfParam}
        csrfToken={csrfToken}
        initialData={this.initialDataValue}
      />
    );
  }

  disconnect() {
    this.root.unmount();
  }
}
