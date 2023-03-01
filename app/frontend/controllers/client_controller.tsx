import { Controller } from "@hotwired/stimulus"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { CurrentPage } from '../pages/CurrentPage';

export default class extends Controller {
  static values = {
    actionName: String,
    controllerPath: String,
    csrfParam: String,
    csrfToken: String,
    initialPageData: Object,
    pageName: String,
  };

  connect() {
    ReactDOM.createRoot(this.element).render(
      <CurrentPage
        actionName={this.actionNameValue}
        controllerPath={this.controllerPathValue}
        csrfParam={this.csrfParamValue}
        csrfToken={this.csrfTokenValue}
        initialPageData={this.initialPageDataValue}
        pageName={this.pageNameValue}
      />
    );
  }
}
