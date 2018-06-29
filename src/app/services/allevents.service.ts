import { Injectable } from '@angular/core';
import * as csvParse from 'csv-parse';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlleventsService {
  constructor(private http: HttpClient) {
    http.get('/assets/events.csv', { responseType: 'text' }).pipe(
      tap((data: string) => {
        // console.log(data);
        // csvParse(data, { columns: true }, function(eventData, err) {
        //   console.log(eventData);
        // });
      })
    );
  }
}
