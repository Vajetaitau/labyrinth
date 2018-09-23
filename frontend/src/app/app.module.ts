import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {LabyrinthComponent} from "./components/labyrinth/labyrinth.component";

@NgModule({
	declarations: [
		AppComponent,
		LabyrinthComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {

	constructor() {
	}

}
