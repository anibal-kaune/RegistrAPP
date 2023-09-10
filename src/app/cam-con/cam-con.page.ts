import { Component, OnInit, ElementRef } from '@angular/core';
import { LOAD_WASM, NgxScannerQrcodeService, ScannerQRCodeConfig, ScannerQRCodeResult, ScannerQRCodeSelectedFiles } from 'ngx-scanner-qrcode';


@Component({
  selector: 'app-cam-con',
  templateUrl: './cam-con.page.html',
  styleUrls: ['./cam-con.page.scss'],
})
export class CamConPage implements OnInit {

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  public qrCodeResult1: ScannerQRCodeResult[] = [];

  public config: ScannerQRCodeConfig = {
    constraints: { 
      video: {
        width: window.innerWidth
      }
    } 
  };

  constructor(public qrcode: NgxScannerQrcodeService,
    private elementRef: ElementRef) { }

    public onSelects(files: any ) {
      this.qrcode.loadFilesToScan(files, undefined!).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
        this.qrCodeResult = res;
        console.log(res)
  
        // Filtra los resultados para obtener solo los valores
      let values1 = this.qrCodeResult.map(item => item.data![0].value);
      console.log(values1)
      });
  
    }

    public recogerinfo() {
      let recolectorElement = this.elementRef.nativeElement.querySelector('#recolector');
      let recolectorValue = recolectorElement ? recolectorElement.textContent : null;
      console.log(recolectorElement,"value")
    }

  ngOnInit() {
  }
  

}
