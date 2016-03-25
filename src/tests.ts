import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Users {
  heading = 'QoS Tests';
  tests = [];

  constructor(private http: HttpClient) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://52.58.21.162:5000/api/');
    });
  }

  activate() {
    return this.http.fetch('tests')
      .then(response => response.json())
      .then(tests => this.tests = tests.sort());
  }
}
