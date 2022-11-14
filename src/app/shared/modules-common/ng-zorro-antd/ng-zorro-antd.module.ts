import { NgModule } from '@angular/core';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [],
  exports: [
    NzFormModule,
    NzMessageModule,
    NzInputNumberModule,
    NzModalModule,
    NzInputModule,
    NzButtonModule
  ]
})
export class NgZorroAntdModule { }
