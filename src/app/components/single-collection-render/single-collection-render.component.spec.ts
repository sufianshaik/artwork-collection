import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCollectionRenderComponent } from './single-collection-render.component';

describe('SingleCollectionRenderComponent', () => {
  let component: SingleCollectionRenderComponent;
  let fixture: ComponentFixture<SingleCollectionRenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCollectionRenderComponent]
    });
    fixture = TestBed.createComponent(SingleCollectionRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
