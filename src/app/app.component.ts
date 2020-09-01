import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  OnDestroy
} from "@angular/core";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { UIService } from "./shared/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy  {
  title = "Ban'mPa'm";
  private mediaSub: Subscription;
   
  //private mediaSub: Subscription;
 
  constructor(
    public uiService: UIService,
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver
  ) {

  }




  ngOnInit() {

  this.mediaSub = this.mediaObserver.asObservable().subscribe((change: MediaChange[])  => {
//       // console.log(change[0].mqAlias);
//       // console.log(change.mqAlias);
//      // this.breakpointService.mqAlias = change[0].mqAlias;
       this.uiService.isLtMd =  (change[0].mqAlias === 'md' || change[0].mqAlias === 'sm' || change[0].mqAlias === 'xs');
      // this.uiService.isLtMd =  (change[0].mqAlias === 'md' || change[0].mqAlias === 'sm' || change[0].mqAlias === 'xs');
//  console.log(change);
 
   });


  }


  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }

  ngOnDestroy() {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }

}

}
