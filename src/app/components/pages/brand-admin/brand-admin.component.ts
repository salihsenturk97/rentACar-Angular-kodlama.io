import { Brand } from './../../../models/brand';
import { BrandService } from './../../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-admin',
  templateUrl: './brand-admin.component.html',
  styleUrls: ['./brand-admin.component.css']
})
export class BrandAdminComponent implements OnInit {

  constructor(private brandService: BrandService) { }
brand:Brand;
  brands: Brand[];
  val:number


  ngOnInit(): void {
    this.getBrand();


  }

  getBrand() {
    this.brandService.getBrand().subscribe(data => {
      this.brands = data;
    })
  }


  deleteBrand(val:number){
if(confirm("Silmek istediğinize emin misiniz?")){
  this.brandService.deleteBrand(val).subscribe()
  location.reload();
}


  }


}
