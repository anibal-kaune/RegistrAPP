import { Component, OnInit, ElementRef, ViewChildren, QueryList, enableProdMode } from '@angular/core';
import { LOAD_WASM, NgxScannerQrcodeService, ScannerQRCodeConfig, ScannerQRCodeResult, ScannerQRCodeSelectedFiles } from 'ngx-scanner-qrcode';
import { FormsModule } from '@angular/forms';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-cam-con',
  templateUrl: './cam-con.page.html',
  styleUrls: ['./cam-con.page.scss'],
})
export class CamConPage implements OnInit {
  
  @ViewChildren('myValue') spans!: QueryList<ElementRef>;

  dataProfe:string | null;

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  public qrCodeResult1: ScannerQRCodeResult[] = [];
  public result = [];

  public config: ScannerQRCodeConfig = {
    constraints: { 
      video: {
        width: window.innerWidth
      }
    } 
  };
  imageUrl: string | undefined;

  constructor(public qrcode: NgxScannerQrcodeService){
      this.dataProfe = localStorage.getItem("dataProfeCamera")}


    public onSelects(files: any ) {
      this.qrcode.loadFilesToScan(files, undefined!).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
        this.qrCodeResult = res;
        console.log(res)
  
        // Filtra los resultados para obtener solo los valores
      let values1 = this.qrCodeResult.map(item => item.data![0].value);
      console.log(values1)
      localStorage.setItem("dataProfeCamera1",JSON.stringify(values1))
      });
  
    }

    public recogerinfo() {
        this.spans.forEach((span) => {
        let tranfJSON = JSON.parse(span.nativeElement.innerHTML)
        let busqueda = tranfJSON[0].value        
        localStorage.setItem("dataProfeCamera",busqueda)
      });
      if (localStorage.getItem("dataProfeCamera") != undefined){
        window.location.href="/asistencia"
      }
    }

    async tomarFoto() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
      this.imageUrl = image.webPath;
    };

    //const coordinates = await Geolocation.getCurrentPosition();
    // Filtra los resultados para obtener solo los valores
    //let values1 = coordinates.coords["latitude"]
    //let values2 = coordinates.coords["longitude"]
    //console.log("latitud: ",values1)
    //console.log("longitud: ",values2)

  ngOnInit() {
    Camera.requestPermissions();
  }
}
  



