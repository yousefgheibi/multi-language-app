import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi';
  rtlLangs = ['ar','morelangs'];

  constructor(public translate: TranslateService) {  
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('en');  
 
}  
  
switchLang(lang: string) {  
  this.translate.use(lang);  
  document.getElementsByTagName("html")[0].setAttribute('lang', lang);
} 



}
