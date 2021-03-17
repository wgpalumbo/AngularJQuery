import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'AngularJQuery';

  ngOnInit() {
    $(document).ready(function() {
         alert('we call alert from JQuery');
    });
 }

}
