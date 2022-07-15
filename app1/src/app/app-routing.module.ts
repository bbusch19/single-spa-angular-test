import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { APP_BASE_HREF } from "@angular/common";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  { path: "app1/test", component: TestComponent },
  { path: "**", component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
