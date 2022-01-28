import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rest-aula';

  public cursos$!: Observable<any>;
  public processos$!: Observable<any>;

  constructor (private http: HttpClient){
    
  }

  ngOnInit(): void {
      this.cursos$ = this.http.get("http://10.0.25.14/api-portal/vestibulares/areas-interesse/eyJJRFBTX0JMQUNLTElTVCI6Iig1NzAsNTcxLDU3Miw1NzMsNzI0LDcyNiw3MjcsNzI4LDc1NCw3ODcsODQ0LDgyNyw4NTcsODU5KSIsIklEUFNfV0hJVEVMSVNUIjoiKDg2Miw4NjMsODY0LDg2NSw4NjYsODY3LDg2OSw4NzAsODg2LDg2OCw4ODcsODg4LDg4OSw4OTApIiwiTk9NRV9BUkVBU19MSUtFIjpbIlVOSU5UQSAtIl19/1/1/null/1");
      this.processos$ = this.http.get("http://10.0.25.14/api-portal/vestibulares/processos-seletivos/1/1/785"); 
  }

}


