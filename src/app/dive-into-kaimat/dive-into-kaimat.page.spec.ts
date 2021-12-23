import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiveIntoKaimatPage } from './dive-into-kaimat.page';

describe('DiveIntoKaimatPage', () => {
  let component: DiveIntoKaimatPage;
  let fixture: ComponentFixture<DiveIntoKaimatPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveIntoKaimatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiveIntoKaimatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
