import { Injectable } from '@angular/core';
import { Office } from './office';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OfficesService {

  offices: Office[] = [
    {
        id: 1,
        title: 'Test',
        description: 'This is a test.',
        photoURL: 'example.com',
    }, {
        id: 2,
        title: 'Another test',
        description: 'This is another test.',
        photoURL: 'example.com',
    }
]

  constructor(private http: Http) { }
  extractData(res: Response) {
    const body = res.json();
    return body || [];
  }
  getOffices() {
    const result = this.http.get('https://itk-exam-api.herokuapp.com/api/offices').map(this.extractData);
    return result;
  }

}
