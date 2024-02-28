import { Routes } from '@angular/router';
import { IndexComponent } from './student/index/index.component';
import { CreateComponent } from './student/create/create.component';
import { EditComponent } from './student/edit/edit.component';

export const routes: Routes = [
    {path:'',redirectTo:'student/index', pathMatch:'full'},
    {path:'student',redirectTo:'student/index', pathMatch:'full'},
    {path:'student/index', component:IndexComponent},
    {path:'student/create', component:CreateComponent},
    {path:'student/:studentId/edit', component:EditComponent}
];
