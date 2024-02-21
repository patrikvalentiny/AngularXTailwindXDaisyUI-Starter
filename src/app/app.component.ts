import {Component, inject} from '@angular/core';
import {HotToastService} from "@ngxpert/hot-toast";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true
})
export class AppComponent {
  title = 'app';
  private readonly toast: HotToastService = inject(HotToastService);

  btnClick() {
    this.toast.show('Hello world');
  }
}
