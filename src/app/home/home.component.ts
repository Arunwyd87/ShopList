import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  loaderRestaurant:any=[];
 // imagePath:any="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/oyusdq7j4phsavmal7n0";
 imagePath:any="./assets/2.png" 
 restaurants:any=[{
name:"Arun",
foodType:"Indian",
rating:"Good"
  },
  {
    name:"Neethu",
    foodType:"Indian",
    rating:"Good"
      },
      {
        name:"Nuthan",
        foodType:"Indian",
        rating:"Good"
          },
          {
            name:"Charlie",
            foodType:"Indian",
            rating:"Good"
              },
              {
                name:"Gautham",
                foodType:"Indian",
                rating:"Good"
                  }];
  constructor() { }

  ngOnInit(): void {
  }

}
