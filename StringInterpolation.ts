import { Component } from '@angular/core'; 
@Component({ 
selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css'] 
	}) 
	export class AppComponent { 
	title = 'Data binding example using String Interpolation'; 
	}
<h2> 
{{ title }} 
</h2> 
