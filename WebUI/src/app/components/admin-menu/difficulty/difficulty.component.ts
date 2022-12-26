import { Component, OnInit } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.css']
})
export class DifficultyComponent implements OnInit {
  difficultyForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.difficultyForm = this.fb.group({
      IdLevel:['',Validators.required],
      height:['', Validators.required],
      weight:['', Validators.required]
    })
  }

  onSave(){
    
  }

}
