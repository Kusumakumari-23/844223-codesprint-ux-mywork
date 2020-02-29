import { Component, OnInit } from '@angular/core';
import { Fitness } from '../model/fitness';
import { FitnessService } from '../service/fitness.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-place-appointment',
  templateUrl: './place-appointment.component.html',
  styleUrls: ['./place-appointment.component.css']
})
export class PlaceAppointmentComponent implements OnInit {

  fitness:Fitness;
  msg:string;
  isNew:boolean;
  dateStr:string;

  constructor(
    private fitnessService:FitnessService,
    private actRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    let sNo=this.actRoute.snapshot.params.id;

    if(sNo){
      this.isNew=false;
      this.fitnessService.getById(sNo).subscribe((data)=>{
        this.fitness=data;
      });
      
    }
    else{
      this.isNew=true;
      this.fitness={
        sNo:0,
        firstName:'',
        lastName:'',
        streetAddress:'',
        city:'',
        package:0,
        trainerPreference:'',
        phone:''
        
      };
    }

  }

  

  save(){
    let ob:Observable<Fitness>;

      ob=this.fitnessService.add(this.fitness);
    // else{
    //   ob=this.fitnessService.save(this.fitness);
    // }
    // ob.subscribe(
    //   (data)=>{
    //     this.router.navigateByUrl("");
    //   },
    //   (errResponse)=>{
    //     this.msg=errResponse.error;
    //   }
    // );

  }

}
