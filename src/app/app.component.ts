import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {LoadingService} from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  isLoading = false;

  constructor(private primengConfig: PrimeNGConfig, private loadingService: LoadingService){

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.loadingService.loading.subscribe((state: any)=>{
      this.isLoading = state;
    })
  }
}
