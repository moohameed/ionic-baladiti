import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tawzi3Ma9a3edPage } from './tawzi3-ma9a3ed.page';

describe('Tawzi3Ma9a3edPage', () => {
  let component: Tawzi3Ma9a3edPage;
  let fixture: ComponentFixture<Tawzi3Ma9a3edPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Tawzi3Ma9a3edPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tawzi3Ma9a3edPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
